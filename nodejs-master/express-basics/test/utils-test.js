const chai = require('chai')
const should = chai.should()

const utils = require('../utils')

describe("Testing utility functions" , () => {

    it("AddNumbers Test", (done) => {
        const result = utils.addNumbers(15, 14)
        result.should.be.eql(29)
        done()
    })

    it("Subtract Test", (done) => {
        const result = utils.subtractNumbers(25, 5)
        result.should.be.eql(20)
        done()
    })
})