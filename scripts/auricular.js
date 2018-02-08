
"use strict";

var LaurAsia = Object.create(PanGaea);


LaurAsia.deadPan = function() {
  var necklace = "",
      trigraph = "__ ",
      cycle = 0;
  while (cycle < 12) {
    necklace += trigraph;
    cycle++;
  }
  return necklace;
};


LaurAsia.Psalmodicon.z0 = LaurAsia.deadPan();


LaurAsia.ossicle = function(venue, portico, fabric) {
  var handle = document.getElementById(venue);
  handle.addEventListener("click", function() {
    LaurAsia.CartoGraph(portico, fabric);
  });
};


LaurAsia.cochlea = function(task, venue, toggle, portico, fabric) {
  var handle = document.getElementById(venue);
  var device = handle.getElementsByTagName(toggle);

  function tympani(integer) {
    var moniker = device[integer].textContent;
    device[integer].addEventListener("click", function() {
      LaurAsia[task](moniker, portico, fabric);
    });
  }
  var cycle = 0;
  while (cycle < device.length) {
    tympani(cycle);
    cycle++;
  }
};


// initialize
  LaurAsia.EntryWay("n0", "veranda", "trellis");
  LaurAsia.ossicle("gambrel", "veranda", "trellis");
  LaurAsia.cochlea("cultivate", "pergola", "button", "veranda", "trellis");
  LaurAsia.cochlea("EntryWay", "gazebo", "button", "veranda", "trellis");


