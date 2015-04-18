/* global it, describe */

import caseDash from '../case-dash';
import assert from 'assert';

describe('case-dash', function () {
  const tests = [
      ['T', ['T']],
      ['t', ['t']],
      ['Test', ['Test']],
      ['test', ['test']],
      ['this-Is-A-Test', ['this', 'Is', 'A', 'Test']],
      ['This-Is-A-Test', ['This', 'Is', 'A', 'Test']],
      ['THIS-Is-A-Test', ['THIS', 'Is', 'A', 'Test']]
    ]

  describe('#parse()', function () {
    for (let [name, parsed] of tests) {
      it(JSON.stringify(name) + ' -> ' + JSON.stringify(parsed), function () {
        assert.deepEqual(caseDash.parse(name), parsed)
      })
    }
  })

  describe('#stringify()', function () {
    for (let [name, parsed] of tests) {
      it(JSON.stringify(parsed) + ' -> ' + JSON.stringify(name), function () {
        assert.equal(caseDash.stringify(parsed), name)
      })
    }
  })

  describe('#is()', function () {
    for (let [name1, parsed] of tests) {
      const name2 = parsed.join('#')
      const val1 = parsed.length > 1

      it(JSON.stringify(name1) + ' (' + val1 + ')', function () {
        assert.equal(caseDash.is(name1), val1)
      })
      it(JSON.stringify(name2) + ' (false)', function () {
        assert.equal(caseDash.is(name2), false)
      })
    }
  })
})
