
"use strict";

function TecTonic(Craton) {

  Craton.ossicle = function() {
    var boundary = document.getElementById(this.PanGaea);
    var handle = boundary.getElementsByTagName("input")[1];

    handle.addEventListener("click", function() {
      Craton.cartoGraph();
    });

    var region = boundary.getElementsByTagName("section")[3];
    var gadget = region.getElementsByTagName("span");

    gadget[0].addEventListener("click", function() {
      Craton.cochlea("algedi");
    });

    gadget[1].addEventListener("click", function() {
      Craton.cochlea("acubens");
    });
  };


  Craton.cochlea = function(phase) {
    var boundary = document.getElementById(this.PanGaea);
    var handle = boundary.getElementsByTagName("button");

    function tympani(task, segment) {
      var moniker = handle[segment].textContent;
      handle[segment].addEventListener("click", function() {
        Craton[task](moniker);
      });
    }

    if (!phase) phase = "algedi";

    this[phase]();

    for (var abicus = 0; abicus < handle.length; abicus++) {
      if (abicus < 2) {
        tympani("cultivate", abicus);
      }
      else {
        tympani("entryWay", abicus);
      }
    }
  };


  Craton.baldachin();
  Craton.cochlea("algedi");
  Craton.ossicle();
  Craton.entryWay("z0");

}


window.onload = function() {

  var LaurAsia = new PanThalassa("laurasia");
  var GondWanna = new PanThalassa("gondwanna");

  TecTonic(LaurAsia);
  TecTonic(GondWanna);

};


