/* globals describe it */
var uncamel = require('../lib/uncamel')
var expect = require('chai').expect

describe('uncamel', function () {
  it('should uncamel style declarations', function () {
    expect(uncamel('marginLeft')).to.eq('margin-left')
    expect(uncamel('paddingTop')).to.eq('padding-top')
  })
})
