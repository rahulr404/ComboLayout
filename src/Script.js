const fs = require('fs');

// Sample data, replace this with your actual data loaded from a JSON file
let data = {
    "nodes": [
      {
        "id": "TVF-D1002-AMS-001",
        "isLeaf": false
      },
      {
        "id": "TVF-C9102-AMS-002",
        "isLeaf": true
      },
      {
        "id": "TVF-C9102-AMS-001",
        "isLeaf": true
      },
      {
        "id": "TVF-D1002-AMS-002",
        "isLeaf": false
      },
      {
        "id": "TVF-C9102-AMS-003",
        "isLeaf": true
      },
      {
        "id": "TVF-C9102-AMS-004",
        "isLeaf": true
      },
      {
        "id": "TVF-CSR1000-AMS-001",
        "isLeaf": false
      },
      {
        "id": "TVF-CSR1000-AMS-002",
        "isLeaf": false
      },
      {
        "id": "TVF-D1001-AMS-005",
        "isLeaf": false
      },
      {
        "id": "TVF-C9006-AH-001",
        "isLeaf": true
      },
      {
        "id": "TVF-CCRS1-AMS-200",
        "isLeaf": true
      },
      {
        "id": "ams-dc0001-gr101",
        "isLeaf": true
      },
      {
        "id": "TVF-D1002-AMS-005",
        "isLeaf": true
      },
      {
        "id": "TVF-C9001-MT-001",
        "isLeaf": true
      },
      {
        "id": "TVF-C9001-AMS-002",
        "isLeaf": true
      },
      {
        "id": "TVF-C9006-AMS-001",
        "isLeaf": true
      },
      {
        "id": "TVF-D1006-AMS-004",
        "isLeaf": true
      },
      {
        "id": "TVF-C9901-AMS-001",
        "isLeaf": true
      },
      {
        "id": "TVF-CCRS1-UT-200",
        "isLeaf": true
      },
      {
        "id": "TVF-C9001-HM-002",
        "isLeaf": true
      },
      {
        "id": "TVF-D1002-AMS-004",
        "isLeaf": true
      },
      {
        "id": "TVF-D1002-AMS-006",
        "isLeaf": true
      },
      {
        "id": "TVF-C9006-AMS-003",
        "isLeaf": true
      },
      {
        "id": "TVF-C9901-AMS-002",
        "isLeaf": true
      },
      {
        "id": "TVF-C9006-AMS-002",
        "isLeaf": true
      },
      {
        "id": "TVF-C9001-AMS-003",
        "isLeaf": true
      },
      {
        "id": "ams-tr0021-gr101",
        "isLeaf": true
      },
      {
        "id": "TVF-C9001-MT-002",
        "isLeaf": true
      },
      {
        "id": "TVF-D1004-AH-001",
        "isLeaf": false
      },
      {
        "id": "TVF-D1004-AH-002",
        "isLeaf": true
      },
      {
        "id": "TVF-C9910-AH-001",
        "isLeaf": true
      },
      {
        "id": "TVF-C9910-AH-002",
        "isLeaf": true
      },
      {
        "id": "TVF-D1006-EHV-001",
        "isLeaf": false
      },
      {
        "id": "TVF-D1006-EHV-002",
        "isLeaf": true
      },
      {
        "id": "TVF-C9910-EHV-001",
        "isLeaf": true
      },
      {
        "id": "TVF-C9910-EHV-002",
        "isLeaf": true
      },
      {
        "id": "nls-ams02a-rt2",
        "isLeaf": false
      },
      {
        "id": "TVF-D1004-AMS-231",
        "isLeaf": true
      },
      {
        "id": "TVF-D1001-AMS-001",
        "isLeaf": true
      },
      {
        "id": "TVF-D1001-AMS-002",
        "isLeaf": true
      },
      {
        "id": "TVF-D1004-UT-231",
        "isLeaf": true
      },
      {
        "id": "TVF-D1001-UT-002",
        "isLeaf": true
      },
      {
        "id": "TVF-D1002-HRL-001",
        "isLeaf": true
      },
      {
        "id": "TVF-D1001-UT-001",
        "isLeaf": true
      },
      {
        "id": "NLSPL1PE01",
        "isLeaf": true
      },
      {
        "id": "ams-dc0001-dr109",
        "isLeaf": true
      },
      {
        "id": "slr-tr0004-gr103-new",
        "isLeaf": true
      },
      {
        "id": "ams-dc0001-dr149",
        "isLeaf": true
      },
      {
        "id": "nls-ams17b-rt1",
        "isLeaf": true
      },
      {
        "id": "nls-hlm01a-ra60",
        "isLeaf": true
      },
      {
        "id": "zp-dc0100-gr101",
        "isLeaf": true
      },
      {
        "id": "ehv-dc0002-gr101",
        "isLeaf": true
      },
      {
        "id": "ams-dc0001-gr103-new",
        "isLeaf": true
      },
      {
        "id": "nls-ams02e-ra60",
        "isLeaf": true
      },
      {
        "id": "ams-tr0021-gr103",
        "isLeaf": true
      },
      {
        "id": "hm-dc0100-gr101",
        "isLeaf": true
      },
      {
        "id": "rt-dc0172-gr101",
        "isLeaf": true
      },
      {
        "id": "lls-dc0100-gr101",
        "isLeaf": true
      },
      {
        "id": "hrv-dc0100-gr101",
        "isLeaf": true
      },
      {
        "id": "nm-dc0100-gr101",
        "isLeaf": true
      },
      {
        "id": "nls-mnd01a-ra60",
        "isLeaf": true
      },
      {
        "id": "rt-dc0173-gr101",
        "isLeaf": true
      },
      {
        "id": "nls-tbg01a-ra60",
        "isLeaf": true
      },
      {
        "id": "re0-ams-tr0042-dr101",
        "isLeaf": true
      },
      {
        "id": "asn-dc0002-gr101",
        "isLeaf": true
      },
      {
        "id": "dv-dc0001-gr101",
        "isLeaf": true
      },
      {
        "id": "tb-dc0001-gr101",
        "isLeaf": true
      },
      {
        "id": "weer-dc0002-gr101",
        "isLeaf": true
      },
      {
        "id": "vnn-dc0001-gr101",
        "isLeaf": true
      },
      {
        "id": "mnd-dc0001-gr101",
        "isLeaf": true
      },
      {
        "id": "gv-dc0010-gr101",
        "isLeaf": true
      },
      {
        "id": "ams-tr0021-dr109",
        "isLeaf": true
      },
      {
        "id": "slr-tr0004-gr104-new",
        "isLeaf": true
      },
      {
        "id": "ams-tr0021-gr104-new",
        "isLeaf": true
      },
      {
        "id": "nls-ams02e-ra50",
        "isLeaf": true
      },
      {
        "id": "nls-mnd01a-ra50",
        "isLeaf": true
      },
      {
        "id": "re0-ams-tr0610-dr101",
        "isLeaf": true
      },
      {
        "id": "hvs-dc0001-gr102",
        "isLeaf": true
      },
      {
        "id": "gv-dc0052-gr102",
        "isLeaf": true
      },
      {
        "id": "NLSPL1PE02",
        "isLeaf": true
      },
      {
        "id": "ams-tr0021-dr149",
        "isLeaf": true
      },
      {
        "id": "nls-hlm01a-ra50",
        "isLeaf": true
      },
      {
        "id": "zp-dc0100-gr102",
        "isLeaf": true
      },
      {
        "id": "ams-tr0021-gr104",
        "isLeaf": true
      },
      {
        "id": "hm-dc0100-gr102",
        "isLeaf": true
      },
      {
        "id": "rt-dc0172-gr102",
        "isLeaf": true
      },
      {
        "id": "lls-dc0100-gr102",
        "isLeaf": true
      },
      {
        "id": "hrv-dc0100-gr102",
        "isLeaf": true
      },
      {
        "id": "nm-dc0100-gr102",
        "isLeaf": true
      },
      {
        "id": "rt-dc0173-gr102",
        "isLeaf": true
      },
      {
        "id": "nls-tbg01a-ra50",
        "isLeaf": true
      },
      {
        "id": "gn-dc0002-gr102",
        "isLeaf": true
      },
      {
        "id": "zl-dc0001-gr102",
        "isLeaf": true
      },
      {
        "id": "ht-dc0001-gr102",
        "isLeaf": true
      },
      {
        "id": "venls-dc0003-gr102",
        "isLeaf": true
      },
      {
        "id": "amr-dc0010-gr102",
        "isLeaf": true
      },
      {
        "id": "ams-dc0001-dr101",
        "isLeaf": true
      },
      {
        "id": "ams-dc0001-rr101",
        "isLeaf": true
      },
      {
        "id": "ams-dc0001-rr102",
        "isLeaf": true
      },
      {
        "id": "ams-dc0001-rr103",
        "isLeaf": true
      },
      {
        "id": "ams-dc0001-rr104",
        "isLeaf": true
      },
      {
        "id": "ams-dc0001-rr107",
        "isLeaf": true
      },
      {
        "id": "ams-tr0021-rr101",
        "isLeaf": true
      },
      {
        "id": "ams-tr0021-rr102",
        "isLeaf": true
      },
      {
        "id": "ams-tr0021-rr103",
        "isLeaf": true
      },
      {
        "id": "ams-tr0021-rr104",
        "isLeaf": true
      },
      {
        "id": "ams-tr0021-rr107",
        "isLeaf": true
      },
      {
        "id": "AH-TR0009-DR101",
        "isLeaf": true
      },
      {
        "id": "HTN-S03555-CR104",
        "isLeaf": true
      },
      {
        "id": "AH-TR0009-DR102",
        "isLeaf": true
      },
      {
        "id": "HTN-S03555-CR103",
        "isLeaf": true
      },
      {
        "id": "EHV-TR0001-DR101",
        "isLeaf": true
      },
      {
        "id": "EHV-TR0001-DR102",
        "isLeaf": true
      },
      {
        "id": "tb-dc0001-dr171",
        "isLeaf": false
      },
      {
        "id": "tb-dc0001-dr172",
        "isLeaf": true
      },
      {
        "id": "hm-dc0100-dr301",
        "isLeaf": false
      },
      {
        "id": "hm-dc0100-dr302",
        "isLeaf": false
      },
      {
        "id": "hm-dc0100-dr303",
        "isLeaf": false
      },
      {
        "id": "hm-dc0100-dr304",
        "isLeaf": false
      },
      {
        "id": "tb-dc0001-dr301",
        "isLeaf": false
      },
      {
        "id": "tb-dc0001-dr302",
        "isLeaf": false
      },
      {
        "id": "tb-dc0001-dr303",
        "isLeaf": false
      },
      {
        "id": "tb-dc0001-dr304",
        "isLeaf": false
      },
      {
        "id": "tb-dc0001-dr305",
        "isLeaf": false
      },
      {
        "id": "tb-dc0001-dr306",
        "isLeaf": false
      },
      {
        "id": "tb-dc0001-dr307",
        "isLeaf": false
      },
      {
        "id": "tb-dc0001-dr308",
        "isLeaf": false
      },
      {
        "id": "rt-dc0173-dr301",
        "isLeaf": false
      },
      {
        "id": "rt-dc0173-dr302",
        "isLeaf": false
      },
      {
        "id": "slr-tr0004-dr371",
        "isLeaf": true
      },
      {
        "id": "SLR-TR0004-DR101",
        "isLeaf": true
      },
      {
        "id": "slr-tr0004-gr303",
        "isLeaf": true
      },
      {
        "id": "slr-tr0004-dr372",
        "isLeaf": true
      },
      {
        "id": "SLR-TR0004-DR102",
        "isLeaf": true
      },
      {
        "id": "slr-tr0004-gr304",
        "isLeaf": true
      },
      {
        "id": "AMS-TR0021-DR107",
        "isLeaf": false
      },
      {
        "id": "RT-RC0173-DR107",
        "isLeaf": false
      },
      {
        "id": "AMS-TR0021-DR103",
        "isLeaf": false
      },
      {
        "id": "ams-tr0006-dr102",
        "isLeaf": false
      },
      {
        "id": "ams-tr0409-dr102",
        "isLeaf": false
      },
      {
        "id": "ams-tr0610-dr102",
        "isLeaf": false
      },
      {
        "id": "ams-tr0042-dr102",
        "isLeaf": false
      },
      {
        "id": "ams-dc0001-dr102",
        "isLeaf": false
      },
      {
        "id": "ams-tr0021-dr102",
        "isLeaf": true
      },
      {
        "id": "ams-tr0021-gr303",
        "isLeaf": false
      },
      {
        "id": "ams-tr0021-gr304",
        "isLeaf": true
      },
      {
        "id": "tb-dc0001-gr303",
        "isLeaf": false
      },
      {
        "id": "tb-dc0001-gr304",
        "isLeaf": true
      },
      {
        "id": "mnd-dc0002-dr171",
        "isLeaf": false
      },
      {
        "id": "mnd-dc0002-dr172",
        "isLeaf": true
      },
      {
        "id": "HM-RC0100-DR105",
        "isLeaf": false
      },
      {
        "id": "HM-RC0100-DR106",
        "isLeaf": true
      },
      {
        "id": "RT-RC0173-DR105",
        "isLeaf": false
      },
      {
        "id": "RT-RC0173-DR106",
        "isLeaf": true
      },
      {
        "id": "nls-mnd01a-ra2",
        "isLeaf": false
      },
      {
        "id": "nls-ams02a-rb3",
        "isLeaf": false
      },
      {
        "id": "nls-ams02a-rb4",
        "isLeaf": true
      },
      {
        "id": "nls-zut01a-rb1",
        "isLeaf": true
      },
      {
        "id": "nls-zut01a-rb2",
        "isLeaf": true
      },
      {
        "id": "zp-dc0100-dr101",
        "isLeaf": true
      },
      {
        "id": "zp-dc0100-dr102",
        "isLeaf": true
      },
      {
        "id": "ehv-dc0002-dr102",
        "isLeaf": true
      },
      {
        "id": "ams-tr0410-dr106",
        "isLeaf": true
      },
      {
        "id": "nls-ams02a-rb1",
        "isLeaf": true
      },
      {
        "id": "nls-ams02a-rb2",
        "isLeaf": true
      },
      {
        "id": "nls-hlm01a-rb1",
        "isLeaf": true
      },
      {
        "id": "nls-hlm01a-rb2",
        "isLeaf": true
      },
      {
        "id": "hm-dc0100-dr102",
        "isLeaf": true
      },
      {
        "id": "hm-dc0100-dr104",
        "isLeaf": true
      },
      {
        "id": "hm-dc0100-dr103",
        "isLeaf": true
      },
      {
        "id": "nls-rtm02a-rb1",
        "isLeaf": true
      },
      {
        "id": "nls-rtm02a-rb2",
        "isLeaf": true
      },
      {
        "id": "rt-lc0100-dr102",
        "isLeaf": true
      },
      {
        "id": "nls-ley01a-rb1",
        "isLeaf": true
      },
      {
        "id": "nls-ley01a-rb2",
        "isLeaf": true
      },
      {
        "id": "lls-dc0100-dr101",
        "isLeaf": true
      },
      {
        "id": "lls-dc0100-dr102",
        "isLeaf": true
      },
      {
        "id": "nls-hrv01a-rb1",
        "isLeaf": true
      },
      {
        "id": "nls-hrv01a-rb2",
        "isLeaf": true
      },
      {
        "id": "nls-nij01a-rb1",
        "isLeaf": true
      },
      {
        "id": "nls-nij01a-rb2",
        "isLeaf": true
      },
      {
        "id": "nm-dc0100-dr102",
        "isLeaf": true
      },
      {
        "id": "nm-dc0100-dr101",
        "isLeaf": true
      },
      {
        "id": "nls-rtm03a-rb1",
        "isLeaf": false
      },
      {
        "id": "nls-rtm03a-rb2",
        "isLeaf": false
      },
      {
        "id": "rt-dc0173-dr102",
        "isLeaf": true
      },
      {
        "id": "weer-dc0002-dr102",
        "isLeaf": false
      },
      {
        "id": "venls-dc0003-dr102",
        "isLeaf": true
      },
      {
        "id": "asn-dc0002-dr102",
        "isLeaf": false
      },
      {
        "id": "gn-dc0002-dr102",
        "isLeaf": true
      },
      {
        "id": "gv-dc0010-dr102",
        "isLeaf": false
      },
      {
        "id": "gv-dc0052-dr102",
        "isLeaf": true
      },
      {
        "id": "vnn-dc0001-dr102",
        "isLeaf": false
      },
      {
        "id": "amr-dc0010-dr102",
        "isLeaf": true
      },
      {
        "id": "mnd-dc0001-dr102",
        "isLeaf": false
      },
      {
        "id": "hvs-dc0002-dr102",
        "isLeaf": true
      },
      {
        "id": "dv-dc0001-dr102",
        "isLeaf": false
      },
      {
        "id": "zl-dc0001-dr102",
        "isLeaf": true
      },
      {
        "id": "tb-dc0001-dr102",
        "isLeaf": false
      },
      {
        "id": "ht-dc0001-dr102",
        "isLeaf": true
      },
      {
        "id": "re0-mnd-dc0002-gr103",
        "isLeaf": false
      },
      {
        "id": "re0-mnd-dc0002-gr104",
        "isLeaf": true
      },
      {
        "id": "re0-tb-dc0001-gr103",
        "isLeaf": false
      },
      {
        "id": "re0-tb-dc0001-gr104",
        "isLeaf": true
      },
      {
        "id": "re0-ams-tr0409-dr101",
        "isLeaf": true
      },
      {
        "id": "re0-ams-tr0410-dr102",
        "isLeaf": true
      },
      {
        "id": "re0-gn-dc0002-dr101",
        "isLeaf": true
      },
      {
        "id": "re0-emn-dc0001-dr101",
        "isLeaf": true
      },
      {
        "id": "re0-zl-dc0001-dr101",
        "isLeaf": true
      },
      {
        "id": "re0-ht-dc0001-dr101",
        "isLeaf": true
      },
      {
        "id": "re0-tb-dc0001-dr101",
        "isLeaf": true
      },
      {
        "id": "re0-bd-dc0002-dr101",
        "isLeaf": true
      },
      {
        "id": "re0-ah-tr0002-dr108",
        "isLeaf": true
      },
      {
        "id": "re0-vnn-dc0001-dr101",
        "isLeaf": true
      },
      {
        "id": "re0-mnd-dc0001-dr101",
        "isLeaf": true
      },
      {
        "id": "re0-gv-dc0010-dr101",
        "isLeaf": true
      },
      {
        "id": "re0-rt-tr0006-dr108",
        "isLeaf": true
      },
      {
        "id": "TVF-C9001-HM-001",
        "isLeaf": false
      },
      {
        "id": "TVF-D1002-AMS-003",
        "isLeaf": false
      }
    ],
    "edges": [
      {
        "id": "edge-TVF-D1002-AMS-001-TVF-C9102-AMS-002",
        "source": "TVF-D1002-AMS-001",
        "target": "TVF-C9102-AMS-002",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-TVF-D1002-AMS-001-TVF-C9102-AMS-001",
        "source": "TVF-D1002-AMS-001",
        "target": "TVF-C9102-AMS-001",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-TVF-D1002-AMS-002-TVF-C9102-AMS-003",
        "source": "TVF-D1002-AMS-002",
        "target": "TVF-C9102-AMS-003",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-TVF-D1002-AMS-002-TVF-C9102-AMS-004",
        "source": "TVF-D1002-AMS-002",
        "target": "TVF-C9102-AMS-004",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-TVF-CSR1000-AMS-001-TVF-C9102-AMS-002",
        "source": "TVF-CSR1000-AMS-001",
        "target": "TVF-C9102-AMS-002",
        "label": [
          "16777214"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-TVF-CSR1000-AMS-001-TVF-C9102-AMS-001",
        "source": "TVF-CSR1000-AMS-001",
        "target": "TVF-C9102-AMS-001",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-TVF-CSR1000-AMS-002-TVF-C9102-AMS-003",
        "source": "TVF-CSR1000-AMS-002",
        "target": "TVF-C9102-AMS-003",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-TVF-CSR1000-AMS-002-TVF-C9102-AMS-004",
        "source": "TVF-CSR1000-AMS-002",
        "target": "TVF-C9102-AMS-004",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-TVF-D1001-AMS-005-TVF-C9102-AMS-002",
        "source": "TVF-D1001-AMS-005",
        "target": "TVF-C9102-AMS-002",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-TVF-D1001-AMS-005-TVF-C9102-AMS-001",
        "source": "TVF-D1001-AMS-005",
        "target": "TVF-C9102-AMS-001",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-TVF-C9102-AMS-002-TVF-C9006-AH-001",
        "source": "TVF-C9102-AMS-002",
        "target": "TVF-C9006-AH-001",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-TVF-C9102-AMS-002-TVF-CCRS1-AMS-200",
        "source": "TVF-C9102-AMS-002",
        "target": "TVF-CCRS1-AMS-200",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-TVF-C9102-AMS-002-ams-dc0001-gr101",
        "source": "TVF-C9102-AMS-002",
        "target": "ams-dc0001-gr101",
        "label": [
          "1000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-TVF-C9102-AMS-002-TVF-D1002-AMS-005",
        "source": "TVF-C9102-AMS-002",
        "target": "TVF-D1002-AMS-005",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-TVF-C9102-AMS-002-TVF-C9102-AMS-001",
        "source": "TVF-C9102-AMS-002",
        "target": "TVF-C9102-AMS-001",
        "label": [
          "1000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-TVF-C9102-AMS-002-TVF-C9001-MT-001",
        "source": "TVF-C9102-AMS-002",
        "target": "TVF-C9001-MT-001",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-TVF-C9102-AMS-002-TVF-C9001-AMS-002",
        "source": "TVF-C9102-AMS-002",
        "target": "TVF-C9001-AMS-002",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-TVF-C9102-AMS-002-TVF-C9006-AMS-001",
        "source": "TVF-C9102-AMS-002",
        "target": "TVF-C9006-AMS-001",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-TVF-C9102-AMS-003-TVF-C9102-AMS-004",
        "source": "TVF-C9102-AMS-003",
        "target": "TVF-C9102-AMS-004",
        "label": [
          "1000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-TVF-C9102-AMS-003-TVF-D1006-AMS-004",
        "source": "TVF-C9102-AMS-003",
        "target": "TVF-D1006-AMS-004",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-TVF-C9102-AMS-003-TVF-C9901-AMS-001",
        "source": "TVF-C9102-AMS-003",
        "target": "TVF-C9901-AMS-001",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-TVF-C9102-AMS-003-TVF-CCRS1-UT-200",
        "source": "TVF-C9102-AMS-003",
        "target": "TVF-CCRS1-UT-200",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-TVF-C9102-AMS-003-ams-dc0001-gr101",
        "source": "TVF-C9102-AMS-003",
        "target": "ams-dc0001-gr101",
        "label": [
          "1000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-TVF-C9102-AMS-003-TVF-C9001-HM-002",
        "source": "TVF-C9102-AMS-003",
        "target": "TVF-C9001-HM-002",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-TVF-C9102-AMS-003-TVF-D1002-AMS-004",
        "source": "TVF-C9102-AMS-003",
        "target": "TVF-D1002-AMS-004",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-TVF-C9102-AMS-003-TVF-D1002-AMS-006",
        "source": "TVF-C9102-AMS-003",
        "target": "TVF-D1002-AMS-006",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-TVF-C9102-AMS-003-TVF-C9006-AMS-003",
        "source": "TVF-C9102-AMS-003",
        "target": "TVF-C9006-AMS-003",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-TVF-C9102-AMS-003-TVF-C9901-AMS-002",
        "source": "TVF-C9102-AMS-003",
        "target": "TVF-C9901-AMS-002",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-TVF-C9102-AMS-003-TVF-C9006-AMS-002",
        "source": "TVF-C9102-AMS-003",
        "target": "TVF-C9006-AMS-002",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-TVF-C9102-AMS-003-TVF-C9001-AMS-003",
        "source": "TVF-C9102-AMS-003",
        "target": "TVF-C9001-AMS-003",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-TVF-C9102-AMS-004-TVF-C9006-AH-001",
        "source": "TVF-C9102-AMS-004",
        "target": "TVF-C9006-AH-001",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-TVF-C9102-AMS-004-TVF-CCRS1-AMS-200",
        "source": "TVF-C9102-AMS-004",
        "target": "TVF-CCRS1-AMS-200",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-TVF-C9102-AMS-004-ams-tr0021-gr101",
        "source": "TVF-C9102-AMS-004",
        "target": "ams-tr0021-gr101",
        "label": [
          "1000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-TVF-C9102-AMS-004-TVF-D1002-AMS-004",
        "source": "TVF-C9102-AMS-004",
        "target": "TVF-D1002-AMS-004",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-TVF-C9102-AMS-004-TVF-D1002-AMS-006",
        "source": "TVF-C9102-AMS-004",
        "target": "TVF-D1002-AMS-006",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-TVF-C9102-AMS-004-TVF-C9001-MT-002",
        "source": "TVF-C9102-AMS-004",
        "target": "TVF-C9001-MT-002",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-TVF-C9102-AMS-004-TVF-C9006-AMS-002",
        "source": "TVF-C9102-AMS-004",
        "target": "TVF-C9006-AMS-002",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-TVF-C9102-AMS-004-TVF-C9001-AMS-003",
        "source": "TVF-C9102-AMS-004",
        "target": "TVF-C9001-AMS-003",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-TVF-D1006-AMS-004-TVF-C9102-AMS-001",
        "source": "TVF-D1006-AMS-004",
        "target": "TVF-C9102-AMS-001",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-TVF-D1004-AH-001-TVF-D1004-AH-002",
        "source": "TVF-D1004-AH-001",
        "target": "TVF-D1004-AH-002",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-TVF-D1004-AH-001-TVF-C9910-AH-001",
        "source": "TVF-D1004-AH-001",
        "target": "TVF-C9910-AH-001",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-TVF-D1004-AH-002-TVF-C9910-AH-002",
        "source": "TVF-D1004-AH-002",
        "target": "TVF-C9910-AH-002",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-TVF-D1006-EHV-001-TVF-D1006-EHV-002",
        "source": "TVF-D1006-EHV-001",
        "target": "TVF-D1006-EHV-002",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-TVF-D1006-EHV-001-TVF-C9910-EHV-001",
        "source": "TVF-D1006-EHV-001",
        "target": "TVF-C9910-EHV-001",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-TVF-D1006-EHV-002-TVF-C9910-EHV-002",
        "source": "TVF-D1006-EHV-002",
        "target": "TVF-C9910-EHV-002",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-TVF-C9901-AMS-001-TVF-C9102-AMS-001",
        "source": "TVF-C9901-AMS-001",
        "target": "TVF-C9102-AMS-001",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-nls-ams02a-rt2-ams-tr0021-gr101",
        "source": "nls-ams02a-rt2",
        "target": "ams-tr0021-gr101",
        "label": [
          "63"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-TVF-CCRS1-AMS-200-TVF-D1004-AMS-231",
        "source": "TVF-CCRS1-AMS-200",
        "target": "TVF-D1004-AMS-231",
        "label": [
          "4000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-TVF-CCRS1-AMS-200-TVF-D1001-AMS-001",
        "source": "TVF-CCRS1-AMS-200",
        "target": "TVF-D1001-AMS-001",
        "label": [
          "4000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-TVF-CCRS1-AMS-200-TVF-D1001-AMS-002",
        "source": "TVF-CCRS1-AMS-200",
        "target": "TVF-D1001-AMS-002",
        "label": [
          "4000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-TVF-CCRS1-AMS-200-TVF-D1004-UT-231",
        "source": "TVF-CCRS1-AMS-200",
        "target": "TVF-D1004-UT-231",
        "label": [
          "4000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-TVF-CCRS1-AMS-200-TVF-D1001-UT-002",
        "source": "TVF-CCRS1-AMS-200",
        "target": "TVF-D1001-UT-002",
        "label": [
          "4000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-TVF-CCRS1-AMS-200-TVF-D1002-HRL-001",
        "source": "TVF-CCRS1-AMS-200",
        "target": "TVF-D1002-HRL-001",
        "label": [
          "4000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-TVF-D1001-AMS-002-TVF-CCRS1-UT-200",
        "source": "TVF-D1001-AMS-002",
        "target": "TVF-CCRS1-UT-200",
        "label": [
          "4000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-TVF-CCRS1-UT-200-TVF-D1004-UT-231",
        "source": "TVF-CCRS1-UT-200",
        "target": "TVF-D1004-UT-231",
        "label": [
          "4000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-TVF-CCRS1-UT-200-TVF-D1001-UT-001",
        "source": "TVF-CCRS1-UT-200",
        "target": "TVF-D1001-UT-001",
        "label": [
          "4000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-TVF-CCRS1-UT-200-TVF-D1001-UT-002",
        "source": "TVF-CCRS1-UT-200",
        "target": "TVF-D1001-UT-002",
        "label": [
          "4000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-TVF-CCRS1-UT-200-TVF-D1002-HRL-001",
        "source": "TVF-CCRS1-UT-200",
        "target": "TVF-D1002-HRL-001",
        "label": [
          "4000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-TVF-CCRS1-UT-200-TVF-C9102-AMS-001",
        "source": "TVF-CCRS1-UT-200",
        "target": "TVF-C9102-AMS-001",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-ams-dc0001-gr101-ams-tr0021-gr101",
        "source": "ams-dc0001-gr101",
        "target": "ams-tr0021-gr101",
        "label": [
          "100"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-ams-dc0001-gr101-NLSPL1PE01",
        "source": "ams-dc0001-gr101",
        "target": "NLSPL1PE01",
        "label": [
          "1000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-ams-dc0001-gr101-ams-dc0001-dr109",
        "source": "ams-dc0001-gr101",
        "target": "ams-dc0001-dr109",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-ams-dc0001-gr101-TVF-C9910-AH-001",
        "source": "ams-dc0001-gr101",
        "target": "TVF-C9910-AH-001",
        "label": [
          "1000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-ams-dc0001-gr101-TVF-C9910-EHV-001",
        "source": "ams-dc0001-gr101",
        "target": "TVF-C9910-EHV-001",
        "label": [
          "1000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-ams-dc0001-gr101-slr-tr0004-gr103-new",
        "source": "ams-dc0001-gr101",
        "target": "slr-tr0004-gr103-new",
        "label": [
          "1000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-ams-dc0001-gr101-ams-dc0001-dr149",
        "source": "ams-dc0001-gr101",
        "target": "ams-dc0001-dr149",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-ams-dc0001-gr101-nls-ams17b-rt1",
        "source": "ams-dc0001-gr101",
        "target": "nls-ams17b-rt1",
        "label": [
          "1000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-ams-dc0001-gr101-nls-hlm01a-ra60",
        "source": "ams-dc0001-gr101",
        "target": "nls-hlm01a-ra60",
        "label": [
          "1000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-ams-dc0001-gr101-zp-dc0100-gr101",
        "source": "ams-dc0001-gr101",
        "target": "zp-dc0100-gr101",
        "label": [
          "1000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-ams-dc0001-gr101-ehv-dc0002-gr101",
        "source": "ams-dc0001-gr101",
        "target": "ehv-dc0002-gr101",
        "label": [
          "1000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-ams-dc0001-gr101-ams-dc0001-gr103-new",
        "source": "ams-dc0001-gr101",
        "target": "ams-dc0001-gr103-new",
        "label": [
          "1000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-ams-dc0001-gr101-nls-ams02e-ra60",
        "source": "ams-dc0001-gr101",
        "target": "nls-ams02e-ra60",
        "label": [
          "1000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-ams-dc0001-gr101-ams-tr0021-gr103",
        "source": "ams-dc0001-gr101",
        "target": "ams-tr0021-gr103",
        "label": [
          "1000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-ams-dc0001-gr101-hm-dc0100-gr101",
        "source": "ams-dc0001-gr101",
        "target": "hm-dc0100-gr101",
        "label": [
          "1000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-ams-dc0001-gr101-rt-dc0172-gr101",
        "source": "ams-dc0001-gr101",
        "target": "rt-dc0172-gr101",
        "label": [
          "1000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-ams-dc0001-gr101-lls-dc0100-gr101",
        "source": "ams-dc0001-gr101",
        "target": "lls-dc0100-gr101",
        "label": [
          "1000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-ams-dc0001-gr101-hrv-dc0100-gr101",
        "source": "ams-dc0001-gr101",
        "target": "hrv-dc0100-gr101",
        "label": [
          "1000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-ams-dc0001-gr101-nm-dc0100-gr101",
        "source": "ams-dc0001-gr101",
        "target": "nm-dc0100-gr101",
        "label": [
          "1000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-ams-dc0001-gr101-nls-mnd01a-ra60",
        "source": "ams-dc0001-gr101",
        "target": "nls-mnd01a-ra60",
        "label": [
          "1000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-ams-dc0001-gr101-rt-dc0173-gr101",
        "source": "ams-dc0001-gr101",
        "target": "rt-dc0173-gr101",
        "label": [
          "1000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-ams-dc0001-gr101-nls-tbg01a-ra60",
        "source": "ams-dc0001-gr101",
        "target": "nls-tbg01a-ra60",
        "label": [
          "1000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-ams-dc0001-gr101-re0-ams-tr0042-dr101",
        "source": "ams-dc0001-gr101",
        "target": "re0-ams-tr0042-dr101",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-ams-dc0001-gr101-asn-dc0002-gr101",
        "source": "ams-dc0001-gr101",
        "target": "asn-dc0002-gr101",
        "label": [
          "1000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-ams-dc0001-gr101-dv-dc0001-gr101",
        "source": "ams-dc0001-gr101",
        "target": "dv-dc0001-gr101",
        "label": [
          "1000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-ams-dc0001-gr101-tb-dc0001-gr101",
        "source": "ams-dc0001-gr101",
        "target": "tb-dc0001-gr101",
        "label": [
          "1000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-ams-dc0001-gr101-weer-dc0002-gr101",
        "source": "ams-dc0001-gr101",
        "target": "weer-dc0002-gr101",
        "label": [
          "1000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-ams-dc0001-gr101-vnn-dc0001-gr101",
        "source": "ams-dc0001-gr101",
        "target": "vnn-dc0001-gr101",
        "label": [
          "1000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-ams-dc0001-gr101-mnd-dc0001-gr101",
        "source": "ams-dc0001-gr101",
        "target": "mnd-dc0001-gr101",
        "label": [
          "1000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-ams-dc0001-gr101-gv-dc0010-gr101",
        "source": "ams-dc0001-gr101",
        "target": "gv-dc0010-gr101",
        "label": [
          "1000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-ams-tr0021-gr101-ams-tr0021-dr109",
        "source": "ams-tr0021-gr101",
        "target": "ams-tr0021-dr109",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-ams-tr0021-gr101-TVF-C9910-AH-002",
        "source": "ams-tr0021-gr101",
        "target": "TVF-C9910-AH-002",
        "label": [
          "1000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-ams-tr0021-gr101-slr-tr0004-gr104-new",
        "source": "ams-tr0021-gr101",
        "target": "slr-tr0004-gr104-new",
        "label": [
          "1000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-ams-tr0021-gr101-ams-tr0021-gr104-new",
        "source": "ams-tr0021-gr101",
        "target": "ams-tr0021-gr104-new",
        "label": [
          "1000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-ams-tr0021-gr101-nls-ams02e-ra50",
        "source": "ams-tr0021-gr101",
        "target": "nls-ams02e-ra50",
        "label": [
          "1000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-ams-tr0021-gr101-nls-mnd01a-ra50",
        "source": "ams-tr0021-gr101",
        "target": "nls-mnd01a-ra50",
        "label": [
          "1000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-ams-tr0021-gr101-re0-ams-tr0610-dr101",
        "source": "ams-tr0021-gr101",
        "target": "re0-ams-tr0610-dr101",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-ams-tr0021-gr101-hvs-dc0001-gr102",
        "source": "ams-tr0021-gr101",
        "target": "hvs-dc0001-gr102",
        "label": [
          "1000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-ams-tr0021-gr101-gv-dc0052-gr102",
        "source": "ams-tr0021-gr101",
        "target": "gv-dc0052-gr102",
        "label": [
          "1000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-ams-tr0021-gr101-NLSPL1PE02",
        "source": "ams-tr0021-gr101",
        "target": "NLSPL1PE02",
        "label": [
          "1000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-ams-tr0021-gr101-TVF-C9910-EHV-002",
        "source": "ams-tr0021-gr101",
        "target": "TVF-C9910-EHV-002",
        "label": [
          "1000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-ams-tr0021-gr101-ams-tr0021-dr149",
        "source": "ams-tr0021-gr101",
        "target": "ams-tr0021-dr149",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-ams-tr0021-gr101-nls-hlm01a-ra50",
        "source": "ams-tr0021-gr101",
        "target": "nls-hlm01a-ra50",
        "label": [
          "1000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-ams-tr0021-gr101-zp-dc0100-gr102",
        "source": "ams-tr0021-gr101",
        "target": "zp-dc0100-gr102",
        "label": [
          "1000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-ams-tr0021-gr101-ams-tr0021-gr104",
        "source": "ams-tr0021-gr101",
        "target": "ams-tr0021-gr104",
        "label": [
          "1000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-ams-tr0021-gr101-hm-dc0100-gr102",
        "source": "ams-tr0021-gr101",
        "target": "hm-dc0100-gr102",
        "label": [
          "1000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-ams-tr0021-gr101-rt-dc0172-gr102",
        "source": "ams-tr0021-gr101",
        "target": "rt-dc0172-gr102",
        "label": [
          "1000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-ams-tr0021-gr101-lls-dc0100-gr102",
        "source": "ams-tr0021-gr101",
        "target": "lls-dc0100-gr102",
        "label": [
          "1000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-ams-tr0021-gr101-hrv-dc0100-gr102",
        "source": "ams-tr0021-gr101",
        "target": "hrv-dc0100-gr102",
        "label": [
          "1000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-ams-tr0021-gr101-nm-dc0100-gr102",
        "source": "ams-tr0021-gr101",
        "target": "nm-dc0100-gr102",
        "label": [
          "1000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-ams-tr0021-gr101-rt-dc0173-gr102",
        "source": "ams-tr0021-gr101",
        "target": "rt-dc0173-gr102",
        "label": [
          "1000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-ams-tr0021-gr101-nls-tbg01a-ra50",
        "source": "ams-tr0021-gr101",
        "target": "nls-tbg01a-ra50",
        "label": [
          "1000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-ams-tr0021-gr101-gn-dc0002-gr102",
        "source": "ams-tr0021-gr101",
        "target": "gn-dc0002-gr102",
        "label": [
          "1000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-ams-tr0021-gr101-zl-dc0001-gr102",
        "source": "ams-tr0021-gr101",
        "target": "zl-dc0001-gr102",
        "label": [
          "1000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-ams-tr0021-gr101-ht-dc0001-gr102",
        "source": "ams-tr0021-gr101",
        "target": "ht-dc0001-gr102",
        "label": [
          "1000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-ams-tr0021-gr101-venls-dc0003-gr102",
        "source": "ams-tr0021-gr101",
        "target": "venls-dc0003-gr102",
        "label": [
          "1000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-ams-tr0021-gr101-amr-dc0010-gr102",
        "source": "ams-tr0021-gr101",
        "target": "amr-dc0010-gr102",
        "label": [
          "1000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-ams-tr0021-gr101-TVF-C9102-AMS-001",
        "source": "ams-tr0021-gr101",
        "target": "TVF-C9102-AMS-001",
        "label": [
          "1000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-NLSPL1PE01-NLSPL1PE02",
        "source": "NLSPL1PE01",
        "target": "NLSPL1PE02",
        "label": [
          "1000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-ams-dc0001-dr109-ams-tr0021-dr109",
        "source": "ams-dc0001-dr109",
        "target": "ams-tr0021-dr109",
        "label": [
          "200"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-ams-dc0001-dr109-ams-dc0001-dr101",
        "source": "ams-dc0001-dr109",
        "target": "ams-dc0001-dr101",
        "label": [
          "1000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-ams-dc0001-dr109-ams-dc0001-rr101",
        "source": "ams-dc0001-dr109",
        "target": "ams-dc0001-rr101",
        "label": [
          "1500"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-ams-dc0001-dr109-ams-dc0001-rr102",
        "source": "ams-dc0001-dr109",
        "target": "ams-dc0001-rr102",
        "label": [
          "1500"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-ams-dc0001-dr109-ams-dc0001-rr103",
        "source": "ams-dc0001-dr109",
        "target": "ams-dc0001-rr103",
        "label": [
          "1500"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-ams-dc0001-dr109-ams-dc0001-rr104",
        "source": "ams-dc0001-dr109",
        "target": "ams-dc0001-rr104",
        "label": [
          "1500"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-ams-dc0001-dr109-ams-dc0001-rr107",
        "source": "ams-dc0001-dr109",
        "target": "ams-dc0001-rr107",
        "label": [
          "1500"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-ams-dc0001-dr109-ams-tr0021-rr101",
        "source": "ams-dc0001-dr109",
        "target": "ams-tr0021-rr101",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-ams-dc0001-dr109-ams-tr0021-rr102",
        "source": "ams-dc0001-dr109",
        "target": "ams-tr0021-rr102",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-ams-dc0001-dr109-ams-tr0021-rr103",
        "source": "ams-dc0001-dr109",
        "target": "ams-tr0021-rr103",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-ams-dc0001-dr109-ams-tr0021-rr104",
        "source": "ams-dc0001-dr109",
        "target": "ams-tr0021-rr104",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-ams-dc0001-dr109-ams-tr0021-rr107",
        "source": "ams-dc0001-dr109",
        "target": "ams-tr0021-rr107",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-ams-tr0021-dr109-ams-dc0001-rr101",
        "source": "ams-tr0021-dr109",
        "target": "ams-dc0001-rr101",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-ams-tr0021-dr109-ams-dc0001-rr102",
        "source": "ams-tr0021-dr109",
        "target": "ams-dc0001-rr102",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-ams-tr0021-dr109-ams-dc0001-rr103",
        "source": "ams-tr0021-dr109",
        "target": "ams-dc0001-rr103",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-ams-tr0021-dr109-ams-dc0001-rr104",
        "source": "ams-tr0021-dr109",
        "target": "ams-dc0001-rr104",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-ams-tr0021-dr109-ams-dc0001-rr107",
        "source": "ams-tr0021-dr109",
        "target": "ams-dc0001-rr107",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-ams-tr0021-dr109-ams-tr0021-rr101",
        "source": "ams-tr0021-dr109",
        "target": "ams-tr0021-rr101",
        "label": [
          "1500"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-ams-tr0021-dr109-ams-tr0021-rr102",
        "source": "ams-tr0021-dr109",
        "target": "ams-tr0021-rr102",
        "label": [
          "1500"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-ams-tr0021-dr109-ams-tr0021-rr103",
        "source": "ams-tr0021-dr109",
        "target": "ams-tr0021-rr103",
        "label": [
          "1500"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-ams-tr0021-dr109-ams-tr0021-rr104",
        "source": "ams-tr0021-dr109",
        "target": "ams-tr0021-rr104",
        "label": [
          "1500"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-ams-tr0021-dr109-ams-tr0021-rr107",
        "source": "ams-tr0021-dr109",
        "target": "ams-tr0021-rr107",
        "label": [
          "1500"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-TVF-C9910-AH-001-TVF-C9910-AH-002",
        "source": "TVF-C9910-AH-001",
        "target": "TVF-C9910-AH-002",
        "label": [
          "1000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-TVF-C9910-AH-001-AH-TR0009-DR101",
        "source": "TVF-C9910-AH-001",
        "target": "AH-TR0009-DR101",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-TVF-C9910-AH-002-HTN-S03555-CR104",
        "source": "TVF-C9910-AH-002",
        "target": "HTN-S03555-CR104",
        "label": [
          "5000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-TVF-C9910-AH-002-AH-TR0009-DR102",
        "source": "TVF-C9910-AH-002",
        "target": "AH-TR0009-DR102",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-TVF-C9910-EHV-001-TVF-C9910-EHV-002",
        "source": "TVF-C9910-EHV-001",
        "target": "TVF-C9910-EHV-002",
        "label": [
          "1000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-TVF-C9910-EHV-001-HTN-S03555-CR103",
        "source": "TVF-C9910-EHV-001",
        "target": "HTN-S03555-CR103",
        "label": [
          "5000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-TVF-C9910-EHV-001-EHV-TR0001-DR101",
        "source": "TVF-C9910-EHV-001",
        "target": "EHV-TR0001-DR101",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-TVF-C9910-EHV-002-EHV-TR0001-DR102",
        "source": "TVF-C9910-EHV-002",
        "target": "EHV-TR0001-DR102",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-tb-dc0001-dr171-tb-dc0001-dr172",
        "source": "tb-dc0001-dr171",
        "target": "tb-dc0001-dr172",
        "label": [
          "400"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-tb-dc0001-dr171-tb-dc0001-gr101",
        "source": "tb-dc0001-dr171",
        "target": "tb-dc0001-gr101",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-tb-dc0001-dr172-ht-dc0001-gr102",
        "source": "tb-dc0001-dr172",
        "target": "ht-dc0001-gr102",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-hm-dc0100-dr301-nls-hlm01a-ra50",
        "source": "hm-dc0100-dr301",
        "target": "nls-hlm01a-ra50",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-hm-dc0100-dr301-nls-hlm01a-ra60",
        "source": "hm-dc0100-dr301",
        "target": "nls-hlm01a-ra60",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-hm-dc0100-dr302-nls-hlm01a-ra50",
        "source": "hm-dc0100-dr302",
        "target": "nls-hlm01a-ra50",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-hm-dc0100-dr302-nls-hlm01a-ra60",
        "source": "hm-dc0100-dr302",
        "target": "nls-hlm01a-ra60",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-hm-dc0100-dr303-nls-hlm01a-ra50",
        "source": "hm-dc0100-dr303",
        "target": "nls-hlm01a-ra50",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-hm-dc0100-dr303-nls-hlm01a-ra60",
        "source": "hm-dc0100-dr303",
        "target": "nls-hlm01a-ra60",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-hm-dc0100-dr304-nls-hlm01a-ra50",
        "source": "hm-dc0100-dr304",
        "target": "nls-hlm01a-ra50",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-hm-dc0100-dr304-nls-hlm01a-ra60",
        "source": "hm-dc0100-dr304",
        "target": "nls-hlm01a-ra60",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-tb-dc0001-dr301-nls-tbg01a-ra50",
        "source": "tb-dc0001-dr301",
        "target": "nls-tbg01a-ra50",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-tb-dc0001-dr301-nls-tbg01a-ra60",
        "source": "tb-dc0001-dr301",
        "target": "nls-tbg01a-ra60",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-tb-dc0001-dr302-nls-tbg01a-ra50",
        "source": "tb-dc0001-dr302",
        "target": "nls-tbg01a-ra50",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-tb-dc0001-dr302-nls-tbg01a-ra60",
        "source": "tb-dc0001-dr302",
        "target": "nls-tbg01a-ra60",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-tb-dc0001-dr303-nls-tbg01a-ra50",
        "source": "tb-dc0001-dr303",
        "target": "nls-tbg01a-ra50",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-tb-dc0001-dr303-nls-tbg01a-ra60",
        "source": "tb-dc0001-dr303",
        "target": "nls-tbg01a-ra60",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-tb-dc0001-dr304-nls-tbg01a-ra50",
        "source": "tb-dc0001-dr304",
        "target": "nls-tbg01a-ra50",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-tb-dc0001-dr304-nls-tbg01a-ra60",
        "source": "tb-dc0001-dr304",
        "target": "nls-tbg01a-ra60",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-tb-dc0001-dr305-nls-tbg01a-ra50",
        "source": "tb-dc0001-dr305",
        "target": "nls-tbg01a-ra50",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-tb-dc0001-dr305-nls-tbg01a-ra60",
        "source": "tb-dc0001-dr305",
        "target": "nls-tbg01a-ra60",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-tb-dc0001-dr306-nls-tbg01a-ra50",
        "source": "tb-dc0001-dr306",
        "target": "nls-tbg01a-ra50",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-tb-dc0001-dr306-nls-tbg01a-ra60",
        "source": "tb-dc0001-dr306",
        "target": "nls-tbg01a-ra60",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-tb-dc0001-dr307-nls-tbg01a-ra50",
        "source": "tb-dc0001-dr307",
        "target": "nls-tbg01a-ra50",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-tb-dc0001-dr307-nls-tbg01a-ra60",
        "source": "tb-dc0001-dr307",
        "target": "nls-tbg01a-ra60",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-tb-dc0001-dr308-nls-tbg01a-ra50",
        "source": "tb-dc0001-dr308",
        "target": "nls-tbg01a-ra50",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-tb-dc0001-dr308-nls-tbg01a-ra60",
        "source": "tb-dc0001-dr308",
        "target": "nls-tbg01a-ra60",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-rt-dc0173-dr301-rt-dc0173-gr102",
        "source": "rt-dc0173-dr301",
        "target": "rt-dc0173-gr102",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-rt-dc0173-dr301-rt-dc0173-gr101",
        "source": "rt-dc0173-dr301",
        "target": "rt-dc0173-gr101",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-rt-dc0173-dr302-rt-dc0173-gr102",
        "source": "rt-dc0173-dr302",
        "target": "rt-dc0173-gr102",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-rt-dc0173-dr302-rt-dc0173-gr101",
        "source": "rt-dc0173-dr302",
        "target": "rt-dc0173-gr101",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-slr-tr0004-gr103-new-slr-tr0004-gr104-new",
        "source": "slr-tr0004-gr103-new",
        "target": "slr-tr0004-gr104-new",
        "label": [
          "200"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-slr-tr0004-gr103-new-slr-tr0004-dr371",
        "source": "slr-tr0004-gr103-new",
        "target": "slr-tr0004-dr371",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-slr-tr0004-gr103-new-SLR-TR0004-DR101",
        "source": "slr-tr0004-gr103-new",
        "target": "SLR-TR0004-DR101",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-slr-tr0004-gr103-new-slr-tr0004-gr303",
        "source": "slr-tr0004-gr103-new",
        "target": "slr-tr0004-gr303",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-slr-tr0004-gr104-new-slr-tr0004-dr372",
        "source": "slr-tr0004-gr104-new",
        "target": "slr-tr0004-dr372",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-slr-tr0004-gr104-new-SLR-TR0004-DR102",
        "source": "slr-tr0004-gr104-new",
        "target": "SLR-TR0004-DR102",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-slr-tr0004-gr104-new-slr-tr0004-gr304",
        "source": "slr-tr0004-gr104-new",
        "target": "slr-tr0004-gr304",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-slr-tr0004-dr371-slr-tr0004-dr372",
        "source": "slr-tr0004-dr371",
        "target": "slr-tr0004-dr372",
        "label": [
          "200"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-AMS-TR0021-DR107-ams-tr0021-gr104",
        "source": "AMS-TR0021-DR107",
        "target": "ams-tr0021-gr104",
        "label": [
          "400"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-AMS-TR0021-DR107-ams-tr0021-gr103",
        "source": "AMS-TR0021-DR107",
        "target": "ams-tr0021-gr103",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-RT-RC0173-DR107-rt-dc0173-gr102",
        "source": "RT-RC0173-DR107",
        "target": "rt-dc0173-gr102",
        "label": [
          "400"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-RT-RC0173-DR107-rt-dc0173-gr101",
        "source": "RT-RC0173-DR107",
        "target": "rt-dc0173-gr101",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-HTN-S03555-CR103-HTN-S03555-CR103",
        "source": "HTN-S03555-CR103",
        "target": "HTN-S03555-CR103",
        "label": [
          "10000"
        ],
        "edgeId": "1",
        "type": "loop"
      },
      {
        "id": "edge-HTN-S03555-CR103-HTN-S03555-CR104",
        "source": "HTN-S03555-CR103",
        "target": "HTN-S03555-CR104",
        "label": [
          "0"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-AMS-TR0021-DR103-ams-tr0021-gr104-new",
        "source": "AMS-TR0021-DR103",
        "target": "ams-tr0021-gr104-new",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-AMS-TR0021-DR103-ams-tr0021-gr103",
        "source": "AMS-TR0021-DR103",
        "target": "ams-tr0021-gr103",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-ams-tr0006-dr102-ams-dc0001-gr103-new",
        "source": "ams-tr0006-dr102",
        "target": "ams-dc0001-gr103-new",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-ams-tr0006-dr102-ams-tr0021-gr104-new",
        "source": "ams-tr0006-dr102",
        "target": "ams-tr0021-gr104-new",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-ams-tr0409-dr102-ams-dc0001-gr103-new",
        "source": "ams-tr0409-dr102",
        "target": "ams-dc0001-gr103-new",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-ams-tr0409-dr102-ams-tr0021-gr104-new",
        "source": "ams-tr0409-dr102",
        "target": "ams-tr0021-gr104-new",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-ams-tr0610-dr102-ams-dc0001-gr103-new",
        "source": "ams-tr0610-dr102",
        "target": "ams-dc0001-gr103-new",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-ams-tr0610-dr102-ams-tr0021-gr104-new",
        "source": "ams-tr0610-dr102",
        "target": "ams-tr0021-gr104-new",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-ams-tr0042-dr102-ams-dc0001-gr103-new",
        "source": "ams-tr0042-dr102",
        "target": "ams-dc0001-gr103-new",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-ams-tr0042-dr102-ams-tr0021-gr104-new",
        "source": "ams-tr0042-dr102",
        "target": "ams-tr0021-gr104-new",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-SLR-TR0004-DR101-SLR-TR0004-DR102",
        "source": "SLR-TR0004-DR101",
        "target": "SLR-TR0004-DR102",
        "label": [
          "400"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-AH-TR0009-DR101-AH-TR0009-DR102",
        "source": "AH-TR0009-DR101",
        "target": "AH-TR0009-DR102",
        "label": [
          "400"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-EHV-TR0001-DR101-EHV-TR0001-DR102",
        "source": "EHV-TR0001-DR101",
        "target": "EHV-TR0001-DR102",
        "label": [
          "400"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-ams-dc0001-dr102-ams-dc0001-gr103-new",
        "source": "ams-dc0001-dr102",
        "target": "ams-dc0001-gr103-new",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-ams-dc0001-dr102-ams-tr0021-dr102",
        "source": "ams-dc0001-dr102",
        "target": "ams-tr0021-dr102",
        "label": [
          "400"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-slr-tr0004-gr303-slr-tr0004-gr304",
        "source": "slr-tr0004-gr303",
        "target": "slr-tr0004-gr304",
        "label": [
          "2200"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-ams-tr0021-gr303-ams-tr0021-gr304",
        "source": "ams-tr0021-gr303",
        "target": "ams-tr0021-gr304",
        "label": [
          "2200"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-ams-tr0021-gr303-nls-ams02e-ra50",
        "source": "ams-tr0021-gr303",
        "target": "nls-ams02e-ra50",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-ams-tr0021-gr304-nls-ams02e-ra60",
        "source": "ams-tr0021-gr304",
        "target": "nls-ams02e-ra60",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-tb-dc0001-gr303-tb-dc0001-gr304",
        "source": "tb-dc0001-gr303",
        "target": "tb-dc0001-gr304",
        "label": [
          "2200"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-tb-dc0001-gr303-nls-tbg01a-ra50",
        "source": "tb-dc0001-gr303",
        "target": "nls-tbg01a-ra50",
        "label": [
          "1999"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-tb-dc0001-gr304-nls-tbg01a-ra60",
        "source": "tb-dc0001-gr304",
        "target": "nls-tbg01a-ra60",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-mnd-dc0002-dr171-mnd-dc0002-dr172",
        "source": "mnd-dc0002-dr171",
        "target": "mnd-dc0002-dr172",
        "label": [
          "200"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-mnd-dc0002-dr171-mnd-dc0001-gr101",
        "source": "mnd-dc0002-dr171",
        "target": "mnd-dc0001-gr101",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-mnd-dc0002-dr172-hvs-dc0001-gr102",
        "source": "mnd-dc0002-dr172",
        "target": "hvs-dc0001-gr102",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-ams-dc0001-dr149-ams-tr0021-dr149",
        "source": "ams-dc0001-dr149",
        "target": "ams-tr0021-dr149",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-HM-RC0100-DR105-HM-RC0100-DR106",
        "source": "HM-RC0100-DR105",
        "target": "HM-RC0100-DR106",
        "label": [
          "400"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-HM-RC0100-DR105-hm-dc0100-gr101",
        "source": "HM-RC0100-DR105",
        "target": "hm-dc0100-gr101",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-HM-RC0100-DR106-hm-dc0100-gr102",
        "source": "HM-RC0100-DR106",
        "target": "hm-dc0100-gr102",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-RT-RC0173-DR105-RT-RC0173-DR106",
        "source": "RT-RC0173-DR105",
        "target": "RT-RC0173-DR106",
        "label": [
          "400"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-RT-RC0173-DR105-rt-dc0173-gr102",
        "source": "RT-RC0173-DR105",
        "target": "rt-dc0173-gr102",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-RT-RC0173-DR106-rt-dc0173-gr101",
        "source": "RT-RC0173-DR106",
        "target": "rt-dc0173-gr101",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-nls-mnd01a-ra2-nls-mnd01a-ra60",
        "source": "nls-mnd01a-ra2",
        "target": "nls-mnd01a-ra60",
        "label": [
          "327691"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-nls-hlm01a-ra50-nls-hlm01a-ra60",
        "source": "nls-hlm01a-ra50",
        "target": "nls-hlm01a-ra60",
        "label": [
          "200"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-nls-ams02a-rb3-nls-ams02a-rb4",
        "source": "nls-ams02a-rb3",
        "target": "nls-ams02a-rb4",
        "label": [
          "400"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-nls-ams02a-rb3-ams-tr0021-gr104",
        "source": "nls-ams02a-rb3",
        "target": "ams-tr0021-gr104",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-nls-ams02a-rb4-ams-tr0021-gr103",
        "source": "nls-ams02a-rb4",
        "target": "ams-tr0021-gr103",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-zp-dc0100-gr101-zp-dc0100-gr102",
        "source": "zp-dc0100-gr101",
        "target": "zp-dc0100-gr102",
        "label": [
          "200"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-zp-dc0100-gr101-nls-zut01a-rb1",
        "source": "zp-dc0100-gr101",
        "target": "nls-zut01a-rb1",
        "label": [
          "5000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-zp-dc0100-gr101-nls-zut01a-rb2",
        "source": "zp-dc0100-gr101",
        "target": "nls-zut01a-rb2",
        "label": [
          "5000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-zp-dc0100-gr101-zp-dc0100-dr101",
        "source": "zp-dc0100-gr101",
        "target": "zp-dc0100-dr101",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-zp-dc0100-gr102-nls-zut01a-rb1",
        "source": "zp-dc0100-gr102",
        "target": "nls-zut01a-rb1",
        "label": [
          "5000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-zp-dc0100-gr102-nls-zut01a-rb2",
        "source": "zp-dc0100-gr102",
        "target": "nls-zut01a-rb2",
        "label": [
          "5000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-zp-dc0100-gr102-zp-dc0100-dr102",
        "source": "zp-dc0100-gr102",
        "target": "zp-dc0100-dr102",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-ehv-dc0002-gr101-hm-dc0100-gr102",
        "source": "ehv-dc0002-gr101",
        "target": "hm-dc0100-gr102",
        "label": [
          "200"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-ehv-dc0002-gr101-ehv-dc0002-dr102",
        "source": "ehv-dc0002-gr101",
        "target": "ehv-dc0002-dr102",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-ams-dc0001-gr103-new-ams-tr0021-gr104-new",
        "source": "ams-dc0001-gr103-new",
        "target": "ams-tr0021-gr104-new",
        "label": [
          "200"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-ams-dc0001-gr103-new-ams-tr0410-dr106",
        "source": "ams-dc0001-gr103-new",
        "target": "ams-tr0410-dr106",
        "label": [
          "1000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-ams-tr0021-gr104-new-ams-tr0410-dr106",
        "source": "ams-tr0021-gr104-new",
        "target": "ams-tr0410-dr106",
        "label": [
          "1000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-ams-tr0021-gr104-new-ams-tr0021-dr102",
        "source": "ams-tr0021-gr104-new",
        "target": "ams-tr0021-dr102",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-nls-ams02e-ra50-nls-ams02e-ra60",
        "source": "nls-ams02e-ra50",
        "target": "nls-ams02e-ra60",
        "label": [
          "200"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-ams-tr0021-gr104-ams-tr0021-gr103",
        "source": "ams-tr0021-gr104",
        "target": "ams-tr0021-gr103",
        "label": [
          "200"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-ams-tr0021-gr104-nls-ams02a-rb1",
        "source": "ams-tr0021-gr104",
        "target": "nls-ams02a-rb1",
        "label": [
          "5000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-ams-tr0021-gr104-nls-ams02a-rb2",
        "source": "ams-tr0021-gr104",
        "target": "nls-ams02a-rb2",
        "label": [
          "5000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-ams-tr0021-gr103-nls-ams02a-rb1",
        "source": "ams-tr0021-gr103",
        "target": "nls-ams02a-rb1",
        "label": [
          "5000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-ams-tr0021-gr103-nls-ams02a-rb2",
        "source": "ams-tr0021-gr103",
        "target": "nls-ams02a-rb2",
        "label": [
          "5000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-hm-dc0100-gr102-hm-dc0100-gr101",
        "source": "hm-dc0100-gr102",
        "target": "hm-dc0100-gr101",
        "label": [
          "200"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-hm-dc0100-gr102-nls-hlm01a-rb1",
        "source": "hm-dc0100-gr102",
        "target": "nls-hlm01a-rb1",
        "label": [
          "5000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-hm-dc0100-gr102-nls-hlm01a-rb2",
        "source": "hm-dc0100-gr102",
        "target": "nls-hlm01a-rb2",
        "label": [
          "5000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-hm-dc0100-gr102-hm-dc0100-dr102",
        "source": "hm-dc0100-gr102",
        "target": "hm-dc0100-dr102",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-hm-dc0100-gr102-hm-dc0100-dr104",
        "source": "hm-dc0100-gr102",
        "target": "hm-dc0100-dr104",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-hm-dc0100-gr101-nls-hlm01a-rb1",
        "source": "hm-dc0100-gr101",
        "target": "nls-hlm01a-rb1",
        "label": [
          "5000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-hm-dc0100-gr101-nls-hlm01a-rb2",
        "source": "hm-dc0100-gr101",
        "target": "nls-hlm01a-rb2",
        "label": [
          "5000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-hm-dc0100-gr101-hm-dc0100-dr103",
        "source": "hm-dc0100-gr101",
        "target": "hm-dc0100-dr103",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-rt-dc0172-gr102-rt-dc0172-gr101",
        "source": "rt-dc0172-gr102",
        "target": "rt-dc0172-gr101",
        "label": [
          "200"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-rt-dc0172-gr102-nls-rtm02a-rb1",
        "source": "rt-dc0172-gr102",
        "target": "nls-rtm02a-rb1",
        "label": [
          "5000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-rt-dc0172-gr102-nls-rtm02a-rb2",
        "source": "rt-dc0172-gr102",
        "target": "nls-rtm02a-rb2",
        "label": [
          "5000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-rt-dc0172-gr101-nls-rtm02a-rb1",
        "source": "rt-dc0172-gr101",
        "target": "nls-rtm02a-rb1",
        "label": [
          "5000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-rt-dc0172-gr101-nls-rtm02a-rb2",
        "source": "rt-dc0172-gr101",
        "target": "nls-rtm02a-rb2",
        "label": [
          "5000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-rt-dc0172-gr101-rt-lc0100-dr102",
        "source": "rt-dc0172-gr101",
        "target": "rt-lc0100-dr102",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-lls-dc0100-gr102-lls-dc0100-gr101",
        "source": "lls-dc0100-gr102",
        "target": "lls-dc0100-gr101",
        "label": [
          "200"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-lls-dc0100-gr102-nls-ley01a-rb1",
        "source": "lls-dc0100-gr102",
        "target": "nls-ley01a-rb1",
        "label": [
          "5000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-lls-dc0100-gr102-nls-ley01a-rb2",
        "source": "lls-dc0100-gr102",
        "target": "nls-ley01a-rb2",
        "label": [
          "5000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-lls-dc0100-gr102-lls-dc0100-dr101",
        "source": "lls-dc0100-gr102",
        "target": "lls-dc0100-dr101",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-lls-dc0100-gr101-nls-ley01a-rb1",
        "source": "lls-dc0100-gr101",
        "target": "nls-ley01a-rb1",
        "label": [
          "5000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-lls-dc0100-gr101-nls-ley01a-rb2",
        "source": "lls-dc0100-gr101",
        "target": "nls-ley01a-rb2",
        "label": [
          "5000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-lls-dc0100-gr101-lls-dc0100-dr102",
        "source": "lls-dc0100-gr101",
        "target": "lls-dc0100-dr102",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-hrv-dc0100-gr102-hrv-dc0100-gr101",
        "source": "hrv-dc0100-gr102",
        "target": "hrv-dc0100-gr101",
        "label": [
          "200"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-hrv-dc0100-gr102-nls-hrv01a-rb1",
        "source": "hrv-dc0100-gr102",
        "target": "nls-hrv01a-rb1",
        "label": [
          "5000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-hrv-dc0100-gr102-nls-hrv01a-rb2",
        "source": "hrv-dc0100-gr102",
        "target": "nls-hrv01a-rb2",
        "label": [
          "5000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-hrv-dc0100-gr101-nls-hrv01a-rb1",
        "source": "hrv-dc0100-gr101",
        "target": "nls-hrv01a-rb1",
        "label": [
          "5000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-hrv-dc0100-gr101-nls-hrv01a-rb2",
        "source": "hrv-dc0100-gr101",
        "target": "nls-hrv01a-rb2",
        "label": [
          "5000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-nm-dc0100-gr102-nm-dc0100-gr101",
        "source": "nm-dc0100-gr102",
        "target": "nm-dc0100-gr101",
        "label": [
          "200"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-nm-dc0100-gr102-nls-nij01a-rb1",
        "source": "nm-dc0100-gr102",
        "target": "nls-nij01a-rb1",
        "label": [
          "5000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-nm-dc0100-gr102-nls-nij01a-rb2",
        "source": "nm-dc0100-gr102",
        "target": "nls-nij01a-rb2",
        "label": [
          "5000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-nm-dc0100-gr102-nm-dc0100-dr102",
        "source": "nm-dc0100-gr102",
        "target": "nm-dc0100-dr102",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-nm-dc0100-gr101-nls-nij01a-rb1",
        "source": "nm-dc0100-gr101",
        "target": "nls-nij01a-rb1",
        "label": [
          "5000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-nm-dc0100-gr101-nls-nij01a-rb2",
        "source": "nm-dc0100-gr101",
        "target": "nls-nij01a-rb2",
        "label": [
          "5000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-nm-dc0100-gr101-nm-dc0100-dr101",
        "source": "nm-dc0100-gr101",
        "target": "nm-dc0100-dr101",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-nls-rtm03a-rb1-rt-dc0173-gr102",
        "source": "nls-rtm03a-rb1",
        "target": "rt-dc0173-gr102",
        "label": [
          "5000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-nls-rtm03a-rb1-rt-dc0173-gr101",
        "source": "nls-rtm03a-rb1",
        "target": "rt-dc0173-gr101",
        "label": [
          "5000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-nls-rtm03a-rb2-rt-dc0173-gr102",
        "source": "nls-rtm03a-rb2",
        "target": "rt-dc0173-gr102",
        "label": [
          "5000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-nls-rtm03a-rb2-rt-dc0173-gr101",
        "source": "nls-rtm03a-rb2",
        "target": "rt-dc0173-gr101",
        "label": [
          "5000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-nls-mnd01a-ra50-nls-mnd01a-ra60",
        "source": "nls-mnd01a-ra50",
        "target": "nls-mnd01a-ra60",
        "label": [
          "200"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-rt-dc0173-gr102-rt-dc0173-gr101",
        "source": "rt-dc0173-gr102",
        "target": "rt-dc0173-gr101",
        "label": [
          "200"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-rt-dc0173-gr102-rt-dc0173-dr102",
        "source": "rt-dc0173-gr102",
        "target": "rt-dc0173-dr102",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-nls-tbg01a-ra50-nls-tbg01a-ra60",
        "source": "nls-tbg01a-ra50",
        "target": "nls-tbg01a-ra60",
        "label": [
          "200"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-rt-lc0100-dr102-rt-dc0173-dr102",
        "source": "rt-lc0100-dr102",
        "target": "rt-dc0173-dr102",
        "label": [
          "400"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-zp-dc0100-dr101-zp-dc0100-dr102",
        "source": "zp-dc0100-dr101",
        "target": "zp-dc0100-dr102",
        "label": [
          "400"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-lls-dc0100-dr101-lls-dc0100-dr102",
        "source": "lls-dc0100-dr101",
        "target": "lls-dc0100-dr102",
        "label": [
          "400"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-hm-dc0100-dr102-hm-dc0100-dr103",
        "source": "hm-dc0100-dr102",
        "target": "hm-dc0100-dr103",
        "label": [
          "400"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-ehv-dc0002-dr102-hm-dc0100-dr104",
        "source": "ehv-dc0002-dr102",
        "target": "hm-dc0100-dr104",
        "label": [
          "400"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-nm-dc0100-dr101-nm-dc0100-dr102",
        "source": "nm-dc0100-dr101",
        "target": "nm-dc0100-dr102",
        "label": [
          "400"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-weer-dc0002-dr102-venls-dc0003-dr102",
        "source": "weer-dc0002-dr102",
        "target": "venls-dc0003-dr102",
        "label": [
          "400"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-weer-dc0002-dr102-weer-dc0002-gr101",
        "source": "weer-dc0002-dr102",
        "target": "weer-dc0002-gr101",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-venls-dc0003-dr102-venls-dc0003-gr102",
        "source": "venls-dc0003-dr102",
        "target": "venls-dc0003-gr102",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-asn-dc0002-dr102-gn-dc0002-dr102",
        "source": "asn-dc0002-dr102",
        "target": "gn-dc0002-dr102",
        "label": [
          "400"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-asn-dc0002-dr102-asn-dc0002-gr101",
        "source": "asn-dc0002-dr102",
        "target": "asn-dc0002-gr101",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-gn-dc0002-dr102-gn-dc0002-gr102",
        "source": "gn-dc0002-dr102",
        "target": "gn-dc0002-gr102",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-gv-dc0010-dr102-gv-dc0052-dr102",
        "source": "gv-dc0010-dr102",
        "target": "gv-dc0052-dr102",
        "label": [
          "400"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-gv-dc0010-dr102-gv-dc0010-gr101",
        "source": "gv-dc0010-dr102",
        "target": "gv-dc0010-gr101",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-gv-dc0052-dr102-gv-dc0052-gr102",
        "source": "gv-dc0052-dr102",
        "target": "gv-dc0052-gr102",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-vnn-dc0001-dr102-amr-dc0010-dr102",
        "source": "vnn-dc0001-dr102",
        "target": "amr-dc0010-dr102",
        "label": [
          "400"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-vnn-dc0001-dr102-vnn-dc0001-gr101",
        "source": "vnn-dc0001-dr102",
        "target": "vnn-dc0001-gr101",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-amr-dc0010-dr102-amr-dc0010-gr102",
        "source": "amr-dc0010-dr102",
        "target": "amr-dc0010-gr102",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-mnd-dc0001-dr102-hvs-dc0002-dr102",
        "source": "mnd-dc0001-dr102",
        "target": "hvs-dc0002-dr102",
        "label": [
          "400"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-mnd-dc0001-dr102-mnd-dc0001-gr101",
        "source": "mnd-dc0001-dr102",
        "target": "mnd-dc0001-gr101",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-hvs-dc0002-dr102-hvs-dc0001-gr102",
        "source": "hvs-dc0002-dr102",
        "target": "hvs-dc0001-gr102",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-dv-dc0001-dr102-zl-dc0001-dr102",
        "source": "dv-dc0001-dr102",
        "target": "zl-dc0001-dr102",
        "label": [
          "400"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-dv-dc0001-dr102-dv-dc0001-gr101",
        "source": "dv-dc0001-dr102",
        "target": "dv-dc0001-gr101",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-zl-dc0001-dr102-zl-dc0001-gr102",
        "source": "zl-dc0001-dr102",
        "target": "zl-dc0001-gr102",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-tb-dc0001-dr102-ht-dc0001-dr102",
        "source": "tb-dc0001-dr102",
        "target": "ht-dc0001-dr102",
        "label": [
          "400"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-tb-dc0001-dr102-tb-dc0001-gr101",
        "source": "tb-dc0001-dr102",
        "target": "tb-dc0001-gr101",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-ht-dc0001-dr102-ht-dc0001-gr102",
        "source": "ht-dc0001-dr102",
        "target": "ht-dc0001-gr102",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-re0-mnd-dc0002-gr103-re0-mnd-dc0002-gr104",
        "source": "re0-mnd-dc0002-gr103",
        "target": "re0-mnd-dc0002-gr104",
        "label": [
          "400"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-re0-mnd-dc0002-gr103-mnd-dc0001-gr101",
        "source": "re0-mnd-dc0002-gr103",
        "target": "mnd-dc0001-gr101",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-re0-mnd-dc0002-gr104-hvs-dc0001-gr102",
        "source": "re0-mnd-dc0002-gr104",
        "target": "hvs-dc0001-gr102",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-re0-tb-dc0001-gr103-re0-tb-dc0001-gr104",
        "source": "re0-tb-dc0001-gr103",
        "target": "re0-tb-dc0001-gr104",
        "label": [
          "400"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-re0-tb-dc0001-gr103-tb-dc0001-gr101",
        "source": "re0-tb-dc0001-gr103",
        "target": "tb-dc0001-gr101",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-re0-tb-dc0001-gr104-ht-dc0001-gr102",
        "source": "re0-tb-dc0001-gr104",
        "target": "ht-dc0001-gr102",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-re0-ams-tr0610-dr101-re0-ams-tr0042-dr101",
        "source": "re0-ams-tr0610-dr101",
        "target": "re0-ams-tr0042-dr101",
        "label": [
          "400"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-re0-ams-tr0610-dr101-re0-ams-tr0409-dr101",
        "source": "re0-ams-tr0610-dr101",
        "target": "re0-ams-tr0409-dr101",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-re0-ams-tr0610-dr101-re0-ams-tr0410-dr102",
        "source": "re0-ams-tr0610-dr101",
        "target": "re0-ams-tr0410-dr102",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-re0-ams-tr0042-dr101-re0-ams-tr0409-dr101",
        "source": "re0-ams-tr0042-dr101",
        "target": "re0-ams-tr0409-dr101",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-re0-ams-tr0042-dr101-re0-ams-tr0410-dr102",
        "source": "re0-ams-tr0042-dr101",
        "target": "re0-ams-tr0410-dr102",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-asn-dc0002-gr101-gn-dc0002-gr102",
        "source": "asn-dc0002-gr101",
        "target": "gn-dc0002-gr102",
        "label": [
          "200"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-asn-dc0002-gr101-re0-gn-dc0002-dr101",
        "source": "asn-dc0002-gr101",
        "target": "re0-gn-dc0002-dr101",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-asn-dc0002-gr101-re0-emn-dc0001-dr101",
        "source": "asn-dc0002-gr101",
        "target": "re0-emn-dc0001-dr101",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-gn-dc0002-gr102-re0-gn-dc0002-dr101",
        "source": "gn-dc0002-gr102",
        "target": "re0-gn-dc0002-dr101",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-gn-dc0002-gr102-re0-emn-dc0001-dr101",
        "source": "gn-dc0002-gr102",
        "target": "re0-emn-dc0001-dr101",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-dv-dc0001-gr101-zl-dc0001-gr102",
        "source": "dv-dc0001-gr101",
        "target": "zl-dc0001-gr102",
        "label": [
          "200"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-dv-dc0001-gr101-re0-zl-dc0001-dr101",
        "source": "dv-dc0001-gr101",
        "target": "re0-zl-dc0001-dr101",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-zl-dc0001-gr102-re0-zl-dc0001-dr101",
        "source": "zl-dc0001-gr102",
        "target": "re0-zl-dc0001-dr101",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-tb-dc0001-gr101-ht-dc0001-gr102",
        "source": "tb-dc0001-gr101",
        "target": "ht-dc0001-gr102",
        "label": [
          "200"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-tb-dc0001-gr101-re0-ht-dc0001-dr101",
        "source": "tb-dc0001-gr101",
        "target": "re0-ht-dc0001-dr101",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-tb-dc0001-gr101-re0-tb-dc0001-dr101",
        "source": "tb-dc0001-gr101",
        "target": "re0-tb-dc0001-dr101",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-tb-dc0001-gr101-re0-bd-dc0002-dr101",
        "source": "tb-dc0001-gr101",
        "target": "re0-bd-dc0002-dr101",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-ht-dc0001-gr102-re0-ht-dc0001-dr101",
        "source": "ht-dc0001-gr102",
        "target": "re0-ht-dc0001-dr101",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-ht-dc0001-gr102-re0-tb-dc0001-dr101",
        "source": "ht-dc0001-gr102",
        "target": "re0-tb-dc0001-dr101",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-ht-dc0001-gr102-re0-bd-dc0002-dr101",
        "source": "ht-dc0001-gr102",
        "target": "re0-bd-dc0002-dr101",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-weer-dc0002-gr101-venls-dc0003-gr102",
        "source": "weer-dc0002-gr101",
        "target": "venls-dc0003-gr102",
        "label": [
          "200"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-weer-dc0002-gr101-re0-ah-tr0002-dr108",
        "source": "weer-dc0002-gr101",
        "target": "re0-ah-tr0002-dr108",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-venls-dc0003-gr102-re0-ah-tr0002-dr108",
        "source": "venls-dc0003-gr102",
        "target": "re0-ah-tr0002-dr108",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-vnn-dc0001-gr101-amr-dc0010-gr102",
        "source": "vnn-dc0001-gr101",
        "target": "amr-dc0010-gr102",
        "label": [
          "200"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-vnn-dc0001-gr101-re0-vnn-dc0001-dr101",
        "source": "vnn-dc0001-gr101",
        "target": "re0-vnn-dc0001-dr101",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-amr-dc0010-gr102-re0-vnn-dc0001-dr101",
        "source": "amr-dc0010-gr102",
        "target": "re0-vnn-dc0001-dr101",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-mnd-dc0001-gr101-hvs-dc0001-gr102",
        "source": "mnd-dc0001-gr101",
        "target": "hvs-dc0001-gr102",
        "label": [
          "200"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-mnd-dc0001-gr101-re0-mnd-dc0001-dr101",
        "source": "mnd-dc0001-gr101",
        "target": "re0-mnd-dc0001-dr101",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-hvs-dc0001-gr102-re0-mnd-dc0001-dr101",
        "source": "hvs-dc0001-gr102",
        "target": "re0-mnd-dc0001-dr101",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-gv-dc0010-gr101-gv-dc0052-gr102",
        "source": "gv-dc0010-gr101",
        "target": "gv-dc0052-gr102",
        "label": [
          "200"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-gv-dc0010-gr101-re0-gv-dc0010-dr101",
        "source": "gv-dc0010-gr101",
        "target": "re0-gv-dc0010-dr101",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-gv-dc0010-gr101-re0-rt-tr0006-dr108",
        "source": "gv-dc0010-gr101",
        "target": "re0-rt-tr0006-dr108",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-gv-dc0052-gr102-re0-gv-dc0010-dr101",
        "source": "gv-dc0052-gr102",
        "target": "re0-gv-dc0010-dr101",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-gv-dc0052-gr102-re0-rt-tr0006-dr108",
        "source": "gv-dc0052-gr102",
        "target": "re0-rt-tr0006-dr108",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-TVF-C9001-HM-001-TVF-C9001-HM-002",
        "source": "TVF-C9001-HM-001",
        "target": "TVF-C9001-HM-002",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-TVF-C9001-HM-001-TVF-C9102-AMS-001",
        "source": "TVF-C9001-HM-001",
        "target": "TVF-C9102-AMS-001",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-TVF-D1002-AMS-003-TVF-C9102-AMS-001",
        "source": "TVF-D1002-AMS-003",
        "target": "TVF-C9102-AMS-001",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-TVF-D1002-AMS-005-TVF-C9102-AMS-001",
        "source": "TVF-D1002-AMS-005",
        "target": "TVF-C9102-AMS-001",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-TVF-C9102-AMS-001-TVF-C9006-AMS-003",
        "source": "TVF-C9102-AMS-001",
        "target": "TVF-C9006-AMS-003",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-TVF-C9102-AMS-001-TVF-C9901-AMS-002",
        "source": "TVF-C9102-AMS-001",
        "target": "TVF-C9901-AMS-002",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-TVF-C9102-AMS-001-TVF-C9001-AMS-002",
        "source": "TVF-C9102-AMS-001",
        "target": "TVF-C9001-AMS-002",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-TVF-C9102-AMS-001-TVF-C9006-AMS-001",
        "source": "TVF-C9102-AMS-001",
        "target": "TVF-C9006-AMS-001",
        "label": [
          "2000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      },
      {
        "id": "edge-TVF-C9001-MT-001-TVF-C9001-MT-002",
        "source": "TVF-C9001-MT-001",
        "target": "TVF-C9001-MT-002",
        "label": [
          "4000"
        ],
        "edgeId": "1",
        "type": "quadratic"
      }
    ]
  }

// Function to determine the region based on the ID
function getRegion(nodeId) {
    if (nodeId.startsWith("TVF")) {
        const parts = nodeId.split('-');
        if (parts.length > 2) {
            return parts[2].toLowerCase(); // Normalize to uppercase
        }
    } else {
        const parts = nodeId.split('-');
        return parts[0].toLowerCase(); // Normalize to lowercase
    }
    return ''; // Default case if no region found
}

// Transform nodes to the required format

// Transform nodes to the required format
const transformedData = {
    nodes: data.nodes.map((node, index) => ({
        id: index.toString(),
        label: node.id,
        comboId: getRegion(node.id)
    })),
    edges: data.edges.map(edge => ({
        source: data.nodes.findIndex(node => node.id === edge.source).toString(),
        target: data.nodes.findIndex(node => node.id === edge.target).toString()
    })),
    combos: []
};

// Example to add combos based on unique comboIds
const uniqueComboIds = [...new Set(transformedData.nodes.map(node => node.comboId))];
transformedData.combos = uniqueComboIds.map(comboId => ({
    id: comboId,
    label: `Combo ${comboId.toUpperCase()}`
}));

// Convert the modified data to a JSON string
const jsonData = JSON.stringify(transformedData, null, 4);

// Write the JSON data to a file
fs.writeFile('transformed_data.json', jsonData, (err) => {
    if (err) {
        console.error('Error writing to file:', err);
    } else {
        console.log('Data successfully written to file.');
    }
});