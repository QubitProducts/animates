module.exports = function uncamel (str) {
  return str.replace(/[A-Z]/g, uncamelize)
  function uncamelize (char) {
    return '-' + char.toLowerCase()
  }
}
