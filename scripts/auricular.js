
"use strict";

var LaurAsia = new PanThalassa("hedgerow");

LaurAsia.Psalmodicon.z0 = LaurAsia.deadPan();


LaurAsia.ossicle = function(venue) {
  var handle = document.getElementById(venue);
  handle.addEventListener("click", function() {
    LaurAsia.cartoGraph();
  });
};


LaurAsia.cochlea = function(task, venue, toggle) {
  var handle = document.getElementById(venue);
  var device = handle.getElementsByTagName(toggle);

  function tympani(integer) {
    var moniker = "";

    if (device[integer].hasAttribute("data-signat")) {
      if (device[integer].dataset) {
        moniker = device[integer].dataset.signat;
      }
      else {
        moniker = device[integer].getAttribute("data-signat");
      }
    }
    else {
      moniker = device[integer].textContent;
    }

    device[integer].addEventListener("click", function() {
      LaurAsia[task](moniker);
    });
  }

  var cycle = 0;
  while (cycle < device.length) {
    tympani(cycle);
    cycle++;
  }
};


// initialize
  LaurAsia.entryWay("n0"); 
  LaurAsia.ossicle("gambrel");
  LaurAsia.cochlea("cultivate", "pergola", "button");
  LaurAsia.cochlea("entryWay", "gazebo", "button");


