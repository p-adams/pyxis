import add from '../index'
import RbNode from '../node'
import Tree from '../tree'
import {expect} from 'chai'
import 'mocha'

// dummy test
describe('add function', () => {
    it('should print 2 + 2 = 4', () => {
        let res = add()
        expect(res).to.equal('2 + 2 = 4')
    })
})


// node tests
describe('constructor', () => {
    it('should create new RbNode with key: 1 and data: "foo" ', () => {
        let testNode = new RbNode(1, "foo")
        expect(testNode.getKey)
            .to
            .equal(1)
        expect(testNode.getData)
            .to
            .equal("foo")
    })
})

describe('getSize', () => {
    it('should return 3', () => {
    let testNode = new RbNode(2, "foo")
    let n2 = new RbNode(1, "bar")
    let n3 = new RbNode(3, "baz")
    testNode.setLeft = n2
    testNode.setRight = n3
    expect(testNode.getSize)
        .to
        .equal(3)
    })
})

describe('insert', () => {
    it('should insert 3 nodes', () => {
        let root = new RbNode(2, "foo")
        let lChild = root.insert(root, 1, "bar")
        let rChild = root.insert(root, 3, "baz")
        expect(root.getLeft.getData)
            .to
            .equal("bar")
        expect(root.getRight.getData)
            .to
            .equal("baz")
    })
})

// tree tests
describe('insert', () => {
    it('should insert 3 nodes into the tree', () => {
        let tree = new Tree()
        tree.insert(1, "foo")
        tree.insert(2, "bar")
        tree.insert(3, "baz")
        expect(tree.getSize)
            .to
            .equal(3)
    })
})

