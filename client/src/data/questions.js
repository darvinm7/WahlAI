const QUESTIONS = [
  {
    id: 1,
    topic: "Migration & Asyl",
    question:
      "Wie sollte Deutschland mit Flucht und Migration umgehen? Sollten die Grenzen stärker kontrolliert, Asylverfahren verschärft oder die Integration ausgebaut werden?",
    infoFacts: [
      "2024 wurden in Deutschland rund 230.000 Erstanträge auf Asyl gestellt.",
      "Die fünf häufigsten Herkunftsländer sind Syrien, Afghanistan, Türkei, Irak und Kolumbien.",
      "Das Gemeinsame Europäische Asylsystem (GEAS) wurde 2024 beschlossen und tritt schrittweise in Kraft.",
    ],
  },
  {
    id: 2,
    topic: "Klimaschutz",
    question:
      "Welche konkreten Maßnahmen sollte Deutschland gegen den Klimawandel ergreifen? Wie weit dürfen Verbote und CO₂-Bepreisung gehen, und wer soll die Kosten tragen?",
    infoFacts: [
      "Deutschland hat sich verpflichtet, bis 2045 klimaneutral zu werden.",
      "Der CO₂-Preis liegt 2025 bei 55 Euro pro Tonne und soll weiter steigen.",
      "Der Verkehrs- und Gebäudesektor verfehlen bisher regelmäßig ihre Klimaziele.",
    ],
  },
  {
    id: 3,
    topic: "Wirtschaft & Standort",
    question:
      "Deutschland verliert als Wirtschaftsstandort an Wettbewerbsfähigkeit. Was sollte getan werden — Steuersenkungen, weniger Bürokratie, mehr Subventionen oder stärkere Arbeitnehmerrechte?",
    infoFacts: [
      "Deutschland rutschte 2023/24 in eine Rezession — das BIP schrumpfte real.",
      "Die Unternehmenssteuerlast liegt in Deutschland bei ca. 30 % und ist damit eine der höchsten in der EU.",
      "Laut DIHK-Umfrage erwägt jedes dritte Industrieunternehmen, Produktion ins Ausland zu verlagern.",
    ],
  },
  {
    id: 4,
    topic: "Bürgergeld & Sozialstaat",
    question:
      "Wie sollte das Bürgergeld gestaltet sein? Braucht es höhere Sätze und weniger Sanktionen — oder strengere Auflagen und mehr Anreize zur Arbeitsaufnahme?",
    infoFacts: [
      "Rund 5,5 Millionen Menschen beziehen Bürgergeld (Stand 2024).",
      "Der Regelsatz für Alleinstehende beträgt 563 Euro monatlich (2025).",
      "Die Sanktionsquote liegt aktuell bei etwa 3 % aller erwerbsfähigen Leistungsberechtigten.",
    ],
  },
  {
    id: 5,
    topic: "Rente",
    question:
      "Die Rente wird immer teurer. Sollte das Renteneintrittsalter steigen, die Beiträge erhöht werden oder braucht es ein ganz neues Modell wie eine Aktienrente?",
    infoFacts: [
      "Das reguläre Renteneintrittsalter steigt schrittweise auf 67 Jahre bis 2031.",
      "Der Beitragssatz zur Rentenversicherung liegt bei 18,6 % des Bruttolohns.",
      "Das Generationenkapital (Aktienrente) soll ab 2036 die Rentenfinanzierung stützen.",
    ],
  },
  {
    id: 6,
    topic: "Wohnen & Mieten",
    question:
      "Mieten explodieren in vielen Städten. Ist die Lösung mehr Neubau, strengere Mietpreisbremsen, sozialer Wohnungsbau oder sogar Enteignung großer Wohnungskonzerne?",
    infoFacts: [
      "In Deutschland fehlen schätzungsweise 700.000 bis 800.000 Wohnungen.",
      "Die Mietpreisbremse wurde bis 2029 verlängert.",
      "2024 wurden nur rund 245.000 neue Wohnungen fertiggestellt — Ziel der Regierung waren 400.000 pro Jahr.",
    ],
  },
  {
    id: 7,
    topic: "Verteidigung & Bundeswehr",
    question:
      "Sollte Deutschland dauerhaft deutlich mehr Geld für die Bundeswehr ausgeben? Brauchen wir eine neue Wehrpflicht oder einen Wehrdienst angesichts der veränderten Sicherheitslage in Europa?",
    infoFacts: [
      "Das Sondervermögen von 100 Mrd. Euro für die Bundeswehr ist größtenteils bereits verplant.",
      "Deutschland erreichte 2024 erstmals das NATO-Ziel von 2 % des BIP für Verteidigung.",
      "Die Bundeswehr hat derzeit rund 181.000 aktive Soldatinnen und Soldaten.",
    ],
  },
  {
    id: 8,
    topic: "Ukraine & Russland",
    question:
      "Wie sollte Deutschland sich zum Krieg in der Ukraine positionieren? Mehr Waffenlieferungen, diplomatische Lösungen, oder sollte Deutschland eine andere Rolle einnehmen?",
    infoFacts: [
      "Deutschland ist nach den USA der zweitgrößte Unterstützer der Ukraine.",
      "Seit Kriegsbeginn hat Deutschland über 28 Mrd. Euro an Hilfen zugesagt.",
      "Die Lieferung von Taurus-Marschflugkörpern war bis zuletzt politisch umstritten.",
    ],
  },
  {
    id: 9,
    topic: "Energie & Strompreise",
    question:
      "Wie soll Deutschlands Energieversorgung aussehen? Welche Rolle spielen erneuerbare Energien, und sollte Deutschland über eine Rückkehr zur Kernkraft nachdenken?",
    infoFacts: [
      "2024 stammten über 55 % des Stroms in Deutschland aus erneuerbaren Energien.",
      "Die letzten drei Kernkraftwerke wurden im April 2023 endgültig abgeschaltet.",
      "Die Strompreise für Haushalte liegen in Deutschland rund 40 % über dem EU-Durchschnitt.",
    ],
  },
  {
    id: 10,
    topic: "Steuern & Abgaben",
    question:
      "Die Steuerlast in Deutschland ist hoch. Sollten Besserverdienende stärker besteuert werden, oder braucht es Steuersenkungen für alle, um die Wirtschaft anzukurbeln?",
    infoFacts: [
      "Die Steuer- und Abgabenquote in Deutschland liegt bei ca. 42 % des BIP.",
      "Der Spitzensteuersatz greift ab einem zu versteuernden Einkommen von ca. 67.000 Euro.",
      "Nur rund 3 % der Steuerzahler zahlen den Reichensteuersatz von 45 %.",
    ],
  },
  {
    id: 11,
    topic: "Schuldenbremse",
    question:
      "Sollte die Schuldenbremse gelockert werden, damit der Staat mehr in Infrastruktur und Bildung investieren kann — oder ist Haushaltsdisziplin langfristig wichtiger?",
    infoFacts: [
      "Die Schuldenbremse ist seit 2009 im Grundgesetz verankert (Art. 109 GG).",
      "Sie erlaubt dem Bund maximal 0,35 % des BIP an struktureller Neuverschuldung.",
      "Der Investitionsstau bei der öffentlichen Infrastruktur wird auf über 450 Mrd. Euro geschätzt.",
    ],
  },
  {
    id: 12,
    topic: "Bildung",
    question:
      "Das Bildungssystem hat große Probleme: Lehrermangel, marode Schulen, unterschiedliche Qualität je nach Bundesland. Was muss sich ändern und wer soll das verantworten?",
    infoFacts: [
      "Bis 2035 fehlen laut KMK-Prognose rund 68.000 Lehrkräfte in Deutschland.",
      "Der Bildungsföderalismus führt zu 16 verschiedenen Schulsystemen in den Bundesländern.",
      "Deutschland gibt etwa 5 % des BIP für Bildung aus — unter dem OECD-Durchschnitt.",
    ],
  },
  {
    id: 13,
    topic: "Digitalisierung",
    question:
      "Behörden, Schulen und Gesundheitswesen hinken digital hinterher. Was sollte der Staat konkret tun, um die Digitalisierung in Deutschland voranzubringen?",
    infoFacts: [
      "Im EU-Index für digitale Wirtschaft und Gesellschaft (DESI) liegt Deutschland nur im Mittelfeld.",
      "Nur etwa 50 % der Verwaltungsleistungen sind online verfügbar (OZG-Umsetzung).",
      "Der Glasfaserausbau erreicht nur ca. 38 % der Haushalte (FTTH-Quote).",
    ],
  },
  {
    id: 14,
    topic: "Innere Sicherheit",
    question:
      "Wie kann Deutschland sicherer werden? Brauchen wir mehr Polizei, Videoüberwachung, härtere Strafen — oder liegen die Ursachen von Kriminalität woanders?",
    infoFacts: [
      "Die Polizeiliche Kriminalstatistik 2023 verzeichnete einen Anstieg der Straftaten um 5,5 %.",
      "Messerangriffe sind zuletzt stark gestiegen und stehen im Fokus der Debatte.",
      "Die Aufklärungsquote bei Straftaten liegt bei rund 57 %.",
    ],
  },
  {
    id: 15,
    topic: "Gesundheitssystem",
    question:
      "Lange Wartezeiten, Ärztemangel auf dem Land, hohe Kassenbeiträge: Wie sollte das Gesundheitssystem reformiert werden? Bürgerversicherung oder Beibehaltung des dualen Systems?",
    infoFacts: [
      "Ca. 73 Millionen Deutsche sind gesetzlich krankenversichert, rund 9 Millionen privat.",
      "In ländlichen Regionen fehlen zunehmend Hausärzte — über 5.000 Praxen drohen bis 2030 zu schließen.",
      "Die Gesundheitsausgaben beliefen sich 2023 auf über 470 Mrd. Euro.",
    ],
  },
  {
    id: 16,
    topic: "Pflege",
    question:
      "Der Pflegenotstand spitzt sich zu. Was hilft — bessere Bezahlung, mehr Fachkräfte aus dem Ausland, Unterstützung pflegender Angehöriger oder technische Lösungen?",
    infoFacts: [
      "Rund 5 Millionen Menschen in Deutschland sind pflegebedürftig.",
      "Bis 2030 fehlen laut Prognosen bis zu 500.000 Pflegekräfte.",
      "Die Eigenanteile in Pflegeheimen liegen durchschnittlich bei über 2.500 Euro monatlich.",
    ],
  },
  {
    id: 17,
    topic: "Verkehr & Mobilität",
    question:
      "Tempolimit auf Autobahnen, Ausbau von Bahn und ÖPNV, Förderung von E-Autos oder Technologieoffenheit — wie sollte die Verkehrswende gestaltet werden?",
    infoFacts: [
      "Deutschland ist das einzige Land in Europa ohne generelles Tempolimit auf Autobahnen.",
      "Das Deutschlandticket kostet seit 2025 monatlich 58 Euro.",
      "Die Deutsche Bahn hat eine Pünktlichkeitsquote im Fernverkehr von unter 65 %.",
    ],
  },
  {
    id: 18,
    topic: "EU & Europapolitik",
    question:
      "Sollte die europäische Integration vertieft werden — zum Beispiel durch eine gemeinsame Armee oder Fiskalpolitik — oder braucht es mehr nationale Eigenständigkeit?",
    infoFacts: [
      "Deutschland ist mit ca. 25 % der größte Nettozahler der EU.",
      "Die EU hat 27 Mitgliedstaaten mit rund 450 Millionen Einwohnern.",
      "Einstimmigkeitsprinzipien in der EU-Außenpolitik blockieren oft schnelle Entscheidungen.",
    ],
  },
  {
    id: 19,
    topic: "Handel & Zölle",
    question:
      "Wie sollte Deutschland auf Handelskonflikte und Strafzölle reagieren? Braucht Europa mehr wirtschaftliche Unabhängigkeit oder ist offener Freihandel der bessere Weg?",
    infoFacts: [
      "China, die USA und Frankreich sind Deutschlands wichtigste Handelspartner.",
      "Die USA haben unter Trump Strafzölle auf EU-Produkte eingeführt bzw. angedroht.",
      "Der deutsche Exportüberschuss betrug 2024 rund 200 Mrd. Euro.",
    ],
  },
  {
    id: 20,
    topic: "Bürokratieabbau",
    question:
      "Deutschland gilt als überreguliert. In welchen Bereichen sollte Bürokratie am dringendsten abgebaut werden und wie radikal darf das sein?",
    infoFacts: [
      "Die jährlichen Bürokratiekosten für die Wirtschaft werden auf über 65 Mrd. Euro geschätzt.",
      "Ein Bauantrag dauert in Deutschland durchschnittlich 5-8 Monate.",
      "Das Bürokratieentlastungsgesetz IV soll jährlich 944 Mio. Euro einsparen.",
    ],
  },
  {
    id: 21,
    topic: "Familienpolitik",
    question:
      "Wie sollte der Staat Familien besser unterstützen? Höheres Kindergeld, kostenlose Kitas, flexiblere Elternzeit — was wäre am wirksamsten?",
    infoFacts: [
      "Das Kindergeld beträgt seit 2025 einheitlich 255 Euro pro Monat und Kind.",
      "Die Geburtenrate liegt bei etwa 1,35 Kindern pro Frau — weit unter dem Bestandserhaltungsniveau.",
      "Für ca. 384.000 Kita-Plätze fehlen bundesweit noch Betreuungsangebote.",
    ],
  },
  {
    id: 22,
    topic: "Gleichstellung",
    question:
      "Braucht Deutschland gesetzliche Quoten für Frauen in Führungspositionen und Parlamenten, oder sollte Gleichstellung ohne staatliche Vorgaben vorangebracht werden?",
    infoFacts: [
      "Der Gender Pay Gap liegt in Deutschland bei rund 18 % (unbereinigt).",
      "Der Frauenanteil im Bundestag beträgt ca. 35 %.",
      "In den Vorständen der 200 größten Unternehmen liegt der Frauenanteil bei etwa 18 %.",
    ],
  },
  {
    id: 23,
    topic: "Öffentlich-rechtlicher Rundfunk",
    question:
      "ARD, ZDF und Co. stehen in der Kritik. Sollte der öffentlich-rechtliche Rundfunk deutlich verkleinert, grundlegend reformiert oder in seiner jetzigen Form erhalten bleiben?",
    infoFacts: [
      "Der Rundfunkbeitrag beträgt 18,36 Euro pro Monat pro Haushalt.",
      "ARD, ZDF und Deutschlandradio haben zusammen ein Budget von über 10 Mrd. Euro jährlich.",
      "Ein Reformstaatsvertrag soll den ÖRR bis 2027 modernisieren und verschlanken.",
    ],
  },
  {
    id: 24,
    topic: "Drogenpolitik",
    question:
      "War die Cannabis-Legalisierung richtig? Sollte Deutschland auch bei anderen Substanzen auf Entkriminalisierung setzen, oder braucht es eine härtere Linie?",
    infoFacts: [
      "Seit April 2024 ist der Besitz von bis zu 25 Gramm Cannabis für Erwachsene straffrei.",
      "Alkohol verursacht in Deutschland jährlich geschätzte 57 Mrd. Euro Folgekosten.",
      "Portugal entkriminalisierte 2001 alle Drogen — die Drogentoten sanken dort deutlich.",
    ],
  },
  {
    id: 25,
    topic: "Datenschutz & Überwachung",
    question:
      "Wo liegt die Grenze zwischen Sicherheit und Privatsphäre? Sollte der Staat mehr Überwachungsbefugnisse bekommen oder ist der Datenschutz bereits zu stark eingeschränkt?",
    infoFacts: [
      "Die Vorratsdatenspeicherung wurde vom EuGH in ihrer bisherigen Form für rechtswidrig erklärt.",
      "Gesichtserkennung im öffentlichen Raum ist in der EU umstritten — der AI Act reguliert sie teilweise.",
      "Deutschland hat mit der DSGVO eines der strengsten Datenschutzregime weltweit.",
    ],
  },
  {
    id: 26,
    topic: "KI & Technologie",
    question:
      "Wie sollte Deutschland mit Künstlicher Intelligenz umgehen? Braucht es strenge Regulierung zum Schutz von Arbeitsplätzen und Grundrechten, oder hemmt das die Innovation?",
    infoFacts: [
      "Der EU AI Act ist seit 2024 in Kraft und reguliert KI-Systeme nach Risikoklassen.",
      "Deutschland investiert bis 2025 rund 1,6 Mrd. Euro in die nationale KI-Strategie.",
      "Laut Studien könnten bis zu 36 % der Arbeitsplätze in Deutschland durch KI verändert werden.",
    ],
  },
  {
    id: 27,
    topic: "Infrastruktur",
    question:
      "Brücken, Schienen und Straßen sind marode. Wer soll die dringend nötige Sanierung bezahlen — und wo sollte zuerst investiert werden?",
    infoFacts: [
      "Rund 4.000 Autobahnbrücken in Deutschland gelten als sanierungsbedürftig.",
      "Die Deutsche Bahn investiert über 30 Mrd. Euro in die Generalsanierung ihres Streckennetzes.",
      "Der kommunale Investitionsrückstand beträgt laut KfW rund 186 Mrd. Euro.",
    ],
  },
  {
    id: 28,
    topic: "Arbeit & Löhne",
    question:
      "Mindestlohn weiter anheben, 4-Tage-Woche einführen, Recht auf Homeoffice gesetzlich verankern — welche Veränderungen in der Arbeitswelt sind sinnvoll?",
    infoFacts: [
      "Der gesetzliche Mindestlohn liegt seit 2025 bei 12,82 Euro pro Stunde.",
      "Rund 25 % aller Beschäftigten in Deutschland arbeiten zumindest teilweise im Homeoffice.",
      "Deutschland hat mit 34,7 Stunden eine der niedrigsten durchschnittlichen Wochenarbeitszeiten in Europa.",
    ],
  },
  {
    id: 29,
    topic: "Demokratie & Vertrauen",
    question:
      "Das Vertrauen in die Politik sinkt. Braucht Deutschland mehr direkte Demokratie wie Volksabstimmungen, oder würde das die Gesellschaft weiter spalten?",
    infoFacts: [
      "Nur noch ca. 30 % der Deutschen vertrauen der Bundesregierung laut Infratest dimap.",
      "Auf Bundesebene gibt es bisher keine verbindlichen Volksabstimmungen.",
      "Die Wahlbeteiligung bei der Bundestagswahl 2021 lag bei 76,4 %.",
    ],
  },
  {
    id: 30,
    topic: "Extremismus & Gesellschaft",
    question:
      "Politischer Extremismus und gesellschaftliche Spaltung nehmen zu. Welche Maßnahmen sollte der Staat ergreifen — und wo beginnt die Einschränkung von Meinungsfreiheit?",
    infoFacts: [
      "Der Verfassungsschutz stuft die AfD in Teilen als gesichert rechtsextrem ein.",
      "Politisch motivierte Straftaten erreichten 2023 mit über 60.000 Fällen einen Höchststand.",
      "Das BSI verzeichnete 2024 einen starken Anstieg von Desinformationskampagnen.",
    ],
  },
];

export default QUESTIONS;
