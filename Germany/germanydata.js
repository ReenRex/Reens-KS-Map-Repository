/* ============================================================
   GERMANY — edit this file to add or change Germany's maps.
   See France/francedata.js for full instructions on adding
   tutorials and notes to an entry.
   ============================================================ */
data.Europe = data.Europe || {};
data.Europe.Germany = {
  "18th Century": [],
  "19th Century": [
    {
      title: "Bavaria 1:25k (1880s-1940s)",
      url: "https://leibniz-ifl.de/forschung/infrastrukturen/bibliothek/kartensammlung/tk-bayern-125-000",
      notes: [
        {
          body: "These images are borderline usable. Below I have attached a screenshot of their use in TableTop Sim with some Ottovski WW2 pieces for reference.",
          image: "Germany/images/Bavaria1-25ktest.png"
        }
      ]
    },
    {
      title: "Bavaria 1:50k (1812-1867)",
      url: "https://www.bavarikon.de/search?collectionid=bav:BSB-CMS-0000000000002414&lang=de",
      notes: [
        { body: "Unfortunately, I cannot see an obvious way to download these sheets, meaning they must be stitched via several zoomed-in screenshots. Although this sounds like a lengthy process, it can take around 10-20 screenshots over 25-50 minutes to capture the land on a sheet. This also depends on how zoomed in (how high quality) you wish for your screenshots to be." }
      ]
    },
  {
      title: "Swabia 1:86.4k (1798-1828)",
      url: "https://opendigi.ub.uni-tuebingen.de/opendigi/FhXIV1a_qt#p=1",
      indexUrl: "Germany/indexes/Swabia-1798-1828-Index.html",
     notes: [ { body: "Unfortunately, I cannot see an obvious way to download these sheets, meaning they must be stitched via several zoomed-in screenshots. It can take around 10-20 screenshots over 25-50 minutes to capture the land on a sheet. This also depends on how zoomed in (how high quality) you wish for your screenshots to be." }
             { body: "The placement of the sheets are quite general and only meant to provide a rough index that can be used. Please consult your sheets closely before stitching." },
      ]
    },
    {
      title: "Bavaria 1:100k (1801-06)",
      url: "https://www.digitale-sammlungen.de/en/view/bsb00010747?page=,1"
    }
  ],
  "20th Century": [
    {
      title: "East Germany 1:10k (1970-80s)",
      url: "https://leibniz-ifl.de/forschung/infrastrukturen/bibliothek/kartensammlung/tk-110000-der-ddr",
      notes: [
        { body: "Unfortunately, the index of this collection doesn't seem to be available, however, you may be able to piece it together using the index found in the 1:25k section. Please read the 1:25k notes beforehand. You essentially just need to match up the map codes when using the 1:25k index to locate them." },
        { body: "It should also be noted that included in the 1:10k category are many 1:100k maps. This seems to be a mistake of some sort so be careful when choosing a map. Read the scale before getting too excited." }
      ]
    },
    {
      title: "German Empire 1:25k (1900s-1940s)",
      url: "https://leibniz-ifl.de/forschung/infrastrukturen/bibliothek/kartensammlung/tk-125000-des-deutschen-reichs",
      notes: [
        { body: "It should be noted that many of the maps in this collection originate from the 1880s-1910s. Despite them being republished in the following decades, the data is likely quite similar to the originals." },
        {
          body: "These images are borderline usable. Below I have attached a screenshot of their use in TableTop Sim with some Ottovski WW2 pieces for reference.",
          image: "Germany/images/GermanEmpire1-25ktest.png"
        }
      ]
    },
    {
      title: "Germany 1:25k (1952)",
      url: "https://digicoll.lib.berkeley.edu/record/112517?ln=en&v=uv#?xywh=1825%2C2444%2C2341%2C1902&cv=2279",
      indexUrl: "https://www.loc.gov/resource/g6080m.gct00113b/?sp=1&st=image&r=-0.266,0.033,1.459,0.878,0"
    },
    {
      title: "Germany 1:25k (1952) -- Alternative Database",
      url: "https://contentdm.lib.byu.edu/digital/collection/GermanyMaps/search"
    },
    {
      title: "East Germany 1:25k (1970-80s)",
      url: "https://leibniz-ifl.de/forschung/infrastrukturen/bibliothek/kartensammlung/tk-125000-der-ddr",
      notes: [
        { body: "It would seem that the indexes included at the bottom don't match the format of the maps in the catalog list. However, the indexes themselves are clickable, meaning you can find maps you need fairly easily." },
        { body: "It would seem that the first twelve or so maps have been removed in the series' catalog list." }
      ]
    },
    {
      title: "East Germany 1:50k (1980s)",
      url: "https://leibniz-ifl.de/forschung/infrastrukturen/bibliothek/kartensammlung",
      notes: [
        { body: "Unfortunately, the index of this collection doesn't seem to be available, however, you may be able to piece it together using the index found in the 1:25k section. Please read the 1:25k notes beforehand. You essentially just need to match up the map codes when using the 1:25k index to locate them." },
        { body: "Also, for some reason, the 1:50k GDR maps don't have their own page, so I have to just show you the main page and you find it from there." }
      ]
    },
    {
      title: "German Empire 1:100k (1900s)",
      url: "https://www.davidrumsey.com/luna/servlet/detail/RUMSEY~8~1~216867~90040001:Composite--Sheets-1---674--Germany-?sort=Pub_List_No_InitialSort%2CPub_Date%2CPub_List_No%2CSeries_No",
      indexUrl: "https://www.davidrumsey.com/luna/servlet/detail/RUMSEY~8~1~277615~90050631:Index-Map--Sheets-1---674?sort=Pub_List_No_InitialSort%2CPub_Date%2CPub_List_No%2CSeries_No",
      notes: [
        { body: "I have included the composite image and an index. To find specific sheets, just search their name and number on the David Rumsey site." }
      ]
    },
    {
      title: "German Empire Maps (Includes Composite 1:100k Map of the German Empire) (1900s)",
      url: "https://kartenforum.slub-dresden.de/"
    },
    {
      title: "East Germany 1:100k (1970s-80s)",
      url: "https://leibniz-ifl.de/forschung/infrastrukturen/bibliothek/kartensammlung",
      notes: [
        { body: "Unfortunately, the index of this collection doesn't seem to be available, however, you may be able to piece it together using the index found in the 1:25k section. Please read the 1:25k notes beforehand. You essentially just need to match up the map codes when using the 1:25k index to locate them." },
        { body: "Also, for some reason, the 1:100k GDR maps don't have their own page, so I have to just show you the main page and you find it from there." }
      ]
    }
  ]
};
