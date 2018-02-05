
"use strict";

var PanGaea = {};

PanGaea.Scordatura = [];

PanGaea.TuningPegs = "";

PanGaea.Psalmodicon = {
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

PanGaea.Graphiato = {
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

PanGaea.setPegBox = function(s) {
  var a = ["bj","fn","cn","gn","dn","an","en","bn","fk"];
  var i, c;
  var n = this.Scordatura.length;

  if (n > 0) {
    i = n;
    while (i > 0) {
      this.Scordatura.pop();
      i--;
    }
  }

  switch(s) {
    case "beadgcf":
      c = a.slice(1, 8);
      i = 0;
      while (i < c.length) {
        this.Scordatura.push(c[i]);
        i++;
      }
      this.TuningPegs = s;
      break;

    case "cgdae":
      c = a.slice(2, 7).reverse();
      i = 0;
      while (i < c.length) {
        this.Scordatura.push(c[i]);
        i++;
      }
      this.TuningPegs = s;
      break;

    case "eadgbe":
      c = a.slice(6, 8).concat(a.slice(3, 7));
      i = 0;
      while (i < c.length) {
        this.Scordatura.push(c[i]);
        i++;
      }
      this.TuningPegs = s;
      break;

    default:
      this.Scordatura = ["dn","bj","fk","dn","bj","fk"];
      this.TuningPegs = "fkbjdn";
  }
};

PanGaea.ndxP = function(k) {
  var a = this.Psalmodicon[k].split(" ");
  var s = "__";

  if (a[0] !== s) {
    return 0;
  }
  else if (a[7] !== s) {
    return 7;
  }
  else if (a[5] !== s) {
    return 5;
  }
  else {
    return 11;
  }
};

PanGaea.Sampurna = function(k) {
  var s = this.Psalmodicon[k];
  var r = s.replace(/[a-z]{2}/gi, "\u56D7");
  var v = r.replace(/__/g, "\u4E00");
  return v.split(" ");
};

PanGaea.Shadjam = function(a, n) {
  var v = a.slice(0, a.length);
  v[n] = "\u56DE";
  return v.join(" ") + " ";
};

PanGaea.orchestrate = function() {
  var r = arguments[0];
  var k = arguments[1];
  var n = arguments[2];

    if (n > 11 && n < 24) n = n - 12;
    if (n > 23) n = n - 24;

  var m = this.Psalmodicon[k].split(" ")[n];

    if (!m) {
      m = "m-";
    }
    if (m === "__") {
      var a = ["cn","ck","dn","dk","en","fn","fk","gn","gk","an","ak","bn"];
      var i = 0;
      while (i < a.length) {
        if (n == i) {
          m = a[i];
          break;
        } i++;
      }
    }

  var t = new Date().getTime();
  var h = k + "-" + this.TuningPegs + "-" + m + t;

  var a = this.Scordatura.slice(0, this.Scordatura.length);
  var s = this.Shadjam(this.Sampurna(k), n);

  var x = document.getElementById(r);
    x.firstChild.nextSibling.textContent = h;

  var y = x.childNodes[2].nextSibling.tagName;
  var d = x.getElementsByTagName(y);

  for (var i = 0; i < d.length; i++) {
    if (!a[i]) break;
    d[i].textContent = this.Graphiato[a[i]](s);
  }
};

PanGaea.BuShou = function(k, q, r) {
  // default tuning
  if (this.Scordatura.length === 0) {
    this.setPegBox("beadgcf");
  }

  var n = this.ndxP(k);
  var s = k + " " + n.toString();

  var d = document.getElementById(q);
    d.value = s;

  var a = s.split(" ");
  this.orchestrate(r, a[0], a[1]);
};

PanGaea.CartoGraph = function(q, r) {
  var o = document.getElementById(q);
  var a = o.value.split(" ");
  this.orchestrate(r, a[0], a[1]);
};

PanGaea.secateurs = function(r) {
  var o = document.getElementById(r);
  var t = o.childNodes[2].nextSibling.tagName;
  var d = o.getElementsByTagName(t);
  var n = d.length;
  for (var i = 0; i < n; i++) {
    d[i].textContent = "";
  }
};

PanGaea.cultivate = function(s, q, r) {
  var o = document.getElementById(q);
  var a = o.value.split(" ");
  this.secateurs(r);
  this.setPegBox(s);
  this.BuShou(a[0], q, r);
};

PanGaea.auricular = {};

PanGaea.auricular.ossicle = function(f, r, x, y) {
  var o = document.getElementById(r);
  o.addEventListener("click", function() {
    PanGaea[f](x, y);
  });
};

PanGaea.auricular.cochlea = function(f, r, u, x, y) {
  var o = document.getElementById(r);
  var b = o.getElementsByTagName(u);

  function p(n) {
    var s = b[n].textContent;
    b[n].addEventListener("click", function() {
      PanGaea[f](s, x, y);
    });
  }
  var i = 0;
  while (i < b.length) {
    p(i);
    i++;
  }
};

Object.freeze(PanGaea.auricular);

