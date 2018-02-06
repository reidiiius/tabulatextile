
"use strict";

var NeoPanGaea = Object.create(PanGaea);


NeoPanGaea.dupliTacit = function() {
  var s = "",
      b = "__ ",
      i = 0;
  while (i < 12) {
    s += b;
    i++;
  }
  return s;
};


NeoPanGaea.Psalmodicon.z0 = NeoPanGaea.dupliTacit();


NeoPanGaea.ossicle = function(r, x, y) {
  var o = document.getElementById(r);
  o.addEventListener("click", function() {
    NeoPanGaea.CartoGraph(x, y);
  });
};


NeoPanGaea.cochlea = function(f, r, u, x, y) {
  var o = document.getElementById(r);
  var b = o.getElementsByTagName(u);

  function p(n) {
    var s = b[n].textContent;
    b[n].addEventListener("click", function() {
      NeoPanGaea[f](s, x, y);
    });
  }
  var i = 0;
  while (i < b.length) {
    p(i);
    i++;
  }
};


  NeoPanGaea.BuShou("n0","veranda","trellis");
  NeoPanGaea.ossicle("gambrel","veranda","trellis");
  NeoPanGaea.cochlea("cultivate","pergola","button","veranda","trellis");
  NeoPanGaea.cochlea("BuShou","gazebo","button","veranda","trellis");


