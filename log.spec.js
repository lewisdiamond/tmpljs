const chai = require('chai')
const should = chai.should()

describe('log', () => {
    const log = require('./log')
    const o = {a:'b', c: {'deep':'obj'}, d: ['Array','of', {'obj':'ects'}]}
    const u = undefined
    const n = null
    const zero = 0
    const empty =  {}
    const emptya =  []
    const falsea =  [0]


    it('logs objects and arrays', () => {
        log`${o}`.should.equal(`{
  "a": "b",
  "c": {
    "deep": "obj"
  },
  "d": [
    "Array",
    "of",
    {
      "obj": "ects"
    }
  ]
}`
        )
    })

    it('logs undefined as "undefined"', () => {
        log`${u}`.should.equal("undefined")
    })

    it('logs null as "null"', () => {
        log`${n}`.should.equal("null")
    })

    it('logs zero as "0"', () => {
        log`${zero}`.should.equal("0")
    })

    it('logs an empty object as "{}"', () => {
        log`${empty}`.should.equal("{}")
    })

    it('logs an empty array as "[]"', () => {
        log`${emptya}`.should.equal("[]")
    })

    it('logs [0] as "[0]" (with \n\'s)', () => {
        log`${falsea}`.should.equal(`[
  0
]`)
    })
})
