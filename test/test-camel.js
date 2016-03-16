/* globals describe it */
var camel = require('../lib/camel')
var expect = require('chai').expect

describe('camel', function () {
  it('should camel case style declarations', function () {
    expect(camel('margin-left')).to.eq('marginLeft')
    expect(camel('padding-top')).to.eq('paddingTop')
  })
})
