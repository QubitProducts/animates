var css = require('./css')
var defaults = require('./defaults')
var transition = require('./transition')

module.exports = function animates (el, end, opts) {
  opts = defaults(opts)
  setTimeout(start, 1)
  return setTimeout(finish, opts.speed + (opts.delay || 0))

  function start () {
    el.style.transition = transition(opts.speed, opts.easing, opts.delay)
    css(el, end)
  }
  function finish () {
    el.style.transition = 'none'
  }
}
