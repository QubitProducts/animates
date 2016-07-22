var animates = require('../lib/animates')
document.body.innerHTML = "<div id='thing'></div>"
var el = document.getElementById('thing')
random()

function random () {
  var ran = Math.random.bind(Math)
  var speed = Math.round(2000 * ran())
  var css = {
    top: ran() * window.innerHeight,
    left: ran() * window.innerWidth,
    width: 400 * ran(),
    height: 400 * ran(),
    background: '#' + [0xff, 0xff, 0xff].map(function (colour) {
      return Math.round(ran() * colour).toString(16)
    }).join(''),
    borderRadius: Math.round(400 * ran()) + 'px'
  }
  css.top = (css.top - (css.height / 2)) + 'px'
  css.left = (css.left - (css.width / 2)) + 'px'
  css.height += 'px'
  css.width += 'px'
  animates(el, css, { speed: speed })
  setTimeout(random, speed)
}
