
"use strict";

var LaurAsia = new PanThalassa("hedgerow");


LaurAsia.ossicle = function() {
  var boundary = document.getElementById(this.LandScape);
  var handle = boundary.getElementsByTagName("input")[1];

  handle.addEventListener("click", function() {
    LaurAsia.cartoGraph();
  });

  var stella = boundary.getElementsByTagName("aside")[0];
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


// initialize
  LaurAsia.entryWay("z0");
  LaurAsia.ossicle();
  LaurAsia.cochlea("algedi");


