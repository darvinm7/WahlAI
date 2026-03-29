const REGIONAL_QUESTIONS = {
  "bw": {
    name: "Baden-Württemberg",
    stateQuestions: [
      {
        id: 101,
        topic: "Automobilindustrie",
        question: "Baden-Württemberg ist das Herz der deutschen Automobilindustrie. Wie soll der Wandel zur Elektromobilität gestaltet werden, ohne zehntausende Arbeitsplätze zu gefährden?",
        statement: "Das Land sollte den Wandel zur Elektromobilität konsequent vorantreiben, auch wenn dabei Arbeitsplätze in der klassischen Automobilindustrie verloren gehen.",
        infoFacts: [
          "Rund 470.000 Arbeitsplätze in Baden-Württemberg hängen direkt oder indirekt an der Automobilindustrie.",
          "Mercedes-Benz, Porsche und Bosch haben ihren Hauptsitz im Land.",
          "Für die Produktion von E-Autos werden etwa 30 % weniger Arbeitskräfte benötigt als für Verbrenner."
        ]
      },
      {
        id: 102,
        topic: "Stuttgart 21",
        question: "Das Bahnprojekt Stuttgart 21 hat sich massiv verteuert und verzögert. Welche Lehren sollte die Politik aus diesem Großprojekt ziehen?",
        statement: "Stuttgart 21 zeigt, dass Deutschland bei Großprojekten grundlegend andere Planungs- und Kontrollmechanismen braucht.",
        infoFacts: [
          "Die Kosten für Stuttgart 21 stiegen von ursprünglich 2,5 Mrd. auf über 11 Mrd. Euro.",
          "Die Inbetriebnahme wurde mehrfach verschoben und ist frühestens Ende 2026 geplant.",
          "2011 stimmten 58,9 % der Baden-Württemberger in einer Volksabstimmung gegen einen Ausstieg aus dem Projekt."
        ]
      },
      {
        id: 103,
        topic: "Bildungspolitik",
        question: "Baden-Württemberg hat als eines der letzten Bundesländer G8 am Gymnasium eingeführt und diskutiert die Rückkehr zu G9. Was ist der richtige Weg?",
        statement: "Baden-Württemberg sollte flächendeckend zu G9 zurückkehren, um den Druck auf Schülerinnen und Schüler zu reduzieren.",
        infoFacts: [
          "Seit 2023 können Modellschulen in BW wieder G9 anbieten — die Nachfrage ist groß.",
          "Bayern, NRW und Schleswig-Holstein sind bereits zu G9 zurückgekehrt.",
          "Das Bildungsniveau Baden-Württembergs ist laut IQB-Bildungstrend in den letzten Jahren gesunken."
        ]
      },
      {
        id: 104,
        topic: "Wohnungsnot",
        question: "In Stuttgart, Freiburg und anderen Universitätsstädten sind Mieten kaum noch bezahlbar. Was sollte das Land gegen die Wohnungsnot tun?",
        statement: "Das Land sollte den sozialen Wohnungsbau massiv ausbauen und strengere Mietpreisregulierungen einführen.",
        infoFacts: [
          "Die Durchschnittsmiete in Stuttgart liegt bei über 14 Euro pro Quadratmeter.",
          "In Baden-Württemberg fehlen schätzungsweise 100.000 bezahlbare Wohnungen.",
          "Der Bestand an Sozialwohnungen ist seit 2002 um mehr als die Hälfte geschrumpft."
        ]
      },
      {
        id: 105,
        topic: "Weinbau & Landwirtschaft",
        question: "Der Weinbau und die Landwirtschaft in Baden-Württemberg stehen durch Klimawandel und EU-Regulierungen unter Druck. Wie soll das Land seine Landwirte unterstützen?",
        statement: "Das Land sollte Landwirte und Winzer stärker finanziell unterstützen und vor übermäßiger EU-Regulierung schützen.",
        infoFacts: [
          "Baden-Württemberg ist mit rund 27.000 Hektar Rebfläche das drittgrößte Weinanbaugebiet Deutschlands.",
          "Die Zahl der landwirtschaftlichen Betriebe im Land hat sich seit 2000 halbiert.",
          "Durch den Klimawandel verschiebt sich der Weinanbau zunehmend in höhere Lagen."
        ]
      },
      {
        id: 106,
        topic: "Schwarzwald & Naturschutz",
        question: "Der Nationalpark Schwarzwald ist ein Erfolg, steht aber in Spannung mit forstwirtschaftlichen und touristischen Interessen. Wie soll das Gleichgewicht aussehen?",
        statement: "Naturschutzgebiete wie der Nationalpark Schwarzwald sollten erweitert werden, auch wenn das die Forstwirtschaft einschränkt.",
        infoFacts: [
          "Der Nationalpark Schwarzwald wurde 2014 gegründet und umfasst rund 10.000 Hektar.",
          "Jährlich besuchen über 10 Millionen Touristen den Schwarzwald.",
          "Nur etwa 2,5 % der Landesfläche Baden-Württembergs stehen unter strengem Naturschutz."
        ]
      },
      {
        id: 107,
        topic: "Innovation & KI",
        question: "Baden-Württemberg will sich als KI- und Innovationsstandort positionieren. Reichen die bisherigen Investitionen oder braucht es einen größeren Strategiewechsel?",
        statement: "Das Land sollte deutlich mehr in Künstliche Intelligenz und Start-ups investieren, auch zulasten traditioneller Industrieförderung.",
        infoFacts: [
          "Das Cyber Valley in Tübingen/Stuttgart ist eines der größten KI-Forschungszentren Europas.",
          "Baden-Württemberg gibt pro Kopf mehr für Forschung und Entwicklung aus als jedes andere Bundesland.",
          "Trotzdem wandern viele KI-Fachkräfte ins Ausland ab — besonders in die USA und die Schweiz."
        ]
      },
      {
        id: 108,
        topic: "Grün-schwarze Koalition",
        question: "Baden-Württemberg wird seit 2011 von einem grünen Ministerpräsidenten regiert. Hat die grün geführte Landesregierung dem Industriestandort geschadet oder genutzt?",
        statement: "Die grüne Regierungspolitik in Baden-Württemberg hat dem Industriestandort mehr genutzt als geschadet.",
        infoFacts: [
          "Winfried Kretschmann ist seit 2011 Ministerpräsident — der einzige grüne Regierungschef eines Flächenlandes.",
          "Die Arbeitslosenquote in BW liegt mit rund 4 % deutlich unter dem Bundesdurchschnitt.",
          "Kretschmann gilt als wirtschaftsnaher Grüner und hat den Autostandort BW oft verteidigt."
        ]
      },
      {
        id: 109,
        topic: "Verkehr & ÖPNV",
        question: "Der ÖPNV im ländlichen Baden-Württemberg ist oft unzureichend. Sollte das Land mehr in Bus und Bahn auf dem Land investieren oder auf individuelle Mobilität setzen?",
        statement: "Das Land sollte den ÖPNV auch in ländlichen Regionen massiv ausbauen und dafür notfalls den Straßenbau zurückstellen.",
        infoFacts: [
          "In vielen ländlichen Gemeinden fährt abends und am Wochenende kein Bus.",
          "Baden-Württemberg hat das Jugendticket BW für 365 Euro pro Jahr eingeführt.",
          "Die Landesregierung plant eine Mobilitätsgarantie: Jeder Ort soll von 5 bis 24 Uhr erreichbar sein."
        ]
      },
      {
        id: 110,
        topic: "Fachkräftemangel",
        question: "Der Fachkräftemangel trifft Baden-Württembergs Mittelstand besonders hart. Wie soll das Land qualifizierte Arbeitskräfte gewinnen?",
        statement: "Baden-Württemberg sollte gezielt Fachkräfte aus dem Ausland anwerben und Zuwanderung als Chance begreifen.",
        infoFacts: [
          "In BW sind rund 200.000 Stellen unbesetzt — vor allem im Handwerk und in der Pflege.",
          "Der Mittelstand macht über 99 % der Unternehmen im Land aus.",
          "Die duale Ausbildung in BW genießt international hohes Ansehen."
        ]
      },
      {
        id: 111,
        topic: "Flüchtlingsunterbringung",
        question: "Die Kommunen in Baden-Württemberg klagen über Überlastung bei der Unterbringung von Geflüchteten. Wie soll das Land die Kommunen entlasten?",
        statement: "Das Land sollte die Kommunen finanziell stärker bei der Flüchtlingsunterbringung entlasten und selbst mehr Aufnahmeeinrichtungen schaffen.",
        infoFacts: [
          "Baden-Württemberg hat 2023/24 über 150.000 Geflüchtete aufgenommen.",
          "Viele Kommunen nutzen Turnhallen und Container als Notunterkünfte.",
          "Das Land erstattet den Kommunen einen pauschalen Betrag pro Geflüchtetem, der oft nicht kostendeckend ist."
        ]
      },
      {
        id: 112,
        topic: "Energiewende",
        question: "Baden-Württemberg hinkt beim Ausbau der Windkraft hinterher. Sollte das Land mehr Windräder auch in Waldgebieten und Naturparks zulassen?",
        statement: "Der Ausbau der Windkraft sollte in Baden-Württemberg auch in Waldgebieten und Naturparks deutlich beschleunigt werden.",
        infoFacts: [
          "BW hat nur rund 770 Windkraftanlagen — deutlich weniger als vergleichbare Bundesländer.",
          "Das Land will bis 2040 klimaneutral werden und 1.000 neue Windräder bis 2030 errichten.",
          "Genehmigungsverfahren für Windkraftanlagen dauern in BW durchschnittlich über vier Jahre."
        ]
      },
      {
        id: 113,
        topic: "Kita-Betreuung",
        question: "Die Kinderbetreuung in Baden-Württemberg ist teuer und es fehlen Plätze. Sollte das Land eine kostenlose Kita für alle einführen?",
        statement: "Die Kinderbetreuung in Baden-Württemberg sollte komplett kostenfrei sein, um Familien zu entlasten und Chancengleichheit zu fördern.",
        infoFacts: [
          "Kita-Gebühren variieren in BW stark — zwischen 0 und über 500 Euro monatlich je nach Kommune.",
          "Es fehlen schätzungsweise 60.000 Betreuungsplätze im Land.",
          "Andere Bundesländer wie Berlin und Hamburg bieten bereits weitgehend kostenfreie Kita-Betreuung."
        ]
      },
      {
        id: 114,
        topic: "Innere Sicherheit",
        question: "Baden-Württemberg gilt als sicheres Bundesland, aber Messerangriffe und Clan-Kriminalität sorgen für Verunsicherung. Braucht es härtere Maßnahmen?",
        statement: "Baden-Württemberg sollte die Polizei personell aufstocken und Videoüberwachung an öffentlichen Plätzen ausweiten.",
        infoFacts: [
          "Die Kriminalitätsrate in BW liegt unter dem Bundesdurchschnitt.",
          "Die Polizei Baden-Württemberg hat rund 33.000 Beschäftigte.",
          "Die Aufklärungsquote in BW liegt mit über 62 % über dem Bundesschnitt."
        ]
      },
      {
        id: 115,
        topic: "Hochschulen & Forschung",
        question: "Baden-Württembergs Universitäten sind Spitze, aber die Studiengebühren-Debatte und Unterfinanzierung belasten das System. Was muss sich ändern?",
        statement: "Baden-Württemberg sollte seine Hochschulen besser finanzieren und auf Studiengebühren verzichten.",
        infoFacts: [
          "Neun der elf Exzellenzuniversitäten Deutschlands befinden sich in BW oder haben dort Standorte.",
          "Für internationale Studierende aus Nicht-EU-Ländern werden in BW seit 2017 Studiengebühren von 1.500 Euro pro Semester erhoben.",
          "Baden-Württemberg gibt pro Studierendem weniger aus als Bayern oder Hessen."
        ]
      }
    ],
    federalQuestionIds: [1, 2, 3, 5, 6, 9, 12, 13, 17, 19, 20, 21, 26, 27, 28]
  },

  "by": {
    name: "Bayern",
    stateQuestions: [
      {
        id: 201,
        topic: "CSU-Dominanz",
        question: "Die CSU regiert Bayern fast ununterbrochen seit 1957. Ist diese Dominanz einer einzelnen Partei demokratisch problematisch oder Ausdruck stabiler Verhältnisse?",
        statement: "Die jahrzehntelange CSU-Dominanz in Bayern schadet der demokratischen Vielfalt und dem politischen Wettbewerb.",
        infoFacts: [
          "Die CSU stellt seit 1957 ununterbrochen den bayerischen Ministerpräsidenten.",
          "Bei der Landtagswahl 2023 erreichte die CSU 37 % — ihr zweitschlechtestes Ergebnis.",
          "Bayern hat als einziges Bundesland eine Partei, die ausschließlich dort antritt (CSU)."
        ]
      },
      {
        id: 202,
        topic: "Söder & Bundespolitik",
        question: "Markus Söder positioniert sich immer wieder bundespolitisch und pflegt Bayerns Sonderrolle. Ist das gut für den Föderalismus oder spaltet es das Land?",
        statement: "Bayern sollte seine Sonderrolle im Bund selbstbewusst behaupten, auch wenn das zu Konflikten mit der Bundesregierung führt.",
        infoFacts: [
          "Bayern klagt regelmäßig vor dem Bundesverfassungsgericht gegen Bundesgesetze.",
          "Der Länderfinanzausgleich kostet Bayern jährlich über 9 Mrd. Euro — mehr als jedes andere Land.",
          "Söder forderte mehrfach eigene bayerische Grenzkontrollen und eine härtere Asylpolitik als der Bund."
        ]
      },
      {
        id: 203,
        topic: "Mietpreise München",
        question: "München ist die teuerste Stadt Deutschlands. Was muss getan werden, damit Normalverdiener sich das Wohnen in der Landeshauptstadt noch leisten können?",
        statement: "Der Freistaat sollte in München massiv in sozialen Wohnungsbau investieren und einen landesweiten Mietendeckel einführen.",
        infoFacts: [
          "Die Durchschnittsmiete in München liegt bei über 20 Euro pro Quadratmeter — Spitze in Deutschland.",
          "Ein Drittel der Münchner gibt mehr als 40 % des Einkommens für Miete aus.",
          "Der Bestand an Sozialwohnungen in München ist seit 2006 um über 20 % gesunken."
        ]
      },
      {
        id: 204,
        topic: "Automobilindustrie Bayern",
        question: "BMW und Audi sind Säulen der bayerischen Wirtschaft. Wie soll Bayern den Wandel zur Elektromobilität begleiten, ohne die Wettbewerbsfähigkeit zu gefährden?",
        statement: "Bayern sollte technologieoffen bleiben und nicht einseitig auf Elektromobilität setzen, sondern auch synthetische Kraftstoffe fördern.",
        infoFacts: [
          "BMW und Audi beschäftigen in Bayern zusammen über 130.000 Menschen.",
          "Bayern hat mit über 200 Zulieferern die dichteste Automobil-Zulieferindustrie Deutschlands.",
          "Der Freistaat fördert die Wasserstoff-Strategie mit über 500 Mio. Euro."
        ]
      },
      {
        id: 205,
        topic: "Freistaat-Tradition",
        question: "Bayern betont seine Eigenständigkeit als Freistaat. Sollte Bayern noch mehr Kompetenzen vom Bund übernehmen oder ist mehr Zentralismus sinnvoller?",
        statement: "Bayern sollte als Freistaat mehr Kompetenzen vom Bund übernehmen, etwa in der Bildungs- und Sicherheitspolitik.",
        infoFacts: [
          "Bayern bezeichnet sich als Freistaat — ein Titel, der auf die Revolution von 1918 zurückgeht.",
          "Der Freistaat hat eine eigene Vertretung in Berlin und Brüssel.",
          "Bayern hat als einziges Bundesland eine eigene Grenzpolizei."
        ]
      },
      {
        id: 206,
        topic: "Grenzkontrollen",
        question: "Bayern liegt an der Grenze zu Österreich und Tschechien und ist Haupteinreiseroute für Geflüchtete. Wie soll die Grenzsicherung aussehen?",
        statement: "An den bayerischen Grenzen sollten dauerhafte stationäre Kontrollen eingerichtet werden, auch wenn das den freien Verkehr im Schengen-Raum einschränkt.",
        infoFacts: [
          "Seit 2023 gibt es wieder temporäre Grenzkontrollen an der deutsch-österreichischen Grenze.",
          "Über 60 % der irregulären Einreisen nach Deutschland erfolgen über Bayern.",
          "Die bayerische Grenzpolizei wurde 2018 mit rund 500 Beamten wiedergegründet."
        ]
      },
      {
        id: 207,
        topic: "Energiewende ländlicher Raum",
        question: "Der Ausbau von Windkraft scheitert in Bayern oft am Widerstand der Bevölkerung und an der 10H-Regel. Sollte Bayern mehr Windkraft zulassen?",
        statement: "Die 10H-Abstandsregel für Windkraftanlagen in Bayern sollte abgeschafft werden, um den Ausbau erneuerbarer Energien zu beschleunigen.",
        infoFacts: [
          "Die 10H-Regel schreibt vor, dass Windräder das Zehnfache ihrer Höhe Abstand zur Wohnbebauung halten müssen.",
          "Seit Einführung der 10H-Regel 2014 ist der Windkraftausbau in Bayern fast zum Erliegen gekommen.",
          "Bayern setzt stattdessen stark auf Solarenergie und hat die höchste PV-Leistung aller Bundesländer."
        ]
      },
      {
        id: 208,
        topic: "Tourismus Alpen",
        question: "Der Tourismus in den bayerischen Alpen bringt Milliarden, belastet aber Natur und Infrastruktur. Wie soll Bayern Tourismus und Umweltschutz in Einklang bringen?",
        statement: "Bayern sollte den Tourismus in den Alpen stärker regulieren und Besucherobergrenzen für sensible Naturgebiete einführen.",
        infoFacts: [
          "Bayern ist mit über 100 Millionen Übernachtungen pro Jahr das tourismusstärkste Bundesland.",
          "Der Klimawandel bedroht den Wintersport: Viele Skigebiete unter 1.500 Metern gelten als nicht mehr schneesicher.",
          "Die Gemeinde Garmisch-Partenkirchen kämpft mit Overtourism und Verkehrskollaps an Spitzentagen."
        ]
      },
      {
        id: 209,
        topic: "Ländlicher Raum",
        question: "In vielen bayerischen Regionen fehlen Ärzte, schnelles Internet und Nahverkehr. Wie kann der Freistaat den ländlichen Raum stärken?",
        statement: "Bayern sollte Behörden und Hochschulen verstärkt in den ländlichen Raum verlagern, um gleichwertige Lebensverhältnisse zu schaffen.",
        infoFacts: [
          "Bayern hat bereits über 70 Behördenverlagerungen aus dem Großraum München beschlossen.",
          "In manchen Landkreisen Oberfrankens liegt die Breitbandversorgung unter 60 %.",
          "Die Landflucht betrifft besonders den Bayerischen Wald und Teile Oberfrankens."
        ]
      },
      {
        id: 210,
        topic: "Bildungssystem",
        question: "Bayern schneidet in Bildungsrankings regelmäßig gut ab, aber das Schulsystem gilt als besonders selektiv. Ist das gerecht?",
        statement: "Das bayerische Schulsystem sollte durchlässiger werden und weniger früh in verschiedene Schultypen selektieren.",
        infoFacts: [
          "Bayern und Sachsen führen regelmäßig die Bildungsrankings der Bundesländer an.",
          "Der Übertritt aufs Gymnasium erfolgt in Bayern nach der 4. Klasse — abhängig vom Notenschnitt.",
          "Kinder aus Akademikerfamilien besuchen in Bayern viermal häufiger das Gymnasium als Arbeiterkinder."
        ]
      },
      {
        id: 211,
        topic: "Kreuzerlass",
        question: "Bayerns Kreuzerlass verpflichtet zum Aufhängen von Kreuzen in Behörden. Ist das Ausdruck bayerischer Identität oder verletzt es die Religionsfreiheit?",
        statement: "Der Kreuzerlass in bayerischen Behörden ist richtig und drückt die christlich-abendländische Prägung Bayerns aus.",
        infoFacts: [
          "Seit 2018 müssen in bayerischen Behörden Kreuze im Eingangsbereich hängen.",
          "Rund 50 % der Bayern sind katholisch — aber der Anteil sinkt stetig.",
          "Das Bundesverfassungsgericht hatte bereits 1995 Kruzifixe in Schulen als verfassungswidrig beurteilt."
        ]
      },
      {
        id: 212,
        topic: "Startups & Hightech",
        question: "Bayern will mit dem Silicon Valley konkurrieren. Reichen die bisherigen Anstrengungen, um Bayern als Hightech-Standort zu positionieren?",
        statement: "Bayern sollte deutlich mehr Geld in Hightech-Gründungen und Risikokapital investieren, um international wettbewerbsfähig zu bleiben.",
        infoFacts: [
          "Die Hightech-Agenda Bayern umfasst Investitionen von über 5,5 Mrd. Euro.",
          "München ist nach Berlin der zweitgrößte Startup-Standort Deutschlands.",
          "Apple, Google und Microsoft haben große Standorte in München."
        ]
      },
      {
        id: 213,
        topic: "Wasser & Klimawandel",
        question: "Bayern leidet zunehmend unter Dürren und gleichzeitig unter Hochwasser. Wie soll der Freistaat sich an den Klimawandel anpassen?",
        statement: "Bayern sollte einen umfassenden Klima-Anpassungsplan mit Milliarden-Investitionen in Hochwasserschutz und Wasserversorgung aufstellen.",
        infoFacts: [
          "Das Hochwasser 2024 verursachte in Bayern Schäden von über 2 Mrd. Euro.",
          "Die Grundwasserstände sinken in Teilen Frankens seit Jahren bedenklich.",
          "Bayern investiert jährlich rund 200 Mio. Euro in den Hochwasserschutz."
        ]
      },
      {
        id: 214,
        topic: "Bierkultur & Gastronomie",
        question: "Bayerns Brauereien und Gastronomie leiden unter steigenden Kosten und Fachkräftemangel. Sollte der Freistaat die Gastronomie stärker unterstützen?",
        statement: "Bayern sollte die Mehrwertsteuer auf Speisen in der Gastronomie dauerhaft auf 7 % senken und bürokratische Auflagen reduzieren.",
        infoFacts: [
          "Bayern hat mit über 600 Brauereien die höchste Brauereidichte der Welt.",
          "Seit 2024 gilt wieder der volle Mehrwertsteuersatz von 19 % auf Speisen in Restaurants.",
          "Rund 15 % der bayerischen Gaststätten haben seit 2020 dauerhaft geschlossen."
        ]
      },
      {
        id: 215,
        topic: "Asylpolitik",
        question: "Bayern fordert eine härtere Asylpolitik als der Bund und geht eigene Wege. Ist das landespolitisch sinnvoll oder untergräbt es die Bundeseinheit?",
        statement: "Bayern hat das Recht, in der Asylpolitik über Bundesvorgaben hinauszugehen und eigene, strengere Maßnahmen umzusetzen.",
        infoFacts: [
          "Bayern hat mit den AnkER-Zentren ein eigenes Modell zur zentralen Asylbearbeitung eingeführt.",
          "Der Freistaat hat als erstes Bundesland Bezahlkarten für Asylbewerber eingeführt.",
          "Die Abschiebequote in Bayern liegt über dem Bundesdurchschnitt."
        ]
      }
    ],
    federalQuestionIds: [1, 2, 3, 4, 5, 7, 9, 10, 14, 17, 19, 20, 21, 26, 30]
  },

  "be": {
    name: "Berlin",
    stateQuestions: [
      {
        id: 301,
        topic: "Mietendeckel",
        question: "Der Berliner Mietendeckel wurde vom Bundesverfassungsgericht gekippt. Braucht Berlin einen neuen Anlauf zur Mietpreisregulierung?",
        statement: "Berlin braucht eine neue, verfassungskonforme Form des Mietendeckels, um Mieter vor Verdrängung zu schützen.",
        infoFacts: [
          "Der Berliner Mietendeckel galt von 2020 bis 2021 und wurde als verfassungswidrig aufgehoben.",
          "Die Durchschnittsmiete bei Neuvermietung liegt in Berlin bei über 13 Euro pro Quadratmeter.",
          "Der Volksentscheid zur Enteignung großer Wohnungskonzerne wurde 2021 mit 59 % angenommen."
        ]
      },
      {
        id: 302,
        topic: "BER-Flughafen",
        question: "Der BER-Flughafen gilt als Symbol für Planungsversagen. Hat der Flughafen inzwischen seinen Zweck erfüllt, oder bleibt er ein Problemfall?",
        statement: "Der BER-Flughafen muss dringend erweitert werden, um dem wachsenden Flugverkehr in der Hauptstadtregion gerecht zu werden.",
        infoFacts: [
          "Der BER wurde 2020 eröffnet — neun Jahre später als geplant und dreimal so teuer.",
          "Die Gesamtkosten beliefen sich auf rund 7 Mrd. Euro statt der geplanten 2 Mrd.",
          "Der BER erreicht bereits Kapazitätsgrenzen und plant ein zusätzliches Terminal."
        ]
      },
      {
        id: 303,
        topic: "Verwaltungschaos",
        question: "Berlins Verwaltung gilt als dysfunktional: Lange Wartezeiten bei Bürgerämtern, schleppende Digitalisierung. Was muss sich ändern?",
        statement: "Berlins Verwaltung muss grundlegend reformiert und digitalisiert werden — notfalls gegen den Widerstand der Beschäftigten.",
        infoFacts: [
          "Die durchschnittliche Wartezeit auf einen Bürgeramtstermin beträgt in Berlin mehrere Wochen.",
          "Berlin hat rund 130.000 Beschäftigte im öffentlichen Dienst — mehr als jedes andere Bundesland pro Einwohner.",
          "Im E-Government-Ranking liegt Berlin regelmäßig auf den letzten Plätzen."
        ]
      },
      {
        id: 304,
        topic: "Gentrifizierung",
        question: "Stadtteile wie Kreuzberg, Neukölln und Friedrichshain verändern sich rasant. Wie soll Berlin mit Gentrifizierung und Verdrängung umgehen?",
        statement: "Berlin sollte Milieuschutzgebiete ausweiten und Luxussanierungen stärker einschränken, um die soziale Mischung in den Kiezen zu erhalten.",
        infoFacts: [
          "Über 70 Gebiete in Berlin sind als Milieuschutzgebiete ausgewiesen.",
          "Die Mieten in Friedrichshain haben sich seit 2010 mehr als verdoppelt.",
          "Berlin hat die höchste Mieterquote aller deutschen Großstädte — über 85 % wohnen zur Miete."
        ]
      },
      {
        id: 305,
        topic: "Clubkultur",
        question: "Berlins Clubszene gilt als Weltkulturerbe, steht aber durch Verdrängung und Lärmschutzkonflikte unter Druck. Wie wichtig ist der Schutz der Clubkultur?",
        statement: "Berlin sollte die Clubkultur als immaterielles Kulturerbe schützen und Clubs durch günstige Mietverträge und Schallschutzförderung unterstützen.",
        infoFacts: [
          "Berlins Clubkultur wurde 2024 in das Bundesweite Verzeichnis des Immateriellen Kulturerbes aufgenommen.",
          "Die Clubszene generiert schätzungsweise 1,5 Mrd. Euro Umsatz pro Jahr in Berlin.",
          "Seit 2020 haben über 100 Berliner Clubs dauerhaft geschlossen."
        ]
      },
      {
        id: 306,
        topic: "Obdachlosigkeit",
        question: "In Berlin leben geschätzt über 10.000 Menschen auf der Straße. Was sollte das Land Berlin gegen Obdachlosigkeit tun?",
        statement: "Berlin sollte ein Recht auf Wohnung in der Landesverfassung verankern und Housing-First-Programme massiv ausbauen.",
        infoFacts: [
          "Schätzungen zufolge leben über 10.000 Menschen in Berlin auf der Straße.",
          "Berlin hat die Kältehilfe ausgebaut, die im Winter rund 1.000 Notschlafplätze bietet.",
          "Das Housing-First-Modellprojekt in Berlin zeigt erste Erfolge — über 80 % der Teilnehmer bleiben in stabilen Wohnverhältnissen."
        ]
      },
      {
        id: 307,
        topic: "Verkehrswende",
        question: "Berlin diskutiert über autofreie Innenstädte, Fahrradstraßen und den Ausbau des ÖPNV. Wie weit soll die Verkehrswende gehen?",
        statement: "Berlin sollte die Innenstadt weitgehend autofrei machen und den ÖPNV sowie das Radwegenetz massiv ausbauen.",
        infoFacts: [
          "Ein Volksentscheid für eine autofreie Innenstadt scheiterte 2023 am Quorum.",
          "Berlin hat rund 1.500 km Radwege — aber viele sind in schlechtem Zustand.",
          "Die BVG befördert täglich über 3 Millionen Fahrgäste."
        ]
      },
      {
        id: 308,
        topic: "Öffentliche Sicherheit",
        question: "Berlin hat Probleme mit Clan-Kriminalität, Drogenhandel im Görlitzer Park und steigender Gewaltkriminalität. Was muss getan werden?",
        statement: "Berlin braucht mehr Polizei, konsequentere Strafverfolgung und härtere Maßnahmen gegen Clan-Kriminalität.",
        infoFacts: [
          "Berlin hat die höchste Kriminalitätsrate aller Bundesländer.",
          "Die Berliner Polizei hat rund 27.000 Beschäftigte — dennoch gelten viele Stellen als unbesetzt.",
          "Der Görlitzer Park in Kreuzberg ist seit Jahren Schwerpunkt des offenen Drogenhandels."
        ]
      },
      {
        id: 309,
        topic: "Schulen & Bildung",
        question: "Berlins Schulen sind marode, es fehlen Lehrkräfte und die Leistungen sinken. Wie soll Berlin sein Bildungssystem retten?",
        statement: "Berlin sollte massiv in die Schulsanierung investieren und Lehrkräfte wieder verbeamten, um den Bildungsnotstand zu bekämpfen.",
        infoFacts: [
          "Der Sanierungsstau an Berliner Schulen beträgt über 8 Mrd. Euro.",
          "Berlin ist das einzige Bundesland, das Lehrkräfte nicht verbeamtet — aber plant die Wiedereinführung.",
          "Bei den IQB-Bildungstests schneiden Berliner Schüler regelmäßig unterdurchschnittlich ab."
        ]
      },
      {
        id: 310,
        topic: "Startup-Hauptstadt",
        question: "Berlin ist Deutschlands Startup-Hauptstadt. Wie kann die Stadt diese Position halten und ausbauen?",
        statement: "Berlin sollte Startups durch günstige Gewerbeflächen, weniger Bürokratie und mehr öffentliches Risikokapital stärker fördern.",
        infoFacts: [
          "Berlin erhält rund ein Drittel aller Venture-Capital-Investitionen in Deutschland.",
          "Über 3.000 Startups sind in Berlin ansässig.",
          "Die hohen Büromieten und der Fachkräftemangel werden zunehmend zum Problem für Berliner Startups."
        ]
      },
      {
        id: 311,
        topic: "Hauptstadt-Finanzen",
        question: "Berlin bekommt als Hauptstadt hohe Bundesmittel, wirtschaftet aber seit Jahrzehnten mit Schulden. Muss Berlin endlich sparen oder braucht es mehr Geld vom Bund?",
        statement: "Berlin muss endlich einen ausgeglichenen Haushalt vorlegen und darf sich nicht dauerhaft auf Bundeszuschüsse verlassen.",
        infoFacts: [
          "Berlin hat rund 60 Mrd. Euro Schulden angehäuft.",
          "Der Bund zahlt Berlin jährlich über 2 Mrd. Euro als Hauptstadt-Zuschuss.",
          "Die Steuereinnahmen Berlins sind in den letzten Jahren deutlich gestiegen."
        ]
      },
      {
        id: 312,
        topic: "Integration",
        question: "Berlin ist die multikulturellste Stadt Deutschlands. Funktioniert die Integration oder gibt es Parallelgesellschaften?",
        statement: "Berlin sollte mehr in Sprachkurse, Kita-Plätze und Arbeitsmarktintegration investieren, um Parallelgesellschaften zu verhindern.",
        infoFacts: [
          "Rund 35 % der Berliner haben einen Migrationshintergrund.",
          "In manchen Bezirken wie Neukölln und Mitte liegt der Anteil bei über 50 %.",
          "Berlin hat die höchste Zahl an internationalen Schulen in Deutschland."
        ]
      },
      {
        id: 313,
        topic: "Drogenpolitik",
        question: "Berlin hat eine offene Drogenszene und experimentiert mit Drogenkonsumräumen. Geht Berlin den richtigen Weg in der Drogenpolitik?",
        statement: "Berlin sollte den Ansatz der Entkriminalisierung und Schadensminimierung bei Drogenkonsum konsequent weiterverfolgen.",
        infoFacts: [
          "Berlin betreibt mehrere Drogenkonsumräume und bietet Drug-Checking an.",
          "Die Zahl der Drogentoten in Berlin stieg 2023 deutlich an.",
          "Der Görlitzer Park und der Leopoldplatz sind bekannte Schwerpunkte der offenen Drogenszene."
        ]
      },
      {
        id: 314,
        topic: "Kultur & Förderung",
        question: "Berlin hat eine einzigartige Kulturlandschaft, die aber chronisch unterfinanziert ist. Wie viel soll das Land in Kultur investieren?",
        statement: "Berlin sollte die Kulturförderung deutlich erhöhen und freie Künstler durch ein Grundeinkommen absichern.",
        infoFacts: [
          "Berlin gibt pro Kopf mehr für Kultur aus als jedes andere Bundesland.",
          "Trotzdem leben viele freie Künstler in Berlin unter der Armutsgrenze.",
          "Die drei Opernhäuser Berlins kosten das Land jährlich über 200 Mio. Euro."
        ]
      },
      {
        id: 315,
        topic: "Wohnungsbau",
        question: "Berlin braucht jährlich 20.000 neue Wohnungen, baut aber nur einen Bruchteil davon. Wie soll der Wohnungsbau beschleunigt werden?",
        statement: "Berlin sollte landeseigene Wohnungsbaugesellschaften massiv stärken und privaten Investoren strengere Auflagen machen.",
        infoFacts: [
          "2023 wurden in Berlin nur rund 10.000 neue Wohnungen fertiggestellt.",
          "Die sechs landeseigenen Wohnungsbaugesellschaften besitzen rund 350.000 Wohnungen.",
          "Steigende Baukosten und hohe Zinsen bremsen den privaten Wohnungsbau stark."
        ]
      }
    ],
    federalQuestionIds: [1, 4, 6, 10, 11, 12, 13, 14, 17, 20, 24, 25, 27, 29, 30]
  },

  "bb": {
    name: "Brandenburg",
    stateQuestions: [
      {
        id: 401,
        topic: "Tesla Gigafactory",
        question: "Die Tesla Gigafactory in Grünheide bringt Arbeitsplätze, aber auch Konflikte um Wasser, Wald und Arbeitsbedingungen. War die Ansiedlung richtig?",
        statement: "Die Ansiedlung der Tesla Gigafactory war richtig und Brandenburg sollte weitere Großinvestoren gezielt anwerben.",
        infoFacts: [
          "Die Tesla Gigafactory in Grünheide beschäftigt rund 12.000 Mitarbeiter.",
          "Für die Fabrik wurden rund 300 Hektar Kiefernwald gerodet.",
          "Der Wasserverbrauch der Fabrik ist umstritten — die Region leidet unter sinkenden Grundwasserspiegeln."
        ]
      },
      {
        id: 402,
        topic: "Kohleausstieg Lausitz",
        question: "Der Kohleausstieg trifft die Lausitz hart. Reichen die versprochenen Strukturwandel-Milliarden, um der Region eine Zukunft zu geben?",
        statement: "Der Kohleausstieg in der Lausitz sollte nicht vor 2038 erfolgen, um Arbeitsplätze und Energiesicherheit zu gewährleisten.",
        infoFacts: [
          "In der Lausitz hängen noch rund 8.000 Arbeitsplätze direkt an der Braunkohle.",
          "Der Bund hat 40 Mrd. Euro für den Strukturwandel in den Kohleregionen zugesagt.",
          "Das Bundeswirtschaftsministerium strebt einen Kohleausstieg idealerweise bis 2030 an."
        ]
      },
      {
        id: 403,
        topic: "Strukturwandel",
        question: "Kann die Lausitz zum Zukunftsstandort werden? Welche Branchen sollen die Kohle ersetzen — Erneuerbare, Tourismus, Forschung?",
        statement: "Die Lausitz sollte sich als Standort für erneuerbare Energien und Wasserstofftechnologie neu erfinden.",
        infoFacts: [
          "In Cottbus entsteht ein neues Universitätsklinikum als Ankerprojekt des Strukturwandels.",
          "Die BTU Cottbus-Senftenberg forscht intensiv an Wasserstofftechnologie.",
          "Mehrere große Solarparks werden in der ehemaligen Tagebauregion gebaut."
        ]
      },
      {
        id: 404,
        topic: "BER-Umland",
        question: "Das BER-Umland wächst rasant — aber die Infrastruktur hält nicht mit. Wie soll Brandenburg das Wachstum im Berliner Speckgürtel steuern?",
        statement: "Brandenburg sollte das Wachstum im Berliner Umland stärker steuern und verhindern, dass der ländliche Raum abgehängt wird.",
        infoFacts: [
          "Die Einwohnerzahlen in den BER-Umlandgemeinden wachsen jährlich um 2-3 %.",
          "Schulen, Kitas und Straßen im Berliner Speckgürtel sind überlastet.",
          "Die Immobilienpreise im BER-Umland haben sich seit 2015 verdoppelt."
        ]
      },
      {
        id: 405,
        topic: "Wasserknappheit",
        question: "Brandenburg ist das trockenste Bundesland Deutschlands. Wie soll das Land mit der zunehmenden Wasserknappheit umgehen?",
        statement: "Brandenburg braucht ein umfassendes Wassermanagement mit Entnahme-Beschränkungen für Industrie und Landwirtschaft.",
        infoFacts: [
          "Brandenburg hat die geringsten Niederschläge aller deutschen Flächenländer.",
          "Die Spree führt im Sommer teilweise so wenig Wasser, dass Berlin die Wasserversorgung bedroht sieht.",
          "Der Grundwasserspiegel ist in Teilen Brandenburgs seit 2018 um über einen Meter gesunken."
        ]
      },
      {
        id: 406,
        topic: "Ländlicher Raum",
        question: "Viele Dörfer in Brandenburg verlieren Einwohner, Ärzte, Läden und Busverbindungen. Was kann die Landesregierung dagegen tun?",
        statement: "Brandenburg sollte den ländlichen Raum durch gezielte Förderprogramme und bessere Infrastruktur stärken, statt nur auf das Berliner Umland zu setzen.",
        infoFacts: [
          "In der Prignitz und der Uckermark sinkt die Bevölkerung seit der Wende kontinuierlich.",
          "Viele Dörfer haben keinen Supermarkt und keine Arztpraxis mehr.",
          "Brandenburg hat die geringste Bevölkerungsdichte aller ostdeutschen Flächenländer."
        ]
      },
      {
        id: 407,
        topic: "AfD-Stärke",
        question: "Die AfD ist in Brandenburg besonders stark. Wie soll die Politik auf den wachsenden Rechtspopulismus in ländlichen Regionen reagieren?",
        statement: "Die demokratischen Parteien müssen die Ursachen der AfD-Stärke in Brandenburg ernst nehmen und mehr Präsenz in ländlichen Regionen zeigen.",
        infoFacts: [
          "Die AfD erreichte bei der Landtagswahl 2024 in Brandenburg rund 30 % und wurde zweitstärkste Kraft.",
          "In vielen ländlichen Wahlkreisen Brandenburgs gewann die AfD die Direktmandate.",
          "Der Verfassungsschutz Brandenburg stuft den Landesverband der AfD als rechtsextremistischen Verdachtsfall ein."
        ]
      },
      {
        id: 408,
        topic: "Pendler nach Berlin",
        question: "Hunderttausende Brandenburger pendeln täglich nach Berlin. Wie soll der Pendelverkehr verbessert werden?",
        statement: "Der Ausbau der Schienenverbindungen zwischen Brandenburg und Berlin sollte höchste Priorität haben, auch wenn er Milliarden kostet.",
        infoFacts: [
          "Über 200.000 Menschen pendeln täglich aus Brandenburg nach Berlin.",
          "Der i2030-Plan sieht den Ausbau mehrerer S-Bahn- und Regionalbahnstrecken vor.",
          "Viele Pendler stehen täglich im Stau auf der A10, A13 oder A24."
        ]
      },
      {
        id: 409,
        topic: "Bildung",
        question: "Brandenburgs Schulen leiden unter extremem Lehrermangel, besonders auf dem Land. Wie kann das Land gegensteuern?",
        statement: "Brandenburg sollte Lehrkräften auf dem Land deutliche Gehaltszuschläge und andere Anreize bieten, um den Lehrermangel zu bekämpfen.",
        infoFacts: [
          "In Brandenburg sind über 1.000 Lehrerstellen unbesetzt.",
          "Das Land stellt zunehmend Seiteneinsteiger als Lehrkräfte ein — teilweise über 50 % der Neueinstellungen.",
          "Kleine Dorfschulen werden geschlossen, was zu langen Schulwegen führt."
        ]
      },
      {
        id: 410,
        topic: "Erneuerbare Energien",
        question: "Brandenburg hat die meisten Windkraftanlagen aller Bundesländer. Profitiert die lokale Bevölkerung genug vom Ausbau?",
        statement: "Gemeinden und Anwohner in Brandenburg sollten stärker finanziell am Ausbau der Windkraft beteiligt werden.",
        infoFacts: [
          "Brandenburg hat über 4.000 Windkraftanlagen — mehr als jedes andere Bundesland.",
          "Ein Landesgesetz verpflichtet Windparkbetreiber zur finanziellen Beteiligung der Gemeinden.",
          "Trotz hoher Stromerzeugung aus Wind hat Brandenburg relativ hohe Strompreise für Verbraucher."
        ]
      },
      {
        id: 411,
        topic: "Wölfe",
        question: "In Brandenburg leben die meisten Wolfsrudel Deutschlands. Wie soll das Land mit dem Wolf-Mensch-Konflikt umgehen?",
        statement: "Brandenburg sollte den Abschuss von Wölfen erleichtern, wenn sie Nutztiere reißen und die Weidetierhaltung gefährden.",
        infoFacts: [
          "In Brandenburg leben über 50 Wolfsrudel — mehr als in jedem anderen Bundesland.",
          "Die Zahl der Wolfsrisse an Nutztieren steigt jährlich.",
          "Der Wolf steht unter strengem EU-Naturschutz, die Abschussregeln wurden 2024 gelockert."
        ]
      },
      {
        id: 412,
        topic: "Tourismus Spreewald",
        question: "Der Tourismus ist ein wichtiger Wirtschaftsfaktor für Brandenburg. Wie kann er nachhaltig weiterentwickelt werden?",
        statement: "Brandenburg sollte den nachhaltigen Tourismus stärker fördern und Massentourismus in empfindlichen Naturgebieten begrenzen.",
        infoFacts: [
          "Brandenburg verzeichnet jährlich über 14 Millionen Übernachtungen.",
          "Der Spreewald und die Seenlandschaft sind die wichtigsten touristischen Ziele.",
          "Viele touristische Regionen leiden unter mangelhafter Infrastruktur und Fachkräftemangel."
        ]
      },
      {
        id: 413,
        topic: "Polizei & Sicherheit",
        question: "Brandenburg hat eine der dünnsten Polizeidichten Deutschlands. Reicht die Polizeipräsenz im ländlichen Raum?",
        statement: "Brandenburg muss die Polizeipräsenz im ländlichen Raum deutlich erhöhen und mehr Polizeireviere wiedereröffnen.",
        infoFacts: [
          "Brandenburg hat rund 8.500 Polizisten für ein Flächenland mit 2,5 Millionen Einwohnern.",
          "In manchen Landkreisen beträgt die Anfahrtszeit der Polizei über 30 Minuten.",
          "Viele Polizeireviere auf dem Land wurden in den letzten Jahren geschlossen."
        ]
      },
      {
        id: 414,
        topic: "Sorben/Wenden",
        question: "Die sorbische/wendische Minderheit in Brandenburg hat besondere kulturelle Rechte. Werden diese ausreichend geschützt und gefördert?",
        statement: "Brandenburg sollte die sorbische/wendische Kultur und Sprache stärker fördern und den muttersprachlichen Unterricht ausbauen.",
        infoFacts: [
          "In Brandenburg leben rund 20.000 Sorben/Wenden, vor allem in der Niederlausitz.",
          "Die sorbische Sprache ist in Teilen Brandenburgs als Amtssprache anerkannt.",
          "Die Zahl der Sorbisch-Sprecher sinkt — verstärkte Sprachförderung in Kitas zeigt aber Wirkung."
        ]
      },
      {
        id: 415,
        topic: "Krankenhausversorgung",
        question: "Die Krankenhausreform bedroht kleine Kliniken auf dem Land. Wie soll Brandenburg die medizinische Versorgung sichern?",
        statement: "Brandenburg sollte kleine Krankenhäuser auf dem Land erhalten und zu medizinischen Versorgungszentren ausbauen, statt sie zu schließen.",
        infoFacts: [
          "Mehrere Krankenhäuser in Brandenburg stehen vor der Schließung oder Fusion.",
          "In der Prignitz müssen Patienten teilweise über 50 km zum nächsten Krankenhaus fahren.",
          "Brandenburg setzt verstärkt auf Telemedizin, um die Versorgung im ländlichen Raum zu verbessern."
        ]
      }
    ],
    federalQuestionIds: [1, 2, 3, 4, 9, 11, 12, 13, 15, 16, 17, 20, 27, 29, 30]
  },

  "hb": {
    name: "Bremen",
    stateQuestions: [
      {
        id: 501,
        topic: "Hafen & Logistik",
        question: "Bremens Häfen sind ein zentraler Wirtschaftsfaktor, stehen aber im Wettbewerb mit Hamburg und Rotterdam. Wie soll Bremen seinen Hafen zukunftsfähig machen?",
        statement: "Bremen sollte massiv in die Modernisierung und Digitalisierung seiner Häfen investieren, um international wettbewerbsfähig zu bleiben.",
        infoFacts: [
          "Die Häfen in Bremen und Bremerhaven sind der viertgrößte Containerhafen-Standort Europas.",
          "Rund 60.000 Arbeitsplätze in Bremen hängen direkt oder indirekt an der Hafenwirtschaft.",
          "Bremerhaven ist der größte Autoverlade-Hafen Europas."
        ]
      },
      {
        id: 502,
        topic: "Bildungskrise",
        question: "Bremen ist bei PISA und IQB-Tests regelmäßig Schlusslicht. Was muss sich grundlegend im Bremer Bildungssystem ändern?",
        statement: "Bremen muss sein Bildungssystem grundlegend reformieren und deutlich mehr Geld pro Schüler ausgeben, um den letzten Platz bei Bildungsvergleichen zu verlassen.",
        infoFacts: [
          "Bremen belegt bei allen bundesweiten Bildungsvergleichen regelmäßig den letzten Platz.",
          "Rund ein Drittel der Bremer Schüler erreicht nicht die Mindeststandards in Mathematik.",
          "Der Anteil von Kindern mit Migrationshintergrund in Bremer Schulen liegt bei über 50 %."
        ]
      },
      {
        id: 503,
        topic: "Schulden",
        question: "Bremen hat pro Kopf die höchsten Schulden aller Bundesländer. Kann Bremen aus eigener Kraft finanziell gesunden?",
        statement: "Bremen braucht dauerhaft höhere Bundeszuschüsse, weil das kleinste Bundesland seine strukturellen Probleme nicht allein lösen kann.",
        infoFacts: [
          "Bremens Schulden belaufen sich auf über 22 Mrd. Euro — rund 32.000 Euro pro Einwohner.",
          "Bremen erhält Sanierungshilfen vom Bund von 400 Mio. Euro jährlich.",
          "Trotz Sparauflagen steigen die Sozialausgaben Bremens kontinuierlich."
        ]
      },
      {
        id: 504,
        topic: "Armut",
        question: "Bremen hat die höchste Armutsquote aller westdeutschen Bundesländer. Was muss gegen die wachsende soziale Spaltung getan werden?",
        statement: "Bremen sollte ein umfassendes Armutsbekämpfungsprogramm auflegen und ärmere Stadtteile gezielt fördern.",
        infoFacts: [
          "Die Armutsquote in Bremen liegt bei über 28 % — die höchste aller westdeutschen Länder.",
          "In Stadtteilen wie Tenever und Gröpelingen leben über 40 % der Kinder in Armut.",
          "Die Langzeitarbeitslosigkeit in Bremen ist doppelt so hoch wie im Bundesdurchschnitt."
        ]
      },
      {
        id: 505,
        topic: "Überseestadt",
        question: "Die Überseestadt ist Bremens größtes Stadtentwicklungsprojekt. Profitiert die ganze Stadt oder nur eine privilegierte Klientel?",
        statement: "Die Überseestadt-Entwicklung sollte mehr bezahlbaren Wohnraum und Angebote für alle Bremer schaffen, nicht nur für Besserverdienende.",
        infoFacts: [
          "Die Überseestadt ist mit 300 Hektar eines der größten Stadtentwicklungsprojekte Europas.",
          "Rund 15.000 Arbeitsplätze sind bereits in der Überseestadt entstanden.",
          "Die Mietpreise in der Überseestadt liegen deutlich über dem Bremer Durchschnitt."
        ]
      },
      {
        id: 506,
        topic: "Integration",
        question: "Bremen hat einen hohen Anteil an Menschen mit Migrationshintergrund. Wie kann Integration besser gelingen?",
        statement: "Bremen sollte Integrationskurse verpflichtend machen und mehr in frühkindliche Sprachförderung investieren.",
        infoFacts: [
          "Rund 37 % der Bremer Bevölkerung haben einen Migrationshintergrund.",
          "In vielen Bremer Grundschulen sprechen über 80 % der Kinder zu Hause kein Deutsch.",
          "Bremen hat eine der höchsten Schutzquoten bei Asylverfahren in Deutschland."
        ]
      },
      {
        id: 507,
        topic: "Kriminalität",
        question: "Bremen hat eine überdurchschnittlich hohe Kriminalitätsrate. Welche Maßnahmen braucht es für mehr Sicherheit?",
        statement: "Bremen braucht deutlich mehr Polizeibeamte und eine konsequentere Strafverfolgung, um die hohe Kriminalitätsrate zu senken.",
        infoFacts: [
          "Bremen hat nach Berlin die höchste Kriminalitätsrate aller Bundesländer.",
          "Die Polizei Bremen ist personell seit Jahren unterbesetzt.",
          "Besonders Eigentumsdelikte und Drogenhandel prägen die Kriminalitätsstatistik."
        ]
      },
      {
        id: 508,
        topic: "Wissenschaftsstandort",
        question: "Bremen hat eine starke Wissenschaftslandschaft mit Universität, Fraunhofer und DLR. Wie kann dieser Standortvorteil besser genutzt werden?",
        statement: "Bremen sollte die Verbindung zwischen Wissenschaft und Wirtschaft stärken und mehr Ausgründungen aus der Forschung fördern.",
        infoFacts: [
          "Bremen beherbergt das Deutsche Zentrum für Luft- und Raumfahrt und mehrere Fraunhofer-Institute.",
          "Die Universität Bremen ist eine Exzellenzuniversität.",
          "Airbus und OHB haben große Standorte in Bremen — die Raumfahrt ist ein Schlüsselsektor."
        ]
      },
      {
        id: 509,
        topic: "Klimaschutz & Häfen",
        question: "Bremens Häfen sind wichtig für die Wirtschaft, aber auch große CO₂-Quellen. Wie kann Bremen Wirtschaft und Klimaschutz vereinen?",
        statement: "Die Bremer Häfen sollten schneller dekarbonisiert werden, auch wenn das kurzfristig die Wettbewerbsfähigkeit beeinträchtigt.",
        infoFacts: [
          "Der Hafen- und Logistiksektor ist einer der größten CO₂-Emittenten in Bremen.",
          "Bremen plant eine Landstromversorgung für Schiffe, um Emissionen im Hafen zu senken.",
          "Das Stahlwerk von ArcelorMittal in Bremen soll auf Wasserstoff umgestellt werden."
        ]
      },
      {
        id: 510,
        topic: "Zwei-Städte-Staat",
        question: "Bremen besteht aus den Städten Bremen und Bremerhaven. Funktioniert diese Konstruktion noch, oder wäre eine Fusion mit Niedersachsen sinnvoller?",
        statement: "Bremen sollte als eigenständiges Bundesland erhalten bleiben — eine Fusion mit Niedersachsen würde der Region schaden.",
        infoFacts: [
          "Bremen ist mit rund 680.000 Einwohnern das kleinste Bundesland.",
          "Bremerhaven liegt als Exklave rund 60 km nördlich von Bremen.",
          "Eine Länderfusion würde eine Grundgesetzänderung und Volksabstimmungen erfordern."
        ]
      },
      {
        id: 511,
        topic: "ÖPNV",
        question: "Der öffentliche Nahverkehr in Bremen ist ausbaufähig. Braucht Bremen eine Straßenbahn-Erweiterung oder ein ganz neues Konzept?",
        statement: "Bremen sollte sein Straßenbahnnetz deutlich erweitern und den ÖPNV günstiger machen, um den Autoverkehr zu reduzieren.",
        infoFacts: [
          "Die BSAG betreibt in Bremen ein Straßenbahnnetz von rund 78 km Streckenlänge.",
          "Viele Bremer Stadtteile sind schlecht an den ÖPNV angebunden.",
          "Bremen diskutiert seit Jahren eine Straßenbahnverbindung in den Bremer Norden."
        ]
      },
      {
        id: 512,
        topic: "Wohnungsbau",
        question: "Auch in Bremen steigen die Mieten und es fehlen bezahlbare Wohnungen. Was soll die Stadt tun?",
        statement: "Bremen sollte den sozialen Wohnungsbau massiv ausbauen und mindestens 30 % aller Neubauten als Sozialwohnungen vorsehen.",
        infoFacts: [
          "In Bremen fehlen schätzungsweise 15.000 bezahlbare Wohnungen.",
          "Der Bestand an Sozialwohnungen in Bremen sinkt seit Jahren.",
          "Die Durchschnittsmiete in Bremen liegt bei rund 9 Euro pro Quadratmeter — noch unter dem Bundesdurchschnitt."
        ]
      },
      {
        id: 513,
        topic: "Jugendkriminalität",
        question: "Bremen kämpft mit steigender Jugendkriminalität, besonders in benachteiligten Stadtteilen. Was hilft — Prävention oder härtere Strafen?",
        statement: "Bremen sollte vor allem auf Prävention, Sozialarbeit und Bildung setzen, um Jugendkriminalität zu bekämpfen, statt auf härtere Strafen.",
        infoFacts: [
          "Die Jugendkriminalität in Bremen ist in den letzten Jahren angestiegen.",
          "In Stadtteilen wie Gröpelingen und Osterholz-Tenever ist die Jugendarbeitslosigkeit besonders hoch.",
          "Bremen hat mehrere Präventionsprogramme aufgelegt, die aber als unterfinanziert gelten."
        ]
      },
      {
        id: 514,
        topic: "Offshore-Windenergie",
        question: "Bremerhaven ist ein zentraler Standort der Offshore-Windindustrie. Wie soll Bremen diese Chance nutzen?",
        statement: "Bremen und Bremerhaven sollten sich als führender Standort der Offshore-Windindustrie positionieren und dafür massiv in Infrastruktur investieren.",
        infoFacts: [
          "In Bremerhaven werden große Offshore-Windkraftanlagen gefertigt und verschifft.",
          "Die Offshore-Windindustrie beschäftigt in der Region mehrere tausend Menschen.",
          "Deutschland plant bis 2030 Offshore-Windkraftkapazitäten von 30 Gigawatt."
        ]
      },
      {
        id: 515,
        topic: "Sport & Gesellschaft",
        question: "Werder Bremen und der Sport spielen eine wichtige Rolle für die Stadtidentität. Sollte die Stadt Profisport stärker fördern oder sich auf Breitensport konzentrieren?",
        statement: "Bremen sollte die öffentlichen Mittel eher in Breitensport und Sportinfrastruktur investieren als in die Förderung von Profisportvereinen.",
        infoFacts: [
          "Das Weserstadion wurde mit öffentlichen Mitteln saniert — die Kosten trugen teilweise die Steuerzahler.",
          "Viele Bremer Sportvereine klagen über marode Sportstätten.",
          "Sport gilt als wichtiger Integrationsfaktor in sozial benachteiligten Stadtteilen."
        ]
      }
    ],
    federalQuestionIds: [1, 2, 3, 4, 6, 10, 11, 12, 13, 14, 17, 21, 27, 28, 30]
  },

  "hh": {
    name: "Hamburg",
    stateQuestions: [
      {
        id: 601,
        topic: "Hafenentwicklung",
        question: "Hamburgs Hafen verliert Marktanteile an Konkurrenten wie Rotterdam und Antwerpen. Wie soll sich der Hafen weiterentwickeln?",
        statement: "Hamburg muss massiv in die Modernisierung und Automatisierung des Hafens investieren, um international wettbewerbsfähig zu bleiben.",
        infoFacts: [
          "Der Hamburger Hafen ist der drittgrößte in Europa, verliert aber seit Jahren Marktanteile.",
          "Der Containerumschlag lag 2024 bei rund 7,5 Millionen TEU — unter dem Niveau von 2019.",
          "Der Einstieg von COSCO beim Containerterminal Tollerort sorgte 2022 für massive politische Kontroversen."
        ]
      },
      {
        id: 602,
        topic: "Elbvertiefung",
        question: "Die Elbvertiefung soll größeren Schiffen die Zufahrt ermöglichen, schadet aber dem Ökosystem. War die Elbvertiefung richtig?",
        statement: "Die Elbvertiefung war ein ökologischer Fehler und weitere Vertiefungen sollten ausgeschlossen werden.",
        infoFacts: [
          "Die neunte Elbvertiefung wurde 2022 nach jahrelangen Klagen abgeschlossen.",
          "Umweltverbände warnen vor zunehmender Verschlickung und ökologischen Schäden.",
          "Die Kosten für die letzte Elbvertiefung beliefen sich auf rund 800 Mio. Euro."
        ]
      },
      {
        id: 603,
        topic: "Wohnungsbau",
        question: "Hamburg baut im Bundesvergleich viel, aber die Mieten steigen trotzdem. Wie kann Hamburg mehr bezahlbaren Wohnraum schaffen?",
        statement: "Hamburg sollte den Drittelmix im Wohnungsbau beibehalten und den Anteil von Sozialwohnungen bei Neubauprojekten erhöhen.",
        infoFacts: [
          "Hamburg hat den Drittelmix eingeführt: Ein Drittel Sozialwohnungen, ein Drittel frei finanziert, ein Drittel Eigentum.",
          "Die Durchschnittsmiete bei Neuvermietung liegt bei rund 14 Euro pro Quadratmeter.",
          "Hamburg baut jährlich rund 10.000 neue Wohnungen — ein Spitzenwert im Bundesvergleich."
        ]
      },
      {
        id: 604,
        topic: "HafenCity",
        question: "Die HafenCity ist Europas größtes innerstädtisches Stadtentwicklungsprojekt. Ist es ein Erfolg oder ein Viertel für die Reichen?",
        statement: "Die HafenCity sollte mehr sozialen Wohnungsbau und öffentliche Einrichtungen für alle Hamburger bekommen.",
        infoFacts: [
          "Die HafenCity umfasst 157 Hektar und soll bis 2030 vollständig fertiggestellt sein.",
          "Die Elbphilharmonie in der HafenCity kostete 866 Mio. Euro statt der geplanten 77 Mio.",
          "Rund 15.000 Menschen leben bereits in der HafenCity — geplant sind 19.000."
        ]
      },
      {
        id: 605,
        topic: "Verkehr & A26",
        question: "Der Bau der A26-Ost (Hafenpassage) ist umstritten — Entlastung oder Umweltzerstörung? Braucht Hamburg mehr Autobahnen?",
        statement: "Hamburg sollte auf den Bau neuer Autobahnen verzichten und stattdessen den ÖPNV und Radverkehr massiv ausbauen.",
        infoFacts: [
          "Die A26-Ost soll den Hamburger Hafen besser anbinden — Kritiker befürchten mehr Verkehr und Umweltschäden.",
          "Hamburg investiert gleichzeitig Milliarden in den Ausbau der U- und S-Bahn.",
          "Die neue U5 soll die längste U-Bahn-Linie Hamburgs werden und östliche Stadtteile anbinden."
        ]
      },
      {
        id: 606,
        topic: "Kreuzfahrtschiffe & Umwelt",
        question: "Hamburg ist Europas Kreuzfahrthauptstadt, aber Kreuzfahrtschiffe verschmutzen die Luft stark. Wie soll Hamburg damit umgehen?",
        statement: "Hamburg sollte die Nutzung von Schweröl durch Kreuzfahrtschiffe im Hafen komplett verbieten und Landstrom für alle Schiffe verpflichtend machen.",
        infoFacts: [
          "Hamburg ist Deutschlands größter Kreuzfahrthafen mit über 200 Anläufen pro Jahr.",
          "Ein großes Kreuzfahrtschiff stößt so viel Feinstaub aus wie mehrere hunderttausend Autos.",
          "Zwei von drei Kreuzfahrtterminals in Hamburg haben inzwischen Landstromanschlüsse."
        ]
      },
      {
        id: 607,
        topic: "Rote Flora",
        question: "Die Rote Flora im Schanzenviertel ist seit über 30 Jahren besetzt und polarisiert. Wie soll Hamburg mit dem autonomen Zentrum umgehen?",
        statement: "Die Rote Flora sollte als Kulturzentrum legalisiert und in die Stadtgesellschaft integriert werden, statt sie zu räumen.",
        infoFacts: [
          "Die Rote Flora ist seit 1989 besetzt und gilt als Symbol der linken Szene Hamburgs.",
          "Die G20-Krawalle 2017 im Schanzenviertel sorgten bundesweit für Entsetzen.",
          "Die Stadt Hamburg ist Eigentümerin des Gebäudes, toleriert aber die Besetzung seit Jahrzehnten."
        ]
      },
      {
        id: 608,
        topic: "Bildung & Ganztag",
        question: "Hamburg hat eine einheitliche Schulstruktur mit Stadtteilschulen und Gymnasien. Funktioniert das Modell?",
        statement: "Hamburgs Zwei-Säulen-Modell aus Stadtteilschulen und Gymnasien sollte beibehalten und die Stadtteilschulen gestärkt werden.",
        infoFacts: [
          "Hamburg hat 2010 das gegliederte Schulsystem durch Stadtteilschulen und Gymnasien ersetzt.",
          "An Stadtteilschulen kann man ebenfalls das Abitur machen — nach 13 statt 12 Jahren.",
          "Hamburg investiert pro Schüler mehr als die meisten anderen Bundesländer."
        ]
      },
      {
        id: 609,
        topic: "Soziale Spaltung",
        question: "Hamburg ist eine reiche Stadt, hat aber extreme soziale Unterschiede zwischen Stadtteilen wie Blankenese und Billstedt. Was tun gegen die Spaltung?",
        statement: "Hamburg sollte deutlich mehr in benachteiligte Stadtteile investieren und durch soziale Durchmischung die Spaltung der Stadt verringern.",
        infoFacts: [
          "Das Durchschnittseinkommen in Hamburg-Blankenese ist fünfmal höher als in Billstedt.",
          "Die Kinderarmutsquote in manchen östlichen Stadtteilen liegt bei über 40 %.",
          "Hamburg hat mit dem Rahmenprogramm Integrierte Stadtteilentwicklung (RISE) ein Förderprogramm für benachteiligte Quartiere."
        ]
      },
      {
        id: 610,
        topic: "Klimaschutz",
        question: "Hamburg will bis 2045 klimaneutral werden. Ist das realistisch und welche Maßnahmen sind nötig?",
        statement: "Hamburg sollte sein Klimaziel auf 2035 vorziehen und dafür drastischere Maßnahmen ergreifen, auch gegen Widerstände.",
        infoFacts: [
          "Hamburg hat 2020 ein Klimaschutzgesetz verabschiedet — eines der ambitioniertesten in Deutschland.",
          "Der Hafen und die Industrie sind die größten CO₂-Emittenten der Stadt.",
          "Ab 2027 dürfen in Hamburger Neubauten keine Gasheizungen mehr eingebaut werden."
        ]
      },
      {
        id: 611,
        topic: "Kulturszene",
        question: "Hamburg hat eine vielfältige Kulturszene, die aber unter steigenden Kosten leidet. Wie soll die Stadt Kultur fördern?",
        statement: "Hamburg sollte die Kulturförderung deutlich erhöhen und günstige Ateliers und Proberäume für Künstler sichern.",
        infoFacts: [
          "Hamburg gibt jährlich über 400 Mio. Euro für Kultur aus — inklusive der Elbphilharmonie-Betriebskosten.",
          "Die freie Kulturszene klagt über steigende Mieten und fehlende Proberäume.",
          "Das Musical-Angebot in Hamburg ist das größte in Deutschland nach New York und London weltweit unter den Top-Standorten."
        ]
      },
      {
        id: 612,
        topic: "Fachkräfte & Zuwanderung",
        question: "Hamburg braucht dringend Fachkräfte in vielen Branchen. Wie soll die Stadt qualifizierte Arbeitskräfte gewinnen und halten?",
        statement: "Hamburg sollte gezielt internationale Fachkräfte anwerben und dafür schnellere Visa-Verfahren und bessere Willkommensstrukturen schaffen.",
        infoFacts: [
          "In Hamburg sind rund 80.000 Stellen unbesetzt — vor allem in Pflege, IT und Handwerk.",
          "Hamburg hat ein Welcome Center für internationale Fachkräfte eingerichtet.",
          "Die hohen Lebenshaltungskosten schrecken viele potenzielle Fachkräfte ab."
        ]
      },
      {
        id: 613,
        topic: "Hochwasserschutz",
        question: "Als Hafenstadt ist Hamburg besonders vom steigenden Meeresspiegel bedroht. Wie soll die Stadt sich schützen?",
        statement: "Hamburg muss den Hochwasserschutz massiv verstärken und langfristig mit einem Meeresspiegelanstieg von über einem Meter planen.",
        infoFacts: [
          "Die Sturmflut von 1962 tötete über 300 Menschen in Hamburg.",
          "Hamburg hat seitdem über 100 km Hochwasserschutzanlagen gebaut.",
          "Der Meeresspiegel könnte bis 2100 um bis zu einen Meter steigen — das hätte massive Auswirkungen auf Hamburg."
        ]
      },
      {
        id: 614,
        topic: "Obdachlosigkeit",
        question: "Die Zahl der Obdachlosen in Hamburg steigt. Welche Maßnahmen braucht es, um Menschen von der Straße zu holen?",
        statement: "Hamburg sollte ein Housing-First-Programm einführen und jedem Obdachlosen eine eigene Wohnung garantieren.",
        infoFacts: [
          "Schätzungen zufolge leben über 19.000 wohnungslose Menschen in Hamburg.",
          "Die Winternotprogramme bieten mehrere hundert Schlafplätze — reichen aber nicht aus.",
          "Ein Pilotprojekt für Housing First in Hamburg zeigt positive Ergebnisse."
        ]
      },
      {
        id: 615,
        topic: "Fahrradstadt",
        question: "Hamburg will Fahrradstadt werden und investiert in Radwege. Geht das schnell genug und auf Kosten der Autofahrer?",
        statement: "Hamburg sollte den Ausbau des Radwegenetzes beschleunigen, auch wenn dafür Parkplätze und Fahrspuren für Autos wegfallen.",
        infoFacts: [
          "Hamburg plant bis 2030 ein Radschnellwegenetz und den Ausbau auf 2.800 km Radwege.",
          "Der Radverkehrsanteil am Gesamtverkehr liegt in Hamburg bei etwa 22 %.",
          "Für den Ausbau der Velorouten müssen an vielen Stellen Parkplätze weichen."
        ]
      }
    ],
    federalQuestionIds: [1, 2, 3, 6, 9, 10, 12, 13, 14, 17, 19, 20, 21, 25, 28]
  },

  "he": {
    name: "Hessen",
    stateQuestions: [
      {
        id: 701,
        topic: "Finanzplatz Frankfurt",
        question: "Frankfurt ist nach dem Brexit noch wichtiger als europäischer Finanzplatz geworden. Wie soll Hessen diese Chance nutzen?",
        statement: "Hessen sollte den Finanzplatz Frankfurt durch gezielte Deregulierung und Steuervorteile stärker im internationalen Wettbewerb positionieren.",
        infoFacts: [
          "Frankfurt beherbergt die Europäische Zentralbank und über 200 Banken.",
          "Nach dem Brexit haben über 60 Finanzunternehmen Aktivitäten von London nach Frankfurt verlagert.",
          "Der Finanzsektor erwirtschaftet rund 20 % des hessischen BIP."
        ]
      },
      {
        id: 702,
        topic: "Flughafen Frankfurt",
        question: "Der Frankfurter Flughafen ist Deutschlands größter und ein zentraler Wirtschaftsfaktor. Wie sollen Wachstum und Lärmschutz in Einklang gebracht werden?",
        statement: "Ein striktes Nachtflugverbot am Frankfurter Flughafen ist wichtiger als wirtschaftliche Interessen der Luftfahrtbranche.",
        infoFacts: [
          "Der Frankfurter Flughafen fertigte 2024 rund 62 Millionen Passagiere ab.",
          "Über 80.000 Menschen arbeiten direkt am Flughafen — er ist die größte lokale Arbeitsstätte Deutschlands.",
          "Das Nachtflugverbot gilt von 23 bis 5 Uhr, wird aber wegen Verspätungen regelmäßig durchbrochen."
        ]
      },
      {
        id: 703,
        topic: "A49 & Dannenröder Wald",
        question: "Für den Bau der A49 wurde ein Teil des Dannenröder Waldes gerodet — gegen massiven Protest. Wie soll Hessen Infrastruktur und Umweltschutz abwägen?",
        statement: "Der Bau von Autobahnen durch Waldgebiete sollte in Zukunft grundsätzlich unterbleiben, auch wenn bestehende Planungen dies vorsehen.",
        infoFacts: [
          "Für die A49 wurden 2020 rund 27 Hektar des Dannenröder Waldes gerodet.",
          "Die Räumung des besetzten Waldes war einer der größten Polizeieinsätze Hessens.",
          "Die A49 soll Kassel und Gießen besser verbinden — Befürworter betonen die wirtschaftliche Bedeutung."
        ]
      },
      {
        id: 704,
        topic: "Rechtsextremismus",
        question: "Die Mordserie des NSU und der Mord an Walter Lübcke zeigen die Bedrohung durch Rechtsextremismus in Hessen. Was muss der Staat tun?",
        statement: "Hessen muss den Kampf gegen Rechtsextremismus verstärken und die Verstrickungen von Sicherheitsbehörden lückenlos aufklären.",
        infoFacts: [
          "Der Kasseler Regierungspräsident Walter Lübcke wurde 2019 von einem Rechtsextremisten ermordet.",
          "Im NSU-Komplex gab es Verbindungen zum hessischen Verfassungsschutz, die bis heute nicht vollständig aufgeklärt sind.",
          "Die NSU-2.0-Drohschreiben wurden teilweise von einem hessischen Polizeicomputer verschickt."
        ]
      },
      {
        id: 705,
        topic: "Rhein-Main-Verkehr",
        question: "Das Rhein-Main-Gebiet erstickt im Verkehr. Wie soll der Ballungsraum mobil bleiben, ohne die Umwelt weiter zu belasten?",
        statement: "Das Rhein-Main-Gebiet braucht einen massiven Ausbau des Schienenverkehrs und eine City-Maut für Frankfurt.",
        infoFacts: [
          "Im Rhein-Main-Gebiet pendeln täglich über 400.000 Menschen nach Frankfurt.",
          "Die S-Bahn Rhein-Main ist chronisch überlastet und unpünktlich.",
          "Der Fernbahntunnel Frankfurt soll ab 2032 den Eisenbahnknoten entlasten — Kosten: über 3,6 Mrd. Euro."
        ]
      },
      {
        id: 706,
        topic: "Ländliches Nordhessen",
        question: "Nordhessen fällt wirtschaftlich und demografisch hinter das Rhein-Main-Gebiet zurück. Wie kann die Landesregierung gegensteuern?",
        statement: "Hessen sollte Behörden und Investitionen gezielt nach Nordhessen verlagern, um die wirtschaftliche Kluft zum Rhein-Main-Gebiet zu schließen.",
        infoFacts: [
          "Das BIP pro Kopf in Nordhessen liegt deutlich unter dem des Rhein-Main-Gebiets.",
          "Kassel und Fulda versuchen sich als Wissenschafts- und Technologiestandorte zu profilieren.",
          "Die Bevölkerung in ländlichen Kreisen Nordhessens schrumpft seit Jahren."
        ]
      },
      {
        id: 707,
        topic: "Bildungspolitik",
        question: "Hessens Schulen leiden unter Lehrermangel und digitalen Rückständen. Was muss die neue Landesregierung in der Bildung verändern?",
        statement: "Hessen sollte mehr in die Digitalisierung der Schulen investieren und die Lehrerausbildung grundlegend reformieren.",
        infoFacts: [
          "In Hessen fehlen schätzungsweise 3.000 Lehrkräfte.",
          "Viele hessische Schulen haben noch kein flächendeckendes WLAN.",
          "Hessen liegt bei Bildungsausgaben pro Schüler unter dem Bundesdurchschnitt."
        ]
      },
      {
        id: 708,
        topic: "Schwarz-Rot",
        question: "Seit 2024 regiert in Hessen eine schwarz-rote Koalition. Kann diese Koalition die Probleme des Landes lösen?",
        statement: "Die schwarz-rote Koalition in Hessen sollte mutiger reformieren, statt sich auf den kleinsten gemeinsamen Nenner zu einigen.",
        infoFacts: [
          "Boris Rhein (CDU) ist seit 2022 Ministerpräsident von Hessen.",
          "Die CDU regiert Hessen seit 1999 ununterbrochen — erst mit FDP, dann mit Grünen, jetzt mit SPD.",
          "Hessen gehört zu den wirtschaftsstärksten Bundesländern mit einer Arbeitslosenquote unter 5 %."
        ]
      },
      {
        id: 709,
        topic: "Pharma & Chemie",
        question: "Die Pharma- und Chemiebranche ist zentral für Hessen. Wie soll das Land die Transformation dieser Schlüsselindustrien begleiten?",
        statement: "Hessen sollte die Pharma- und Chemieindustrie durch Forschungsförderung und Bürokratieabbau stärken, statt sie mit zusätzlichen Umweltauflagen zu belasten.",
        infoFacts: [
          "In Hessen haben Merck, Sanofi und viele weitere Pharma-Unternehmen ihren Sitz.",
          "Die chemisch-pharmazeutische Industrie beschäftigt in Hessen über 90.000 Menschen.",
          "Der Industriepark Höchst in Frankfurt ist einer der größten Chemiestandorte Europas."
        ]
      },
      {
        id: 710,
        topic: "Wohnungsnot Rhein-Main",
        question: "Im Rhein-Main-Gebiet sind Wohnungen kaum noch bezahlbar. Was muss Hessen gegen die Wohnungsnot tun?",
        statement: "Hessen sollte eine verbindliche Sozialwohnungsquote für alle Neubaugebiete im Rhein-Main-Gebiet einführen.",
        infoFacts: [
          "Die Mietpreise in Frankfurt sind seit 2015 um über 30 % gestiegen.",
          "In Hessen fehlen schätzungsweise 80.000 bezahlbare Wohnungen.",
          "Der Bestand an Sozialwohnungen ist seit 2010 um ein Drittel gesunken."
        ]
      },
      {
        id: 711,
        topic: "Rechenzentren",
        question: "Frankfurt ist der größte Internet-Knotenpunkt Europas und Standort vieler Rechenzentren. Wie soll Hessen mit dem Boom umgehen?",
        statement: "Hessen sollte die Ansiedlung neuer Rechenzentren stärker regulieren, um den enormen Strom- und Wasserverbrauch zu begrenzen.",
        infoFacts: [
          "In und um Frankfurt stehen über 70 Rechenzentren — der DE-CIX ist der weltweit größte Internet-Knotenpunkt.",
          "Rechenzentren verbrauchen in Frankfurt bereits mehr Strom als alle privaten Haushalte zusammen.",
          "Die Abwärme der Rechenzentren soll künftig zum Heizen von Wohnungen genutzt werden."
        ]
      },
      {
        id: 712,
        topic: "Naturschutz & Landwirtschaft",
        question: "Hessen hat große Wald- und Naturschutzgebiete, aber die Landwirtschaft steht unter Druck. Wie soll das Gleichgewicht aussehen?",
        statement: "Hessen sollte den Anteil ökologischer Landwirtschaft verdoppeln und Naturschutzgebiete erweitern.",
        infoFacts: [
          "Rund 42 % der Landesfläche Hessens sind bewaldet — einer der höchsten Werte bundesweit.",
          "Nur etwa 15 % der landwirtschaftlichen Fläche in Hessen werden ökologisch bewirtschaftet.",
          "Der Nationalpark Kellerwald-Edersee ist UNESCO-Weltnaturerbe."
        ]
      },
      {
        id: 713,
        topic: "Integration & Zusammenleben",
        question: "Hessen hat einen hohen Anteil an Menschen mit Migrationshintergrund, besonders im Rhein-Main-Gebiet. Wie gelingt gutes Zusammenleben?",
        statement: "Hessen sollte mehr in Integrationsprojekte und interkulturelle Begegnung investieren, um den gesellschaftlichen Zusammenhalt zu stärken.",
        infoFacts: [
          "In Frankfurt haben über 50 % der Einwohner einen Migrationshintergrund.",
          "Hessen hat als eines der ersten Bundesländer ein Integrationsministerium eingerichtet.",
          "Die Integrationsleistung variiert stark zwischen den Ballungszentren und dem ländlichen Raum."
        ]
      },
      {
        id: 714,
        topic: "Sicherheit & Polizei",
        question: "Die rechtsextremen Chatgruppen bei der hessischen Polizei haben das Vertrauen erschüttert. Wie soll Hessen seine Sicherheitsbehörden reformieren?",
        statement: "Hessen braucht einen unabhängigen Polizeibeauftragten und eine unabhängige Beschwerdestelle, um Fehlverhalten bei der Polizei aufzuklären.",
        infoFacts: [
          "Hessische Polizisten tauschten in Chatgruppen rechtsextreme Inhalte — der Skandal führte zu mehreren Strafverfahren.",
          "Hessen hat 2023 einen Polizeibeauftragten eingeführt.",
          "Die hessische Polizei hat rund 22.000 Beschäftigte."
        ]
      },
      {
        id: 715,
        topic: "ÖPNV & Deutschlandticket",
        question: "Der ÖPNV in Hessen ist im Rhein-Main-Gebiet eng getaktet, auf dem Land aber dünn. Wie soll das Land den öffentlichen Verkehr verbessern?",
        statement: "Hessen sollte den ÖPNV auf dem Land durch flexible Rufbusse und Bürgerbusse ausbauen und das Angebot im Rhein-Main-Gebiet verdichten.",
        infoFacts: [
          "Der RMV ist einer der größten Verkehrsverbünde Deutschlands mit über 2 Millionen Fahrgästen täglich.",
          "In ländlichen Kreisen wie dem Werra-Meißner-Kreis fahren Busse oft nur im Stundentakt.",
          "Hessen fördert Rufbus-Konzepte als Ergänzung zum regulären ÖPNV."
        ]
      }
    ],
    federalQuestionIds: [1, 2, 3, 6, 9, 10, 13, 14, 17, 19, 20, 25, 26, 27, 30]
  },

  "mv": {
    name: "Mecklenburg-Vorpommern",
    stateQuestions: [
      {
        id: 801,
        topic: "Tourismus Ostsee",
        question: "Mecklenburg-Vorpommern lebt stark vom Tourismus. Wie kann der Tourismus nachhaltig gestaltet werden, ohne die Natur zu zerstören?",
        statement: "Mecklenburg-Vorpommern sollte den Tourismus stärker regulieren und Besucherobergrenzen für sensible Küsten- und Naturgebiete einführen.",
        infoFacts: [
          "MV verzeichnet jährlich über 34 Millionen Übernachtungen — Tourismus ist der wichtigste Wirtschaftszweig.",
          "Rügen und Usedom gehören zu den beliebtesten Urlaubszielen Deutschlands.",
          "Overtourism in der Hochsaison belastet Infrastruktur und Natur an der Ostseeküste."
        ]
      },
      {
        id: 802,
        topic: "LNG-Terminal",
        question: "Das LNG-Terminal in Lubmin soll die Energieversorgung sichern, ist aber umstritten. War der beschleunigte Bau richtig?",
        statement: "Der Bau des LNG-Terminals in Lubmin war richtig, aber die langfristige Nutzung fossiler Energie muss zeitlich begrenzt werden.",
        infoFacts: [
          "Das LNG-Terminal Lubmin ging 2023 in Betrieb — eines der schnellsten Infrastrukturprojekte Deutschlands.",
          "Umweltverbände kritisieren die mangelnde Umweltverträglichkeitsprüfung.",
          "LNG soll als Brückentechnologie dienen, bis ausreichend erneuerbare Energien verfügbar sind."
        ]
      },
      {
        id: 803,
        topic: "Abwanderung",
        question: "Mecklenburg-Vorpommern verliert seit der Wende kontinuierlich Einwohner, besonders junge Menschen. Was kann das Land tun?",
        statement: "MV muss attraktiver für junge Menschen werden — durch bessere Löhne, schnelles Internet und kulturelle Angebote.",
        infoFacts: [
          "MV hat seit 1990 rund 20 % seiner Bevölkerung verloren.",
          "Besonders junge Frauen ziehen weg — das Geschlechterverhältnis ist in manchen Regionen stark unausgeglichen.",
          "Einige Küstenstädte wie Rostock und Greifswald verzeichnen aber wieder Zuzug."
        ]
      },
      {
        id: 804,
        topic: "Nord Stream",
        question: "Die Nord-Stream-Pipelines wurden durch Mecklenburg-Vorpommern geführt und die Klimastiftung MV war eng mit Russland verbunden. Was muss aufgeklärt werden?",
        statement: "Die Rolle der Landesregierung bei Nord Stream und die Klimastiftung MV müssen vollständig und unabhängig aufgeklärt werden.",
        infoFacts: [
          "Die Klimastiftung MV wurde 2021 gegründet, um die Fertigstellung von Nord Stream 2 zu unterstützen.",
          "Ex-Ministerpräsidentin Schwesig steht wegen ihrer Russland-Nähe in der Kritik.",
          "Die Stiftung wurde nach dem russischen Angriff auf die Ukraine aufgelöst."
        ]
      },
      {
        id: 805,
        topic: "Landwirtschaft",
        question: "Die Landwirtschaft ist prägend für MV, aber viele Betriebe kämpfen ums Überleben. Wie soll das Land seine Bauern unterstützen?",
        statement: "MV sollte die ökologische Landwirtschaft stärker fördern und Großagrarunternehmen stärker regulieren.",
        infoFacts: [
          "MV hat die größte durchschnittliche Betriebsgröße aller Bundesländer — ein Erbe der LPG-Nachfolgebetriebe.",
          "Ein Großteil der landwirtschaftlichen Fläche gehört Investoren, nicht ortsansässigen Bauern.",
          "Nur rund 13 % der Fläche in MV werden ökologisch bewirtschaftet."
        ]
      },
      {
        id: 806,
        topic: "Marine & Bundeswehr",
        question: "MV beherbergt wichtige Marine- und Bundeswehrstandorte. Welche Rolle soll das Militär für die wirtschaftliche Entwicklung des Landes spielen?",
        statement: "Die Bundeswehr-Standorte in MV sollten ausgebaut und als Wirtschaftsfaktor für die Region gestärkt werden.",
        infoFacts: [
          "Rostock ist Heimathafen der Deutschen Marine und beherbergt das Marinekommando.",
          "In MV sind mehrere tausend Soldaten stationiert — die Bundeswehr ist ein wichtiger Arbeitgeber.",
          "Mit der Zeitenwende werden zusätzliche Investitionen in militärische Infrastruktur erwartet."
        ]
      },
      {
        id: 807,
        topic: "Rechtsextremismus",
        question: "MV hat Probleme mit rechtsextremen Strukturen, besonders in ländlichen Regionen. Was muss das Land dagegen tun?",
        statement: "MV muss die Zivilgesellschaft in ländlichen Regionen stärker fördern und rechtsextreme Netzwerke konsequenter bekämpfen.",
        infoFacts: [
          "MV hat gemessen an der Bevölkerung eine der höchsten Raten rechtsextremistischer Straftaten.",
          "In einigen ländlichen Regionen haben Rechtsextreme gezielt Immobilien aufgekauft.",
          "Das Land fördert Demokratieprojekte, aber die Mittel werden als unzureichend kritisiert."
        ]
      },
      {
        id: 808,
        topic: "Gesundheitsversorgung",
        question: "Die medizinische Versorgung auf dem Land in MV wird immer dünner. Wie soll das Land gegensteuern?",
        statement: "MV sollte innovative Modelle wie Gemeindeschwester-Konzepte und Telemedizin flächendeckend einführen, um die Gesundheitsversorgung auf dem Land zu sichern.",
        infoFacts: [
          "In manchen Landkreisen MVs kommt ein Hausarzt auf über 2.000 Einwohner.",
          "Das Durchschnittsalter der niedergelassenen Ärzte in MV liegt bei über 55 Jahren.",
          "MV hat die AGnES-Gemeindeschwester als Modell für die ländliche Versorgung entwickelt."
        ]
      },
      {
        id: 809,
        topic: "Universität Greifswald & Rostock",
        question: "Die Universitäten in Greifswald und Rostock sind wichtige Ankerpunkte für die Region. Wie können sie gestärkt werden?",
        statement: "MV sollte seine Universitäten als Innovationsmotoren stärken und Anreize für Absolventen schaffen, im Land zu bleiben.",
        infoFacts: [
          "Die Universität Greifswald wurde 1456 gegründet und gehört zu den ältesten Europas.",
          "Viele Absolventen verlassen nach dem Studium das Bundesland mangels attraktiver Arbeitgeber.",
          "Die Universitätsmedizin Greifswald ist einer der größten Arbeitgeber in Vorpommern."
        ]
      },
      {
        id: 810,
        topic: "Verkehrsinfrastruktur",
        question: "Die Verkehrsanbindung in MV ist oft mangelhaft — langsame Bahnstrecken und fehlende Autobahnanbindung im Osten. Was muss passieren?",
        statement: "Der Bund sollte deutlich mehr in die Verkehrsinfrastruktur von MV investieren, um die Region besser anzubinden.",
        infoFacts: [
          "Die Bahnstrecke Berlin-Stralsund ist teilweise noch nicht elektrifiziert.",
          "Vorpommern hat keine direkte Autobahnanbindung nach Osten (Polen).",
          "Die Fahrtzeit von Greifswald nach Berlin beträgt mit der Bahn über 3 Stunden."
        ]
      },
      {
        id: 811,
        topic: "Löhne & Wirtschaft",
        question: "MV hat die niedrigsten Löhne aller Bundesländer. Wie kann das Lohnniveau angehoben werden?",
        statement: "MV braucht eine gezielte Wirtschaftsförderung für gut bezahlte Industriearbeitsplätze, um das Lohnniveau anzuheben.",
        infoFacts: [
          "Der Durchschnittslohn in MV liegt rund 25 % unter dem Bundesdurchschnitt.",
          "Die Wirtschaftsstruktur ist geprägt von Tourismus, Landwirtschaft und öffentlichem Dienst — alles eher niedrig entlohnte Branchen.",
          "Die Arbeitslosenquote in MV liegt mit rund 7,5 % über dem Bundesdurchschnitt."
        ]
      },
      {
        id: 812,
        topic: "Windenergie Offshore",
        question: "Vor der Küste MVs entstehen große Offshore-Windparks. Profitiert das Land ausreichend davon?",
        statement: "MV sollte stärker von der Offshore-Windenergie vor seiner Küste profitieren — durch lokale Wertschöpfung, Arbeitsplätze und günstigere Strompreise.",
        infoFacts: [
          "Mehrere große Offshore-Windparks befinden sich in der Ostsee vor MV.",
          "Der Hafen Mukran auf Rügen dient als Basis für den Offshore-Windausbau.",
          "Die Wertschöpfung aus der Offshore-Windenergie kommt bisher vor allem westdeutschen Unternehmen zugute."
        ]
      },
      {
        id: 813,
        topic: "Kinderbetreuung",
        question: "MV hat eine gute Kita-Versorgung — ein Erbe der DDR. Wie kann dieses System erhalten und verbessert werden?",
        statement: "MV sollte die gebührenfreie Kinderbetreuung beibehalten und die Qualität durch kleinere Gruppen und bessere Bezahlung der Erzieher verbessern.",
        infoFacts: [
          "MV hat eine der höchsten Betreuungsquoten für unter Dreijährige in Deutschland.",
          "Die Kita-Betreuung ist in MV weitgehend gebührenfrei.",
          "Der Fachkräftemangel bei Erzieherinnen und Erziehern wird zunehmend zum Problem."
        ]
      },
      {
        id: 814,
        topic: "Digitalisierung",
        question: "In vielen Teilen MVs gibt es kein schnelles Internet. Wie soll die Digitalisierung im ländlichen Raum vorangebracht werden?",
        statement: "MV sollte den Glasfaserausbau bis in jedes Dorf als höchste Infrastrukturpriorität behandeln.",
        infoFacts: [
          "Die Glasfaserversorgung in MV liegt unter dem ohnehin niedrigen Bundesdurchschnitt.",
          "Viele Unternehmen in MV klagen über zu langsames Internet als Standortnachteil.",
          "Der Bund fördert den Breitbandausbau mit Milliarden — die Umsetzung kommt aber nur langsam voran."
        ]
      },
      {
        id: 815,
        topic: "Kultur & Identität",
        question: "MV pflegt ein eigenes kulturelles Erbe — von der Hanse-Tradition bis zur Plattdeutschen Sprache. Wie soll diese Identität bewahrt werden?",
        statement: "MV sollte regionale Kultur und die plattdeutsche Sprache stärker in Schulen und im öffentlichen Leben fördern.",
        infoFacts: [
          "Plattdeutsch wird in MV noch von etwa 15 % der Bevölkerung aktiv gesprochen.",
          "Die Hansestadt Stralsund und Wismar sind UNESCO-Weltkulturerbe.",
          "Kulturelle Einrichtungen im ländlichen Raum schließen mangels Finanzierung und Publikum."
        ]
      }
    ],
    federalQuestionIds: [1, 2, 3, 4, 7, 9, 12, 13, 15, 16, 17, 21, 27, 29, 30]
  },
  "ni": {
    name: "Niedersachsen",
    stateQuestions: [
      {
        id: 901,
        topic: "VW-Krise",
        question: "Volkswagen steckt in einer schweren Transformationskrise mit Stellenabbau und Werksschließungen. Wie sollte die niedersächsische Politik mit der VW-Krise umgehen?",
        statement: "Das Land Niedersachsen sollte als VW-Großaktionär stärker in die Unternehmensstrategie eingreifen, um Standorte und Arbeitsplätze zu sichern.",
        infoFacts: [
          "Das Land Niedersachsen hält 20 % der VW-Stimmrechte und hat zwei Sitze im Aufsichtsrat.",
          "VW beschäftigt in Niedersachsen rund 120.000 Menschen an sechs Standorten.",
          "Das VW-Gesetz gibt dem Land ein Vetorecht bei wichtigen Unternehmensentscheidungen."
        ]
      },
      {
        id: 902,
        topic: "Automobil-Transformation",
        question: "Die Automobilzulieferer-Industrie in Niedersachsen steht vor einem massiven Umbruch durch die Elektromobilität. Wie sollte der Wandel gestaltet werden?",
        statement: "Der Staat sollte die Transformation der Automobilzulieferer aktiv mit Förderprogrammen und Umschulungsmaßnahmen begleiten, statt sie dem Markt zu überlassen.",
        infoFacts: [
          "Niedersachsen ist mit über 200.000 Beschäftigten das wichtigste Automobil-Bundesland Deutschlands.",
          "Viele Zulieferer stellen Teile her, die bei Elektroautos nicht mehr gebraucht werden (Getriebe, Auspuff).",
          "Die Continental AG in Hannover hat bereits tausende Stellen in Niedersachsen abgebaut."
        ]
      },
      {
        id: 903,
        topic: "Landwirtschaft",
        question: "Niedersachsen ist Deutschlands Agrarland Nr. 1 mit intensiver Tierhaltung. Sollte die Massentierhaltung stärker reguliert werden?",
        statement: "Die intensive Tierhaltung in Niedersachsen sollte deutlich reduziert und durch strengere Auflagen für mehr Tierwohl ersetzt werden.",
        infoFacts: [
          "Niedersachsen ist mit Abstand Deutschlands größter Agrarproduzent und hält rund ein Drittel aller Nutztiere.",
          "Die hohe Güllebelastung führt in vielen Regionen zu überhöhten Nitratwerten im Grundwasser.",
          "Rund 40.000 landwirtschaftliche Betriebe gibt es in Niedersachsen, die Zahl sinkt stetig."
        ]
      },
      {
        id: 904,
        topic: "Küstenschutz",
        question: "Der steigende Meeresspiegel bedroht die niedersächsische Nordseeküste. Wie viel sollte in den Küstenschutz investiert werden?",
        statement: "Der Küstenschutz muss massiv ausgebaut werden, auch wenn das hohe Milliarden-Investitionen erfordert und in Naturräume eingreift.",
        infoFacts: [
          "Niedersachsen hat rund 600 Kilometer Deichlinie an der Nordseeküste.",
          "Bei einem Meeresspiegelanstieg von einem Meter wären weite Teile der Küstenregion überflutet.",
          "Der Küstenschutz kostet Niedersachsen bereits heute über 100 Millionen Euro jährlich."
        ]
      },
      {
        id: 905,
        topic: "Offshore-Windenergie",
        question: "Vor der niedersächsischen Küste entstehen immer mehr Offshore-Windparks. Sollte der Ausbau weiter beschleunigt werden?",
        statement: "Der Offshore-Windausbau in der Nordsee sollte maximale Priorität erhalten, auch wenn er Naturschutz und Fischerei einschränkt.",
        infoFacts: [
          "In der deutschen Nordsee sind bereits über 1.500 Offshore-Windkraftanlagen installiert.",
          "Die Bundesregierung plant bis 2030 eine Offshore-Kapazität von 30 Gigawatt.",
          "Cuxhaven und Emden sind zentrale Produktions- und Verschiffungshäfen für Offshore-Windanlagen."
        ]
      },
      {
        id: 906,
        topic: "Ländlicher Raum",
        question: "Viele ländliche Regionen in Niedersachsen kämpfen mit Ärztemangel, schlechter Internetversorgung und fehlender Infrastruktur. Was sollte getan werden?",
        statement: "Der Staat muss deutlich mehr Geld in die Infrastruktur ländlicher Regionen investieren, um gleichwertige Lebensverhältnisse herzustellen.",
        infoFacts: [
          "In vielen Landkreisen Niedersachsens gibt es weniger als 50 Hausärzte pro 100.000 Einwohner.",
          "Rund 10 % der Haushalte in ländlichen Gebieten haben keinen schnellen Breitband-Internetzugang.",
          "Das Nahverkehrsangebot auf dem Land ist oft auf wenige Busverbindungen am Tag beschränkt."
        ]
      },
      {
        id: 907,
        topic: "Wolfsmanagement",
        question: "In Niedersachsen leben inzwischen über 50 Wolfsrudel. Wie sollte mit dem Wolf umgegangen werden?",
        statement: "Der Wolf sollte in Niedersachsen aktiv bejagt werden dürfen, wenn er Nutztiere reißt, auch wenn er streng geschützt ist.",
        infoFacts: [
          "Niedersachsen hat neben Brandenburg die meisten Wölfe in Deutschland mit über 50 Rudeln.",
          "Jährlich werden in Niedersachsen mehrere hundert Nutztierrisse durch Wölfe gemeldet.",
          "Die EU-Naturschutzrichtlinie schützt den Wolf streng, eine Lockerung wird seit Jahren diskutiert."
        ]
      },
      {
        id: 908,
        topic: "Bundeswehr-Standorte",
        question: "Niedersachsen ist eines der wichtigsten Bundeswehr-Länder mit großen Standorten. Sollte die militärische Präsenz weiter ausgebaut werden?",
        statement: "Die Bundeswehr-Standorte in Niedersachsen sollten massiv ausgebaut werden, um der veränderten Sicherheitslage in Europa gerecht zu werden.",
        infoFacts: [
          "Niedersachsen beherbergt mit Munster, Bergen und Faßberg einige der größten Truppenübungsplätze Europas.",
          "Rund 40.000 Soldatinnen und Soldaten sind in Niedersachsen stationiert.",
          "Die Bundeswehr ist in vielen ländlichen Regionen Niedersachsens einer der wichtigsten Arbeitgeber."
        ]
      },
      {
        id: 909,
        topic: "Hannover Messe & Innovation",
        question: "Die Hannover Messe ist die weltgrößte Industriemesse. Reicht Niedersachsen als Innovationsstandort aus oder braucht es mehr Förderung?",
        statement: "Niedersachsen sollte massiv in Forschung und Technologie-Startups investieren, um über die traditionelle Industrie hinaus ein Innovationsland zu werden.",
        infoFacts: [
          "Die Hannover Messe zieht jährlich über 100.000 Besucher aus aller Welt an.",
          "Niedersachsen gibt im Vergleich zu Bayern oder Baden-Württemberg weniger pro Kopf für Forschung und Entwicklung aus.",
          "Die TU Braunschweig und die Leibniz Universität Hannover gehören zu den forschungsstärksten Hochschulen Deutschlands."
        ]
      },
      {
        id: 910,
        topic: "Energiewende im Nordwesten",
        question: "Der Nordwesten Niedersachsens soll zum Drehkreuz der Wasserstoffwirtschaft werden. Ist das realistisch und sinnvoll?",
        statement: "Niedersachsen sollte sich als Zentrum der grünen Wasserstoffwirtschaft positionieren, auch wenn die Technologie noch nicht ausgereift ist.",
        infoFacts: [
          "In Wilhelmshaven entsteht ein LNG- und Wasserstoff-Terminal für die Energieversorgung.",
          "Die geplante Wasserstoff-Pipeline soll Niedersachsen mit den Industriezentren in NRW verbinden.",
          "Die Region um Emden und Wilhelmshaven verfügt über ideale Voraussetzungen für die Wasserstoffproduktion durch Windenergie."
        ]
      },
      {
        id: 911,
        topic: "Bildungspolitik",
        question: "Niedersachsen hat das Abitur nach 13 Jahren (G9) beibehalten. Ist das niedersächsische Schulsystem zukunftsfähig?",
        statement: "Niedersachsen sollte mehr Geld in Schulen und Lehrkräfte investieren, statt an der Dreigliedrigkeit des Schulsystems festzuhalten.",
        infoFacts: [
          "Niedersachsen hat als eines von wenigen Ländern konsequent an G9 (Abitur nach 13 Jahren) festgehalten.",
          "Der Lehrkräftemangel trifft ländliche Regionen in Niedersachsen besonders stark.",
          "Die Gesamtschule hat in Niedersachsen neben Gymnasium, Haupt- und Realschule einen festen Platz."
        ]
      },
      {
        id: 912,
        topic: "Hafenwirtschaft",
        question: "Die niedersächsischen Seehäfen (Wilhelmshaven, Emden, Brake) stehen im Wettbewerb mit Hamburg und Rotterdam. Brauchen sie mehr Unterstützung?",
        statement: "Die niedersächsischen Seehäfen sollten stärker ausgebaut und vom Bund besser gefördert werden, um im internationalen Wettbewerb bestehen zu können.",
        infoFacts: [
          "Der JadeWeserPort in Wilhelmshaven ist Deutschlands einziger Tiefwasserhafen für große Containerschiffe.",
          "Über Emden werden jährlich über zwei Millionen Fahrzeuge verschifft.",
          "Die Hafenwirtschaft sichert in Niedersachsen direkt und indirekt rund 50.000 Arbeitsplätze."
        ]
      },
      {
        id: 913,
        topic: "Moor- und Naturschutz",
        question: "Niedersachsen hat die größten Moorflächen Deutschlands. Sollte die Wiedervernässung von Mooren Vorrang vor der landwirtschaftlichen Nutzung haben?",
        statement: "Die Wiedervernässung der niedersächsischen Moore sollte konsequent vorangetrieben werden, auch wenn landwirtschaftliche Flächen dafür aufgegeben werden müssen.",
        infoFacts: [
          "Niedersachsen besitzt rund 70 % aller deutschen Hochmoorflächen.",
          "Entwässerte Moore stoßen große Mengen CO₂ aus und tragen erheblich zum Klimawandel bei.",
          "Die Wiedervernässung kollidiert mit der intensiven Grünlandnutzung durch die Landwirtschaft."
        ]
      },
      {
        id: 914,
        topic: "Migration im ländlichen Raum",
        question: "Geflüchtete werden in Niedersachsen auch auf kleine Gemeinden verteilt. Wie sollte die Verteilung und Integration auf dem Land organisiert werden?",
        statement: "Geflüchtete sollten verstärkt in ländlichen Regionen untergebracht werden, um die Großstädte zu entlasten und den demografischen Wandel auf dem Land abzumildern.",
        infoFacts: [
          "Kleine Gemeinden klagen häufig über fehlende Integrationsangebote und überlastete Verwaltungen.",
          "In ländlichen Regionen gibt es oft ungenutzte Wohnungen, aber wenig Infrastruktur für Integration.",
          "Der Königsteiner Schlüssel verteilt Geflüchtete nach Steueraufkommen und Einwohnerzahl auf die Kommunen."
        ]
      },
      {
        id: 915,
        topic: "Tourismusförderung",
        question: "Die ostfriesischen Inseln und die Lüneburger Heide sind beliebte Urlaubsziele. Braucht Niedersachsen eine stärkere Tourismusstrategie?",
        statement: "Der Tourismus in Niedersachsen sollte stärker gefördert werden, auch wenn das zu einer höheren Belastung von Natur und Infrastruktur führen kann.",
        infoFacts: [
          "Niedersachsen verzeichnet jährlich über 45 Millionen Übernachtungen.",
          "Die ostfriesischen Inseln sind nahezu ganzjährig ausgebucht, was Einheimische vor Probleme stellt.",
          "Das Wattenmeer-Weltnaturerbe ist Niedersachsens wichtigstes touristisches Aushängeschild."
        ]
      }
    ],
    federalQuestionIds: [1, 2, 3, 4, 5, 6, 7, 9, 10, 12, 14, 17, 20, 22, 25]
  },

  "nw": {
    name: "Nordrhein-Westfalen",
    stateQuestions: [
      {
        id: 1001,
        topic: "Kohleausstieg Rheinland",
        question: "Der Kohleausstieg im Rheinischen Revier soll idealerweise bis 2030 erfolgen. Ist das realistisch und sozialverträglich?",
        statement: "Der Kohleausstieg im Rheinland sollte bis 2030 konsequent umgesetzt werden, auch wenn einzelne Dörfer und Arbeitsplätze davon betroffen sind.",
        infoFacts: [
          "Im Rheinischen Revier betreibt RWE noch drei große Braunkohlekraftwerke.",
          "Rund 9.000 Menschen arbeiten direkt im rheinischen Braunkohletagebau.",
          "Die Bundesregierung und NRW haben sich auf einen Kohleausstieg idealerweise 2030 geeinigt."
        ]
      },
      {
        id: 1002,
        topic: "Strukturwandel Ruhrgebiet",
        question: "Das Ruhrgebiet befindet sich seit Jahrzehnten im Strukturwandel. Werden die Milliarden-Investitionen richtig eingesetzt?",
        statement: "Der Strukturwandel im Ruhrgebiet sollte stärker durch staatliche Investitionen in Bildung und Technologie vorangetrieben werden, statt auf private Investoren zu warten.",
        infoFacts: [
          "Das Ruhrgebiet hat mit rund 5,1 Millionen Einwohnern die höchste Bevölkerungsdichte Deutschlands.",
          "Die Arbeitslosenquote im Ruhrgebiet liegt deutlich über dem NRW-Durchschnitt.",
          "Seit 2018 ist auch die letzte Steinkohlezeche (Prosper-Haniel in Bottrop) geschlossen."
        ]
      },
      {
        id: 1003,
        topic: "Lützerath & Klimaprotest",
        question: "Die Räumung von Lützerath für den Braunkohletagebau hat bundesweit Proteste ausgelöst. Wie sollte NRW mit Konflikten zwischen Klimaschutz und Energieversorgung umgehen?",
        statement: "Beim Konflikt zwischen Klimaschutz und Energieversorgung sollte der Klimaschutz Vorrang haben, auch wenn das kurzfristig höhere Energiekosten bedeutet.",
        infoFacts: [
          "Lützerath wurde Anfang 2023 geräumt und abgerissen, um den Tagebau Garzweiler zu erweitern.",
          "Unter Lützerath lagern etwa 280 Millionen Tonnen Braunkohle.",
          "Klimaschützer argumentieren, dass die Kohle unter Lützerath für die Einhaltung des 1,5-Grad-Ziels im Boden bleiben muss."
        ]
      },
      {
        id: 1004,
        topic: "Integration & Zusammenleben",
        question: "NRW hat den höchsten Anteil an Menschen mit Migrationsgeschichte in Deutschland. Wie gelingt das Zusammenleben besser?",
        statement: "NRW sollte mehr Geld in Sprachförderung und Integration investieren, statt auf Verschärfung der Zuwanderungsregeln zu setzen.",
        infoFacts: [
          "Über ein Drittel der NRW-Bevölkerung hat eine Migrationsgeschichte.",
          "In Städten wie Duisburg oder Gelsenkirchen liegt der Anteil bei über 40 %.",
          "NRW gibt jährlich über zwei Milliarden Euro für Integration und Flüchtlingsunterbringung aus."
        ]
      },
      {
        id: 1005,
        topic: "Verkehrschaos & Infrastruktur",
        question: "NRW hat die meisten Staus in Deutschland, marode Brücken und überlastete Autobahnen. Wie kann die Verkehrsinfrastruktur gerettet werden?",
        statement: "NRW braucht einen massiven Investitionsplan für Straßen, Brücken und Schienen, finanziert durch eine Pkw-Maut oder höhere Kfz-Steuer.",
        infoFacts: [
          "Die marode Rahmedetalbrücke an der A45 musste 2021 gesperrt werden und verursachte monatelange Umleitungen.",
          "NRW hat über 2.200 Kilometer Autobahn und das dichteste Straßennetz Deutschlands.",
          "Rund ein Drittel aller Autobahnbrücken in NRW gelten als sanierungsbedürftig."
        ]
      },
      {
        id: 1006,
        topic: "Bildung & Schulpolitik",
        question: "NRW belegt bei Bildungsvergleichen regelmäßig hintere Plätze. Wie kann das Bildungssystem verbessert werden?",
        statement: "NRW sollte deutlich mehr Lehrkräfte einstellen und die Grundschulen besser ausstatten, auch wenn das massive Mehrausgaben bedeutet.",
        infoFacts: [
          "An NRW-Grundschulen fehlen laut Gewerkschaft über 10.000 Lehrkräfte.",
          "Im IQB-Bildungstrend schneiden NRW-Viertklässler in Mathematik und Deutsch unterdurchschnittlich ab.",
          "NRW hat die meisten Schülerinnen und Schüler aller Bundesländer: rund 2,5 Millionen."
        ]
      },
      {
        id: 1007,
        topic: "Innere Sicherheit",
        question: "Clan-Kriminalität und organisierte Kriminalität sind in NRW ein besonderes Problem. Wie sollte der Staat dagegen vorgehen?",
        statement: "Der Staat sollte mit aller Härte gegen Clan-Kriminalität vorgehen, einschließlich konsequenter Vermögensabschöpfung und Abschiebung straffälliger Clan-Mitglieder.",
        infoFacts: [
          "Das NRW-Lagebild erfasst jährlich mehrere tausend Straftaten im Bereich der Clan-Kriminalität.",
          "Essen, Duisburg und Gelsenkirchen gelten als Schwerpunkte der Clan-Kriminalität in NRW.",
          "Die Polizei NRW setzt seit 2018 auf eine Strategie der Nadelstiche mit häufigen Razzien und Kontrollen."
        ]
      },
      {
        id: 1008,
        topic: "Rhein als Wasserstraße",
        question: "Der Rhein ist Europas wichtigste Wasserstraße, wird aber durch Niedrigwasser und Klimawandel zunehmend unzuverlässig. Was muss geschehen?",
        statement: "Die Rhein-Infrastruktur muss klimafest gemacht werden, auch wenn das milliardenschwere Investitionen in Flussvertiefung und Schleusen erfordert.",
        infoFacts: [
          "Über 80 % des deutschen Binnenschiffgüterverkehrs laufen über den Rhein.",
          "Das Niedrigwasser 2022 verursachte Milliardenschäden für die Industrie an Rhein und Ruhr.",
          "Die chemische und Stahlindustrie in NRW ist auf den Rhein als Transportweg angewiesen."
        ]
      },
      {
        id: 1009,
        topic: "Wohnungsnot in Ballungsräumen",
        question: "In Köln, Düsseldorf und dem Ruhrgebiet fehlen zehntausende bezahlbare Wohnungen. Was sollte getan werden?",
        statement: "NRW sollte eine Mietpreisbremse für das gesamte Land einführen und den sozialen Wohnungsbau mit mindestens 10.000 neuen Sozialwohnungen pro Jahr vorantreiben.",
        infoFacts: [
          "In NRW fehlen laut Schätzungen über 100.000 bezahlbare Wohnungen.",
          "Die Zahl der Sozialwohnungen in NRW ist von über einer Million in den 1990ern auf unter 450.000 gesunken.",
          "In Köln liegt die durchschnittliche Kaltmiete bei Neuvermietung über 13 Euro pro Quadratmeter."
        ]
      },
      {
        id: 1010,
        topic: "Stahlindustrie & Transformation",
        question: "Die Stahlindustrie in NRW (ThyssenKrupp, Salzgitter) steht vor der grünen Transformation. Sollte der Staat dies finanzieren?",
        statement: "Der Staat sollte die grüne Stahltransformation mit Milliarden-Subventionen unterstützen, um die Arbeitsplätze und den Industriestandort zu erhalten.",
        infoFacts: [
          "ThyssenKrupp Steel in Duisburg ist Europas größter Stahlproduzent mit rund 27.000 Beschäftigten.",
          "Die Umstellung auf grünen Wasserstoff-Stahl kostet allein bei ThyssenKrupp geschätzt über drei Milliarden Euro.",
          "Der Bund hat bereits zwei Milliarden Euro für die klimaneutrale Stahlproduktion bei ThyssenKrupp zugesagt."
        ]
      },
      {
        id: 1011,
        topic: "Braunkohle-Folgelandschaft",
        question: "Nach dem Kohleausstieg müssen die riesigen Tagebaue im Rheinland rekultiviert werden. Wer trägt die Kosten?",
        statement: "RWE als Verursacher sollte die vollständigen Kosten der Rekultivierung tragen, nicht der Steuerzahler.",
        infoFacts: [
          "Die Rekultivierung der Tagebaue Hambach, Garzweiler und Inden wird Jahrzehnte dauern.",
          "RWE hat Rückstellungen von rund 4,7 Milliarden Euro für die Rekultivierung gebildet.",
          "Die Tagebau-Restseen sollen zu Naherholungsgebieten werden, was umstritten ist."
        ]
      },
      {
        id: 1012,
        topic: "Universitätslandschaft",
        question: "NRW hat die meisten Hochschulen in Deutschland. Wird genug in Forschung und Wissenschaft investiert?",
        statement: "NRW sollte seine Hochschulen besser finanzieren und mehr Studienplätze in MINT-Fächern schaffen, um im internationalen Wettbewerb bestehen zu können.",
        infoFacts: [
          "NRW hat über 70 Hochschulen und rund 770.000 Studierende — mehr als jedes andere Bundesland.",
          "Die RWTH Aachen und die Universität Köln gehören zu den forschungsstärksten Universitäten Deutschlands.",
          "Viele NRW-Hochschulen klagen über Sanierungsstau bei Gebäuden und mangelnde Grundfinanzierung."
        ]
      },
      {
        id: 1013,
        topic: "Energiepreise & Industrie",
        question: "Die hohen Energiepreise treffen die energieintensive Industrie in NRW besonders hart. Braucht es einen staatlichen Industriestrompreis?",
        statement: "Die Landesregierung sollte sich für einen subventionierten Industriestrompreis einsetzen, um die Abwanderung der Industrie aus NRW zu verhindern.",
        infoFacts: [
          "NRW verbraucht rund ein Drittel des gesamten deutschen Industriestroms.",
          "Die Strompreise für die Industrie haben sich seit 2021 zeitweise mehr als verdoppelt.",
          "Große Chemieunternehmen wie Covestro und Lanxess haben bereits Produktionsverlagerungen angekündigt."
        ]
      },
      {
        id: 1014,
        topic: "Kommunale Finanzen",
        question: "Viele NRW-Kommunen sind hoch verschuldet und können kaum noch investieren. Wie kann die kommunale Altschuldenkrise gelöst werden?",
        statement: "Bund und Land sollten die kommunalen Altschulden in NRW übernehmen, damit Städte wie Oberhausen oder Hagen wieder handlungsfähig werden.",
        infoFacts: [
          "NRW-Kommunen haben zusammen über 20 Milliarden Euro an Kassenkrediten (Altschulden).",
          "Oberhausen, Hagen und Mülheim gehören zu den am höchsten verschuldeten Kommunen Deutschlands.",
          "Die Altschulden verhindern notwendige Investitionen in Schulen, Straßen und Digitalisierung."
        ]
      },
      {
        id: 1015,
        topic: "Sonntagsöffnung & Einzelhandel",
        question: "Sollen Geschäfte in NRW häufiger an Sonntagen öffnen dürfen, um den Innenstädten zu helfen?",
        statement: "Die Sonntagsöffnung sollte in NRW deutlich liberaler gehandhabt werden, um den stationären Einzelhandel gegenüber dem Online-Handel zu stärken.",
        infoFacts: [
          "In NRW sind derzeit maximal acht verkaufsoffene Sonntage pro Jahr und Kommune erlaubt.",
          "Der stationäre Einzelhandel verliert seit Jahren Marktanteile an den Online-Handel.",
          "Gewerkschaften und Kirchen lehnen eine Ausweitung der Sonntagsöffnung ab."
        ]
      }
    ],
    federalQuestionIds: [1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 14, 16, 19, 21, 27]
  },

  "rp": {
    name: "Rheinland-Pfalz",
    stateQuestions: [
      {
        id: 1101,
        topic: "Ahrtal-Wiederaufbau",
        question: "Das Ahrtal wurde 2021 von einer verheerenden Flutkatastrophe getroffen. Wie läuft der Wiederaufbau und was muss sich ändern?",
        statement: "Der Wiederaufbau im Ahrtal muss deutlich schneller vorankommen, und der Katastrophenschutz in Rheinland-Pfalz muss grundlegend reformiert werden.",
        infoFacts: [
          "Bei der Ahrtal-Flut im Juli 2021 starben 135 Menschen, über 700 wurden verletzt.",
          "Bund und Land haben rund 15 Milliarden Euro für den Wiederaufbau bereitgestellt.",
          "Viele Betroffene warten auch Jahre nach der Flut noch auf die Auszahlung von Hilfsgeldern."
        ]
      },
      {
        id: 1102,
        topic: "Hochwasserschutz",
        question: "Nach der Ahrtal-Katastrophe: Wie kann Rheinland-Pfalz besser vor Hochwasser und Starkregen geschützt werden?",
        statement: "Rheinland-Pfalz sollte in hochwassergefährdeten Gebieten strenge Bauverbote erlassen und natürliche Überflutungsflächen wiederherstellen.",
        infoFacts: [
          "Rund 700.000 Menschen in Rheinland-Pfalz leben in hochwassergefährdeten Gebieten.",
          "Die Flutkatastrophe 2021 hat gezeigt, dass Warnsysteme in Rheinland-Pfalz versagt haben.",
          "Das Land investiert seitdem in ein neues Frühwarnsystem und Hochwasserrückhaltebecken."
        ]
      },
      {
        id: 1103,
        topic: "Weinbau & Klimawandel",
        question: "Der Weinbau ist ein Kernstück der rheinland-pfälzischen Wirtschaft und Kultur. Wie geht die Branche mit dem Klimawandel um?",
        statement: "Der rheinland-pfälzische Weinbau sollte stärker beim Umstieg auf klimaresistente Rebsorten und nachhaltige Anbaumethoden unterstützt werden.",
        infoFacts: [
          "Rheinland-Pfalz produziert rund zwei Drittel des deutschen Weins.",
          "Über 60.000 Hektar Rebfläche werden bewirtschaftet, Tausende Familienbetriebe leben davon.",
          "Steigende Temperaturen begünstigen einerseits den Rotweinanbau, führen aber auch zu mehr Extremwetterereignissen."
        ]
      },
      {
        id: 1104,
        topic: "US-Militärbasen",
        question: "Die US-Airbase Ramstein ist der größte amerikanische Militärstützpunkt außerhalb der USA. Wie sollte Rheinland-Pfalz damit umgehen?",
        statement: "Die US-Militärpräsenz in Rheinland-Pfalz sollte beibehalten und gestärkt werden, da sie Sicherheit und wirtschaftliche Vorteile bringt.",
        infoFacts: [
          "Auf der Airbase Ramstein arbeiten rund 9.000 US-Soldaten und 5.000 deutsche Zivilbeschäftigte.",
          "Die US-Streitkräfte geben jährlich geschätzt über eine Milliarde Euro in der Region Kaiserslautern aus.",
          "Ramstein dient als Drehscheibe für US-Drohneneinsätze, was international umstritten ist."
        ]
      },
      {
        id: 1105,
        topic: "Nürburgring",
        question: "Der Nürburgring hat das Land Rheinland-Pfalz in einen Finanzskandal verwickelt. Wie sollte es mit der Rennstrecke weitergehen?",
        statement: "Der Nürburgring sollte als Motorsport- und Eventzentrum weiter staatlich gefördert werden, da er ein wichtiger Wirtschaftsfaktor für die Eifel ist.",
        infoFacts: [
          "Der gescheiterte Nürburgring-Ausbau kostete den Steuerzahler rund 500 Millionen Euro.",
          "Der Nürburgring wurde 2014 an einen privaten Investor verkauft.",
          "Die Region Eifel ist wirtschaftlich stark vom Tourismus rund um den Nürburgring abhängig."
        ]
      },
      {
        id: 1106,
        topic: "BASF & Chemiestandort",
        question: "Die BASF in Ludwigshafen ist der größte Chemiekonzern der Welt und baut massiv Stellen ab. Wie kann der Chemiestandort gerettet werden?",
        statement: "Das Land sollte alles tun, um die BASF und die Chemieindustrie in Ludwigshafen zu halten, auch wenn das bedeutet, Umweltauflagen zu lockern oder Subventionen zu zahlen.",
        infoFacts: [
          "Das BASF-Stammwerk in Ludwigshafen ist mit 10 Quadratkilometern der größte zusammenhängende Chemiekomplex der Welt.",
          "Die BASF hat angekündigt, bis 2026 weltweit tausende Stellen abzubauen, viele davon in Ludwigshafen.",
          "Hohe Energiepreise und strenge Regulierung werden als Hauptgründe für die Verlagerung ins Ausland genannt."
        ]
      },
      {
        id: 1107,
        topic: "Ländlicher Raum Eifel/Hunsrück",
        question: "Weite Teile der Eifel und des Hunsrücks kämpfen mit Bevölkerungsrückgang und schwindender Infrastruktur. Was kann dagegen getan werden?",
        statement: "Der Staat sollte gezielt Anreize schaffen, damit Menschen und Unternehmen sich in ländlichen Regionen wie der Eifel und dem Hunsrück ansiedeln.",
        infoFacts: [
          "Manche Gemeinden in der Eifel haben seit 1990 über 20 % ihrer Einwohner verloren.",
          "Die nächste Arztpraxis oder Apotheke ist in vielen Orten nur noch mit dem Auto erreichbar.",
          "Coworking-Spaces und schnelles Internet könnten ländliche Regionen für Homeoffice-Pendler attraktiver machen."
        ]
      },
      {
        id: 1108,
        topic: "Medienstandort Mainz",
        question: "Mainz ist als Sitz des ZDF und des SWR ein wichtiger Medienstandort. Sollte der öffentlich-rechtliche Rundfunk gestärkt oder reformiert werden?",
        statement: "Der öffentlich-rechtliche Rundfunk sollte schlanker und effizienter werden, auch wenn das den Medienstandort Mainz schwächt.",
        infoFacts: [
          "Das ZDF hat seinen Hauptsitz auf dem Mainzer Lerchenberg mit rund 3.500 Beschäftigten.",
          "Der monatliche Rundfunkbeitrag liegt bei 18,36 Euro und ist politisch umstritten.",
          "Mainz profitiert erheblich von der Medienwirtschaft, die tausende Arbeitsplätze in der Region sichert."
        ]
      },
      {
        id: 1109,
        topic: "Verkehrsinfrastruktur",
        question: "Die Verkehrsanbindung vieler Regionen in Rheinland-Pfalz ist schlecht. Braucht es mehr Investitionen in Straßen oder in den ÖPNV?",
        statement: "Rheinland-Pfalz sollte den Ausbau des öffentlichen Nahverkehrs auch in ländlichen Regionen priorisieren, statt weiter in Straßenneubau zu investieren.",
        infoFacts: [
          "Rheinland-Pfalz hat die niedrigste ÖPNV-Nutzung aller westdeutschen Flächenländer.",
          "Viele Bahnstrecken in Rheinland-Pfalz wurden in den letzten Jahrzehnten stillgelegt.",
          "Das 49-Euro-Ticket wird in ländlichen Regionen weniger genutzt, weil das Angebot fehlt."
        ]
      },
      {
        id: 1110,
        topic: "Windkraft in RLP",
        question: "Rheinland-Pfalz gehört zu den Spitzenreitern beim Windkraftausbau. Sollte noch mehr gebaut werden?",
        statement: "Rheinland-Pfalz sollte den Windkraftausbau weiter beschleunigen, auch wenn Anwohner sich gegen Windräder in ihrer Nähe wehren.",
        infoFacts: [
          "Rheinland-Pfalz hat über 1.800 Windkraftanlagen und gehört zu den führenden Windkraftländern.",
          "Der Hunsrück und die Eifel sind besonders windreiche Standorte.",
          "Bürgerinitiativen gegen Windkraft gibt es in vielen Gemeinden, oft wegen Landschaftsschutz und Lärm."
        ]
      },
      {
        id: 1111,
        topic: "Gesundheitsversorgung",
        question: "In Rheinland-Pfalz schließen immer mehr Krankenhäuser und Arztpraxen, besonders auf dem Land. Wie kann die Versorgung gesichert werden?",
        statement: "Kleine Krankenhäuser auf dem Land sollten erhalten bleiben, auch wenn sie wirtschaftlich nicht effizient sind, um die Versorgung der Bevölkerung sicherzustellen.",
        infoFacts: [
          "Rheinland-Pfalz hat in den letzten 20 Jahren rund ein Drittel seiner Krankenhäuser verloren.",
          "In ländlichen Regionen fehlen Hausärzte, viele Praxen finden keine Nachfolger.",
          "Die Krankenhausreform des Bundes könnte zu weiteren Schließungen kleiner Kliniken führen."
        ]
      },
      {
        id: 1112,
        topic: "Tourismus an Rhein und Mosel",
        question: "Der Tourismus an Rhein und Mosel ist ein wichtiger Wirtschaftsfaktor. Wie kann er nachhaltiger gestaltet werden?",
        statement: "Der Tourismus an Rhein und Mosel sollte stärker auf Nachhaltigkeit ausgerichtet werden, auch wenn das weniger Massentourismus bedeutet.",
        infoFacts: [
          "Das UNESCO-Welterbe Oberes Mittelrheintal zieht jährlich Millionen Touristen an.",
          "Kreuzfahrtschiffe auf dem Rhein tragen erheblich zur Luftverschmutzung und zum Wellenschlag bei.",
          "Der Weintourismus an der Mosel wird durch den Klimawandel sowohl gefördert als auch bedroht."
        ]
      },
      {
        id: 1113,
        topic: "Bildung & Ganztagsschulen",
        question: "Rheinland-Pfalz war Vorreiter bei Ganztagsschulen. Reicht das Angebot aus und ist die Qualität gut genug?",
        statement: "Rheinland-Pfalz sollte einen Rechtsanspruch auf echte Ganztagsbetreuung mit qualitativem Bildungsangebot umsetzen, auch wenn das teuer ist.",
        infoFacts: [
          "Rheinland-Pfalz hat seit 2002 ein flächendeckendes Ganztagsschulangebot aufgebaut.",
          "Ab 2026 gilt bundesweit ein Rechtsanspruch auf Ganztagsbetreuung für Grundschulkinder.",
          "Kritiker bemängeln, dass viele Ganztagsschulen nur Betreuung statt echte Bildung bieten."
        ]
      },
      {
        id: 1114,
        topic: "Pfälzerwald & Naturschutz",
        question: "Der Pfälzerwald ist das größte zusammenhängende Waldgebiet Deutschlands. Wie kann er besser geschützt und gleichzeitig genutzt werden?",
        statement: "Im Pfälzerwald sollten größere Bereiche als Wildnisgebiete ausgewiesen werden, in denen keine Forstwirtschaft mehr betrieben wird.",
        infoFacts: [
          "Der Pfälzerwald ist UNESCO-Biosphärenreservat und umfasst rund 1.800 Quadratkilometer.",
          "Der Klimawandel hat in den letzten Jahren zu einem massiven Fichtensterben im Pfälzerwald geführt.",
          "Der Wald dient sowohl der Holzwirtschaft als auch als wichtiges Naherholungsgebiet."
        ]
      },
      {
        id: 1115,
        topic: "Digitalisierung der Verwaltung",
        question: "Rheinland-Pfalz hinkt bei der Digitalisierung der Verwaltung hinterher. Was muss passieren?",
        statement: "Rheinland-Pfalz sollte alle Verwaltungsleistungen innerhalb von drei Jahren vollständig digital verfügbar machen, auch wenn das hohe Investitionen erfordert.",
        infoFacts: [
          "Das Onlinezugangsgesetz verpflichtete alle Behörden, ihre Leistungen bis Ende 2022 digital anzubieten — das wurde verfehlt.",
          "Viele Bürgerinnen und Bürger in RLP müssen für einfache Behördengänge noch persönlich erscheinen.",
          "Die 24 Landkreise und 12 kreisfreien Städte in RLP arbeiten oft mit unterschiedlichen IT-Systemen."
        ]
      }
    ],
    federalQuestionIds: [1, 2, 3, 5, 6, 7, 8, 10, 12, 15, 18, 20, 22, 24, 28]
  },

  "sl": {
    name: "Saarland",
    stateQuestions: [
      {
        id: 1201,
        topic: "Stahlindustrie",
        question: "Die Stahlindustrie im Saarland steht vor einer existenziellen Transformation. Wie kann der Wandel zu grünem Stahl gelingen?",
        statement: "Der Bund sollte die saarländische Stahlindustrie massiv subventionieren, um den Übergang zu klimaneutraler Produktion zu ermöglichen und Arbeitsplätze zu sichern.",
        infoFacts: [
          "Die Saarstahl-Gruppe und Dillinger Hütte beschäftigen zusammen rund 13.000 Menschen im Saarland.",
          "Der Umbau auf wasserstoffbasierten Stahl kostet geschätzt mehrere Milliarden Euro.",
          "Die Stahlindustrie ist der größte CO₂-Emittent im Saarland."
        ]
      },
      {
        id: 1202,
        topic: "Ford-Werk Saarlouis",
        question: "Das Ford-Werk in Saarlouis wird geschlossen und tausende Arbeitsplätze gehen verloren. Wie sollte die Politik reagieren?",
        statement: "Die Landesregierung muss einen konkreten Ansiedlungsplan für das Ford-Gelände entwickeln, um den Verlust der Arbeitsplätze schnellstmöglich zu kompensieren.",
        infoFacts: [
          "Das Ford-Werk in Saarlouis beschäftigte in Spitzenzeiten über 6.000 Menschen.",
          "Die Schließung betrifft auch hunderte Zulieferbetriebe in der Region.",
          "Verschiedene Investoren haben Interesse am Standort signalisiert, darunter Batterieproduktionsfirmen."
        ]
      },
      {
        id: 1203,
        topic: "Deutsch-französische Grenzregion",
        question: "Das Saarland liegt an der Grenze zu Frankreich und hat enge Beziehungen zum Nachbarland. Wie kann die grenzüberschreitende Zusammenarbeit verbessert werden?",
        statement: "Das Saarland sollte die Zweisprachigkeit stärker fördern und sich als deutsch-französische Modellregion für europäische Integration positionieren.",
        infoFacts: [
          "Rund 18.000 Saarländerinnen und Saarländer pendeln täglich nach Frankreich oder Luxemburg zur Arbeit.",
          "Das Saarland hat die Frankreichstrategie beschlossen, die Zweisprachigkeit bis 2043 anstrebt.",
          "Grenzüberschreitende Rettungseinsätze und Gesundheitsversorgung funktionieren oft nur lückenhaft."
        ]
      },
      {
        id: 1204,
        topic: "Kleinstes Flächenland",
        question: "Das Saarland ist das kleinste deutsche Flächenland. Braucht es als eigenständiges Bundesland eine Zukunft oder sollte es mit einem Nachbarland fusionieren?",
        statement: "Das Saarland sollte als eigenständiges Bundesland erhalten bleiben, auch wenn es finanziell dauerhaft auf Unterstützung durch den Länderfinanzausgleich angewiesen ist.",
        infoFacts: [
          "Das Saarland hat knapp unter einer Million Einwohner und ist damit das zweitkleinste Bundesland.",
          "Das Saarland erhält jährlich rund 500 Millionen Euro aus dem Länderfinanzausgleich.",
          "Eine Fusion mit Rheinland-Pfalz wird seit Jahrzehnten diskutiert, scheitert aber am Widerstand der Bevölkerung."
        ]
      },
      {
        id: 1205,
        topic: "Strukturwandel",
        question: "Das Saarland befindet sich im dreifachen Strukturwandel: Kohle, Stahl und Automobil. Wie kann die Transformation gelingen?",
        statement: "Der Strukturwandel im Saarland braucht ein umfassendes staatliches Transformationskonzept mit langfristigen Fördermitteln, statt einzelner kurzfristiger Maßnahmen.",
        infoFacts: [
          "Die letzte Steinkohlezeche im Saarland (Ensdorf) schloss 2012.",
          "Das Saarland hat eine der höchsten Industriequoten aller Bundesländer.",
          "Die Wirtschaftsleistung pro Kopf liegt im Saarland unter dem Bundesdurchschnitt."
        ]
      },
      {
        id: 1206,
        topic: "Hochschulen & Forschung",
        question: "Die Universität des Saarlandes und die HTW Saar sind wichtig für die Region. Reicht die Forschungsförderung?",
        statement: "Das Saarland sollte seine Hochschulen stärker als Innovationsmotor nutzen und gezielt Forschungscluster für Zukunftstechnologien aufbauen.",
        infoFacts: [
          "Die Universität des Saarlandes ist bekannt für ihre Informatik-Forschung und das CISPA-Helmholtz-Zentrum.",
          "Das Deutsche Forschungszentrum für Künstliche Intelligenz (DFKI) hat einen Standort in Saarbrücken.",
          "Trotz exzellenter Forschung wandern viele Absolventen in andere Bundesländer ab."
        ]
      },
      {
        id: 1207,
        topic: "Pendler nach Luxemburg",
        question: "Immer mehr Saarländer pendeln nach Luxemburg, wo die Löhne deutlich höher sind. Was bedeutet das für das Saarland?",
        statement: "Das Saarland sollte die Pendlerbewegung nach Luxemburg als Chance nutzen und bessere grenzüberschreitende Verkehrsanbindungen schaffen.",
        infoFacts: [
          "Luxemburg hat mit über 70.000 Euro das höchste Pro-Kopf-BIP der EU.",
          "Die Pendlerzahlen aus dem Saarland nach Luxemburg steigen seit Jahren kontinuierlich.",
          "Das Lohngefälle zwischen dem Saarland und Luxemburg liegt bei teilweise über 40 %."
        ]
      },
      {
        id: 1208,
        topic: "Energieversorgung",
        question: "Das Saarland ist stark von fossilen Energieträgern abhängig. Wie kann die Energiewende im kleinsten Flächenland gelingen?",
        statement: "Das Saarland sollte den Ausbau erneuerbarer Energien massiv beschleunigen und mindestens 2 % der Landesfläche für Windkraft bereitstellen.",
        infoFacts: [
          "Das Saarland hat bei der Windkraft und Solarenergie einen großen Nachholbedarf gegenüber anderen Bundesländern.",
          "Die Stahlindustrie ist für einen Großteil des saarländischen Energieverbrauchs verantwortlich.",
          "Die dichte Besiedlung und die hügelige Topografie erschweren den Ausbau erneuerbarer Energien."
        ]
      },
      {
        id: 1209,
        topic: "Demografie",
        question: "Die Bevölkerung des Saarlands schrumpft und altert schnell. Wie kann das Land gegensteuern?",
        statement: "Das Saarland sollte aktiv um Zuwanderung aus dem In- und Ausland werben und attraktive Bedingungen für junge Familien schaffen.",
        infoFacts: [
          "Das Saarland hat eine der ältesten Bevölkerungen aller Bundesländer mit einem Durchschnittsalter über 46 Jahren.",
          "Prognosen sagen voraus, dass das Saarland bis 2040 unter 900.000 Einwohner fallen könnte.",
          "Der Fachkräftemangel trifft das Saarland besonders hart, vor allem im Pflege- und Handwerksbereich."
        ]
      },
      {
        id: 1210,
        topic: "Saarbrücken Stadtentwicklung",
        question: "Saarbrücken als Landeshauptstadt hat Entwicklungspotenzial, kämpft aber auch mit sozialen Problemen. Wie sollte die Stadt sich entwickeln?",
        statement: "Saarbrücken sollte gezielt in die Innenstadt-Belebung und kulturelle Angebote investieren, um als Landeshauptstadt attraktiver zu werden.",
        infoFacts: [
          "Saarbrücken hat rund 180.000 Einwohner und ist die einzige Großstadt im Saarland.",
          "Die Innenstadt leidet wie viele Städte unter Leerstand im Einzelhandel.",
          "Die Nähe zu Frankreich macht Saarbrücken zu einer kulturell vielfältigen Stadt."
        ]
      },
      {
        id: 1211,
        topic: "Gesundheitsversorgung",
        question: "Krankenhäuser im Saarland stehen unter Druck, einige mussten bereits schließen. Wie kann die medizinische Versorgung gesichert werden?",
        statement: "Kleine Krankenhäuser im Saarland sollten zu spezialisierten Zentren zusammengelegt werden, statt alle Standorte um jeden Preis zu erhalten.",
        infoFacts: [
          "Das Saarland hat gemessen an seiner Größe eine hohe Krankenhaus-Dichte, die unter Kostendruck steht.",
          "Das Universitätsklinikum des Saarlandes in Homburg ist der größte Arbeitgeber der Region.",
          "Die Krankenhausreform des Bundes könnte im Saarland zu Spezialisierung und Konzentration führen."
        ]
      },
      {
        id: 1212,
        topic: "ÖPNV & Mobilität",
        question: "Der öffentliche Nahverkehr im Saarland ist schwach ausgebaut. Braucht es eine Verkehrswende?",
        statement: "Das Saarland sollte massiv in den Ausbau des ÖPNV investieren und eine Stadtbahn für den Großraum Saarbrücken einführen.",
        infoFacts: [
          "Die Saarbahn verbindet Saarbrücken mit dem französischen Sarreguemines, hat aber ein begrenztes Netz.",
          "In ländlichen Teilen des Saarlands fahren Busse oft nur im Stundentakt oder seltener.",
          "Die Autoabhängigkeit im Saarland gehört zu den höchsten in ganz Deutschland."
        ]
      },
      {
        id: 1213,
        topic: "Bergbau-Folgeschäden",
        question: "Der Steinkohlebergbau hat im Saarland massive Folgeschäden hinterlassen, darunter Erderschütterungen und Grundwasserprobleme. Wer trägt die Verantwortung?",
        statement: "Die RAG-Stiftung und der Bund müssen dauerhaft für die Bergbaufolgeschäden im Saarland aufkommen, ohne diese Kosten auf das Land abzuwälzen.",
        infoFacts: [
          "Bergbaubedingte Erdbeben haben im Saarland Schäden an tausenden Gebäuden verursacht.",
          "Das Grubenwasser muss auch nach dem Bergbau-Ende auf unbestimmte Zeit abgepumpt werden.",
          "Die RAG-Stiftung verwaltet ein Vermögen von rund 18 Milliarden Euro für die Ewigkeitslasten des Bergbaus."
        ]
      },
      {
        id: 1214,
        topic: "Kultur & Identität",
        question: "Das Saarland hat eine einzigartige kulturelle Identität zwischen Deutschland und Frankreich. Wie sollte diese Identität gefördert werden?",
        statement: "Die saarländische Kultur und Identität sollten stärker gefördert werden, auch als Standortfaktor für Tourismus und Fachkräftegewinnung.",
        infoFacts: [
          "Das Saarland war historisch mehrfach zwischen Deutschland und Frankreich umkämpft und wurde erst 1957 endgültig deutsch.",
          "Die saarländische Küche vereint deutsche und französische kulinarische Traditionen.",
          "Das Weltkulturerbe Völklinger Hütte zieht jährlich über 300.000 Besucher an."
        ]
      },
      {
        id: 1215,
        topic: "Bildungspolitik",
        question: "Das saarländische Bildungssystem steht vor der Herausforderung des Lehrkräftemangels und sinkender Schülerzahlen. Wie sollte es reformiert werden?",
        statement: "Das Saarland sollte Schulstandorte zusammenlegen und stattdessen in die Qualität der verbleibenden Schulen investieren.",
        infoFacts: [
          "Das Saarland hat neben dem Gymnasium die Gemeinschaftsschule als zweite weiterführende Schulform.",
          "Sinkende Schülerzahlen stellen viele kleine Schulstandorte in Frage.",
          "Der Lehrkräftemangel trifft das Saarland besonders in den MINT-Fächern und Grundschulen."
        ]
      }
    ],
    federalQuestionIds: [1, 2, 3, 5, 6, 7, 8, 10, 13, 14, 17, 20, 22, 25, 29]
  },

  "sn": {
    name: "Sachsen",
    stateQuestions: [
      {
        id: 1301,
        topic: "Chipindustrie Dresden",
        question: "Dresden wird zum europäischen Chipstandort ausgebaut, unter anderem mit einer TSMC-Fabrik. Ist die Milliarden-Subvention gerechtfertigt?",
        statement: "Die Milliarden-Subventionen für die Chipindustrie in Dresden sind eine richtige strategische Investition, um Europas Abhängigkeit von Asien zu reduzieren.",
        infoFacts: [
          "TSMC baut gemeinsam mit Bosch, Infineon und NXP eine Chipfabrik in Dresden mit über fünf Milliarden Euro Investition.",
          "Der Bund beteiligt sich mit rund fünf Milliarden Euro an den Subventionen für den Chipstandort.",
          "Dresden hat bereits über 70.000 Beschäftigte in der Halbleiter- und Elektronikindustrie."
        ]
      },
      {
        id: 1302,
        topic: "Kohleausstieg Lausitz",
        question: "Die Lausitz lebt noch stark von der Braunkohle. Wie kann der Strukturwandel nach dem Kohleausstieg sozialverträglich gestaltet werden?",
        statement: "Der Kohleausstieg in der Lausitz sollte nicht vor 2038 erfolgen, um den Menschen in der Region genug Zeit für die Umstellung zu geben.",
        infoFacts: [
          "Die LEAG betreibt in der Lausitz noch mehrere Braunkohlekraftwerke und Tagebaue.",
          "Rund 8.000 Menschen arbeiten direkt in der Braunkohle in der sächsischen und brandenburgischen Lausitz.",
          "Bund und Länder haben 40 Milliarden Euro für den Strukturwandel in den Kohleregionen bereitgestellt."
        ]
      },
      {
        id: 1303,
        topic: "Politische Polarisierung",
        question: "Sachsen ist politisch stark polarisiert, die AfD ist stärkste Kraft. Wie kann der gesellschaftliche Zusammenhalt gestärkt werden?",
        statement: "Die demokratischen Parteien in Sachsen müssen die Sorgen der AfD-Wähler ernster nehmen und konkrete Lösungen für deren Probleme anbieten.",
        infoFacts: [
          "Die AfD wurde bei der sächsischen Landtagswahl 2024 stärkste Partei mit über 30 % der Stimmen.",
          "Die Regierungsbildung in Sachsen war 2024 äußerst schwierig und erforderte eine Minderheitsregierung.",
          "Sachsen hat die niedrigste Wahlbeteiligung bei Bundestagswahlen aller westdeutschen Bundesländer."
        ]
      },
      {
        id: 1304,
        topic: "Leipzig-Boom",
        question: "Leipzig wächst rasant und wird als das neue Berlin gehandelt. Wie sollte mit dem starken Wachstum umgegangen werden?",
        statement: "Leipzig braucht eine aktive Wachstumsstrategie mit mehr Wohnungsbau und besserer Infrastruktur, um die Lebensqualität trotz des Booms zu erhalten.",
        infoFacts: [
          "Leipzigs Bevölkerung ist seit 2000 um über 100.000 auf rund 620.000 Einwohner gewachsen.",
          "Die Mietpreise in Leipzig sind in den letzten zehn Jahren um über 50 % gestiegen.",
          "Leipzig hat sich zu einem wichtigen Standort für Kreativwirtschaft, IT und Logistik entwickelt."
        ]
      },
      {
        id: 1305,
        topic: "Rechtsextremismus",
        question: "Sachsen hat wiederholt mit rechtsextremistischen Vorfällen Schlagzeilen gemacht. Was muss gegen Rechtsextremismus getan werden?",
        statement: "Der Freistaat Sachsen sollte deutlich mehr Mittel in Prävention gegen Rechtsextremismus und in die Stärkung der demokratischen Zivilgesellschaft investieren.",
        infoFacts: [
          "In Sachsen werden pro Kopf mehr rechtsextreme Straftaten registriert als in jedem anderen Bundesland.",
          "Initiativen und Vereine gegen Rechtsextremismus beklagen regelmäßig Kürzungen bei der Förderung.",
          "Die Ausschreitungen in Chemnitz 2018 und die Vorfälle in Freital und Heidenau sorgten bundesweit für Aufsehen."
        ]
      },
      {
        id: 1306,
        topic: "Kulturhauptstadt Chemnitz",
        question: "Chemnitz war 2025 Europäische Kulturhauptstadt. Hat das der Stadt und der Region einen nachhaltigen Schub gegeben?",
        statement: "Die Kulturhauptstadt-Investitionen in Chemnitz sollten langfristig fortgeführt werden, um die Stadt dauerhaft als Kulturstandort zu etablieren.",
        infoFacts: [
          "Chemnitz erhielt den Titel Europäische Kulturhauptstadt 2025 unter dem Motto 'C the Unseen'.",
          "Rund 100 Millionen Euro wurden für das Kulturhauptstadt-Programm und begleitende Infrastruktur investiert.",
          "Chemnitz hofft, durch den Titel sein negatives Image nach den Ausschreitungen von 2018 zu überwinden."
        ]
      },
      {
        id: 1307,
        topic: "Automobilindustrie",
        question: "Mit Porsche und BMW in Leipzig sowie VW in Zwickau ist Sachsen ein wichtiger Autostandort. Wie sicher sind diese Arbeitsplätze?",
        statement: "Sachsen sollte die Automobilindustrie aktiv bei der Transformation zur Elektromobilität unterstützen und die Batteriefertigung im Land ausbauen.",
        infoFacts: [
          "Das Porsche-Werk in Leipzig produziert den Macan und den Cayenne, BMW den 1er und 2er.",
          "VW baut in Zwickau ausschließlich Elektroautos, hat aber die Produktion aufgrund schwacher Nachfrage gedrosselt.",
          "Sachsens Automobilzulieferer beschäftigen rund 95.000 Menschen."
        ]
      },
      {
        id: 1308,
        topic: "Bildung & PISA",
        question: "Sachsen schneidet in Bildungsvergleichen oft am besten ab. Kann das Niveau gehalten werden?",
        statement: "Sachsen sollte sein erfolgreiches Bildungssystem verteidigen und mehr Lehrkräfte einstellen, statt sich auf vergangenen Erfolgen auszuruhen.",
        infoFacts: [
          "Sachsen belegt regelmäßig Spitzenplätze beim IQB-Bildungstrend und Bildungsmonitor.",
          "Trotz guter Ergebnisse klagen auch sächsische Schulen über massiven Lehrkräftemangel.",
          "Das sächsische Schulsystem mit Mittelschule und Gymnasium gilt als leistungsorientiert."
        ]
      },
      {
        id: 1309,
        topic: "Grenzregion zu Polen/Tschechien",
        question: "Sachsen grenzt an Polen und Tschechien. Wie kann die grenzüberschreitende Zusammenarbeit verbessert werden?",
        statement: "Sachsen sollte die Zusammenarbeit mit Polen und Tschechien in Wirtschaft, Bildung und Kultur deutlich intensivieren.",
        infoFacts: [
          "Die Euroregionen Neiße, Elbe/Labe und Erzgebirge fördern die grenzüberschreitende Zusammenarbeit.",
          "Zehntausende Pendler aus Polen und Tschechien arbeiten in Sachsen, vor allem im Pflege- und Handwerksbereich.",
          "Sprachliche und bürokratische Hürden behindern die Zusammenarbeit noch immer erheblich."
        ]
      },
      {
        id: 1310,
        topic: "Erzgebirge & Tourismus",
        question: "Das Erzgebirge ist UNESCO-Welterbe und wichtige Tourismusregion. Wie kann die Region wirtschaftlich gestärkt werden?",
        statement: "Das Erzgebirge sollte als Tourismusregion stärker vermarktet werden und gleichzeitig in nachhaltige Wirtschaftszweige investieren.",
        infoFacts: [
          "Die Montanregion Erzgebirge wurde 2019 UNESCO-Welterbe.",
          "Das Erzgebirge kämpft mit Abwanderung junger Menschen und alternder Bevölkerung.",
          "Die traditionelle Holzkunst und Weihnachtskultur sind international bekannt."
        ]
      },
      {
        id: 1311,
        topic: "Demokratie & Bürgerbeteiligung",
        question: "In Sachsen gibt es ein wachsendes Misstrauen gegenüber demokratischen Institutionen. Wie kann die Demokratie gestärkt werden?",
        statement: "Sachsen sollte mehr direkte Demokratie und Bürgerbeteiligung ermöglichen, um das Vertrauen in politische Institutionen wiederherzustellen.",
        infoFacts: [
          "Umfragen zeigen, dass das Vertrauen in demokratische Institutionen in Sachsen niedriger ist als im Bundesdurchschnitt.",
          "Sachsen hat bereits relativ niedrige Hürden für Volksentscheide auf Landesebene.",
          "Bürgerdialoge und Beteiligungsformate werden zunehmend auch in sächsischen Kommunen eingesetzt."
        ]
      },
      {
        id: 1312,
        topic: "Forschungslandschaft",
        question: "Sachsen hat eine starke Forschungslandschaft mit TU Dresden, Universität Leipzig und zahlreichen Instituten. Wird das Potenzial ausgeschöpft?",
        statement: "Die sächsische Forschungslandschaft sollte stärker mit der Wirtschaft vernetzt werden, um Innovationen schneller in die Praxis zu bringen.",
        infoFacts: [
          "Die TU Dresden ist eine von elf Exzellenzuniversitäten in Deutschland.",
          "Sachsen hat die höchste Dichte an Fraunhofer-Instituten aller Bundesländer.",
          "Die Ausgaben für Forschung und Entwicklung in Sachsen liegen über dem ostdeutschen Durchschnitt."
        ]
      },
      {
        id: 1313,
        topic: "Wohnungsmarkt Dresden",
        question: "In Dresden steigen die Mieten stark, während in anderen sächsischen Städten Wohnungen leer stehen. Wie kann das ausgeglichen werden?",
        statement: "In Dresden und Leipzig sollte mehr sozialer Wohnungsbau gefördert werden, während in schrumpfenden Städten der Rückbau weitergehen sollte.",
        infoFacts: [
          "Dresden hat in den letzten fünf Jahren einen Mietpreisanstieg von über 30 % erlebt.",
          "In Städten wie Görlitz oder Plauen stehen teilweise über 10 % der Wohnungen leer.",
          "Der soziale Wohnungsbau spielt in Sachsen bisher eine geringere Rolle als in westdeutschen Bundesländern."
        ]
      },
      {
        id: 1314,
        topic: "Sorbische Minderheit",
        question: "Die Sorben sind eine anerkannte Minderheit in der Lausitz. Wird genug für den Erhalt ihrer Sprache und Kultur getan?",
        statement: "Der Schutz und die Förderung der sorbischen Sprache und Kultur sollten deutlich ausgebaut werden, auch mit mehr finanziellen Mitteln.",
        infoFacts: [
          "Rund 60.000 Sorben leben in der Lausitz, davon die meisten in Sachsen.",
          "Sorbisch wird als Unterrichtssprache an einigen Schulen angeboten, die Zahl der Sprecher sinkt jedoch.",
          "Die Stiftung für das sorbische Volk wird von Bund und Ländern mit rund 24 Millionen Euro jährlich gefördert."
        ]
      },
      {
        id: 1315,
        topic: "Innere Sicherheit",
        question: "Sachsen diskutiert immer wieder über innere Sicherheit und Polizeipräsenz. Braucht der Freistaat mehr oder weniger Polizei?",
        statement: "Sachsen sollte die Polizeipräsenz insbesondere in ländlichen Gebieten und an der Grenze zu Polen und Tschechien deutlich verstärken.",
        infoFacts: [
          "Die sächsische Polizei hat rund 14.000 Beamte, viele davon gehen in den nächsten Jahren in Pension.",
          "Grenzüberschreitende Kriminalität, insbesondere Autodiebstahl, ist in sächsischen Grenzregionen ein Problem.",
          "Das sächsische Polizeigesetz wurde mehrfach verschärft, was Bürgerrechtsorganisationen kritisieren."
        ]
      }
    ],
    federalQuestionIds: [1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 14, 16, 21, 26, 30]
  },

  "st": {
    name: "Sachsen-Anhalt",
    stateQuestions: [
      {
        id: 1401,
        topic: "Intel-Chipfabrik Magdeburg",
        question: "Intel plant eine riesige Chipfabrik in Magdeburg. Ist die Milliarden-Subvention des Bundes gerechtfertigt?",
        statement: "Die staatliche Subvention von rund zehn Milliarden Euro für die Intel-Chipfabrik in Magdeburg ist eine richtige Investition in die Zukunft Sachsen-Anhalts.",
        infoFacts: [
          "Intel plant in Magdeburg eine Chipfabrik mit einer Gesamtinvestition von über 30 Milliarden Euro.",
          "Der Bund unterstützt die Ansiedlung mit etwa zehn Milliarden Euro an Subventionen.",
          "Das Projekt soll bis zu 3.000 direkte und 7.000 indirekte Arbeitsplätze schaffen."
        ]
      },
      {
        id: 1402,
        topic: "Abwanderung & Demografie",
        question: "Sachsen-Anhalt hat seit der Wiedervereinigung rund ein Viertel seiner Bevölkerung verloren. Wie kann der Trend gestoppt werden?",
        statement: "Sachsen-Anhalt braucht eine offensive Rückkehrer-Strategie und muss gezielt um junge Familien und Fachkräfte werben.",
        infoFacts: [
          "Sachsen-Anhalts Bevölkerung sank von 2,9 Millionen (1990) auf rund 2,15 Millionen.",
          "Das Durchschnittsalter liegt bei über 47 Jahren — eines der höchsten in ganz Deutschland.",
          "Ganze Landstriche, besonders in der Altmark und im Harz, kämpfen mit Bevölkerungsschwund."
        ]
      },
      {
        id: 1403,
        topic: "Chemiedreieck Leuna",
        question: "Das Chemiedreieck um Leuna, Buna und Bitterfeld war in der DDR ein Industriezentrum und erlebt einen Aufschwung. Wie kann dieser verstetigt werden?",
        statement: "Die Chemieindustrie in Sachsen-Anhalt sollte gezielt beim Umbau zu grüner Chemie und Wasserstofftechnologie unterstützt werden.",
        infoFacts: [
          "Im Chemiedreieck Sachsen-Anhalt arbeiten rund 25.000 Menschen in der chemischen Industrie.",
          "Die TotalEnergies-Raffinerie in Leuna ist eine der modernsten Europas.",
          "In Leuna wird eine der größten grünen Wasserstoff-Anlagen Deutschlands aufgebaut."
        ]
      },
      {
        id: 1404,
        topic: "Harz & Tourismus",
        question: "Der Harz ist ein wichtiger Tourismusmagnet, leidet aber unter dem Waldsterben. Wie kann die Region zukunftsfähig gemacht werden?",
        statement: "Der Harz braucht ein neues Tourismuskonzept, das den Waldumbau integriert und den Nationalpark als Wildnisgebiet stärkt.",
        infoFacts: [
          "Große Teile der Fichtenbestände im Harz sind durch Borkenkäfer und Dürre abgestorben.",
          "Der Brocken zieht jährlich über eine Million Besucher an.",
          "Die Harzer Schmalspurbahn ist ein touristisches Highlight, kämpft aber mit Sanierungsbedarf."
        ]
      },
      {
        id: 1405,
        topic: "Bildungskrise",
        question: "Sachsen-Anhalt hat den höchsten Anteil an Schulabbrechern in Deutschland. Was muss sich im Bildungssystem ändern?",
        statement: "Sachsen-Anhalt sollte deutlich mehr Geld in frühkindliche Bildung und Schulsozialarbeit investieren, um die Abbrecherquote drastisch zu senken.",
        infoFacts: [
          "In Sachsen-Anhalt verlassen rund 12 % der Schüler die Schule ohne Abschluss — der höchste Wert bundesweit.",
          "Es fehlen hunderte Lehrkräfte, besonders in ländlichen Regionen und in den MINT-Fächern.",
          "Die Kita-Betreuungsquote liegt zwar über dem Bundesdurchschnitt, die Qualität wird aber kritisiert."
        ]
      },
      {
        id: 1406,
        topic: "Rechte Gewalt & Gedenken",
        question: "Der Anschlag von Halle 2019 auf die Synagoge hat Sachsen-Anhalt erschüttert. Wie geht das Land mit rechter Gewalt um?",
        statement: "Sachsen-Anhalt muss mehr Mittel in die Prävention von Rechtsextremismus und den Schutz jüdischer und muslimischer Einrichtungen investieren.",
        infoFacts: [
          "Am 9. Oktober 2019 versuchte ein Rechtsextremist, die Synagoge in Halle zu stürmen, und tötete zwei Menschen.",
          "Die Opferberatung für Betroffene rechter Gewalt in Sachsen-Anhalt verzeichnet jährlich hunderte Fälle.",
          "Sachsen-Anhalt hat ein Landesprogramm für Demokratie und Toleranz, das aber als unterfinanziert gilt."
        ]
      },
      {
        id: 1407,
        topic: "Strukturwandel Kohle",
        question: "Das Mitteldeutsche Revier in Sachsen-Anhalt soll vom Kohleausstieg profitieren. Kommen die Strukturwandel-Gelder richtig an?",
        statement: "Die Strukturwandel-Milliarden sollten stärker in zukunftsfähige Industrien und Arbeitsplätze fließen, statt in prestigeträchtige Einzelprojekte.",
        infoFacts: [
          "Sachsen-Anhalt erhält rund 4,8 Milliarden Euro aus dem Strukturstärkungsgesetz Kohleregionen.",
          "Im Mitteldeutschen Revier sind noch rund 2.000 Menschen direkt in der Braunkohle beschäftigt.",
          "Kritiker bemängeln, dass viele Strukturwandel-Projekte mehr Prestige als nachhaltige Arbeitsplätze bringen."
        ]
      },
      {
        id: 1408,
        topic: "Fachkräftemangel",
        question: "Der Fachkräftemangel trifft Sachsen-Anhalt besonders hart. Wie können Arbeitskräfte gewonnen und gehalten werden?",
        statement: "Sachsen-Anhalt sollte gezielt ausländische Fachkräfte anwerben und bürokratische Hürden bei der Anerkennung ausländischer Abschlüsse abbauen.",
        infoFacts: [
          "In Sachsen-Anhalt fehlen Zehntausende Fachkräfte, besonders in Pflege, Handwerk und IT.",
          "Die Löhne in Sachsen-Anhalt liegen im Schnitt 20 % unter dem westdeutschen Niveau.",
          "Viele junge Sachsen-Anhalter wandern in besser bezahlende westdeutsche Bundesländer ab."
        ]
      },
      {
        id: 1409,
        topic: "Magdeburg als Landeshauptstadt",
        question: "Magdeburg soll durch die Intel-Ansiedlung und andere Projekte aufblühen. Wie kann die Stadt dieses Wachstum managen?",
        statement: "Magdeburg muss jetzt in Wohnungsbau, Infrastruktur und Kinderbetreuung investieren, um das erwartete Bevölkerungswachstum durch Intel bewältigen zu können.",
        infoFacts: [
          "Magdeburg hat rund 240.000 Einwohner und ist nach Halle die zweitgrößte Stadt Sachsen-Anhalts.",
          "Durch die Intel-Ansiedlung werden tausende neue Einwohner erwartet.",
          "Der Wohnungsmarkt in Magdeburg zieht bereits an, obwohl die Fabrik noch nicht fertig ist."
        ]
      },
      {
        id: 1410,
        topic: "Erneuerbare Energien",
        question: "Sachsen-Anhalt hat bereits einen hohen Anteil erneuerbarer Energien. Sollte der Ausbau weitergehen?",
        statement: "Sachsen-Anhalt sollte seinen Vorsprung bei erneuerbaren Energien nutzen und sich als grünes Energieland Nummer eins positionieren.",
        infoFacts: [
          "Sachsen-Anhalt erzeugt bereits über 60 % seines Stroms aus erneuerbaren Quellen, vor allem Wind.",
          "Die Akzeptanz für Windkraft sinkt in vielen Gemeinden, Bürgerinitiativen wehren sich gegen neue Anlagen.",
          "Der produzierte Ökostrom wird zum Großteil in andere Bundesländer exportiert."
        ]
      },
      {
        id: 1411,
        topic: "Kulturerbe & UNESCO",
        question: "Sachsen-Anhalt hat mit dem Bauhaus Dessau, der Lutherstadt Wittenberg und dem Naumburger Dom bedeutende UNESCO-Welterbestätten. Wird das Potenzial genutzt?",
        statement: "Sachsen-Anhalt sollte sein kulturelles Erbe stärker für Tourismus und Standortmarketing nutzen und die Welterbestätten besser pflegen.",
        infoFacts: [
          "Sachsen-Anhalt hat fünf UNESCO-Welterbestätten — mehr als die meisten Bundesländer.",
          "Die Lutherstadt Wittenberg und das Bauhaus Dessau ziehen internationale Besucher an.",
          "Viele denkmalgeschützte Gebäude in Sachsen-Anhalts Kleinstädten verfallen mangels Investitionen."
        ]
      },
      {
        id: 1412,
        topic: "Gesundheitsversorgung",
        question: "Die medizinische Versorgung auf dem Land in Sachsen-Anhalt wird immer dünner. Wie kann sie gesichert werden?",
        statement: "Sachsen-Anhalt sollte Landärzte mit Stipendien und Prämien anlocken und die Telemedizin in unterversorgten Regionen massiv ausbauen.",
        infoFacts: [
          "In manchen Landkreisen Sachsen-Anhalts gibt es weniger als 40 Hausärzte pro 100.000 Einwohner.",
          "Viele Arztpraxen finden keinen Nachfolger, wenn der bisherige Arzt in Rente geht.",
          "Die Universitätsmedizin Magdeburg und Halle bilden Ärzte aus, die aber oft in andere Bundesländer abwandern."
        ]
      },
      {
        id: 1413,
        topic: "Halle als Wissenschaftsstadt",
        question: "Halle hat eine starke Universität und die Leopoldina. Wie kann die Stadt als Wissenschaftsstandort gestärkt werden?",
        statement: "Halle sollte sich als Wissenschafts- und Gründerstadt positionieren und mehr Wagniskapital und Startups in die Stadt holen.",
        infoFacts: [
          "Die Martin-Luther-Universität Halle-Wittenberg hat rund 20.000 Studierende.",
          "Die Leopoldina, die nationale Akademie der Wissenschaften, hat ihren Sitz in Halle.",
          "Halle hat ein wachsendes Startup-Ökosystem, das aber noch deutlich hinter Leipzig und Dresden liegt."
        ]
      },
      {
        id: 1414,
        topic: "Landwirtschaft",
        question: "Sachsen-Anhalt hat die größten Agrarbetriebe Deutschlands. Ist die industrielle Landwirtschaft zukunftsfähig?",
        statement: "Die großflächige Landwirtschaft in Sachsen-Anhalt sollte ökologischer werden, auch wenn das die Produktionskosten erhöht.",
        infoFacts: [
          "Die durchschnittliche Betriebsgröße in Sachsen-Anhalt liegt bei über 270 Hektar — ein Vielfaches des westdeutschen Durchschnitts.",
          "Die Magdeburger Börde hat einige der fruchtbarsten Böden Deutschlands.",
          "Der Öko-Landbau-Anteil in Sachsen-Anhalt ist mit unter 10 % noch relativ niedrig."
        ]
      },
      {
        id: 1415,
        topic: "Bahnanbindung",
        question: "Sachsen-Anhalts Bahnanbindung ist besonders im Norden schlecht. Braucht es mehr Investitionen in die Schiene?",
        statement: "Die Bahnanbindung in Sachsen-Anhalt muss dringend verbessert werden, insbesondere durch die Reaktivierung stillgelegter Strecken und schnellere IC-Verbindungen.",
        infoFacts: [
          "Die ICE-Strecke Halle-Berlin ist gut ausgebaut, viele Nebenverbindungen sind aber veraltet.",
          "Im Norden Sachsen-Anhalts (Altmark, Stendal) gibt es kaum Zugverbindungen.",
          "Stillgelegte Bahnstrecken könnten reaktiviert werden, was aber Milliarden-Investitionen erfordert."
        ]
      }
    ],
    federalQuestionIds: [1, 2, 3, 4, 5, 6, 7, 8, 10, 12, 14, 16, 21, 25, 30]
  },

  "sh": {
    name: "Schleswig-Holstein",
    stateQuestions: [
      {
        id: 1501,
        topic: "Windenergie",
        question: "Schleswig-Holstein ist führend bei der Windenergie. Sollte der Ausbau weiter beschleunigt werden?",
        statement: "Schleswig-Holstein sollte den Windkraftausbau weiter beschleunigen und mindestens 3 % der Landesfläche für Windenergie bereitstellen.",
        infoFacts: [
          "Schleswig-Holstein erzeugt bereits mehr als 100 % seines Stromverbrauchs aus erneuerbaren Quellen.",
          "Rund 3.200 Windkraftanlagen stehen im Land, oft wird überschüssiger Strom abgeregelt.",
          "Fehlende Stromleitungen in den Süden verhindern, dass Schleswig-Holsteins Windstrom optimal genutzt wird."
        ]
      },
      {
        id: 1502,
        topic: "Fehmarnbelt-Tunnel",
        question: "Der Fehmarnbelt-Tunnel soll Deutschland und Dänemark verbinden. Ist das Milliardenprojekt sinnvoll?",
        statement: "Der Fehmarnbelt-Tunnel ist eine sinnvolle Investition in die europäische Verkehrsinfrastruktur, die Schleswig-Holstein nachhaltig stärken wird.",
        infoFacts: [
          "Der Fehmarnbelt-Tunnel wird mit 18 Kilometern der längste Absenktunnel der Welt.",
          "Die Baukosten werden auf über acht Milliarden Euro geschätzt, finanziert wird er hauptsächlich von Dänemark.",
          "Die Fahrzeit zwischen Hamburg und Kopenhagen soll sich durch den Tunnel auf unter drei Stunden verkürzen."
        ]
      },
      {
        id: 1503,
        topic: "Tourismus Nordsee/Ostsee",
        question: "Der Tourismus ist Schleswig-Holsteins wichtigster Wirtschaftszweig. Wie kann er nachhaltiger werden?",
        statement: "Der Tourismus in Schleswig-Holstein sollte nachhaltiger gestaltet werden, auch wenn das bedeutet, die Besucherzahlen an Hotspots wie Sylt zu begrenzen.",
        infoFacts: [
          "Schleswig-Holstein verzeichnet jährlich über 35 Millionen Übernachtungen.",
          "Sylt, St. Peter-Ording und die Ostsee-Bäder sind die beliebtesten Urlaubsziele.",
          "Der Tourismus sichert rund 170.000 Arbeitsplätze in Schleswig-Holstein."
        ]
      },
      {
        id: 1504,
        topic: "Sylt & Wohnungskrise",
        question: "Auf Sylt können sich Einheimische kaum noch Wohnungen leisten, weil viele Immobilien als Ferienwohnungen genutzt werden. Was sollte getan werden?",
        statement: "Auf den Nordseeinseln sollte die Umwandlung von Wohnraum in Ferienwohnungen streng begrenzt werden, um bezahlbares Wohnen für Einheimische zu sichern.",
        infoFacts: [
          "Auf Sylt kostet eine Eigentumswohnung im Schnitt über 10.000 Euro pro Quadratmeter.",
          "Rund ein Drittel aller Wohnungen auf Sylt sind Ferienwohnungen oder Zweitwohnungen.",
          "Viele Arbeitskräfte auf Sylt pendeln vom Festland, weil sie sich keine Inselwohnung leisten können."
        ]
      },
      {
        id: 1505,
        topic: "Dänische Minderheit (SSW)",
        question: "Der SSW vertritt die dänische Minderheit in Schleswig-Holstein und sitzt sogar im Bundestag. Wie gut funktioniert der Minderheitenschutz?",
        statement: "Der Schutz der dänischen Minderheit und der friesischen Volksgruppe in Schleswig-Holstein ist vorbildlich und sollte auch für andere Minderheiten als Modell dienen.",
        infoFacts: [
          "Rund 50.000 Menschen in Schleswig-Holstein gehören der dänischen Minderheit an.",
          "Der SSW ist als Partei der dänischen Minderheit von der 5-%-Hürde befreit.",
          "In Flensburg und Umgebung gibt es dänische Schulen, Kindergärten und Kultureinrichtungen."
        ]
      },
      {
        id: 1506,
        topic: "Marine & Bundeswehr Kiel",
        question: "Kiel ist der wichtigste Marinestandort Deutschlands. Sollte die Marine angesichts der Sicherheitslage ausgebaut werden?",
        statement: "Der Marinestandort Kiel sollte deutlich gestärkt und die deutsche Marine mit neuen Schiffen ausgestattet werden.",
        infoFacts: [
          "In Kiel ist das Marinekommando und eine der größten Marinewerften Deutschlands (TKMS) angesiedelt.",
          "Die Bundeswehr plant die Beschaffung neuer U-Boote und Fregatten, die in Kiel gebaut werden sollen.",
          "Die Werften in Kiel und Flensburg sind wichtige Arbeitgeber für die Region."
        ]
      },
      {
        id: 1507,
        topic: "Nord-Ostsee-Kanal",
        question: "Der Nord-Ostsee-Kanal ist die meistbefahrene künstliche Wasserstraße der Welt, aber marode. Wie dringend ist die Sanierung?",
        statement: "Die Sanierung des Nord-Ostsee-Kanals muss vom Bund endlich priorisiert und mit ausreichend Mitteln finanziert werden.",
        infoFacts: [
          "Der Nord-Ostsee-Kanal wird von rund 30.000 Schiffen jährlich durchfahren.",
          "Veraltete Schleusen in Brunsbüttel und Kiel verursachen regelmäßig Engpässe.",
          "Die Sanierung der Schleusen kostet mehrere Milliarden Euro und liegt Jahre hinter dem Zeitplan."
        ]
      },
      {
        id: 1508,
        topic: "Wohnungsnot Kiel/Lübeck",
        question: "In Kiel und Lübeck herrscht akuter Wohnungsmangel, besonders für Studierende und Geringverdiener. Was muss passieren?",
        statement: "Kiel und Lübeck brauchen einen Wohnungsbau-Notfallplan mit mindestens 5.000 neuen Sozialwohnungen in den nächsten Jahren.",
        infoFacts: [
          "In Kiel fehlen schätzungsweise 10.000 Wohnungen, vor allem im bezahlbaren Segment.",
          "Die Mieten in Kiel und Lübeck sind in den letzten zehn Jahren um über 40 % gestiegen.",
          "Die Kieler Universität hat über 27.000 Studierende, aber es gibt kaum studentischen Wohnraum."
        ]
      },
      {
        id: 1509,
        topic: "Landwirtschaft & Küste",
        question: "Die Landwirtschaft in Schleswig-Holstein steht zwischen Intensivierung und Naturschutz. Welchen Weg sollte sie gehen?",
        statement: "Die schleswig-holsteinische Landwirtschaft sollte stärker auf ökologischen Anbau umstellen, auch wenn das die Erträge senkt.",
        infoFacts: [
          "Schleswig-Holstein hat einen der höchsten Anteile an landwirtschaftlicher Nutzfläche aller Bundesländer.",
          "Die Milchviehhaltung und der Ackerbau prägen die Agrarwirtschaft des Landes.",
          "Rund 12 % der landwirtschaftlichen Fläche in Schleswig-Holstein werden ökologisch bewirtschaftet."
        ]
      },
      {
        id: 1510,
        topic: "Energiewende & Stromnetze",
        question: "Schleswig-Holstein produziert mehr Windstrom als es verbrauchen kann, aber es fehlen Leitungen in den Süden. Wie kann das Problem gelöst werden?",
        statement: "Der Bau neuer Hochspannungsleitungen von Schleswig-Holstein in den Süden muss mit höchster Priorität vorangetrieben werden, auch gegen Anwohnerproteste.",
        infoFacts: [
          "Schleswig-Holstein muss regelmäßig Windräder abschalten, weil der Strom nicht abtransportiert werden kann.",
          "Die SuedLink-Stromtrasse soll Windstrom nach Bayern transportieren, ist aber stark verzögert.",
          "Durch das Abschalten von Windrädern entstehen jährlich Kosten von mehreren hundert Millionen Euro."
        ]
      },
      {
        id: 1511,
        topic: "Ostsee-Schutz",
        question: "Die Ostsee leidet unter Überdüngung, Überfischung und Munitionsaltlasten. Wie kann sie besser geschützt werden?",
        statement: "Zum Schutz der Ostsee sollten strengere Umweltauflagen für Landwirtschaft und Schifffahrt gelten, auch wenn das wirtschaftliche Einschränkungen bedeutet.",
        infoFacts: [
          "Die Ostsee gehört zu den am stärksten verschmutzten Meeren Europas.",
          "Rund 1,6 Millionen Tonnen Munitionsaltlasten liegen noch am Grund der Ostsee.",
          "Die Düngung aus der Landwirtschaft ist eine Hauptursache für die Überdüngung der Ostsee."
        ]
      },
      {
        id: 1512,
        topic: "Fachkräfte im Tourismus",
        question: "Hotels und Gaststätten in Schleswig-Holstein finden kaum noch Personal. Wie kann der Fachkräftemangel im Tourismus gelöst werden?",
        statement: "Die Arbeitsbedingungen und Löhne in der Tourismusbranche müssen deutlich verbessert werden, damit die Branche wieder attraktiv wird.",
        infoFacts: [
          "Rund 30 % der Gastronomie- und Hotelbetriebe in Schleswig-Holstein suchen dringend Personal.",
          "Die Löhne in der Tourismusbranche liegen oft am oder unter dem Mindestlohnniveau.",
          "Viele Saisonkräfte kommen aus Osteuropa, was durch verschärfte Einreiseregeln erschwert wird."
        ]
      },
      {
        id: 1513,
        topic: "Flensburg & Grenzregion",
        question: "Flensburg profitiert von der Nähe zu Dänemark. Wie kann die deutsch-dänische Grenzregion weiter gestärkt werden?",
        statement: "Die Grenzregion um Flensburg sollte eine Sonderstellung mit erleichterten grenzüberschreitenden Regelungen für Arbeit und Pendler erhalten.",
        infoFacts: [
          "Flensburg liegt nur wenige Kilometer von der dänischen Grenze entfernt.",
          "Tausende Flensburger pendeln nach Dänemark, wo die Löhne deutlich höher sind.",
          "Das dänische Gesundheitssystem und die deutsche Krankenversicherung sind für Grenzpendler oft nicht kompatibel."
        ]
      },
      {
        id: 1514,
        topic: "Schulpolitik",
        question: "Schleswig-Holstein hat sein Schulsystem mehrfach reformiert. Ist es jetzt zukunftsfähig?",
        statement: "Schleswig-Holstein sollte die Gemeinschaftsschulen stärken und kleinere Schulstandorte auf dem Land erhalten, auch wenn das teurer ist.",
        infoFacts: [
          "Schleswig-Holstein hat mit der Gemeinschaftsschule und dem Gymnasium ein zweigliedriges Schulsystem.",
          "In ländlichen Regionen drohen Schulschließungen wegen sinkender Schülerzahlen.",
          "Die Digitalisierung der Schulen in Schleswig-Holstein gilt als fortgeschrittener als in vielen anderen Bundesländern."
        ]
      },
      {
        id: 1515,
        topic: "Wattenmeerschutz",
        question: "Das Wattenmeer an der Nordseeküste ist UNESCO-Weltnaturerbe. Wie kann es vor dem Klimawandel und wirtschaftlicher Nutzung geschützt werden?",
        statement: "Der Schutz des Wattenmeers sollte absolute Priorität haben, auch wenn das Einschränkungen für Tourismus, Fischerei und Energiewirtschaft bedeutet.",
        infoFacts: [
          "Das schleswig-holsteinische Wattenmeer ist seit 2009 UNESCO-Weltnaturerbe.",
          "Der steigende Meeresspiegel gefährdet das einzigartige Ökosystem des Wattenmeers.",
          "Konflikte bestehen zwischen Naturschutz und der Nutzung des Wattenmeers für Offshore-Wind und Fischerei."
        ]
      }
    ],
    federalQuestionIds: [1, 2, 3, 5, 6, 7, 8, 9, 10, 12, 15, 17, 20, 24, 28]
  },

  "th": {
    name: "Thüringen",
    stateQuestions: [
      {
        id: 1601,
        topic: "AfD-Regierungskrise",
        question: "Die AfD unter Björn Höcke ist in Thüringen stärkste Kraft und macht die Regierungsbildung extrem schwierig. Wie sollte damit umgegangen werden?",
        statement: "Die demokratischen Parteien in Thüringen müssen zusammenarbeiten, um eine stabile Regierung zu bilden, auch wenn das ungewöhnliche Koalitionen erfordert.",
        infoFacts: [
          "Die AfD wurde bei der Thüringer Landtagswahl 2024 mit über 32 % stärkste Partei.",
          "Der Thüringer AfD-Chef Björn Höcke darf laut Gerichtsurteil als Faschist bezeichnet werden.",
          "Die Regierungsbildung in Thüringen ist seit 2019 extrem schwierig, Minderheitsregierungen waren die Folge."
        ]
      },
      {
        id: 1602,
        topic: "Politische Stabilität",
        question: "Thüringen hat seit Jahren instabile politische Verhältnisse. Braucht es Reformen des politischen Systems?",
        statement: "Thüringen sollte die Hürden für konstruktive Misstrauensvoten senken und Minderheitsregierungen verfassungsrechtlich besser absichern.",
        infoFacts: [
          "Die Wahl des FDP-Politikers Kemmerich zum Ministerpräsidenten 2020 mit AfD-Stimmen löste eine bundesweite Krise aus.",
          "Thüringen hatte seit 2019 eine Minderheitsregierung unter Bodo Ramelow (Linke).",
          "Das Kräfteverhältnis im Landtag macht stabile Mehrheiten nahezu unmöglich."
        ]
      },
      {
        id: 1603,
        topic: "Automobilindustrie Eisenach",
        question: "Das Opel-Werk in Eisenach und andere Automobilzulieferer sind wichtige Arbeitgeber. Wie sicher sind die Arbeitsplätze?",
        statement: "Thüringen sollte die Automobilindustrie bei der Transformation aktiv unterstützen und gleichzeitig neue Industriezweige ansiedeln.",
        infoFacts: [
          "Das Opel-Werk in Eisenach (Stellantis) produziert den Grandland und beschäftigt rund 1.000 Menschen.",
          "Thüringen hat rund 500 Automobilzulieferer mit insgesamt etwa 55.000 Beschäftigten.",
          "Die Umstellung auf Elektromobilität bedroht viele Zulieferer, die Verbrennungsmotor-Teile herstellen."
        ]
      },
      {
        id: 1604,
        topic: "Thüringer Wald & Tourismus",
        question: "Der Thüringer Wald leidet unter dem Waldsterben und dem Klimawandel. Wie kann die Region für den Tourismus erhalten werden?",
        statement: "Der Thüringer Wald braucht ein umfassendes Waldumbauprogramm mit klimaresistenten Baumarten, finanziert durch Bund und Land.",
        infoFacts: [
          "Rund ein Drittel der Fichtenbestände im Thüringer Wald sind durch Dürre und Borkenkäfer abgestorben.",
          "Der Rennsteig ist Deutschlands bekanntester Fernwanderweg und zieht Hunderttausende Wanderer an.",
          "Die Wintersportorte Oberhof und Steinach sind auf schneereiche Winter angewiesen, die immer seltener werden."
        ]
      },
      {
        id: 1605,
        topic: "Carl Zeiss & Optik Jena",
        question: "Jena ist mit Carl Zeiss und Jenoptik ein Zentrum der Optik-Industrie. Wie kann der Standort gestärkt werden?",
        statement: "Jena sollte als Hightech-Standort für Optik und Photonik international stärker positioniert werden, mit mehr Förderung für Forschung und Startups.",
        infoFacts: [
          "Carl Zeiss (ZEISS) hat seinen historischen Ursprung in Jena und beschäftigt dort rund 5.000 Menschen.",
          "Jenoptik ist ein börsennotierter Optik-Konzern mit Hauptsitz in Jena.",
          "Das Fraunhofer-Institut für Angewandte Optik in Jena forscht an zukunftsweisenden Technologien."
        ]
      },
      {
        id: 1606,
        topic: "Ländlicher Raum",
        question: "Weite Teile Thüringens kämpfen mit Bevölkerungsrückgang und schwindender Infrastruktur. Was sollte der Staat tun?",
        statement: "Der ländliche Raum in Thüringen braucht massive Investitionen in Breitband, Nahverkehr und medizinische Versorgung, um lebenswert zu bleiben.",
        infoFacts: [
          "Viele ländliche Gemeinden in Thüringen haben seit 1990 über 30 % ihrer Einwohner verloren.",
          "Die letzte Arztpraxis oder Apotheke ist in vielen Orten 20 Kilometer oder mehr entfernt.",
          "Das Thüringer Modell der freiwilligen Gemeindezusammenschlüsse soll Verwaltungskosten senken."
        ]
      },
      {
        id: 1607,
        topic: "Demografie & Abwanderung",
        question: "Thüringen hat seit der Wiedervereinigung rund ein Viertel seiner Bevölkerung verloren. Kann der Trend umgekehrt werden?",
        statement: "Thüringen sollte mit gezielten Anreizen wie Willkommensprämien und günstigen Baugrundstücken um Rückkehrer und Zuwanderer werben.",
        infoFacts: [
          "Thüringens Bevölkerung sank von 2,6 Millionen (1990) auf rund 2,1 Millionen.",
          "Jena und Erfurt wachsen, während ländliche Regionen stark schrumpfen.",
          "Das Durchschnittsalter in Thüringen liegt bei über 47 Jahren."
        ]
      },
      {
        id: 1608,
        topic: "Erfurt als Landeshauptstadt",
        question: "Erfurt entwickelt sich positiv und zieht Touristen und Unternehmen an. Wie kann die Stadt als Standort noch attraktiver werden?",
        statement: "Erfurt sollte sich als ICE-Knotenpunkt und Wirtschaftsstandort stärker profilieren und gezielt Bundesbehörden und Unternehmen ansiedeln.",
        infoFacts: [
          "Erfurt liegt durch den ICE-Knoten zentral in Deutschland und ist in weniger als zwei Stunden von Berlin und München erreichbar.",
          "Die Erfurter Altstadt mit Dom und Krämerbrücke ist ein touristisches Highlight.",
          "Erfurt hat rund 215.000 Einwohner und wächst moderat."
        ]
      },
      {
        id: 1609,
        topic: "Bildung & Lehrkräftemangel",
        question: "Thüringen hat massive Probleme bei der Besetzung von Lehrerstellen. Was muss sich ändern?",
        statement: "Thüringen muss die Bezahlung und Arbeitsbedingungen für Lehrkräfte deutlich verbessern, um im Wettbewerb mit anderen Bundesländern bestehen zu können.",
        infoFacts: [
          "An Thüringer Schulen sind hunderte Stellen unbesetzt, besonders in den MINT-Fächern und auf dem Land.",
          "Viele Lehramtsabsolventen wandern in besser bezahlende westdeutsche Bundesländer ab.",
          "Thüringen hat als Reaktion auf den Mangel verstärkt Quereinsteiger eingestellt."
        ]
      },
      {
        id: 1610,
        topic: "Kultur & Weimar",
        question: "Weimar mit dem Bauhaus und der Klassik-Stiftung ist eine der kulturell bedeutendsten Städte Deutschlands. Wird das Potenzial ausgeschöpft?",
        statement: "Die Kulturförderung in Weimar und Thüringen sollte ausgebaut werden, da Kultur ein entscheidender Standortfaktor für das gesamte Land ist.",
        infoFacts: [
          "Weimar hat mit dem klassischen Weimar und dem Bauhaus gleich zwei UNESCO-Welterbestätten.",
          "Die Klassik Stiftung Weimar verwaltet über 20 Museen und Schlösser.",
          "Weimar hat nur rund 65.000 Einwohner, ist aber kulturell eine der wichtigsten Städte Deutschlands."
        ]
      },
      {
        id: 1611,
        topic: "Erneuerbare Energien",
        question: "Thüringen will seinen Anteil erneuerbarer Energien deutlich steigern. Geht der Ausbau schnell genug?",
        statement: "Thüringen sollte den Windkraft- und Solarausbau beschleunigen und Genehmigungsverfahren deutlich verkürzen.",
        infoFacts: [
          "Thüringen erzeugt derzeit rund 40 % seines Stroms aus erneuerbaren Quellen.",
          "Der Windkraftausbau in Thüringen stockt aufgrund langer Genehmigungsverfahren und Bürgerproteste.",
          "Der Thüringer Wald ist für Windkraftanlagen umstritten, da er als Erholungsgebiet gilt."
        ]
      },
      {
        id: 1612,
        topic: "Innere Sicherheit",
        question: "Thüringen diskutiert über die Sicherheitslage und die Bedrohung durch Extremismus. Braucht es mehr Polizei und Verfassungsschutz?",
        statement: "Der Verfassungsschutz in Thüringen muss personell und finanziell gestärkt werden, um extremistische Bedrohungen besser zu bekämpfen.",
        infoFacts: [
          "Die NSU-Terrorzelle hatte ihren Ursprung in Thüringen, was zu einer Neuaufstellung des Verfassungsschutzes führte.",
          "Die Zahl politisch motivierter Straftaten in Thüringen ist in den letzten Jahren gestiegen.",
          "Der Thüringer Verfassungsschutz steht wegen vergangener Versäumnisse im NSU-Komplex besonders unter Beobachtung."
        ]
      },
      {
        id: 1613,
        topic: "Landwirtschaft",
        question: "Die Landwirtschaft in Thüringen ist stark von großen Agrarbetrieben geprägt. Braucht es eine andere Agrarstruktur?",
        statement: "Thüringen sollte die kleinbäuerliche und ökologische Landwirtschaft stärker fördern, statt weiterhin vor allem Großbetriebe zu unterstützen.",
        infoFacts: [
          "Die durchschnittliche Betriebsgröße in Thüringen liegt bei über 200 Hektar — ein Erbe der DDR-Agrargenossenschaften.",
          "Viele Agrargenossenschaften aus DDR-Zeiten existieren als Großbetriebe fort.",
          "Der Öko-Landbau-Anteil in Thüringen liegt bei unter 10 % der Anbaufläche."
        ]
      },
      {
        id: 1614,
        topic: "Kommunale Finanzen",
        question: "Viele Thüringer Kommunen sind finanziell am Limit. Wie können sie wieder handlungsfähig werden?",
        statement: "Der Freistaat Thüringen sollte den kommunalen Finanzausgleich reformieren und finanzschwache Gemeinden stärker unterstützen.",
        infoFacts: [
          "Viele Thüringer Kommunen können kaum noch freiwillige Leistungen wie Kultur- oder Sportangebote finanzieren.",
          "Die kommunale Verschuldung in Thüringen liegt unter dem Bundesdurchschnitt, aber die Einnahmen sind auch geringer.",
          "Kleine Gemeinden haben oft Schwierigkeiten, pflichtgemäße Aufgaben wie Straßeninstandhaltung zu erfüllen."
        ]
      },
      {
        id: 1615,
        topic: "Gesundheitsversorgung",
        question: "Die Gesundheitsversorgung in ländlichen Teilen Thüringens wird immer dünner. Was muss geschehen?",
        statement: "Thüringen sollte ein Landärzte-Stipendium einführen und Telemedizin-Zentren in unterversorgten Regionen aufbauen.",
        infoFacts: [
          "In mehreren Thüringer Landkreisen fehlen Hausärzte, Fachärzte sind oft nur in den Städten verfügbar.",
          "Rund ein Drittel der Thüringer Hausärzte ist über 60 Jahre alt und wird bald in Rente gehen.",
          "Telemedizin-Projekte in Thüringen zeigen erste Erfolge, sind aber noch nicht flächendeckend verfügbar."
        ]
      }
    ],
    federalQuestionIds: [1, 2, 3, 4, 5, 6, 7, 8, 10, 14, 16, 21, 23, 26, 30]
  },

};

export default REGIONAL_QUESTIONS;
