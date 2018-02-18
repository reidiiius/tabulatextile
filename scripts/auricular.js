
"use strict";

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
    craton.cochlea("algedi");
  });

  gadget[1].addEventListener("click", function() {
    craton.cochlea("acubens");
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


PanThalassa.prototype.TecTonic = function() {
  this.baldachin();
  this.cochlea("algedi");
  this.ossicle();
  this.entryWay("z0");
};


window.onload = function() {
  var LaurAsia = new PanThalassa("laurasia");
  var GondWanna = new PanThalassa("gondwanna");

  LaurAsia.TecTonic();
  GondWanna.TecTonic();
};


