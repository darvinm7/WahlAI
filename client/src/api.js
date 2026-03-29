const API_BASE =
  import.meta.env.MODE === "production" ? "" : "http://localhost:3001";

export async function analyzeAnswers(answersText, region = "bundesweit") {
  const response = await fetch(`${API_BASE}/api/analyze`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ answers: answersText, region }),
  });

  if (!response.ok) {
    const errData = await response.json().catch(() => ({}));
    throw new Error(
      errData.error || `Serverfehler (${response.status})`
    );
  }

  return response.json();
}

export async function checkHealth() {
  try {
    const response = await fetch(`${API_BASE}/api/health`);
    return response.ok;
  } catch {
    return false;
  }
}
