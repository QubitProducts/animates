/* globals describe it */
var transition = require('../lib/transition')
var expect = require('chai').expect

describe('transition', function () {
  it('should create transition strings', function () {
    expect(transition(100, 'linear', 1000)).to.eq('all 0.1s linear 1s')
  })
  it('should treat easing and delay as optional', function () {
    expect(transition(100)).to.eq('all 0.1s')
    expect(transition(100, 'linear')).to.eq('all 0.1s linear')
    expect(transition(100, null, 1000)).to.eq('all 0.1s 1s')
  })
})
