// Spitzenkandidaten / Parteivorsitzende pro Region (Stand März 2026)
// Bilder lokal gehostet in /candidates/

const CANDIDATES = {
  bundesweit: {
    "CDU/CSU": {
      name: "Friedrich Merz",
      role: "Bundeskanzler, CDU-Vorsitzender",
      image: "/candidates/merz.jpg",
    },
    "SPD": {
      name: "Lars Klingbeil",
      role: "SPD-Vorsitzender (Co-Vorsitz mit B\u00e4rbel Bas)",
      image: "/candidates/klingbeil.jpg",
    },
    "B\u00fcndnis 90/Die Gr\u00fcnen": {
      name: "Franziska Brantner",
      role: "Gr\u00fcnen-Vorsitzende (Co-Vorsitz mit Felix Banaszak)",
      image: "/candidates/brantner.jpg",
    },
    "FDP": {
      name: "Christian D\u00fcrr",
      role: "FDP-Vorsitzender",
      image: "/candidates/duerr.jpg",
    },
    "AfD": {
      name: "Alice Weidel",
      role: "AfD-Vorsitzende (Co-Vorsitz mit Tino Chrupalla)",
      image: "/candidates/weidel.jpg",
    },
    "Die Linke": {
      name: "Jan van Aken",
      role: "Die Linke-Vorsitzender (Co-Vorsitz mit Ines Schwerdtner)",
      image: "/candidates/vanaken.jpg",
    },
    "BSW": {
      name: "Fabio De Masi",
      role: "BSW-Vorsitzender (Co-Vorsitz mit Amira Mohamed Ali)",
      image: "/candidates/demasi.jpg",
    },
    "Freie W\u00e4hler": {
      name: "Hubert Aiwanger",
      role: "Freie W\u00e4hler-Bundesvorsitzender",
      image: "/candidates/aiwanger.jpg",
    },
    "Die PARTEI": {
      name: "Martin Sonneborn",
      role: "Die PARTEI-Vorsitzender",
      image: "/candidates/sonneborn.jpg",
    },
  },
};

export function getCandidate(region, partyName) {
  const regionData = CANDIDATES[region] || CANDIDATES["bundesweit"];
  return regionData?.[partyName] || null;
}

export default CANDIDATES;
