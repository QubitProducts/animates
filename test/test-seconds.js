/* globals describe it */
var seconds = require('../lib/seconds')
var expect = require('chai').expect

describe('seconds', function () {
  it('should convert ms to a css3 transition seconds declaration', function () {
    expect(seconds(200)).to.eq('0.2s')
    expect(seconds(2000)).to.eq('2s')
    expect(seconds(0)).to.eq('0s')
  })
})
