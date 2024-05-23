import G6 from '@antv/g6';
import React, { useEffect } from "react";

const data ={
    "nodes": [
      {
        "id": "Myriel",
        "group": "cluster10_ianr8loqv"
      },
      {
        "id": "Napoleon",
        "group": "cluster1_0h4jf2hw4"
      },
      {
        "id": "Mlle.Baptistine",
        "group": "cluster3_2tr99admm"
      },
      {
        "id": "Mme.Magloire",
        "group": "cluster3_2tr99admm"
      },
      {
        "id": "CountessdeLo",
        "group": "cluster1_0h4jf2hw4"
      },
      {
        "id": "Geborand",
        "group": "cluster1_0h4jf2hw4"
      },
      {
        "id": "Champtercier",
        "group": "cluster1_0h4jf2hw4"
      },
      {
        "id": "Cravatte",
        "group": "cluster1_0h4jf2hw4"
      },
      {
        "id": "Count",
        "group": "cluster1_0h4jf2hw4"
      },
      {
        "id": "OldMan",
        "group": "cluster1_0h4jf2hw4"
      },
      {
        "id": "Labarre",
        "group": "cluster1_0h4jf2hw4"
      },
      {
        "id": "Valjean",
        "group": "cluster36_rlrqsd0gi"
      },
      {
        "id": "Marguerite",
        "group": "cluster2_8jtfxihg6"
      },
      {
        "id": "Mme.deR",
        "group": "cluster1_0h4jf2hw4"
      },
      {
        "id": "Isabeau",
        "group": "cluster1_0h4jf2hw4"
      },
      {
        "id": "Gervais",
        "group": "cluster1_0h4jf2hw4"
      },
      {
        "id": "Tholomyes",
        "group": "cluster9_2s92iwbxp"
      },
      {
        "id": "Listolier",
        "group": "cluster7_nzytzniw5"
      },
      {
        "id": "Fameuil",
        "group": "cluster7_nzytzniw5"
      },
      {
        "id": "Blacheville",
        "group": "cluster7_nzytzniw5"
      },
      {
        "id": "Favourite",
        "group": "cluster7_nzytzniw5"
      },
      {
        "id": "Dahlia",
        "group": "cluster7_nzytzniw5"
      },
      {
        "id": "Zephine",
        "group": "cluster7_nzytzniw5"
      },
      {
        "id": "Fantine",
        "group": "cluster15_z36i2sna6"
      },
      {
        "id": "Mme.Thenardier",
        "group": "cluster11_dv4embt7a"
      },
      {
        "id": "Thenardier",
        "group": "cluster16_8y8yroys2"
      },
      {
        "id": "Cosette",
        "group": "cluster11_dv4embt7a"
      },
      {
        "id": "Javert",
        "group": "cluster17_cg7frdzfg"
      },
      {
        "id": "Fauchelevent",
        "group": "cluster4_dbmpc1t9r"
      },
      {
        "id": "Bamatabois",
        "group": "cluster8_7epq3qjo5"
      },
      {
        "id": "Perpetue",
        "group": "cluster2_8jtfxihg6"
      },
      {
        "id": "Simplice",
        "group": "cluster4_dbmpc1t9r"
      },
      {
        "id": "Scaufflaire",
        "group": "cluster1_0h4jf2hw4"
      },
      {
        "id": "Woman1",
        "group": "cluster2_8jtfxihg6"
      },
      {
        "id": "Judge",
        "group": "cluster6_d0mqnkn8h"
      },
      {
        "id": "Champmathieu",
        "group": "cluster6_d0mqnkn8h"
      },
      {
        "id": "Brevet",
        "group": "cluster6_d0mqnkn8h"
      },
      {
        "id": "Chenildieu",
        "group": "cluster6_d0mqnkn8h"
      },
      {
        "id": "Cochepaille",
        "group": "cluster6_d0mqnkn8h"
      },
      {
        "id": "Pontmercy",
        "group": "cluster3_2tr99admm"
      },
      {
        "id": "Boulatruelle",
        "group": "cluster1_0h4jf2hw4"
      },
      {
        "id": "Eponine",
        "group": "cluster11_dv4embt7a"
      },
      {
        "id": "Anzelma",
        "group": "cluster3_2tr99admm"
      },
      {
        "id": "Woman2",
        "group": "cluster3_2tr99admm"
      },
      {
        "id": "MotherInnocent",
        "group": "cluster2_8jtfxihg6"
      },
      {
        "id": "Gribier",
        "group": "cluster1_0h4jf2hw4"
      },
      {
        "id": "Jondrette",
        "group": "cluster1_0h4jf2hw4"
      },
      {
        "id": "Mme.Burgon",
        "group": "cluster2_8jtfxihg6"
      },
      {
        "id": "Gavroche",
        "group": "cluster22_tbgixs7b3"
      },
      {
        "id": "Gillenormand",
        "group": "cluster7_nzytzniw5"
      },
      {
        "id": "Magnon",
        "group": "cluster2_8jtfxihg6"
      },
      {
        "id": "Mlle.Gillenormand",
        "group": "cluster7_nzytzniw5"
      },
      {
        "id": "Mme.Pontmercy",
        "group": "cluster2_8jtfxihg6"
      },
      {
        "id": "Mlle.Vaubois",
        "group": "cluster1_0h4jf2hw4"
      },
      {
        "id": "Lt.Gillenormand",
        "group": "cluster4_dbmpc1t9r"
      },
      {
        "id": "Marius",
        "group": "cluster19_cq1dp146a"
      },
      {
        "id": "BaronessT",
        "group": "cluster2_8jtfxihg6"
      },
      {
        "id": "Mabeuf",
        "group": "cluster11_dv4embt7a"
      },
      {
        "id": "Enjolras",
        "group": "cluster15_z36i2sna6"
      },
      {
        "id": "Combeferre",
        "group": "cluster11_dv4embt7a"
      },
      {
        "id": "Prouvaire",
        "group": "cluster9_2s92iwbxp"
      },
      {
        "id": "Feuilly",
        "group": "cluster11_dv4embt7a"
      },
      {
        "id": "Courfeyrac",
        "group": "cluster13_72giak2iw"
      },
      {
        "id": "Bahorel",
        "group": "cluster12_fme6vfmme"
      },
      {
        "id": "Bossuet",
        "group": "cluster13_72giak2iw"
      },
      {
        "id": "Joly",
        "group": "cluster12_fme6vfmme"
      },
      {
        "id": "Grantaire",
        "group": "cluster10_ianr8loqv"
      },
      {
        "id": "MotherPlutarch",
        "group": "cluster1_0h4jf2hw4"
      },
      {
        "id": "Gueulemer",
        "group": "cluster10_ianr8loqv"
      },
      {
        "id": "Babet",
        "group": "cluster10_ianr8loqv"
      },
      {
        "id": "Claquesous",
        "group": "cluster10_ianr8loqv"
      },
      {
        "id": "Montparnasse",
        "group": "cluster9_2s92iwbxp"
      },
      {
        "id": "Toussaint",
        "group": "cluster3_2tr99admm"
      },
      {
        "id": "Child1",
        "group": "cluster2_8jtfxihg6"
      },
      {
        "id": "Child2",
        "group": "cluster2_8jtfxihg6"
      },
      {
        "id": "Brujon",
        "group": "cluster7_nzytzniw5"
      },
      {
        "id": "Mme.Hucheloup",
        "group": "cluster7_nzytzniw5"
      }
    ],
    "edges": [
      {
        "source": "Napoleon",
        "target": "Myriel",
        "value": 1
      },
      {
        "source": "Mlle.Baptistine",
        "target": "Myriel",
        "value": 8
      },
      {
        "source": "Mme.Magloire",
        "target": "Myriel",
        "value": 10
      },
      {
        "source": "Mme.Magloire",
        "target": "Mlle.Baptistine",
        "value": 6
      },
      {
        "source": "CountessdeLo",
        "target": "Myriel",
        "value": 1
      },
      {
        "source": "Geborand",
        "target": "Myriel",
        "value": 1
      },
      {
        "source": "Champtercier",
        "target": "Myriel",
        "value": 1
      },
      {
        "source": "Cravatte",
        "target": "Myriel",
        "value": 1
      },
      {
        "source": "Count",
        "target": "Myriel",
        "value": 2
      },
      {
        "source": "OldMan",
        "target": "Myriel",
        "value": 1
      },
      {
        "source": "Valjean",
        "target": "Labarre",
        "value": 1
      },
      {
        "source": "Valjean",
        "target": "Mme.Magloire",
        "value": 3
      },
      {
        "source": "Valjean",
        "target": "Mlle.Baptistine",
        "value": 3
      },
      {
        "source": "Valjean",
        "target": "Myriel",
        "value": 5
      },
      {
        "source": "Marguerite",
        "target": "Valjean",
        "value": 1
      },
      {
        "source": "Mme.deR",
        "target": "Valjean",
        "value": 1
      },
      {
        "source": "Isabeau",
        "target": "Valjean",
        "value": 1
      },
      {
        "source": "Gervais",
        "target": "Valjean",
        "value": 1
      },
      {
        "source": "Listolier",
        "target": "Tholomyes",
        "value": 4
      },
      {
        "source": "Fameuil",
        "target": "Tholomyes",
        "value": 4
      },
      {
        "source": "Fameuil",
        "target": "Listolier",
        "value": 4
      },
      {
        "source": "Blacheville",
        "target": "Tholomyes",
        "value": 4
      },
      {
        "source": "Blacheville",
        "target": "Listolier",
        "value": 4
      },
      {
        "source": "Blacheville",
        "target": "Fameuil",
        "value": 4
      },
      {
        "source": "Favourite",
        "target": "Tholomyes",
        "value": 3
      },
      {
        "source": "Favourite",
        "target": "Listolier",
        "value": 3
      },
      {
        "source": "Favourite",
        "target": "Fameuil",
        "value": 3
      },
      {
        "source": "Favourite",
        "target": "Blacheville",
        "value": 4
      },
      {
        "source": "Dahlia",
        "target": "Tholomyes",
        "value": 3
      },
      {
        "source": "Dahlia",
        "target": "Listolier",
        "value": 3
      },
      {
        "source": "Dahlia",
        "target": "Fameuil",
        "value": 3
      },
      {
        "source": "Dahlia",
        "target": "Blacheville",
        "value": 3
      },
      {
        "source": "Dahlia",
        "target": "Favourite",
        "value": 5
      },
      {
        "source": "Zephine",
        "target": "Tholomyes",
        "value": 3
      },
      {
        "source": "Zephine",
        "target": "Listolier",
        "value": 3
      },
      {
        "source": "Zephine",
        "target": "Fameuil",
        "value": 3
      },
      {
        "source": "Zephine",
        "target": "Blacheville",
        "value": 3
      },
      {
        "source": "Zephine",
        "target": "Favourite",
        "value": 4
      },
      {
        "source": "Zephine",
        "target": "Dahlia",
        "value": 4
      },
      {
        "source": "Fantine",
        "target": "Tholomyes",
        "value": 3
      },
      {
        "source": "Fantine",
        "target": "Listolier",
        "value": 3
      },
      {
        "source": "Fantine",
        "target": "Fameuil",
        "value": 3
      },
      {
        "source": "Fantine",
        "target": "Blacheville",
        "value": 3
      },
      {
        "source": "Fantine",
        "target": "Favourite",
        "value": 4
      },
      {
        "source": "Fantine",
        "target": "Dahlia",
        "value": 4
      },
      {
        "source": "Fantine",
        "target": "Zephine",
        "value": 4
      },
      {
        "source": "Fantine",
        "target": "Marguerite",
        "value": 2
      },
      {
        "source": "Fantine",
        "target": "Valjean",
        "value": 9
      },
      {
        "source": "Mme.Thenardier",
        "target": "Fantine",
        "value": 2
      },
      {
        "source": "Mme.Thenardier",
        "target": "Valjean",
        "value": 7
      },
      {
        "source": "Thenardier",
        "target": "Mme.Thenardier",
        "value": 13
      },
      {
        "source": "Thenardier",
        "target": "Fantine",
        "value": 1
      },
      {
        "source": "Thenardier",
        "target": "Valjean",
        "value": 12
      },
      {
        "source": "Cosette",
        "target": "Mme.Thenardier",
        "value": 4
      },
      {
        "source": "Cosette",
        "target": "Valjean",
        "value": 31
      },
      {
        "source": "Cosette",
        "target": "Tholomyes",
        "value": 1
      },
      {
        "source": "Cosette",
        "target": "Thenardier",
        "value": 1
      },
      {
        "source": "Javert",
        "target": "Valjean",
        "value": 17
      },
      {
        "source": "Javert",
        "target": "Fantine",
        "value": 5
      },
      {
        "source": "Javert",
        "target": "Thenardier",
        "value": 5
      },
      {
        "source": "Javert",
        "target": "Mme.Thenardier",
        "value": 1
      },
      {
        "source": "Javert",
        "target": "Cosette",
        "value": 1
      },
      {
        "source": "Fauchelevent",
        "target": "Valjean",
        "value": 8
      },
      {
        "source": "Fauchelevent",
        "target": "Javert",
        "value": 1
      },
      {
        "source": "Bamatabois",
        "target": "Fantine",
        "value": 1
      },
      {
        "source": "Bamatabois",
        "target": "Javert",
        "value": 1
      },
      {
        "source": "Bamatabois",
        "target": "Valjean",
        "value": 2
      },
      {
        "source": "Perpetue",
        "target": "Fantine",
        "value": 1
      },
      {
        "source": "Simplice",
        "target": "Perpetue",
        "value": 2
      },
      {
        "source": "Simplice",
        "target": "Valjean",
        "value": 3
      },
      {
        "source": "Simplice",
        "target": "Fantine",
        "value": 2
      },
      {
        "source": "Simplice",
        "target": "Javert",
        "value": 1
      },
      {
        "source": "Scaufflaire",
        "target": "Valjean",
        "value": 1
      },
      {
        "source": "Woman1",
        "target": "Valjean",
        "value": 2
      },
      {
        "source": "Woman1",
        "target": "Javert",
        "value": 1
      },
      {
        "source": "Judge",
        "target": "Valjean",
        "value": 3
      },
      {
        "source": "Judge",
        "target": "Bamatabois",
        "value": 2
      },
      {
        "source": "Champmathieu",
        "target": "Valjean",
        "value": 3
      },
      {
        "source": "Champmathieu",
        "target": "Judge",
        "value": 3
      },
      {
        "source": "Champmathieu",
        "target": "Bamatabois",
        "value": 2
      },
      {
        "source": "Brevet",
        "target": "Judge",
        "value": 2
      },
      {
        "source": "Brevet",
        "target": "Champmathieu",
        "value": 2
      },
      {
        "source": "Brevet",
        "target": "Valjean",
        "value": 2
      },
      {
        "source": "Brevet",
        "target": "Bamatabois",
        "value": 1
      },
      {
        "source": "Chenildieu",
        "target": "Judge",
        "value": 2
      },
      {
        "source": "Chenildieu",
        "target": "Champmathieu",
        "value": 2
      },
      {
        "source": "Chenildieu",
        "target": "Brevet",
        "value": 2
      },
      {
        "source": "Chenildieu",
        "target": "Valjean",
        "value": 2
      },
      {
        "source": "Chenildieu",
        "target": "Bamatabois",
        "value": 1
      },
      {
        "source": "Cochepaille",
        "target": "Judge",
        "value": 2
      },
      {
        "source": "Cochepaille",
        "target": "Champmathieu",
        "value": 2
      },
      {
        "source": "Cochepaille",
        "target": "Brevet",
        "value": 2
      },
      {
        "source": "Cochepaille",
        "target": "Chenildieu",
        "value": 2
      },
      {
        "source": "Cochepaille",
        "target": "Valjean",
        "value": 2
      },
      {
        "source": "Cochepaille",
        "target": "Bamatabois",
        "value": 1
      },
      {
        "source": "Pontmercy",
        "target": "Thenardier",
        "value": 1
      },
      {
        "source": "Boulatruelle",
        "target": "Thenardier",
        "value": 1
      },
      {
        "source": "Eponine",
        "target": "Mme.Thenardier",
        "value": 2
      },
      {
        "source": "Eponine",
        "target": "Thenardier",
        "value": 3
      },
      {
        "source": "Anzelma",
        "target": "Eponine",
        "value": 2
      },
      {
        "source": "Anzelma",
        "target": "Thenardier",
        "value": 2
      },
      {
        "source": "Anzelma",
        "target": "Mme.Thenardier",
        "value": 1
      },
      {
        "source": "Woman2",
        "target": "Valjean",
        "value": 3
      },
      {
        "source": "Woman2",
        "target": "Cosette",
        "value": 1
      },
      {
        "source": "Woman2",
        "target": "Javert",
        "value": 1
      },
      {
        "source": "MotherInnocent",
        "target": "Fauchelevent",
        "value": 3
      },
      {
        "source": "MotherInnocent",
        "target": "Valjean",
        "value": 1
      },
      {
        "source": "Gribier",
        "target": "Fauchelevent",
        "value": 2
      },
      {
        "source": "Mme.Burgon",
        "target": "Jondrette",
        "value": 1
      },
      {
        "source": "Gavroche",
        "target": "Mme.Burgon",
        "value": 2
      },
      {
        "source": "Gavroche",
        "target": "Thenardier",
        "value": 1
      },
      {
        "source": "Gavroche",
        "target": "Javert",
        "value": 1
      },
      {
        "source": "Gavroche",
        "target": "Valjean",
        "value": 1
      },
      {
        "source": "Gillenormand",
        "target": "Cosette",
        "value": 3
      },
      {
        "source": "Gillenormand",
        "target": "Valjean",
        "value": 2
      },
      {
        "source": "Magnon",
        "target": "Gillenormand",
        "value": 1
      },
      {
        "source": "Magnon",
        "target": "Mme.Thenardier",
        "value": 1
      },
      {
        "source": "Mlle.Gillenormand",
        "target": "Gillenormand",
        "value": 9
      },
      {
        "source": "Mlle.Gillenormand",
        "target": "Cosette",
        "value": 2
      },
      {
        "source": "Mlle.Gillenormand",
        "target": "Valjean",
        "value": 2
      },
      {
        "source": "Mme.Pontmercy",
        "target": "Mlle.Gillenormand",
        "value": 1
      },
      {
        "source": "Mme.Pontmercy",
        "target": "Pontmercy",
        "value": 1
      },
      {
        "source": "Mlle.Vaubois",
        "target": "Mlle.Gillenormand",
        "value": 1
      },
      {
        "source": "Lt.Gillenormand",
        "target": "Mlle.Gillenormand",
        "value": 2
      },
      {
        "source": "Lt.Gillenormand",
        "target": "Gillenormand",
        "value": 1
      },
      {
        "source": "Lt.Gillenormand",
        "target": "Cosette",
        "value": 1
      },
      {
        "source": "Marius",
        "target": "Mlle.Gillenormand",
        "value": 6
      },
      {
        "source": "Marius",
        "target": "Gillenormand",
        "value": 12
      },
      {
        "source": "Marius",
        "target": "Pontmercy",
        "value": 1
      },
      {
        "source": "Marius",
        "target": "Lt.Gillenormand",
        "value": 1
      },
      {
        "source": "Marius",
        "target": "Cosette",
        "value": 21
      },
      {
        "source": "Marius",
        "target": "Valjean",
        "value": 19
      },
      {
        "source": "Marius",
        "target": "Tholomyes",
        "value": 1
      },
      {
        "source": "Marius",
        "target": "Thenardier",
        "value": 2
      },
      {
        "source": "Marius",
        "target": "Eponine",
        "value": 5
      },
      {
        "source": "Marius",
        "target": "Gavroche",
        "value": 4
      },
      {
        "source": "BaronessT",
        "target": "Gillenormand",
        "value": 1
      },
      {
        "source": "BaronessT",
        "target": "Marius",
        "value": 1
      },
      {
        "source": "Mabeuf",
        "target": "Marius",
        "value": 1
      },
      {
        "source": "Mabeuf",
        "target": "Eponine",
        "value": 1
      },
      {
        "source": "Mabeuf",
        "target": "Gavroche",
        "value": 1
      },
      {
        "source": "Enjolras",
        "target": "Marius",
        "value": 7
      },
      {
        "source": "Enjolras",
        "target": "Gavroche",
        "value": 7
      },
      {
        "source": "Enjolras",
        "target": "Javert",
        "value": 6
      },
      {
        "source": "Enjolras",
        "target": "Mabeuf",
        "value": 1
      },
      {
        "source": "Enjolras",
        "target": "Valjean",
        "value": 4
      },
      {
        "source": "Combeferre",
        "target": "Enjolras",
        "value": 15
      },
      {
        "source": "Combeferre",
        "target": "Marius",
        "value": 5
      },
      {
        "source": "Combeferre",
        "target": "Gavroche",
        "value": 6
      },
      {
        "source": "Combeferre",
        "target": "Mabeuf",
        "value": 2
      },
      {
        "source": "Prouvaire",
        "target": "Gavroche",
        "value": 1
      },
      {
        "source": "Prouvaire",
        "target": "Enjolras",
        "value": 4
      },
      {
        "source": "Prouvaire",
        "target": "Combeferre",
        "value": 2
      },
      {
        "source": "Feuilly",
        "target": "Gavroche",
        "value": 2
      },
      {
        "source": "Feuilly",
        "target": "Enjolras",
        "value": 6
      },
      {
        "source": "Feuilly",
        "target": "Prouvaire",
        "value": 2
      },
      {
        "source": "Feuilly",
        "target": "Combeferre",
        "value": 5
      },
      {
        "source": "Feuilly",
        "target": "Mabeuf",
        "value": 1
      },
      {
        "source": "Feuilly",
        "target": "Marius",
        "value": 1
      },
      {
        "source": "Courfeyrac",
        "target": "Marius",
        "value": 9
      },
      {
        "source": "Courfeyrac",
        "target": "Enjolras",
        "value": 17
      },
      {
        "source": "Courfeyrac",
        "target": "Combeferre",
        "value": 13
      },
      {
        "source": "Courfeyrac",
        "target": "Gavroche",
        "value": 7
      },
      {
        "source": "Courfeyrac",
        "target": "Mabeuf",
        "value": 2
      },
      {
        "source": "Courfeyrac",
        "target": "Eponine",
        "value": 1
      },
      {
        "source": "Courfeyrac",
        "target": "Feuilly",
        "value": 6
      },
      {
        "source": "Courfeyrac",
        "target": "Prouvaire",
        "value": 3
      },
      {
        "source": "Bahorel",
        "target": "Combeferre",
        "value": 5
      },
      {
        "source": "Bahorel",
        "target": "Gavroche",
        "value": 5
      },
      {
        "source": "Bahorel",
        "target": "Courfeyrac",
        "value": 6
      },
      {
        "source": "Bahorel",
        "target": "Mabeuf",
        "value": 2
      },
      {
        "source": "Bahorel",
        "target": "Enjolras",
        "value": 4
      },
      {
        "source": "Bahorel",
        "target": "Feuilly",
        "value": 3
      },
      {
        "source": "Bahorel",
        "target": "Prouvaire",
        "value": 2
      },
      {
        "source": "Bahorel",
        "target": "Marius",
        "value": 1
      },
      {
        "source": "Bossuet",
        "target": "Marius",
        "value": 5
      },
      {
        "source": "Bossuet",
        "target": "Courfeyrac",
        "value": 12
      },
      {
        "source": "Bossuet",
        "target": "Gavroche",
        "value": 5
      },
      {
        "source": "Bossuet",
        "target": "Bahorel",
        "value": 4
      },
      {
        "source": "Bossuet",
        "target": "Enjolras",
        "value": 10
      },
      {
        "source": "Bossuet",
        "target": "Feuilly",
        "value": 6
      },
      {
        "source": "Bossuet",
        "target": "Prouvaire",
        "value": 2
      },
      {
        "source": "Bossuet",
        "target": "Combeferre",
        "value": 9
      },
      {
        "source": "Bossuet",
        "target": "Mabeuf",
        "value": 1
      },
      {
        "source": "Bossuet",
        "target": "Valjean",
        "value": 1
      },
      {
        "source": "Joly",
        "target": "Bahorel",
        "value": 5
      },
      {
        "source": "Joly",
        "target": "Bossuet",
        "value": 7
      },
      {
        "source": "Joly",
        "target": "Gavroche",
        "value": 3
      },
      {
        "source": "Joly",
        "target": "Courfeyrac",
        "value": 5
      },
      {
        "source": "Joly",
        "target": "Enjolras",
        "value": 5
      },
      {
        "source": "Joly",
        "target": "Feuilly",
        "value": 5
      },
      {
        "source": "Joly",
        "target": "Prouvaire",
        "value": 2
      },
      {
        "source": "Joly",
        "target": "Combeferre",
        "value": 5
      },
      {
        "source": "Joly",
        "target": "Mabeuf",
        "value": 1
      },
      {
        "source": "Joly",
        "target": "Marius",
        "value": 2
      },
      {
        "source": "Grantaire",
        "target": "Bossuet",
        "value": 3
      },
      {
        "source": "Grantaire",
        "target": "Enjolras",
        "value": 3
      },
      {
        "source": "Grantaire",
        "target": "Combeferre",
        "value": 1
      },
      {
        "source": "Grantaire",
        "target": "Courfeyrac",
        "value": 2
      },
      {
        "source": "Grantaire",
        "target": "Joly",
        "value": 2
      },
      {
        "source": "Grantaire",
        "target": "Gavroche",
        "value": 1
      },
      {
        "source": "Grantaire",
        "target": "Bahorel",
        "value": 1
      },
      {
        "source": "Grantaire",
        "target": "Feuilly",
        "value": 1
      },
      {
        "source": "Grantaire",
        "target": "Prouvaire",
        "value": 1
      },
      {
        "source": "MotherPlutarch",
        "target": "Mabeuf",
        "value": 3
      },
      {
        "source": "Gueulemer",
        "target": "Thenardier",
        "value": 5
      },
      {
        "source": "Gueulemer",
        "target": "Valjean",
        "value": 1
      },
      {
        "source": "Gueulemer",
        "target": "Mme.Thenardier",
        "value": 1
      },
      {
        "source": "Gueulemer",
        "target": "Javert",
        "value": 1
      },
      {
        "source": "Gueulemer",
        "target": "Gavroche",
        "value": 1
      },
      {
        "source": "Gueulemer",
        "target": "Eponine",
        "value": 1
      },
      {
        "source": "Babet",
        "target": "Thenardier",
        "value": 6
      },
      {
        "source": "Babet",
        "target": "Gueulemer",
        "value": 6
      },
      {
        "source": "Babet",
        "target": "Valjean",
        "value": 1
      },
      {
        "source": "Babet",
        "target": "Mme.Thenardier",
        "value": 1
      },
      {
        "source": "Babet",
        "target": "Javert",
        "value": 2
      },
      {
        "source": "Babet",
        "target": "Gavroche",
        "value": 1
      },
      {
        "source": "Babet",
        "target": "Eponine",
        "value": 1
      },
      {
        "source": "Claquesous",
        "target": "Thenardier",
        "value": 4
      },
      {
        "source": "Claquesous",
        "target": "Babet",
        "value": 4
      },
      {
        "source": "Claquesous",
        "target": "Gueulemer",
        "value": 4
      },
      {
        "source": "Claquesous",
        "target": "Valjean",
        "value": 1
      },
      {
        "source": "Claquesous",
        "target": "Mme.Thenardier",
        "value": 1
      },
      {
        "source": "Claquesous",
        "target": "Javert",
        "value": 1
      },
      {
        "source": "Claquesous",
        "target": "Eponine",
        "value": 1
      },
      {
        "source": "Claquesous",
        "target": "Enjolras",
        "value": 1
      },
      {
        "source": "Montparnasse",
        "target": "Javert",
        "value": 1
      },
      {
        "source": "Montparnasse",
        "target": "Babet",
        "value": 2
      },
      {
        "source": "Montparnasse",
        "target": "Gueulemer",
        "value": 2
      },
      {
        "source": "Montparnasse",
        "target": "Claquesous",
        "value": 2
      },
      {
        "source": "Montparnasse",
        "target": "Valjean",
        "value": 1
      },
      {
        "source": "Montparnasse",
        "target": "Gavroche",
        "value": 1
      },
      {
        "source": "Montparnasse",
        "target": "Eponine",
        "value": 1
      },
      {
        "source": "Montparnasse",
        "target": "Thenardier",
        "value": 1
      },
      {
        "source": "Toussaint",
        "target": "Cosette",
        "value": 2
      },
      {
        "source": "Toussaint",
        "target": "Javert",
        "value": 1
      },
      {
        "source": "Toussaint",
        "target": "Valjean",
        "value": 1
      },
      {
        "source": "Child1",
        "target": "Gavroche",
        "value": 2
      },
      {
        "source": "Child2",
        "target": "Gavroche",
        "value": 2
      },
      {
        "source": "Child2",
        "target": "Child1",
        "value": 3
      },
      {
        "source": "Brujon",
        "target": "Babet",
        "value": 3
      },
      {
        "source": "Brujon",
        "target": "Gueulemer",
        "value": 3
      },
      {
        "source": "Brujon",
        "target": "Thenardier",
        "value": 3
      },
      {
        "source": "Brujon",
        "target": "Gavroche",
        "value": 1
      },
      {
        "source": "Brujon",
        "target": "Eponine",
        "value": 1
      },
      {
        "source": "Brujon",
        "target": "Claquesous",
        "value": 1
      },
      {
        "source": "Brujon",
        "target": "Montparnasse",
        "value": 1
      },
      {
        "source": "Mme.Hucheloup",
        "target": "Bossuet",
        "value": 1
      },
      {
        "source": "Mme.Hucheloup",
        "target": "Joly",
        "value": 1
      },
      {
        "source": "Mme.Hucheloup",
        "target": "Grantaire",
        "value": 1
      },
      {
        "source": "Mme.Hucheloup",
        "target": "Bahorel",
        "value": 1
      },
      {
        "source": "Mme.Hucheloup",
        "target": "Courfeyrac",
        "value": 1
      },
      {
        "source": "Mme.Hucheloup",
        "target": "Gavroche",
        "value": 1
      },
      {
        "source": "Mme.Hucheloup",
        "target": "Enjolras",
        "value": 1
      }
    ]
  }

  const generateColors = (count) => {
    const colors = [];
    for (let i = 0; i < count; i++) {
        const hue = i * 137.508; // use golden angle approximation
        colors.push(`hsl(${hue}, 50%, 75%)`);
    }
    return colors;
};

// Extract unique groups from nodes
const groups = Array.from(new Set(data.nodes.map(node => node.group)));
const groupColors = {};
const colors = generateColors(groups.length);

// Map groups to colors
groups.forEach((group, index) => {
    groupColors[group] = colors[index];
});

// Assign colors to nodes based on their group
data.nodes.forEach(node => {
    node.style = {
        fill: groupColors[node.group] || "#666", // Default color if group not found
        stroke: "#fff",
        lineWidth: 2
    };
});

const Graph = () => {
    useEffect(() => {
        const container = document.getElementById('container');
        const width = container.scrollWidth;
        const height = container.scrollHeight || 500;

      
        const graph = new G6.Graph({
            container: 'container',
            width,
            height,
            modes: {
                default: ['zoom-canvas', 'drag-canvas', 'drag-node'],
            },
            layout: {
                type: 'forceAtlas2',
                preventOverlap: true,
                kr: 50, // Adjust repulsion strength for more spacing
                center: [width / 2, height / 2],
                gravity: 1, // Adjust gravity to pull nodes towards center
            },
            defaultNode: {
                size: 20,
                style: node => node.style, 
            },
        });
       
         // This will show all groups in the console
        graph.data(data);
        graph.render();

        function clearAllStats() {
            graph.setAutoPaint(false);
            graph.getNodes().forEach(function (node) {
              graph.clearItemStates(node);
            });
            graph.getEdges().forEach(function (edge) {
              graph.clearItemStates(edge);
            });
            graph.getEdges().forEach(function (edge) {
              const labelElement = edge
                .getContainer()
                .findAll((element) => element.get("className") === "edge-label");
              if (labelElement) {
                labelElement.forEach((label) => {
                  label.attr("fillOpacity", 0);
                  label.attr("stroke-opacity", 0.1);
                });
              }
            });
    
            graph.paint();
            graph.setAutoPaint(true);
          }
    
          graph.on("node:mouseenter", function (e) {
            const item = e.item;
            const connectedNodes = new Set();
            const connectedEdges = new Set();
    
            graph.getEdges().forEach(function (edge) {
              if (edge.getSource() === item || edge.getTarget() === item) {
                connectedEdges.add(edge);
                if (edge.getSource() === item) {
                  connectedNodes.add(edge.getTarget());
                } else {
                  connectedNodes.add(edge.getSource());
                }
              }
            });
    
            graph.getNodes().forEach(function (node) {
              if (node === item || connectedNodes.has(node)) {
                graph.setItemState(node, "dark", false);
                graph.setItemState(node, "highlight", true);
                const labelElements = node
                  .getContainer()
                  .findAll((element) => element.get("className") === "node-label");
                if (labelElements) {
                  labelElements.forEach((label) => {
                    label.attr("fillOpacity", 1); // Display node labels
                    label.attr("stroke-opacity", 1); // Adjust opacity as needed
                  });
                }
              } else {
                graph.setItemState(node, "dark", true);
                const labelElements = node
                  .getContainer()
                  .findAll((element) => element.get("className") === "node-label");
                if (labelElements) {
                  labelElements.forEach((label) => {
                    label.attr("fillOpacity", 0); // Dim node labels
                    label.attr("stroke-opacity", 0); // Adjust opacity as needed
                  });
                }
              }
            });
    
            graph.getEdges().forEach(function (edge) {
              if (connectedEdges.has(edge)) {
                graph.setItemState(edge, "dark", false);
                graph.setItemState(edge, "highlight", true);
                edge.toFront();
                const labelElement = edge
                  .getContainer()
                  .findAll((element) => element.get("className") === "edge-label");
                if (labelElement) {
                  labelElement.forEach((label) => {
                    label.attr("fillOpacity", 1); // Display edge labels
                    label.attr("stroke-opacity", 1); // Adjust opacity as needed
                  });
                }
              } else {
                graph.setItemState(edge, "dark", true);
                const labelElement = edge
                  .getContainer()
                  .findAll((element) => element.get("className") === "edge-label");
                if (labelElement) {
                  labelElement.forEach((label) => {
                    label.attr("fillOpacity", 0); // Dim edge labels
                    label.attr("stroke-opacity", 0); // Adjust opacity as needed
                  });
                }
              }
            });
    
            graph.paint();
          });
          graph.on("node:mouseleave", clearAllStats);
          graph.on("canvas:click", clearAllStats);

        if (typeof window !== 'undefined')
            window.onresize = () => {
                if (!graph || graph.get('destroyed')) return;
                if (!container || !container.scrollWidth || !container.scrollHeight) return;
                graph.changeSize(container.scrollWidth, container.scrollHeight);
            };

        return () => {
            graph?.destroy();
        };
    }, []);

    return (
        <div id="container"></div>
    )
}

export default Graph;