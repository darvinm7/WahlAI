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
  const [results, setResults] = useState(null);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [error, setError] = useState(null);

  const updateAnswer = (val) => {
    setAnswers((prev) => ({ ...prev, [QUESTIONS[currentQ].id]: val }));
  };

  const updateImportance = (val) => {
    setImportances((prev) => ({ ...prev, [QUESTIONS[currentQ].id]: val }));
  };

  const goNext = () => {
    if (currentQ < QUESTIONS.length - 1) {
      setCurrentQ(currentQ + 1);
    } else {
      runAnalysis();
    }
  };

  const goBack = () => {
    if (currentQ > 0) setCurrentQ(currentQ - 1);
  };

  const buildPrompt = () => {
    let prompt =
      "Hier sind die Antworten des Nutzers auf 30 politische Fragen:\n\n";
    QUESTIONS.forEach((q) => {
      const answer = answers[q.id] || "(keine Antwort)";
      const imp = importances[q.id] || 5;
      prompt += `--- Frage ${q.id}: ${q.topic} ---\n`;
      prompt += `Frage: ${q.question}\n`;
      prompt += `Antwort des Nutzers: ${answer}\n`;
      prompt += `Wichtigkeit (1-10): ${imp}\n\n`;
    });
    prompt +=
      "\nAnalysiere alle Antworten gründlich und erstelle die gewichtete Auswertung als JSON. Beachte die Gewichtung: Eine Frage mit Wichtigkeit 10 soll 10x stärker in die Gesamtwertung einfließen als eine mit Wichtigkeit 1.";
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
          onAnswer={updateAnswer}
          onImportance={updateImportance}
          onNext={goNext}
          onBack={goBack}
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
