import add from '../index'
import RbNode from '../node'
import Tree from '../tree'
import {expect, should} from 'chai'
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
    expect(testNode.getSize(testNode))
        .to
        .equal(3)
    })
})

describe('insert', () => {
    it('should insert 3 nodes', () => {
        let root = new RbNode(2, "foo")
        root = root.insert(root, 1, "bar")
        root = root.insert(root, 3, "baz")
        expect(root.getLeft.getData)
            .to
            .equal("bar")
        expect(root.getRight.getData)
            .to
            .equal("baz")
        expect(root.getSize(root))
            .to
            .equal(3)
    })
})

describe('insert', () => {
    it('newly created node color should be "red" (false)', () => {
           expect(new RbNode(1, "meow").getColor())
            .to
            .be
            .false
    })
})

describe('locate', () => {
    it('should return quux', () => {
        let root = new RbNode(2, "foo")
        root = root.insert(root, 1, "bar")
        root = root.insert(root, 3, "baz")
        root = root.insert(root, 4, "quux")
        expect(root.locate(root, 4).getData)
            .to
            .equal("quux")
    })
})

// tree tests
describe('insert', () => {
    it('should insert 3 nodes into the tree', () => {
        let tree = new Tree()
        tree.insert(2, "foo")
        tree.insert(1, "bar")
        tree.insert(3, "baz")
        expect(tree.getSize)
            .to
            .equal(3)
    })
})


describe('locate', () => {
    it('should return quux', () => {
        let tree = new Tree()
        tree.insert(2, "foo")
        tree.insert(1, "bar")
        tree.insert(3, "baz")
        tree.insert(4, "quux")
        expect(tree.locate(4))
            .to
            .equal("quux")
    })
})
