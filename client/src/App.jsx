import { useState } from "react";
import QUESTIONS from "./data/questions.js";
import { analyzeAnswers } from "./api.js";
import LandingPage from "./components/LandingPage.jsx";
import QuestionPage from "./components/QuestionPage.jsx";
import LoadingScreen from "./components/LoadingScreen.jsx";
import ResultsPage from "./components/ResultsPage.jsx";
import ErrorScreen from "./components/ErrorScreen.jsx";

export default function App() {
  const [page, setPage] = useState("landing");
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState({});
  const [importances, setImportances] = useState({});
  const [answerModes, setAnswerModes] = useState({});
  const [stances, setStances] = useState({});
  const [skipped, setSkipped] = useState({});
  const [results, setResults] = useState(null);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [error, setError] = useState(null);

  const updateAnswer = (val) => {
    setAnswers((prev) => ({ ...prev, [QUESTIONS[currentQ].id]: val }));
  };

  const updateImportance = (val) => {
    setImportances((prev) => ({ ...prev, [QUESTIONS[currentQ].id]: val }));
  };

  const updateMode = (val) => {
    setAnswerModes((prev) => ({ ...prev, [QUESTIONS[currentQ].id]: val }));
  };

  const updateStance = (val) => {
    setStances((prev) => ({ ...prev, [QUESTIONS[currentQ].id]: val }));
  };

  const goNext = () => {
    // Unskip if user answered after previously skipping
    setSkipped((prev) => ({ ...prev, [QUESTIONS[currentQ].id]: false }));
    if (currentQ < QUESTIONS.length - 1) {
      setCurrentQ(currentQ + 1);
    } else {
      runAnalysis();
    }
  };

  const goBack = () => {
    if (currentQ > 0) setCurrentQ(currentQ - 1);
  };

  const skipQuestion = () => {
    setSkipped((prev) => ({ ...prev, [QUESTIONS[currentQ].id]: true }));
    if (currentQ < QUESTIONS.length - 1) {
      setCurrentQ(currentQ + 1);
    } else {
      runAnalysis();
    }
  };

  const stanceLabel = (stance) => {
    if (stance === "agree") return "Stimme zu";
    if (stance === "neutral") return "Neutral";
    if (stance === "disagree") return "Stimme nicht zu";
    return "(keine Antwort)";
  };

  const buildPrompt = () => {
    const answeredQuestions = QUESTIONS.filter((q) => !skipped[q.id]);
    let prompt =
      `Hier sind die Antworten des Nutzers auf ${answeredQuestions.length} politische Fragen (${QUESTIONS.length - answeredQuestions.length} Fragen wurden übersprungen und sollen NICHT in die Bewertung einfließen):\n\n`;
    answeredQuestions.forEach((q) => {
      const mode = answerModes[q.id] || "statement";
      const imp = importances[q.id] || 5;
      prompt += `--- Frage ${q.id}: ${q.topic} ---\n`;
      prompt += `Frage: ${q.question}\n`;

      if (mode === "freetext") {
        const answer = answers[q.id] || "(keine Antwort)";
        prompt += `Antwortmodus: Freitext\n`;
        prompt += `Antwort des Nutzers: ${answer}\n`;
      } else {
        const stance = stances[q.id] || "(keine Antwort)";
        prompt += `Antwortmodus: Aussage bewerten\n`;
        prompt += `Aussage: "${q.statement}"\n`;
        prompt += `Bewertung des Nutzers: ${stanceLabel(stance)}\n`;
      }

      prompt += `Wichtigkeit (1-10): ${imp}\n\n`;
    });
    prompt +=
      "\nAnalysiere alle Antworten gründlich und erstelle die gewichtete Auswertung als JSON. Beachte die Gewichtung: Eine Frage mit Wichtigkeit 10 soll 10x stärker in die Gesamtwertung einfließen als eine mit Wichtigkeit 1. Übersprungene Fragen werden komplett ignoriert.";
    return prompt;
  };

  const runAnalysis = async () => {
    setPage("loading");
    setLoadingProgress(0);
    setError(null);

    const progressInterval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 90) {
          clearInterval(progressInterval);
          return 90;
        }
        return prev + Math.random() * 6 + 1;
      });
    }, 700);

    try {
      const parsed = await analyzeAnswers(buildPrompt());
      clearInterval(progressInterval);
      setLoadingProgress(100);
      setTimeout(() => {
        setResults(parsed);
        setPage("results");
      }, 600);
    } catch (err) {
      clearInterval(progressInterval);
      setError(err.message);
      setPage("error");
    }
  };

  const restart = () => {
    setPage("landing");
    setCurrentQ(0);
    setAnswers({});
    setImportances({});
    setAnswerModes({});
    setStances({});
    setSkipped({});
    setResults(null);
    setError(null);
    setLoadingProgress(0);
  };

  return (
    <>
      {page === "landing" && (
        <LandingPage onStart={() => setPage("questions")} />
      )}

      {page === "questions" && (
        <QuestionPage
          question={QUESTIONS[currentQ]}
          index={currentQ}
          total={QUESTIONS.length}
          answer={answers[QUESTIONS[currentQ].id]}
          importance={importances[QUESTIONS[currentQ].id]}
          answerMode={answerModes[QUESTIONS[currentQ].id]}
          stance={stances[QUESTIONS[currentQ].id]}
          onAnswer={updateAnswer}
          onImportance={updateImportance}
          onModeChange={updateMode}
          onStanceChange={updateStance}
          onNext={goNext}
          onBack={goBack}
          onSkip={skipQuestion}
        />
      )}

      {page === "loading" && <LoadingScreen progress={loadingProgress} />}

      {page === "results" && (
        <ResultsPage
          results={results}
          importances={importances}
          onRestart={restart}
        />
      )}

      {page === "error" && (
        <ErrorScreen
          error={error}
          onRetry={runAnalysis}
          onRestart={restart}
        />
      )}
    </>
  );
}
