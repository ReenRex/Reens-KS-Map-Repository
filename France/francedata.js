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

   An entry can also have an "indexUrl" alongside its "url" —
   use this when there's a separate index sheet for the same
   map. The title becomes the link to "url" (the main map), and
   an inline "[INDEX]" link appears right after it, pointing to
   "indexUrl":
     { title: "...", url: "main map link", indexUrl: "index link" }
   ============================================================ */
data.Europe = data.Europe || {};
data.Europe.France = {
  "18th Century": [],
  "19th Century": [
    {
      title: "France 1:40k (1820s-80s)",
      url: "https://cartes.gouv.fr/rechercher-une-donnee/dataset/IGNF_SCAN-EM-40K",
      tutorial: {
        intro: 'Scroll down until you see "Resources and Links"',
        steps: [
          { caption: "", src: "France/images/step1-40k.png" },
          { caption: "", src: "France/images/step2-40k.png" }
        ]
      }
    },
     {
        title: "France 1:50k (1837-40)",
        url: "https://www.davidrumsey.com/luna/servlet/detail/RUMSEY~8~1~362638~90129306:Carte-D-Assemblage-Des-Feuilles-De-?sort=Pub_List_No_InitialSort%2CPub_Date%2CPub_List_No%2CSeries_No&mi=1&trs=348&qvq=q:Carte%20Topographique%20De%20La%20France%20de%20l%27Etat-Major%2C%20Levee%20et%20Publiee%20Par%20Ordre%20Du%20Roi.;sort:Pub_List_No_InitialSort%2CPub_Date%2CPub_List_No%2CSeries_No;lc:RUMSEY~8~1",
        notes: 
           [
              {
                 body: "I have only linked to the index sheet. To find the sheets, search the David Rumsey website."
              }
              ]
     },
           
  ],
  "20th Century": [
    {
      title: "Normandy 1:25k (1943)",
      url: "https://cdm16630.contentdm.oclc.org/digital/collection/p16630coll8/search/searchterm/France%201%3A25%2C000",
      notes: "These sheets cannot be downloaded and must be stitched together via taking several screenshots. Although this sounds like a lengthy process, it can take around 10-20 screenshots over 25-50 minutes to capture the land on a sheet. This also depends on how zoomed in (how high quality) you wish for your screenshots to be."
    },
    {
      title: "Corsica 1:50k (1943)",
      url: "https://maps.lib.utexas.edu/maps/ams/corsica/"
    },
    {
      title: "France 1:50k (1943)",
      url: "https://maps.lib.utexas.edu/maps/ams/france_50k/",
      indexUrl: "https://digicoll.lib.berkeley.edu/record/205803?v=uv#?xywh=-201%2C-89%2C2501%2C2032&cv="
    },
    {
      title: "France 1:50k (1943)",
      url: "https://digicoll.lib.berkeley.edu/record/112502?ln=en&v=uv#?xywh=-174%2C0%2C9209%2C6237&cv=",
      indexUrl: "https://digicoll.lib.berkeley.edu/record/104702?ln=en&v=uv#?xywh=-367%2C-680%2C13408%2C7612"
    },
    {
      title: "Normandy 1:50k (1943)",
      url: "https://www.normandywarguide.com/articles/gsgs-4250-map-series",
      notes: [
        {
          heading: "USNA Sheets",
          body: 'These sheets can be downloaded easily by clicking the "Download" button in the corner when accessing the sheets.'
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
    },
    {
      title: "North-East France 1:50k (1943)",
      url: "https://maps.lib.utexas.edu/maps/ams/france_and_belgium/"
    },
    {
      title: "France 1:50k (1950)",
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
      title: "France 1:100k (1943)",
      url: "https://maps.lib.utexas.edu/maps/ams/france_100k/"
    }
  ]
};
