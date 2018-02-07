
"use strict";

var PanGaea = {};

PanGaea.Scordatura = [];

PanGaea.TuningPegs = "";

PanGaea.Psalmodicon = {
         j2: "vv zq __ __ ry wu __ uw __ sx __ qz ",
         j3: "vt __ tv xq __ ws __ uu __ sw __ qx ",
         j5: "wr __ ut __ sv oq qo __ __ tu __ rw ",
         j6: "vu __ tw __ rx wt __ uv yq __ __ qy ",
         k1: "__ qx vt __ tv xq __ ws __ uu __ sw ",
         k2: "yr __ __ qz vv zq __ xs __ wu __ uw ",
         k5: "xr __ wt __ uv yq __ __ qy vu __ tw ",
         k6: "vs __ tu __ rw wr __ ut __ __ oq qo ",
         n0: "vr __ tt __ rv wq __ us __ su __ qw ",
        j17: "__ __ tu __ rw wr __ ut __ sv oq qo ",
        j23: "vv zq __ xs __ wu __ uw __ sx __ qz ",
        j25: "qr vp __ __ pv rq wo __ __ yu __ ow ",
        j26: "vv zq __ __ ry wu __ uw yr __ __ qz ",
        j36: "vu __ tw xr __ wt __ uv yq __ __ qy ",
        j56: "xr __ wt __ uv yq so __ qy __ __ tw ",
        k12: "__ sx __ qz vv zq __ xs __ wu __ uw ",
        k15: "__ rx wt __ uv yq __ __ qy vu __ tw ",
        k25: "yr __ __ qz vv zq __ __ ry wu __ uw ",
        k26: "vp __ __ pv rq wo __ uy __ __ ow qr ",
        k34: "wr __ ut __ __ oq qo vs __ tu __ rw ",
        k56: "vu __ tw __ rx wt __ __ yq __ os qy ",
       j236: "vv zq __ xs __ wu __ uw yr __ __ qz ",
       j256: "qr vp __ __ pv rq wo __ uy __ __ ow ",
       j2k5: "qr vp __ __ pv rq __ __ uy yu __ ow ",
       j2k6: "vv zq __ __ ry wu __ uw __ __ ot qz ",
       j2y3: "vv zq to __ __ wu __ uw __ sx __ qz ",
       j3k5: "yr __ ot qz __ zq __ __ ry wu __ uw ",
       j3k6: "vo __ ty xu __ ww __ ux __ __ ov qq ",
       j5y6: "wr __ ut __ sv oq qo vs __ __ __ rw ",
       k125: "__ sx __ qz vv zq __ __ ry wu __ uw ",
       k1j5: "__ ux yt __ ov qq vo __ __ xu __ ww ",
       k1j6: "__ zq to __ ry wu __ uw yr __ __ qz ",
       k256: "vp __ __ pv rq wo __ __ yu __ ow qr ",
       k2j5: "yr __ __ qz vv zq to __ __ wu __ uw ",
       k2j6: "vp __ __ pv rq wo __ uy yu __ __ qr ",
       k2x1: "__ __ ot qz vv zq __ xs __ wu __ uw ",
       k6x5: "vs __ tu __ rw wr __ __ __ sv oq qo ",
       n167: "yr __ __ qz __ zq to __ ry wu __ uw ",
       n345: "__ zq __ __ ry wu __ uw yr __ ot qz ",
       n5y2: "vp __ __ pv rq __ __ uy yu __ ow qr ",
       n6x2: "qr vp __ __ pv rq wo __ uy yu __ __ ",
      j17y2: "vs __ __ __ rw wr __ ut __ sv oq qo ",
      j23k6: "vv zq __ xs __ wu __ uw __ __ ot qz ",
      j25y6: "or qp __ __ tv pq ro ws __ __ __ sw ",
      j26y3: "vv zq to __ __ wu __ uw yr __ __ qz ",
      j2k34: "or qp __ __ __ pq ro ws __ uu __ sw ",
      j2k56: "vv zq __ __ ry wu __ __ yr __ ot qz ",
      j34k6: "vt __ tv pq ro __ __ uu __ __ or qp ",
      j56y7: "xr __ wt __ uv yq so __ qy vu __ __ ",
      k12j5: "__ sx __ qz vv zq to __ __ wu __ uw ",
      k17j5: "or qp vt __ tv pq ro __ __ uu __ __ ",
      k2j17: "__ __ __ pq ro ws __ uu __ sw or qp ",
      k25x1: "__ __ ot qz vv zq __ __ ry wu __ uw ",
      k26x5: "vt __ __ pq ro ws __ __ __ sw or qp ",
      k2j56: "yr __ __ qz vv zq to __ ry __ __ uw ",
      k34x2: "wr __ __ __ sv oq qo vs __ tu __ rw ",
      k56x4: "vu __ tw __ rx __ __ uv yq __ os qy ",
      n25x6: "or qp vt __ __ pq ro ws __ __ __ sw ",
      n26y5: "__ __ tv pq ro ws __ __ __ sw or qp ",
      n45y2: "vo __ __ xu __ ww __ ux yt __ ov qq ",
      n67x2: "__ ux __ __ ov qq vo __ ty xu __ ww ",
     j136y7: "__ __ tw xr __ wt __ uv yq so __ qy ",
     j167y2: "vu __ __ __ rx wt __ uv yq __ os qy ",
     j246y3: "vv zq to __ ry __ __ uw yr __ __ qz ",
     j26y34: "vv zq to xs __ __ __ uw yr __ __ qz ",
     j2k6x5: "vv zq __ __ ry wu __ __ __ sx ot qz ",
     j2k6y3: "vv zq to __ __ wu __ uw __ __ ot qz ",
     j346y5: "yr __ ot qz vv zq __ __ ry __ __ uw ",
     j3k5x4: "vu __ tw xr __ __ __ uv yq so __ qy ",
     k135x4: "__ rx wt __ __ yq __ os qy vu __ tw ",
     k157x6: "vv zq to __ ry wu __ __ yr __ __ qz ",
     k1j6y7: "__ rx wt __ uv yq __ os qy vu __ __ ",
     k257x1: "yr __ ot qz vv zq __ __ ry wu __ __ ",
     k25x17: "__ sx ot qz vv zq __ __ ry wu __ __ ",
     k2j5x1: "__ __ ot qz vv zq to __ __ wu __ uw ",
     k2j5y6: "yr __ __ qz vv zq to xs __ __ __ uw ",
     k345x2: "xr __ __ __ uv yq so __ qy vu __ tw ",
     n167x4: "vu __ __ xr __ wt __ uv yq so __ qy ",
     n345y7: "__ rx __ __ uv yq __ os qy vu __ tw ",
    j2k56x4: "vv zq __ __ ry __ __ uw yr __ ot qz ",
    j3k56x4: "vo __ ty xu __ __ __ ux yt __ ov qq ",
    k1j56y7: "__ ux yt __ ov qq vo __ ty xu __ __ ",
    k2j56y7: "yr __ __ qz vv zq to __ ry wu __ __ "
};


PanGaea.Graphiato = {
    fj: function(qp) {return this.en(qp)},
    cj: function(qp) {return this.bn(qp)},
    gj: function(qp) {return this.fk(qp)},
    dj: function(qp) {return this.ck(qp)},
    aj: function(qp) {return(qp.slice(16,24).concat(qp.slice(0,16)))},
    ej: function(qp) {return(qp.slice( 6,24).concat(qp.slice(0, 6)))},
    bj: function(qp) {return(qp.slice(20,24).concat(qp.slice(0,20)))},
    fn: function(qp) {return(qp.slice(10,24).concat(qp.slice(0,10)))},
    cn: function(qp) {return(qp.slice( 0,24).concat(qp.slice(0, 0)))},
    gn: function(qp) {return(qp.slice(14,24).concat(qp.slice(0,14)))},
    dn: function(qp) {return(qp.slice( 4,24).concat(qp.slice(0, 4)))},
    an: function(qp) {return(qp.slice(18,24).concat(qp.slice(0,18)))},
    en: function(qp) {return(qp.slice( 8,24).concat(qp.slice(0, 8)))},
    bn: function(qp) {return(qp.slice(22,24).concat(qp.slice(0,22)))},
    fk: function(qp) {return(qp.slice(12,24).concat(qp.slice(0,12)))},
    ck: function(qp) {return(qp.slice( 2,24).concat(qp.slice(0, 2)))},
    gk: function(qp) {return(qp.slice(16,24).concat(qp.slice(0,16)))},
    dk: function(qp) {return this.ej(qp)},
    ak: function(qp) {return this.bj(qp)},
    ek: function(qp) {return this.fn(qp)},
    bk: function(qp) {return this.cn(qp)}
};


PanGaea.setPegBox = function(calibrate) {
  var ennead = ["bj","fn","cn","gn","dn","an","en","bn","fk"];
  var item, replica;
  var extent = this.Scordatura.length;

  if (extent > 0) {
    while (extent > 0) {
      this.Scordatura.pop();
      extent--;
    }
  }

  switch(calibrate) {
    case "beadgcf":
      replica = ennead.slice(1, 8);
      item = 0;
      while (item < replica.length) {
        this.Scordatura.push(replica[item]);
        item++;
      }
      this.TuningPegs = calibrate;
      break;

    case "cgdae":
      replica = ennead.slice(2, 7).reverse();
      item = 0;
      while (item < replica.length) {
        this.Scordatura.push(replica[item]);
        item++;
      }
      this.TuningPegs = calibrate;
      break;

    case "eadgbe":
      replica = ennead.slice(6, 8).concat(ennead.slice(3, 7));
      item = 0;
      while (item < replica.length) {
        this.Scordatura.push(replica[item]);
        item++;
      }
      this.TuningPegs = calibrate;
      break;

    default:
      this.Scordatura = ["dn","bj","fk","dn","bj","fk"];
      this.TuningPegs = "fkbjdn";
  }
};


PanGaea.inquire = function(epithet) {
  var chamber = this.Psalmodicon[epithet].split(" ");
  var vacant = "__";

  if (chamber[0] !== vacant) {
    return 0;
  }
  else if (chamber[7] !== vacant) {
    return 7;
  }
  else if (chamber[5] !== vacant) {
    return 5;
  }
  else {
    return 11;
  }
};


PanGaea.Sampurna = function(epithet) {
  var necklace = this.Psalmodicon[epithet];
  var bracelet = necklace.replace(/[a-z]{2}/gi, "\u56D7");
  var beadwork = bracelet.replace(/__/g, "\u4E00");
  return beadwork.split(" ");
};


PanGaea.Shadjam = function(collar, amulet) {
  var necklace = collar.slice(0, collar.length);
  necklace[amulet] = "\u56DE";
  return necklace.join(" ") + " ";
};


PanGaea.orchestrate = function() {
  var fabric = arguments[0];
  var epithet = arguments[1];
  var locket = arguments[2];

    if (locket > 11 && locket < 24) locket = locket - 12;
    if (locket > 23) locket = locket - 24;

  var amalgam = this.Psalmodicon[epithet].split(" ")[locket];

    if (!amalgam) {
      amalgam = "m-";
    }
    if (amalgam === "__") {
      var notes =["cn","ck","dn","dk","en","fn","fk","gn","gk","an","ak","bn"];
      var semitone = 0;
      while (semitone < notes.length) {
        if (locket == semitone) {
          amalgam = notes[semitone];
          break;
        } semitone++;
      }
    }

  var serial = new Date().getTime();
  var registry = epithet + "-" + this.TuningPegs + "-" + amalgam + serial;

  var expanse = this.Scordatura.length;
  var replica = this.Scordatura.slice(0, expanse);
  var pendant = this.Shadjam(this.Sampurna(epithet), locket);

  var deck = document.getElementById(fabric);
    deck.firstChild.nextSibling.textContent = registry;

  var markup = deck.childNodes[2].nextSibling.tagName;
  var plaza = deck.getElementsByTagName(markup);

  for (var item = 0; item < expanse; item++) {
    if (!replica[item]) break;
    plaza[item].textContent = this.Graphiato[replica[item]](pendant);
  }
};


// Atrium
PanGaea.EntryWay = function(epithet, portico, fabric) {

  // default tuning
  if (this.Scordatura.length === 0) {
    this.setPegBox("beadgcf");
  }

  if (!this.Psalmodicon.hasOwnProperty(epithet)) {
    var epithet = "n0";
  }

  var pendant = this.inquire(epithet);
  var keynote = epithet + " " + pendant.toString();

  var lanai = document.getElementById(portico);
    lanai.value = keynote;

  var gallery = keynote.split(" ");
  this.orchestrate(fabric, gallery[0], gallery[1]);
};


PanGaea.CartoGraph = function(portico, fabric) {
  var lanai = document.getElementById(portico);
  var gallery = lanai.value.split(" ");

  if (!this.Psalmodicon.hasOwnProperty(gallery[0])) {
    lanai.value = "n0 7";
    gallery = lanai.value.split(" ");
  }

  this.orchestrate(fabric, gallery[0], gallery[1]);
};


PanGaea.secateurs = function(fabric) {
  var deck = document.getElementById(fabric);
  var markup = deck.childNodes[2].nextSibling.tagName;
  var plaza = deck.getElementsByTagName(markup);
  var expanse = plaza.length;
  for (var item = 0; item < expanse; item++) {
    plaza[item].textContent = "";
  }
};


PanGaea.cultivate = function(calibrate, portico, fabric) {
  var lanai = document.getElementById(portico);
  var gallery = lanai.value.split(" ");
  this.secateurs(fabric);
  this.setPegBox(calibrate);
  this.EntryWay(gallery[0], portico, fabric);
};


