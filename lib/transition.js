var seconds = require('./seconds')
var uncamel = require('./uncamel')

module.exports = function transition (props, speed, easing, delay) {
  var transitions = []
  var suffix = seconds(speed)
  if (easing) suffix += ' ' + easing
  if (delay) suffix += ' ' + seconds(delay)
  for (var prop in props) if (props.hasOwnProperty(prop)) transitions.push(uncamel(prop) + ' ' + suffix)
  return transitions.join(', ')
}
