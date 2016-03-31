var applyCss = require('./css')
var defaults = require('./defaults')
var transition = require('./transition')

module.exports = function animates (el, css, opts) {
  opts = defaults(opts)
  var timeouts = [setTimeout(start, 1), setTimeout(finish, opts.speed + (opts.delay || 0))]
  return stop

  function start () {
    el.style.transition = transition(css, opts.speed, opts.easing, opts.delay)
    applyCss(el, css)
  }
  function finish () {
    el.style.transition = ''
  }
  function stop () {
    if (el.style.transition) el.style.transition = ''
    while (timeouts.length) clearTimeout(timeouts.pop())
  }
}
