/* globals describe beforeEach it */
var animates = require('../lib/animates')
var expect = require('chai').expect

describe('animate', function () {
  var el

  beforeEach(function () {
    el = document.createElement('div')
    el.setAttribute('style', 'width: 20px; height: 20px; background: black;')
    document.body.appendChild(el)
  })

  it('should camel case style declarations', function (done) {
    animates(el, { opacity: 0 }, { speed: 100 })
    setTimeout(middle, 10)
    setTimeout(end, 200)

    function middle () {
      expect(el.style.transition).to.eql('opacity 0.1s')
    }

    function end () {
      expect(el.style.opacity).to.eql('0')
      expect(el.style.transition).to.eql('none')
      done()
    }
  })
})
