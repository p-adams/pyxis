import Container from '../index'
import BSTNode from '../node'
import Tree from '../tree'
import {expect, should} from 'chai'
import 'mocha'




// node tests
describe('constructor', () => {
    it('should create new BSTNode with key: 1 and data: "foo" ', () => {
        let testNode = new BSTNode(1, "foo")
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
    let testNode = new BSTNode(2, "foo")
    let n2 = new BSTNode(1, "bar")
    let n3 = new BSTNode(3, "baz")
    testNode.setLeft = n2
    testNode.setRight = n3
    expect(testNode.getSize(testNode))
        .to
        .equal(3)
    })
})

describe('insert', () => {
    it('should insert 5 nodes; the smallest of which is "a" and largest is "s"', () => {
        let root = new BSTNode("m", "foo")
        root = root.insert(root, "a", "bar")
        root = root.insert(root, "o", "baz")
        root = root.insert(root, "r", "bin")
        root = root.insert(root, "s", "quux")
        expect(root.getSize(root))
            .to
            .equal(5)

        expect(root.min(root).getKey)
            .to
            .equal("a")

        expect(root.max(root).getKey)
            .to
            .equal("s")
    })
})

describe('locate', () => {
    it('should return quux', () => {
        let root = new BSTNode(2, "foo")
        root = root.insert(root, 1, "bar")
        root = root.insert(root, 3, "baz")
        root = root.insert(root, 4, "quux")
        expect(root.locate(root, 4).getData)
            .to
            .equal("quux")
    })
})

describe('remove', () => {
    it('should remove the root and pullup 6 => meow', () => {
        let root = new BSTNode(5, "foo")
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
    it('should insert 9 nodes into the tree', () => {
        let tree = new Tree()
        tree.insert(1, "foo")
        tree.insert(2, "bar")
        tree.insert(3, "baz")
        tree.insert(4, "foo")
        tree.insert(5, "bar")
        tree.insert(6, "baz")
        tree.insert(7, "foo")
        tree.insert(8, "bar")
        tree.insert(9, "baz")
        expect(tree.getSize)
            .to
            .equal(9)
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
        expect(tree.getSize)
            .to
            .equal(4)
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
})

describe('beg', () => {
    it('should return smallest element in tree', () => {
        let tree = new Tree()
        tree.insert(5, "foo")
        tree.insert(1, "bar")
        tree.insert(9, "baz")
        tree.insert(10, "quux")
        tree.insert(8, "cucumber")
        expect(tree.beg.getKey)
            .to
            .equal(1)
    })
})

describe('end', () => {
    it('should return largest element in tree', () => {
        let tree = new Tree()
        tree.insert(5, "foo")
        tree.insert(1, "bar")
        tree.insert(9, "baz")
        tree.insert(10, "quux")
        tree.insert(8, "cucumber")
        expect(tree.end.getKey)
            .to
            .equal(10)
    })
})

// container tests
let keys: number[] = [1,2,3,4,5,6,7]
let values: string[] = ["a", "b", "c", "d", "e", "f", "g"]
describe('insert', () => {
    it('should insert 7 keys and 7 values into container and should contain 7 elements', () => {
        let container = new Container()
        for(let i = 0; i < 7; i++){
            container.insert(keys[i], values[i])
        }
        expect(container.size())
            .to
            .equal(7)
    })
})

describe('remove', () => {
    it('should remove element with key "4"', () => {
        let container = new Container()
        for(let i = 0; i < 7; i++){
            container.insert(keys[i], values[i])
        }
        container.remove(5)
        expect(container.size())
            .to
            .equal(6)
    })
})


