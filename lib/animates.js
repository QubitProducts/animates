var applyCss = require('./css')
var transition = require('./transition')

module.exports = function animates (el, css, opts) {
  opts = opts || {}
  if (typeof opts.speed === 'undefined') opts.speed = 200
  el.style.transition = transition(css, opts.speed, opts.easing, opts.delay)
  window.getComputedStyle(el).getPropertyValue('opacity')
  var timeouts = [setTimeout(start, 0), setTimeout(finish, (opts.speed || 0) + (opts.delay || 0))]
  return stop

  function start () {
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
