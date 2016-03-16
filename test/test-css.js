/* globals describe beforeEach it */
var css = require('../lib/css')
var expect = require('chai').expect

describe('css', function () {
  var el

  beforeEach(function () {
    el = document.createElement('div')
  })
  it('should apply css attributes to an element', function () {
    css(el, { 'margin-left': '20px', opacity: 10 })
    expect(el.getAttribute('style')).to.eq('margin-left: 20px; opacity: 10;')
  })
  it('should accept camelcase attributes', function () {
    css(el, { 'marginLeft': '20px', opacity: 10 })
    expect(el.getAttribute('style')).to.eq('margin-left: 20px; opacity: 10;')
  })
})
