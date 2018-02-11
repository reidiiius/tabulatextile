
"use strict";

var LaurAsia = new PanThalassa("hedgerow");


LaurAsia.baldachin = function() {
  var boundary = document.getElementById(this.LandScape);
  var ostracon = document.createDocumentFragment();

  var pergola = document.createElement("section");
    pergola.id = "pergola";

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
    pavilion.id = "pavilion";
    pavilion.lang = "zh";

  var trellis = document.createElement("dl");
    trellis.className = "lattice";

  var account = document.createElement("dt");
    account.lang = "";

  trellis.appendChild(account);

  var teir = 0;
  var course;
  while (teir < 7) {
    course = document.createElement("dd");
    trellis.appendChild(course);
    teir++;
  }

  pavilion.appendChild(trellis);
  ostracon.appendChild(pavilion);

  var terrace = document.createElement("section");
    terrace.id = "terrace";

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
    thuban.id = "thuban";
    thuban.className = "draconis";

  var algedi = document.createElement("span");
    algedi.id = "algedi";
    algedi.textContent = "martian";

  var acubens = document.createElement("span");
    acubens.id = "acubens";
    acubens.textContent = "cronian";

  thuban.appendChild(algedi);
  thuban.appendChild(acubens);
  ostracon.appendChild(thuban);

  boundary.appendChild(ostracon);
};


LaurAsia.ossicle = function() {
  var boundary = document.getElementById(this.LandScape);
  var handle = boundary.getElementsByTagName("input")[1];

  handle.addEventListener("click", function() {
    LaurAsia.cartoGraph();
  });

  var stella = boundary.getElementsByTagName("section")[3];
  var dragon = stella.getElementsByTagName("span");

  dragon[0].addEventListener("click", function() {
    LaurAsia.cochlea("algedi");
  });

  dragon[1].addEventListener("click", function() {
    LaurAsia.cochlea("acubens");
  });
};


LaurAsia.cochlea = function(phase) {
  var boundary = document.getElementById(this.LandScape);
  var handle = boundary.getElementsByTagName("button");

  function tympani(task, segment) {
    var moniker = handle[segment].textContent;
    handle[segment].addEventListener("click", function() {
      LaurAsia[task](moniker);
    });
  }

  if (!phase) phase = "algedi";

  this[phase]();

  for (var abicus = 0; abicus < 44; abicus++) {
    if (abicus < 2) {
      tympani("cultivate", abicus);
    }
    else {
      tympani("entryWay", abicus);
    }
  }
};


window.onload = function() {

  LaurAsia.baldachin();
  LaurAsia.cochlea("algedi");
  LaurAsia.ossicle();
  LaurAsia.entryWay("z0");

};


