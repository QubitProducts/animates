var camel = require('./camel')
module.exports = function css (el, obj) {
  for (var prop in obj) {
    if (obj.hasOwnProperty(prop)) el.style[camel(prop)] = obj[prop]
  }
}
