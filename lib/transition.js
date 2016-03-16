var seconds = require('./seconds')

module.exports = function transition (speed, easing, delay) {
  var str = 'all ' + seconds(speed)
  if (easing) str += ' ' + easing
  if (delay) str += ' ' + seconds(delay)
  return str
}
