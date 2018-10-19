const chai = require('chai')
const chaiHttp = require('chai-http')
const should = chai.should()

const utils = require('../utils')
chai.use(chaiHttp)

const server = require('../app')

describe("Testing utility functions" , () => {

    it("Employees Test", (done) => {
        chai.request(server)
            .get('/api/employees')
            .end((err, res) => {
                res.should.have.status(200)
                res.body.should.be.a('array')
                res.body.length.should.be.eql(8)
                done()
            })
    })
})