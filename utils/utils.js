var UUID = require('node-uuid');
var sd = require('silly-datetime');

var md = {}

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
}

md.uuid = function() {
    return UUID.v4().replace(/-/g,'');
}

md.now = function() {
    return sd.format(new Date(), 'YYYY-MM-DD HH:mm');
}

module.exports = md;