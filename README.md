# 🗳️ WahlAI — KI-gestützte Wahlentscheidungshilfe

WahlAI ist eine Web-App, die deine politischen Positionen mit den Wahlprogrammen deutscher Parteien vergleicht — mithilfe von Künstlicher Intelligenz. Anders als der klassische Wahl-O-Mat kannst du hier **frei formulieren** und die **Wichtigkeit jedes Themas individuell gewichten**.

![WahlAI](https://img.shields.io/badge/WahlAI-v1.0-4F46E5?style=for-the-badge)
![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)

---

## ✨ Features

- **30 politische Fragen** zu aktuellen Themen (Migration, Klima, Wirtschaft, Rente, Ukraine, KI, …)
- **Freitext-Antworten** statt vorgegebener Optionen — du formulierst deine Meinung selbst
- **Individuelle Gewichtung** (1–10) pro Frage — Themen die dir wichtiger sind zählen stärker
- **KI-Analyse** via Claude Sonnet 4 vergleicht deine Antworten mit 9 Wahlprogrammen
- **Detailliertes Ranking** aller Parteien mit Prozent-Score und Begründung
- **Themen-Aufschlüsselung** zeigt dir pro Frage, welche Partei am besten passt
- **Dark/Light Mode** — passt sich automatisch deinem System an
- **Sicheres Backend** — dein API-Key bleibt auf dem Server, nie im Browser

## 🏗️ Architektur

```
wahlai/
├── client/                 # React Frontend (Vite)
│   ├── src/
│   │   ├── components/     # UI-Komponenten
│   │   ├── data/           # Fragen & Parteien
│   │   ├── api.js          # API-Aufrufe ans Backend
│   │   ├── App.jsx         # Hauptkomponente
│   │   └── index.css       # Globale Styles
│   ├── index.html
│   └── vite.config.js
├── server/                 # Express Backend
│   └── index.js            # API-Proxy + Rate Limiting
├── .env.example            # Vorlage für Umgebungsvariablen
├── .gitignore              # Schützt .env vor Git
└── package.json            # Root-Scripts
```

**So funktioniert es:**

1. Der Nutzer beantwortet 30 Fragen im Browser (React Frontend)
2. Das Frontend sendet die Antworten an das Express-Backend (`/api/analyze`)
3. Das Backend fügt den sicheren API-Key hinzu und leitet die Anfrage an die Anthropic API weiter
4. Claude Sonnet 4.6 analysiert die Antworten und vergleicht sie mit den Wahlprogrammen
5. Das Ergebnis wird als JSON zurückgegeben und im Frontend als Ranking dargestellt

Der API-Key verlässt **niemals** den Server und ist **nicht** im Frontend-Code enthalten.

---

## 🚀 Schnellstart

### Voraussetzungen

- [Node.js](https://nodejs.org/) v18 oder neuer
- Ein [Anthropic API-Key](https://console.anthropic.com/)

### 1. Repository klonen

```bash
git clone https://github.com/DEIN-USERNAME/wahlai.git
cd wahlai
```

### 2. API-Key einrichten

```bash
cp .env.example .env
```

Öffne die `.env` Datei und trage deinen API-Key ein:

```
ANTHROPIC_API_KEY=sk-ant-api03-DEIN-KEY-HIER
PORT=3001
```

> ⚠️ **WICHTIG:** Die `.env` Datei wird durch `.gitignore` automatisch von Git ausgeschlossen. Dein API-Key wird **niemals** auf GitHub hochgeladen.

### 3. Dependencies installieren

```bash
# Alles auf einmal installieren
npm run install:all
```

Oder manuell:

```bash
npm install
cd client && npm install
cd ../server && npm install
```

### 4. Entwicklungsserver starten

```bash
npm run dev
```

Das startet gleichzeitig:
- **Frontend** auf `http://localhost:5173`
- **Backend** auf `http://localhost:3001`

Öffne `http://localhost:5173` im Browser.

---

## 🌐 Deployment

### Option A: Heroku / Railway / Render

1. Setze die Umgebungsvariable `ANTHROPIC_API_KEY` in den Einstellungen deines Hosters
2. Setze `NODE_ENV=production`
3. Build-Befehl: `npm run build`
4. Start-Befehl: `npm start`

Das Backend servt in Production automatisch die gebauten Frontend-Dateien.

### Option B: Vercel (Frontend) + Separate API

Für Vercel müsstest du den Server als Serverless Function umbauen oder separat hosten.

### Option C: VPS / eigener Server

```bash
git clone https://github.com/DEIN-USERNAME/wahlai.git
cd wahlai
cp .env.example .env
# .env bearbeiten mit deinem API-Key
npm run install:all
npm run build
NODE_ENV=production npm start
```

---

## 💰 Kosten

Die App nutzt die **Anthropic API** (Claude Sonnet 4). Jede Auswertung kostet ca. **$0.05 – $0.10**, abhängig von der Länge der Antworten. Das Backend hat ein eingebautes **Rate Limit** von 10 Auswertungen pro IP pro Stunde.

---

## 🔒 Sicherheit

- API-Key wird **nur** im Backend verwendet und nie an den Browser gesendet
- `.env` ist in `.gitignore` — wird nie commited
- Rate Limiting schützt vor Missbrauch
- Input-Validierung auf dem Server
- CORS-Schutz in Production konfigurierbar

---

## 🛠️ Technologie-Stack

| Bereich    | Technologie            |
| ---------- | ---------------------- |
| Frontend   | React 18, Vite 5       |
| Backend    | Node.js, Express       |
| KI-Modell  | Claude Sonnet 4        |
| Styling    | CSS Variables, Custom  |
| Fonts      | Syne, Source Serif 4, DM Mono |

---

## 📄 Lizenz

MIT — frei nutzbar, auch kommerziell.

---

## ⚠️ Hinweis

WahlAI ist eine **KI-basierte Orientierungshilfe** und kein offizielles politisches Beratungstool. Die Analyse kann Fehler enthalten. Für eine fundierte Wahlentscheidung empfehlen wir, die Wahlprogramme der Parteien selbst zu lesen.
