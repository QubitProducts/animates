/* globals describe it */
var transition = require('../lib/transition')
var expect = require('chai').expect

describe('transition', function () {
  it('should create transition strings', function () {
    expect(transition({ top: 1 }, 100, 'linear', 1000)).to.eq('top 0.1s linear 1s')
  })
  it('should create a transition string per property', function () {
    expect(transition({ top: 1, left: 2 }, 100, 'linear', 1000)).to.eq('top 0.1s linear 1s, left 0.1s linear 1s')
  })
  it('should treat easing and delay as optional', function () {
    expect(transition({ opacity: 1 }, 100)).to.eq('opacity 0.1s')
    expect(transition({ opacity: 1 }, 100, 'linear')).to.eq('opacity 0.1s linear')
    expect(transition({ opacity: 1 }, 100, null, 1000)).to.eq('opacity 0.1s 1s')
  })
  it('should uncamel props', function () {
    expect(transition({ marginLeft: 1 }, 100)).to.eq('margin-left 0.1s')
  })
})
