
"use strict";

var LaurAsia = new PanThalassa("hedgerow");

LaurAsia.Psalmodicon.z0 = LaurAsia.deadPan();


LaurAsia.ossicle = function() {
  var boundary = document.getElementById(this.LandScape);
  var handle = boundary.getElementsByTagName("input")[1];

  handle.addEventListener("click", function() {
    LaurAsia.cartoGraph();
  });
};


LaurAsia.cochlea = function() {
  var boundary = document.getElementById(this.LandScape);
  var handle = boundary.getElementsByTagName("button");

  function tympani(task, segment) {
    var moniker = handle[segment].textContent;
    handle[segment].addEventListener("click", function() {
      LaurAsia[task](moniker);
    });
  }

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
  LaurAsia.entryWay("n0"); 
  LaurAsia.ossicle();
  LaurAsia.cochlea();


