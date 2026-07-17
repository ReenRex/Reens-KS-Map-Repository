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

   A link can also have a plain "notes" field — just a string.
   If present, a "(Notes)" link appears next to the title and
   opens a popup showing that text (no screenshots involved).
   Useful for things like "this source can't be downloaded
   directly, here's what to do instead."
   ============================================================ */
data.Europe = data.Europe || {};

data.Europe.France = {
  "18th Century": [],
  "19th Century": [],
  "20th Century": [
    {
      title: "Normandy 1:25k Maps",
      url: "https://cdm16630.contentdm.oclc.org/digital/collection/p16630coll8/search/searchterm/France%201%3A25%2C000",
      notes: "These images cannot be downloaded and must be stiched together via taking several screenshots. Although this sounds like a lengthy process, it can take around 10-20 screenshots over 25-50 minutes to capture the land on a sheet. This also depends on how zoomed in (how high quality) you wish for your screenshots to be."
    },
    {
      title: "France 1:50,000 1950s Map",
      url: "https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_SCAN-50-HISTO",
      tutorial: {
        intro: 'Scroll down until you see "Resources and Links"',
        steps: [
          { caption: "", src: "France/images/step1.png" },
          { caption: "", src: "France/images/step2.png" },
          { caption: "", src: "" }
        ]
      }
    }
  ]
};
