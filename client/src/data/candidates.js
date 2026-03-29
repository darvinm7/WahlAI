// Spitzenkandidaten / Parteivorsitzende pro Region
// Bilder von Wikimedia Commons (offizielle Porträts)

const CANDIDATES = {
  bundesweit: {
    "CDU/CSU": {
      name: "Friedrich Merz",
      role: "Bundeskanzler, CDU-Vorsitzender",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/2024-02-12_Friedrich_Merz_CDU_0592.jpg/150px-2024-02-12_Friedrich_Merz_CDU_0592.jpg",
    },
    "SPD": {
      name: "Lars Klingbeil",
      role: "SPD-Vorsitzender",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/2024-06-08_Lars_Klingbeil_SPD_Bundesparteitag_by_Sandro_Halank%E2%80%932666.jpg/150px-2024-06-08_Lars_Klingbeil_SPD_Bundesparteitag_by_Sandro_Halank%E2%80%932666.jpg",
    },
    "B\u00fcndnis 90/Die Gr\u00fcnen": {
      name: "Robert Habeck",
      role: "Spitzenkandidat, Bundeswirtschaftsminister",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Robert_Habeck_2025_%28cropped%29.jpg/150px-Robert_Habeck_2025_%28cropped%29.jpg",
    },
    "FDP": {
      name: "Christian Lindner",
      role: "FDP-Vorsitzender",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/2024-04-27_Christian_Lindner_FDP_Bundesparteitag_by_Sandro_Halank%E2%80%931008.jpg/150px-2024-04-27_Christian_Lindner_FDP_Bundesparteitag_by_Sandro_Halank%E2%80%931008.jpg",
    },
    "AfD": {
      name: "Alice Weidel",
      role: "AfD-Vorsitzende, Spitzenkandidatin",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/77/2024-01-13_Landesparteitag_AfD_Sachsen_by_Sandro_Halank%E2%80%933243.jpg/150px-2024-01-13_Landesparteitag_AfD_Sachsen_by_Sandro_Halank%E2%80%933243.jpg",
    },
    "Die Linke": {
      name: "Jan van Aken",
      role: "Die Linke-Vorsitzender",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Jan_van_Aken_2024_%28cropped%29.jpg/150px-Jan_van_Aken_2024_%28cropped%29.jpg",
    },
    "BSW": {
      name: "Sahra Wagenknecht",
      role: "BSW-Vorsitzende",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/Sahra_Wagenknecht_2023_%28cropped%29.jpg/150px-Sahra_Wagenknecht_2023_%28cropped%29.jpg",
    },
    "Freie W\u00e4hler": {
      name: "Hubert Aiwanger",
      role: "Freie W\u00e4hler-Vorsitzender",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3e/Hubert_Aiwanger_2023_%28cropped%29.jpg/150px-Hubert_Aiwanger_2023_%28cropped%29.jpg",
    },
    "Die PARTEI": {
      name: "Martin Sonneborn",
      role: "Die PARTEI-Vorsitzender",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/Martin_Sonneborn_EP2024_%28cropped%29.jpg/150px-Martin_Sonneborn_EP2024_%28cropped%29.jpg",
    },
  },
};

export function getCandidate(region, partyName) {
  const regionData = CANDIDATES[region] || CANDIDATES["bundesweit"];
  return regionData?.[partyName] || null;
}

export default CANDIDATES;
