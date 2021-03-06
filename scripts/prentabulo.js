
"use strict";

function PanThalassa(terrane) {

  this.PanGaea = terrane;

  this.Scordatura = [];

  this.HeadStock = "";

  this.GemStone = {
    corundum: [
      "j136y7", "j167y2", "j17", "j17y2", "j2", "j23", "j236",
      "j23k6", "j246y3", "j26", "j26y3", "j26y34", "j2k56", "j2k56x4",
      "j2k6", "j2k6x5", "j2k6y3", "j2y3", "j3", "j34k6", "j36",
      "j3k56x4", "j3k5x4", "j3k6", "j6", "k157x6", "k1j6", "k256",
      "k26", "k26x5", "k2j17", "k2j6", "k56", "k56x4", "k6",
      "k6x5", "n0", "n167x4", "n26y5", "n345", "n45y2", "n5y2"
    ],
    emerald: [
      "k135x4", "k345x2", "k34", "k34x2", "k2", "k12", "k125",
      "k12j5", "k257x1", "k25", "k25x1", "k25x17", "k2j56", "k2j56y7",
      "k2j5", "k2j5y6", "k2j5x1", "k2x1", "k1", "k17j5", "k15",
      "k1j56y7", "k1j6y7", "k1j5", "k5", "j346y5", "j3k5", "j256",
      "j25", "j25y6", "j2k34", "j2k5", "j56", "j56y7", "j5",
      "j5y6", "n0", "n345y7", "n25x6", "n167", "n67x2", "n6x2"
    ]
  };

  this.Psalmodicon = {
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

  this.Psalmodicon.z0 = this.deadPan();
}


PanThalassa.prototype.deadPan = function() {
  var necklace = "",
      trigraph = "__ ",
      cycle = 0;
  while (cycle < 12) {
    necklace += trigraph;
    cycle++;
  }
  return necklace;
};


PanThalassa.prototype.invert = function(phase) {
  var boundary = document.getElementById(this.PanGaea);
  var plateau = boundary.getElementsByTagName("table")[0];
  var handle = plateau.getElementsByTagName("button");
  var replica = this.GemStone[phase].slice(0, this.GemStone[phase].length);

  var item;
  for (item in replica) {
    handle[item].textContent = replica[item];
  }
};


PanThalassa.prototype.reCord = function(calibrate, item, replica) {
  this.HeadStock = calibrate;
  while (item < replica.length) {
    this.Scordatura.push(replica[item]);
    item++;
  }
};


PanThalassa.prototype.setPegBox = function(calibrate) {
  var extent = this.Scordatura.length;
  var pouch = new Array(extent);

  while (extent) {
    pouch[extent-1] = this.Scordatura.pop();
    extent--;
  }

  var ennead = ["bj","fn","cn","gn","dn","an","en","bn","fk"];
  var replica = [];
  var item = 0;

  switch(calibrate) {
    case "beadgcf":
      replica = ennead.slice(1, 8);
      this.reCord(calibrate, item, replica);
      break;

    case "cgdae":
      replica = ennead.slice(2, 7).reverse();
      this.reCord(calibrate, item, replica);
      break;

    case "eadgbe":
      replica = ennead.slice(6, 8).concat(ennead.slice(3, 7));
      this.reCord(calibrate, item, replica);
      break;

    default:
      this.Scordatura = ["dn","bj","fk","dn","bj","fk"];
      this.HeadStock = "fkbjdn";
  }
};


PanThalassa.prototype.chronos = function() {
  var epoch = new Date().getTime();
  return epoch;
};


PanThalassa.prototype.sampurna = function(epithet) {
  var necklace = this.Psalmodicon[epithet];
  var bracelet = necklace.replace(/[a-z]{2}/gi, "\u56D7");
  var beadwork = bracelet.replace(/__/g, "\u4E00");
  return beadwork.split(" ");
};


PanThalassa.prototype.shadjam = function(collar, amulet) {
  var necklace = collar.slice(0, collar.length);
  necklace[amulet] = "\u56DE";
  return necklace.join(" ") + " ";
};


PanThalassa.prototype.graphiato = {
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


PanThalassa.prototype.orchestrate = function() {
  var epithet = arguments[0];
  var amulet = parseInt(arguments[1], 10);

  if (amulet > 11 && amulet < 24) amulet = amulet - 12;
  if (amulet > 23 && amulet < 36) amulet = amulet - 24;

  var amalgam = this.Psalmodicon[epithet].split(" ")[amulet];

  if (!amalgam) {
    amalgam = "mm";
  }
  if (/_+/.test(amalgam)) {
    var notes = ["cn","ck","dn","dk","en","fn","fk","gn","gk","an","ak","bn"];
    amalgam = notes[amulet];
  }

  var serial = this.chronos();
  var pegBox = this.HeadStock;
  var registry = epithet + "-" + pegBox + "-" + amalgam + serial;

  var expanse = this.Scordatura.length;
  var replica = this.Scordatura.slice(0, expanse);
  var pendant = this.shadjam(this.sampurna(epithet), amulet);

  var boundary = document.getElementById(this.PanGaea);
  var lattice = boundary.getElementsByTagName("dl")[0];
  var account = lattice.getElementsByTagName("dt")[0];
  var grill = lattice.getElementsByTagName("dd");

    account.textContent = registry;

  for (var tier = 0; tier < expanse; tier++) {
    if (!replica[tier]) break;
    grill[tier].textContent = this.graphiato[replica[tier]](pendant);
  }
};


PanThalassa.prototype.cartoGraph = function() {
  var boundary = document.getElementById(this.PanGaea);
  var lanai = boundary.getElementsByTagName("input")[0];
  var gallery = lanai.value.split(" ");

  if (!this.Psalmodicon.hasOwnProperty(gallery[0])) {
    lanai.value = "n0 7";
    gallery = lanai.value.split(" ");
  }

  this.orchestrate(gallery[0], gallery[1]);
};


PanThalassa.prototype.inquire = function(epithet) {
  var chamber = this.Psalmodicon[epithet].split(" ");
  var notacet = /[^_]/;

  if (notacet.test(chamber[0])) {
    return 0;
  }
  else if (notacet.test(chamber[7])) {
    return 7;
  }
  else if (notacet.test(chamber[5])) {
    return 5;
  }
  else if (notacet.test(chamber[11])) {
    return 11;
  }
  else {
    return "";
  }
};


// Atrium
PanThalassa.prototype.entryWay = function(epithet) {

  if (!this.HeadStock) {
    this.setPegBox("beadgcf");
  }

  if (!this.Psalmodicon.hasOwnProperty(epithet)) {
    epithet = "n0";
  }

  var frege = /\d+/.test(arguments[1]);
  var amulet = (frege) ? arguments[1] : this.inquire(epithet);
  var datums = epithet + " " + amulet.toString();

  var boundary = document.getElementById(this.PanGaea);
  var lanai = boundary.getElementsByTagName("input")[0];

    lanai.value = datums;

  var gallery = datums.split(" ");
  this.orchestrate(gallery[0], gallery[1]);
};


PanThalassa.prototype.secateurs = function() {
  var boundary = document.getElementById(this.PanGaea);
  var lattice = boundary.getElementsByTagName("dl")[0];
  var account = lattice.getElementsByTagName("dt")[0];
  var grill = lattice.getElementsByTagName("dd");
  var expanse = grill.length;

  for (var tier = 0; tier < expanse; tier++) {
    grill[tier].textContent = "";
  }
};


PanThalassa.prototype.cultivate = function(calibrate) {
  var boundary = document.getElementById(this.PanGaea);
  var lanai = boundary.getElementsByTagName("input")[0];
  var gallery = lanai.value.split(" ");

  this.secateurs();
  this.setPegBox(calibrate);
  this.entryWay(gallery[0], gallery[1]);
};


PanThalassa.prototype.baldachin = function() {
  var boundary = document.getElementById(this.PanGaea);
    boundary.className = document.title.toLowerCase();

  var ostracon = document.createDocumentFragment();

  var pergola = document.createElement("section");
    pergola.className = "pergola";

  var threshold = document.createElement("span");
    threshold.className = "threshold";

  var veranda = document.createElement("input");
    veranda.className = "veranda";
    veranda.setAttribute("type", "text");
    veranda.setAttribute("maxlength", "10");

  var gambrel = document.createElement("input");
    gambrel.className = "gambrel";
    gambrel.setAttribute("type", "button");
    gambrel.setAttribute("value", "morph");

  var bandstand = document.createElement("span");
    bandstand.className = "bandstand";

  var eadgbe = document.createElement("button");
    eadgbe.className = "tuning";
    eadgbe.setAttribute("type", "button");
    eadgbe.textContent = "eadgbe";

  var cgdae = document.createElement("button");
    cgdae.className = "tuning";
    cgdae.setAttribute("type", "button");
    cgdae.textContent = "cgdae";

  threshold.appendChild(veranda);
  threshold.appendChild(gambrel);

  bandstand.appendChild(eadgbe);
  bandstand.appendChild(cgdae);

  pergola.appendChild(threshold);
  pergola.appendChild(bandstand);
  ostracon.appendChild(pergola);

  var pavilion = document.createElement("section");
    pavilion.className = "pavilion";

  var trellis = document.createElement("dl");
    trellis.className = "lattice";

  var account = document.createElement("dt");
    account.lang = "";

  trellis.appendChild(account);

  var teir = 0;
  var course;
  while (teir < 7) {
    course = document.createElement("dd");
    course.lang = "zh";
    trellis.appendChild(course);
    teir++;
  }

  pavilion.appendChild(trellis);
  ostracon.appendChild(pavilion);

  var terrace = document.createElement("section");
    terrace.className = "terrace";

  var gazebo = document.createElement("table");
    gazebo.className = "gazebo";

  var tbody = document.createElement("tbody");
  var trow, cell, bttn;

  gazebo.appendChild(tbody);

  for (teir = 0; teir < 6; teir++) {
    trow = document.createElement("tr");
    tbody.appendChild(trow);

    var slot = 0;
    while(slot < 7) {
      cell = document.createElement("td");
      bttn = document.createElement("button");
        bttn.setAttribute("type", "button");
      trow.appendChild(cell);
      cell.appendChild(bttn);
      slot++;
    }
  }

  terrace.appendChild(gazebo);
  ostracon.appendChild(terrace);

  var thuban = document.createElement("section");
    thuban.className = "thuban";

  var algedi = document.createElement("span");
    algedi.className = "algedi";
    algedi.textContent = "martian";

  var acubens = document.createElement("span");
    acubens.className = "acubens";
    acubens.textContent = "cronian";

  thuban.appendChild(algedi);
  thuban.appendChild(acubens);
  ostracon.appendChild(thuban);

  boundary.appendChild(ostracon);
};


PanThalassa.prototype.ossicle = function() {
  var boundary = document.getElementById(this.PanGaea);
  var handle = boundary.getElementsByTagName("input")[1];
  var craton = this;

  handle.addEventListener("click", function() {
    craton.cartoGraph();
  });

  var region = boundary.getElementsByTagName("section")[3];
  var gadget = region.getElementsByTagName("span");

  gadget[0].addEventListener("click", function() {
    craton.cochlea("corundum");
  });

  gadget[1].addEventListener("click", function() {
    craton.cochlea("emerald");
  });
};


PanThalassa.prototype.cochlea = function(phase) {
  var boundary = document.getElementById(this.PanGaea);
  var handle = boundary.getElementsByTagName("button");
  var craton = this;

  function tympani(task, segment) {
    var moniker = handle[segment].textContent;
    handle[segment].addEventListener("click", function() {
      craton[task](moniker);
    });
  }

  if (!phase) phase = "corundum";

  this.invert(phase);

  for (var abicus = 0; abicus < handle.length; abicus++) {
    if (abicus < 2) {
      tympani("cultivate", abicus);
    }
    else {
      tympani("entryWay", abicus);
    }
  }
};


PanThalassa.prototype.tecTonic = function() {
  this.baldachin();
  this.cochlea("corundum");
  this.ossicle();
  this.entryWay("z0");
};


