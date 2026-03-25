const QUESTIONS = [
  {
    id: 1,
    topic: "Migration & Asyl",
    question:
      "Wie sollte Deutschland mit Flucht und Migration umgehen? Sollten die Grenzen stärker kontrolliert, Asylverfahren verschärft oder die Integration ausgebaut werden?",
  },
  {
    id: 2,
    topic: "Klimaschutz",
    question:
      "Welche konkreten Maßnahmen sollte Deutschland gegen den Klimawandel ergreifen? Wie weit dürfen Verbote und CO₂-Bepreisung gehen, und wer soll die Kosten tragen?",
  },
  {
    id: 3,
    topic: "Wirtschaft & Standort",
    question:
      "Deutschland verliert als Wirtschaftsstandort an Wettbewerbsfähigkeit. Was sollte getan werden — Steuersenkungen, weniger Bürokratie, mehr Subventionen oder stärkere Arbeitnehmerrechte?",
  },
  {
    id: 4,
    topic: "Bürgergeld & Sozialstaat",
    question:
      "Wie sollte das Bürgergeld gestaltet sein? Braucht es höhere Sätze und weniger Sanktionen — oder strengere Auflagen und mehr Anreize zur Arbeitsaufnahme?",
  },
  {
    id: 5,
    topic: "Rente",
    question:
      "Die Rente wird immer teurer. Sollte das Renteneintrittsalter steigen, die Beiträge erhöht werden oder braucht es ein ganz neues Modell wie eine Aktienrente?",
  },
  {
    id: 6,
    topic: "Wohnen & Mieten",
    question:
      "Mieten explodieren in vielen Städten. Ist die Lösung mehr Neubau, strengere Mietpreisbremsen, sozialer Wohnungsbau oder sogar Enteignung großer Wohnungskonzerne?",
  },
  {
    id: 7,
    topic: "Verteidigung & Bundeswehr",
    question:
      "Sollte Deutschland dauerhaft deutlich mehr Geld für die Bundeswehr ausgeben? Brauchen wir eine neue Wehrpflicht oder einen Wehrdienst angesichts der veränderten Sicherheitslage in Europa?",
  },
  {
    id: 8,
    topic: "Ukraine & Russland",
    question:
      "Wie sollte Deutschland sich zum Krieg in der Ukraine positionieren? Mehr Waffenlieferungen, diplomatische Lösungen, oder sollte Deutschland eine andere Rolle einnehmen?",
  },
  {
    id: 9,
    topic: "Energie & Strompreise",
    question:
      "Wie soll Deutschlands Energieversorgung aussehen? Welche Rolle spielen erneuerbare Energien, und sollte Deutschland über eine Rückkehr zur Kernkraft nachdenken?",
  },
  {
    id: 10,
    topic: "Steuern & Abgaben",
    question:
      "Die Steuerlast in Deutschland ist hoch. Sollten Besserverdienende stärker besteuert werden, oder braucht es Steuersenkungen für alle, um die Wirtschaft anzukurbeln?",
  },
  {
    id: 11,
    topic: "Schuldenbremse",
    question:
      "Sollte die Schuldenbremse gelockert werden, damit der Staat mehr in Infrastruktur und Bildung investieren kann — oder ist Haushaltsdisziplin langfristig wichtiger?",
  },
  {
    id: 12,
    topic: "Bildung",
    question:
      "Das Bildungssystem hat große Probleme: Lehrermangel, marode Schulen, unterschiedliche Qualität je nach Bundesland. Was muss sich ändern und wer soll das verantworten?",
  },
  {
    id: 13,
    topic: "Digitalisierung",
    question:
      "Behörden, Schulen und Gesundheitswesen hinken digital hinterher. Was sollte der Staat konkret tun, um die Digitalisierung in Deutschland voranzubringen?",
  },
  {
    id: 14,
    topic: "Innere Sicherheit",
    question:
      "Wie kann Deutschland sicherer werden? Brauchen wir mehr Polizei, Videoüberwachung, härtere Strafen — oder liegen die Ursachen von Kriminalität woanders?",
  },
  {
    id: 15,
    topic: "Gesundheitssystem",
    question:
      "Lange Wartezeiten, Ärztemangel auf dem Land, hohe Kassenbeiträge: Wie sollte das Gesundheitssystem reformiert werden? Bürgerversicherung oder Beibehaltung des dualen Systems?",
  },
  {
    id: 16,
    topic: "Pflege",
    question:
      "Der Pflegenotstand spitzt sich zu. Was hilft — bessere Bezahlung, mehr Fachkräfte aus dem Ausland, Unterstützung pflegender Angehöriger oder technische Lösungen?",
  },
  {
    id: 17,
    topic: "Verkehr & Mobilität",
    question:
      "Tempolimit auf Autobahnen, Ausbau von Bahn und ÖPNV, Förderung von E-Autos oder Technologieoffenheit — wie sollte die Verkehrswende gestaltet werden?",
  },
  {
    id: 18,
    topic: "EU & Europapolitik",
    question:
      "Sollte die europäische Integration vertieft werden — zum Beispiel durch eine gemeinsame Armee oder Fiskalpolitik — oder braucht es mehr nationale Eigenständigkeit?",
  },
  {
    id: 19,
    topic: "Handel & Zölle",
    question:
      "Wie sollte Deutschland auf Handelskonflikte und Strafzölle reagieren? Braucht Europa mehr wirtschaftliche Unabhängigkeit oder ist offener Freihandel der bessere Weg?",
  },
  {
    id: 20,
    topic: "Bürokratieabbau",
    question:
      "Deutschland gilt als überreguliert. In welchen Bereichen sollte Bürokratie am dringendsten abgebaut werden und wie radikal darf das sein?",
  },
  {
    id: 21,
    topic: "Familienpolitik",
    question:
      "Wie sollte der Staat Familien besser unterstützen? Höheres Kindergeld, kostenlose Kitas, flexiblere Elternzeit — was wäre am wirksamsten?",
  },
  {
    id: 22,
    topic: "Gleichstellung",
    question:
      "Braucht Deutschland gesetzliche Quoten für Frauen in Führungspositionen und Parlamenten, oder sollte Gleichstellung ohne staatliche Vorgaben vorangebracht werden?",
  },
  {
    id: 23,
    topic: "Öffentlich-rechtlicher Rundfunk",
    question:
      "ARD, ZDF und Co. stehen in der Kritik. Sollte der öffentlich-rechtliche Rundfunk deutlich verkleinert, grundlegend reformiert oder in seiner jetzigen Form erhalten bleiben?",
  },
  {
    id: 24,
    topic: "Drogenpolitik",
    question:
      "War die Cannabis-Legalisierung richtig? Sollte Deutschland auch bei anderen Substanzen auf Entkriminalisierung setzen, oder braucht es eine härtere Linie?",
  },
  {
    id: 25,
    topic: "Datenschutz & Überwachung",
    question:
      "Wo liegt die Grenze zwischen Sicherheit und Privatsphäre? Sollte der Staat mehr Überwachungsbefugnisse bekommen oder ist der Datenschutz bereits zu stark eingeschränkt?",
  },
  {
    id: 26,
    topic: "KI & Technologie",
    question:
      "Wie sollte Deutschland mit Künstlicher Intelligenz umgehen? Braucht es strenge Regulierung zum Schutz von Arbeitsplätzen und Grundrechten, oder hemmt das die Innovation?",
  },
  {
    id: 27,
    topic: "Infrastruktur",
    question:
      "Brücken, Schienen und Straßen sind marode. Wer soll die dringend nötige Sanierung bezahlen — und wo sollte zuerst investiert werden?",
  },
  {
    id: 28,
    topic: "Arbeit & Löhne",
    question:
      "Mindestlohn weiter anheben, 4-Tage-Woche einführen, Recht auf Homeoffice gesetzlich verankern — welche Veränderungen in der Arbeitswelt sind sinnvoll?",
  },
  {
    id: 29,
    topic: "Demokratie & Vertrauen",
    question:
      "Das Vertrauen in die Politik sinkt. Braucht Deutschland mehr direkte Demokratie wie Volksabstimmungen, oder würde das die Gesellschaft weiter spalten?",
  },
  {
    id: 30,
    topic: "Extremismus & Gesellschaft",
    question:
      "Politischer Extremismus und gesellschaftliche Spaltung nehmen zu. Welche Maßnahmen sollte der Staat ergreifen — und wo beginnt die Einschränkung von Meinungsfreiheit?",
  },
];

export default QUESTIONS;
