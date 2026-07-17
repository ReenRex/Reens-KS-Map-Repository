/* ============================================================
   FRANCE — edit this file to add or change France's maps.

   Keep screenshots for France's tutorials inside this folder's
   "images" subfolder, and reference them here as:
     "France/images/your-file-name.png"
   Leave src as "" to show a placeholder box instead.

   A "tutorial" can be written two ways:
     tutorial: [ {caption, src}, ... ]
       — just the screenshots, no intro note
     tutorial: { intro: "some note", steps: [ {caption, src}, ... ] }
       — adds a line of text at the top of the popup, above
         the screenshots (use this if that download needs a
         heads-up before the steps, like where to scroll to)
   ============================================================ */
data.Europe = data.Europe || {};

data.Europe.France = {
  "18th Century": [],
  "19th Century": [],
  "20th Century": [
    {
      title: "France 1:50,000 1950s Map",
      url: "https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_SCAN-50-HISTO",
      tutorial: {
        intro: 'Scroll down until you see "Resources and Links"',
        steps: [
          { caption: "", src: "France/images/step1.png" },
          { caption: "", src: "France/images/step2.png" },
          { caption: "Step 3: Click download and choose your format.", src: "" }
        ]
      }
    }
  ]
};
