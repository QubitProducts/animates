/* globals describe beforeEach afterEach it */
var animates = require('../lib/animates')
var expect = require('chai').expect
var sinon = require('sinon')

describe('animate', function () {
  var el, clock

  beforeEach(function () {
    clock = sinon.useFakeTimers()
    el = document.createElement('div')
    el.setAttribute('style', 'width: 20px; height: 20px; background: black;')
    document.body.appendChild(el)
  })

  afterEach(function () {
    clock.restore()
  })

  it('should set css props and transition after a short defer', function () {
    animates(el, { opacity: 0 }, { speed: 100 })
    clock.tick(1)
    expect(el.style.transition).to.eql('opacity 0.1s')
    expect(el.style.opacity).to.eql('0')
  })

  it('should cleanup afterwards', function () {
    animates(el, { opacity: 0 }, { speed: 100 })
    clock.tick(101)
    expect(el.style.transition).to.eql('')
  })

  it('should be cancellable', function () {
    var style = el.getAttribute('style')
    var stop = animates(el, { opacity: 0 }, { speed: 100 })
    stop()
    clock.tick(101)
    expect(el.getAttribute('style')).to.eql(style)
  })

  it('should remove transitions if appropriate', function () {
    el.style.opacity = 0
    var style = el.getAttribute('style')
    var stop = animates(el, { opacity: 0 }, { speed: 100 })
    clock.tick(10)
    stop()
    expect(el.getAttribute('style')).to.eql(style)
  })
})
