var applyCss = require('./css')
var defaults = require('./defaults')
var transition = require('./transition')

module.exports = function animates (el, css, opts) {
  opts = defaults(opts)
  setTimeout(start, 1)
  return setTimeout(finish, opts.speed + (opts.delay || 0))

  function start () {
    el.style.transition = transition(css, opts.speed, opts.easing, opts.delay)
    applyCss(el, css)
  }
  function finish () {
    el.style.transition = 'none'
  }
}
