
"use strict";

var NeoPanGaea = Object.create(PanGaea);


NeoPanGaea.deadPan = function() {
  var necklace = "",
      trigraph = "__ ",
      cycle = 0;
  while (cycle < 12) {
    necklace += trigraph;
    cycle++;
  }
  return necklace;
};


NeoPanGaea.Psalmodicon.z0 = NeoPanGaea.deadPan();


NeoPanGaea.ossicle = function(venue, portico, fabric) {
  var handle = document.getElementById(venue);
  handle.addEventListener("click", function() {
    NeoPanGaea.CartoGraph(portico, fabric);
  });
};


NeoPanGaea.cochlea = function(task, venue, toggle, portico, fabric) {
  var handle = document.getElementById(venue);
  var device = handle.getElementsByTagName(toggle);

  function tympani(integer) {
    var moniker = device[integer].textContent;
    device[integer].addEventListener("click", function() {
      NeoPanGaea[task](moniker, portico, fabric);
    });
  }
  var cycle = 0;
  while (cycle < device.length) {
    tympani(cycle);
    cycle++;
  }
};


// initialize
  NeoPanGaea.EntryWay("n0", "veranda", "trellis");
  NeoPanGaea.ossicle("gambrel", "veranda", "trellis");
  NeoPanGaea.cochlea("cultivate", "pergola", "button", "veranda", "trellis");
  NeoPanGaea.cochlea("EntryWay", "gazebo", "button", "veranda", "trellis");


