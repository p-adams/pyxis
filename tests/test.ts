import add from '../index'
import {expect} from 'chai'
import 'mocha'

describe('add function', () => {
    it('should print 2 + 2 = 4', () => {
        let res = add()
        expect(res).to.equal('2 + 2 = 4')
    })
})