module.exports = function camel (str) {
  return str.replace(/[\-_]./g, camelize)
  function camelize (divider) {
    return divider.charAt(1).toUpperCase()
  }
}
