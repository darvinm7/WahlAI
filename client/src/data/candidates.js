// Spitzenkandidaten / Parteivorsitzende pro Region
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
      role: "SPD-Vorsitzender",
      image: "/candidates/klingbeil.jpg",
    },
    "B\u00fcndnis 90/Die Gr\u00fcnen": {
      name: "Robert Habeck",
      role: "Spitzenkandidat, Bundeswirtschaftsminister",
      image: "/candidates/habeck.jpg",
    },
    "FDP": {
      name: "Christian Lindner",
      role: "FDP-Vorsitzender",
      image: "/candidates/lindner.jpg",
    },
    "AfD": {
      name: "Alice Weidel",
      role: "AfD-Vorsitzende, Spitzenkandidatin",
      image: "/candidates/weidel.jpg",
    },
    "Die Linke": {
      name: "Jan van Aken",
      role: "Die Linke-Vorsitzender",
      image: "/candidates/vanaken.jpg",
    },
    "BSW": {
      name: "Sahra Wagenknecht",
      role: "BSW-Vorsitzende",
      image: "/candidates/wagenknecht.jpg",
    },
    "Freie W\u00e4hler": {
      name: "Hubert Aiwanger",
      role: "Freie W\u00e4hler-Vorsitzender",
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
