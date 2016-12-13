// TODO: Your tests go here!

let assert = require('assert')
let deepEqual = require('../../../../Testing/node_modules/chai').deepEqual
let sum = require('../../src/js/calc').sum
let factorial = require('../../src/js/calc').factorial

describe('sum', function() {
    it('should give sum of array values', function() {
        let a = [1, 2, 3]
        let b = sum(a)
        assert.equal(b, 6)
    })
})

describe('factorial', function() {
    it('should give factor of value number', function() {
        let total = factorial(5)
        assert.deepEqual(total, 120)
    })
})




//
//
//     (function() {
//         'use strict';
//
// })();
