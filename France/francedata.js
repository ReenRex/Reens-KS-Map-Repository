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

   A link can also have a "notes" field for a popup with no
   screenshots. Two ways to write it:
     notes: "just a plain string"
       — one simple block of text
     notes: [ { heading: "...", body: "...", email: "..." }, ... ]
       — one or more bold headings, each with its own text.
         "email" is optional — adds a mailto link under that
         section if given.
   Either way, a "(Notes)" link appears next to the title.
   ============================================================ */
data.Europe = data.Europe || {};

data.Europe.France = {
  "18th Century": [],
  "19th Century": [],
  "20th Century": [
    {
      title: "Normandy 1:25k Maps (1943)",
      url: "https://cdm16630.contentdm.oclc.org/digital/collection/p16630coll8/search/searchterm/France%201%3A25%2C000",
      notes: "These sheets cannot be downloaded and must be stiched together via taking several zoomed-in screenshots. Although this sounds like a lengthy process, it can take around 10-20 screenshots over 25-50 minutes to capture the land on a sheet. This also depends on how zoomed in (how high quality) you wish for your screenshots to be."
    },
    {
      title: "France 1:50,000 1950 Survey Map",
      url: "https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_SCAN-50-HISTO",
      tutorial: {
        intro: 'Scroll down until you see "Resources and Links"',
        steps: [
          { caption: "", src: "France/images/step1.png" },
          { caption: "", src: "France/images/step2.png" },
          { caption: "", src: "" }
        ]
      }
    },
    {
      title: "Normandy 1:50k (1943)",
      url: "https://www.normandywarguide.com/articles/gsgs-4250-map-series",
      notes: [
        {
          heading: "USNA Sheets",
          body: 'These sheets can be downloaded easily by clicking the "Download" button in the bottom left corner when accessing the sheets.'
        },
        {
          heading: "NWG Sheets",
          body: "These sheets cannot be downloaded and must be stitched together via taking several zoomed-in screenshots. Although this sounds like a lengthy process, it can take around 10-20 screenshots over 25-50 minutes to capture the land on a sheet. This also depends on how zoomed in (how high quality) you wish for your screenshots to be."
        },
        {
          heading: "CGNL",
          body: "These sheets cannot be downloaded or feasibly stitched. The owners suggest contacting them in order to download.",
          email: "info@collectiegelderland.nl"
        }
      ]
    }
  ]
};
