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

describe('getAncestor', () => {
    it('should return 2', () => {
        let root = new RbNode(2, "foo")
        root = root.insert(root, 1, "bar")
        root = root.insert(root, 3, "baz")
        expect(root.getAncestor(root.getLeft).getKey)
            .to
            .equal(2)
    })
})

describe('getGranparent', () => {
    it('should return 2', () => {
        let root = new RbNode(2, "foo")
        root = root.insert(root, 1, "bar")
        root = root.insert(root, 3, "baz")
        root = root.insert(root, 4, "quux")
        expect(root.getGrandparent(root.getRight.getRight).getKey)
            .to
            .equal(2)
    })
})

describe('getSibling', () => {
    it('should return 3', () => {
        let root = new RbNode(2, "foo")
        root = root.insert(root, 1, "bar")
        root = root.insert(root, 3, "baz")
        root = root.insert(root, 4, "quux")
        expect(root.getSibling(root.getLeft).getKey)
            .to
            .equal(3)
    })
})

describe('rotate', () => {
    it('new root should be 2 and should swap colors with root', () => {
        let root = new RbNode(1, "foo")
        root = root.basicInsert(root, 2, "bar")
        root = root.basicInsert(root, 3, "baz")
        let nodeToRotate = {
            root: root,
            node: root.getRight
        }
        nodeToRotate.root.setColor = true
        nodeToRotate.node.rotate(nodeToRotate, true)
        expect(nodeToRotate.root.getKey)
            .to
            .equal(2)

        expect(nodeToRotate.root.getColor())
            .to
            .be
            .true

        expect(nodeToRotate.root.getLeft.getColor())
            .to
            .be
            .false
    })
})



describe('insert', () => {
    it('should insert 5 nodes; the smallest of which is "a"', () => {
        let root = new RbNode("m", "foo")
        root = root.insert(root, "a", "bar")
        root = root.insert(root, "o", "baz")
        root = root.insert(root, "r", "bin")
        root = root.insert(root, "s", "quux")
        expect(root.getKey)
            .to
            .equal("m")

        expect(root.getRight.getKey)
            .to
            .equal("r")

        expect(root.getLeft.getKey)
            .to
            .equal("a")

        expect(root.getSize(root))
            .to
            .equal(5)

        expect(root.min(root).getKey)
            .to
            .equal("a")
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



/*

describe('remove', () => {
    it('should remove the root and pullup 6 => meow', () => {
        let root = new RbNode(5, "foo")
        root = root.insert(root, 1, "bar")
        root = root.insert(root, 9, "baz")
        root = root.insert(root, 10, "quux")
        root = root.insert(root, 6, "meow")
        root.remove(root, 5)
        expect(root.getKey)
            .to
            .equal(6)
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
    it('should locate quux in Tree', () => {
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

describe('remove', () => {
    it('should remove the root from tree and pullup 8 => cucumber', () => {
        let tree = new Tree()
        tree.insert(5, "foo")
        tree.insert(1, "bar")
        tree.insert(9, "baz")
        tree.insert(10, "quux")
        tree.insert(8, "cucumber")
        tree.remove(5)
        expect(tree.getRootKey)
            .to
            .equal(8)
    })
})

describe('isEmpty', () => {
    it('should return false', () => {
        let tree = new Tree()
        tree.insert(5, "foo")
        tree.insert(1, "bar")
        tree.insert(9, "baz")
        tree.insert(10, "quux")
        tree.insert(8, "cucumber")
        expect(tree.isEmpty())
            .to
            .be
            .false
    })
})
describe('clear', () => {
    it('should clear tree of all nodes and isEmpty should return true', () => {
        let tree = new Tree()
        tree.insert(5, "foo")
        tree.insert(1, "bar")
        tree.insert(9, "baz")
        tree.insert(10, "quux")
        tree.insert(8, "cucumber")
        tree.clear()
        expect(tree.isEmpty())
            .to
            .be
            .true
    })
})*/


