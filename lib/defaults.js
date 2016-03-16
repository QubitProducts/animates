module.exports = function defaults (opts) {
  opts = opts || {}
  if (typeof opts.speed === 'undefined') opts.speed = 200
  return opts
}
