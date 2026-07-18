/* ============================================================
   AUSTRIA — edit this file to add or change Austria's maps.
   See France/francedata.js for full instructions on adding
   tutorials and notes to an entry.

   An entry can also have an "indexUrl" alongside its "url" —
   use this when there's a separate index sheet for the same
   map. The title becomes the link to "url" (the main map), and
   an inline "[INDEX]" link appears right after it, pointing to
   "indexUrl":
     { title: "...", url: "main map link", indexUrl: "index link" }
   ============================================================ */
data.Europe = data.Europe || {};

data.Europe.Austria = {
  "18th Century": [],
  "19th Century": [
    {
      title: "Austria-Hungary 1:75k (1876-1915)",
      url: "https://digitalcollections.nypl.org/collections/1fa2d5b0-c5ef-012f-fa0d-58d385a7bc34",
      indexUrl: "https://www.loc.gov/resource/g6481a.ct011968/?r=0.449,0.185,0.542,0.326,0"
    },
    {
      title: "Austria-Hungary 1:75k (1876-1915) -- ADDITIONAL SHEET",
      url: "https://semanchuk.com/gen/maps/spezialkartor/LiskoUndMezoLaborc.png"
    },
    {
      title: "Austria-Hungary 1:75k (1876-1915)",
      url: "https://dbs.herder-institut.de/maps/list/id/176649263?p=1",
      tutorial: {
        intro: "This database requires maps to be requested via email. You can fill in the form as seen in the instruction below.",
        steps: [
          { caption: "", src: "Austria/images/step1.png" },
          { caption: "", src: "Austria/images/step2.png" },
          { caption: "Fill out the request form with your details and submit. Depending on scan availability, you can get roughly 10-20 scan free of charge per quarter of the year.", src: "" }
        ]
      }
    }
  ],
  "20th Century": [
    {
      title: "Austria 1:25k (1919-38)",
      url: "https://digicoll.lib.berkeley.edu/record/105644?ln=en&v=uv#?xywh=-3083%2C0%2C11658%2C7896&cv=",
      indexUrl: "https://digicoll.lib.berkeley.edu/record/105505?ln=en&v=uv#?xywh=3814%2C1315%2C7933%2C4504"
    },
    {
      title: "Austria 1:25k (1938-44)",
      url: "https://digicoll.lib.berkeley.edu/record/264159?ln=en&v=uv#?xywh=-578%2C0%2C10890%2C7375&cv=",
      indexUrl: "https://digicoll.lib.berkeley.edu/record/105500?ln=en&v=uv#?xywh=953%2C849%2C9410%2C5342"
    },
    {
      title: "Austria 1:50k (1944)",
      url: "https://digicoll.lib.berkeley.edu/record/112505?ln=en&v=uv#?xywh=-5913%2C-2063%2C18577%2C12581",
      indexUrl: "https://digicoll.lib.berkeley.edu/record/105178?ln=en&v=uv#?xywh=4410%2C4244%2C4504%2C2557"
    },
    {
      title: "Austria 1:75k (1935-44)",
      url: "https://digicoll.lib.berkeley.edu/record/105638?ln=en&v=uv#?xywh=-2750%2C-1497%2C13480%2C9129",
      indexUrl: "https://digicoll.lib.berkeley.edu/record/105390?ln=en&v=uv#?xywh=0%2C-616%2C10031%2C8149&cv="
    }
  ]
};
