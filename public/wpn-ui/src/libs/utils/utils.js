var md = {};

/**
 * 深度克隆
 * @param  {[type]} obj [description]
 * @return {[type]}     [description]
 */
md.clone = function(obj) {
  var o;
  if (typeof obj === "object") {
    if (obj === null) {
      o = null;
    } else {
      if (obj instanceof Array) {
        o = [];
        for (var i = 0, len = obj.length; i < len; i++) {
          o.push(md.clone(obj[i]));
        }
      } else {
        o = {};
        for (var j in obj) {
          o[j] = md.clone(obj[j]);
        }
      }
    }
  } else {
    o = obj;
  }
  return o;
};

md.math = {
  add: (a, b) => {
    var c, d, e;
    try {
      c = a.toString().split(".")[1].length;
    } catch (f) {
      c = 0;
    }
    try {
      d = b.toString().split(".")[1].length;
    } catch (f) {
      d = 0;
    }
    return (
      (e = Math.pow(10, Math.max(c, d))),
      (md.math.mul(a, e) + md.math.mul(b, e)) / e
    );
  },
  sub: (a, b) => {
    var c, d, e;
    try {
      c = a.toString().split(".")[1].length;
    } catch (f) {
      c = 0;
    }
    try {
      d = b.toString().split(".")[1].length;
    } catch (f) {
      d = 0;
    }
    return (
      (e = Math.pow(10, Math.max(c, d))),
      (md.math.mul(a, e) - md.math.mul(b, e)) / e
    );
  },
  mul: (a, b) => {
    var c = 0,
      d = a.toString(),
      e = b.toString();
    try {
      c += d.split(".")[1].length;
    } catch (f) {}
    try {
      c += e.split(".")[1].length;
    } catch (f) {}
    return (
      (Number(d.replace(".", "")) * Number(e.replace(".", ""))) /
      Math.pow(10, c)
    );
  },
  div: (a, b) => {
    var c,
      d,
      e = 0,
      f = 0;
    try {
      e = a.toString().split(".")[1].length;
    } catch (g) {}
    try {
      f = b.toString().split(".")[1].length;
    } catch (g) {}
    return (
      (c = Number(a.toString().replace(".", ""))),
      (d = Number(b.toString().replace(".", ""))),
      md.math.mul(c / d, Math.pow(10, f - e))
    );
  }
};

md.calculate = function(data) {
  const a = JSON.parse(data);
  let totalPrice = 0;
  let amount = 0;
  a.forEach((e, i) => {
    const { price, count } = e;
    totalPrice = md.math.add(totalPrice, md.math.mul(price, count));
    amount += count;
  });
  return { totalPrice, amount };
};

md.getParamByKeyFromUrl = key => {
  var o = {};
  var s = window.location.hash;
  var a = [];
  s = s.split("?");
  s = s.pop();
  if (s.indexOf("&") !== -1) {
    s = s.split("&");
    a = s;
  } else {
    a = [s];
  }
  a.forEach((e, i) => {
    let arr = e.split("=");
    o[arr[0]] = arr[1];
  });
  if (o[key]) {
    return o[key];
  } else {
    return false;
  }
};

export default md;
