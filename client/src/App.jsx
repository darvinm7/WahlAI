import { useState, useMemo } from "react";
import FEDERAL_QUESTIONS from "./data/questions.js";
import { analyzeAnswers } from "./api.js";
import LandingPage from "./components/LandingPage.jsx";
import RegionSelectPage from "./components/RegionSelectPage.jsx";
import QuestionPage from "./components/QuestionPage.jsx";
import LoadingScreen from "./components/LoadingScreen.jsx";
import ResultsPage from "./components/ResultsPage.jsx";
import ErrorScreen from "./components/ErrorScreen.jsx";

// Lazy-load regional questions only when needed
let REGIONAL_QUESTIONS = null;
async function getRegionalQuestions() {
  if (!REGIONAL_QUESTIONS) {
    const mod = await import("./data/questions-regional.js");
    REGIONAL_QUESTIONS = mod.default;
  }
  return REGIONAL_QUESTIONS;
}

export default function App() {
  const [page, setPage] = useState("landing");
  const [region, setRegion] = useState("bundesweit");
  const [questions, setQuestions] = useState(FEDERAL_QUESTIONS);
  const [currentQ, setCurrentQ] = useState(0);
  const [answers, setAnswers] = useState({});
  const [importances, setImportances] = useState({});
  const [answerModes, setAnswerModes] = useState({});
  const [stances, setStances] = useState({});
  const [skipped, setSkipped] = useState({});
  const [results, setResults] = useState(null);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [error, setError] = useState(null);

  const selectRegion = async (regionId) => {
    setRegion(regionId);

    if (regionId === "bundesweit") {
      setQuestions(FEDERAL_QUESTIONS);
    } else {
      const regional = await getRegionalQuestions();
      const stateData = regional[regionId];
      if (stateData) {
        // Combine federal questions (by ID) + state-specific questions
        const federalSubset = stateData.federalQuestionIds
          .map((id) => FEDERAL_QUESTIONS.find((q) => q.id === id))
          .filter(Boolean);
        const combined = [...federalSubset, ...stateData.stateQuestions];
        setQuestions(combined);
      } else {
        // Fallback to federal questions if no regional data
        setQuestions(FEDERAL_QUESTIONS);
      }
    }

    setPage("questions");
  };

  const updateAnswer = (val) => {
    setAnswers((prev) => ({ ...prev, [questions[currentQ].id]: val }));
  };

  const updateImportance = (val) => {
    setImportances((prev) => ({ ...prev, [questions[currentQ].id]: val }));
  };

  const updateMode = (val) => {
    setAnswerModes((prev) => ({ ...prev, [questions[currentQ].id]: val }));
  };

  const updateStance = (val) => {
    setStances((prev) => ({ ...prev, [questions[currentQ].id]: val }));
  };

  const goNext = () => {
    setSkipped((prev) => ({ ...prev, [questions[currentQ].id]: false }));
    if (currentQ < questions.length - 1) {
      setCurrentQ(currentQ + 1);
    } else {
      runAnalysis();
    }
  };

  const goBack = () => {
    if (currentQ > 0) setCurrentQ(currentQ - 1);
  };

  const skipQuestion = () => {
    setSkipped((prev) => ({ ...prev, [questions[currentQ].id]: true }));
    if (currentQ < questions.length - 1) {
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
    const answeredQuestions = questions.filter((q) => !skipped[q.id]);
    const regionLabel =
      region === "bundesweit" ? "bundesweit" : `regional (${region})`;

    let prompt = `Hier sind die Antworten des Nutzers auf ${answeredQuestions.length} politische Fragen (Modus: ${regionLabel}):\n`;
    if (questions.length - answeredQuestions.length > 0) {
      prompt += `(${questions.length - answeredQuestions.length} Fragen wurden \u00fcbersprungen und sollen NICHT in die Bewertung einflie\u00dfen)\n`;
    }
    prompt += "\n";

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
      "\nAnalysiere alle Antworten gr\u00fcndlich und erstelle die gewichtete Auswertung als JSON. Beachte die Gewichtung: Eine Frage mit Wichtigkeit 10 soll 10x st\u00e4rker in die Gesamtwertung einflie\u00dfen als eine mit Wichtigkeit 1. \u00dcbersprungene Fragen werden komplett ignoriert.";
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
      const parsed = await analyzeAnswers(buildPrompt(), region);
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
    setRegion("bundesweit");
    setQuestions(FEDERAL_QUESTIONS);
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
        <LandingPage onStart={() => setPage("regionSelect")} />
      )}

      {page === "regionSelect" && (
        <RegionSelectPage onSelect={selectRegion} />
      )}

      {page === "questions" && (
        <QuestionPage
          question={questions[currentQ]}
          index={currentQ}
          total={questions.length}
          answer={answers[questions[currentQ].id]}
          importance={importances[questions[currentQ].id]}
          answerMode={answerModes[questions[currentQ].id]}
          stance={stances[questions[currentQ].id]}
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
