class RbNode{
    key: any
    data: any 
    left: RbNode
    right: RbNode
    parent: RbNode
    isRed: boolean
    constructor(theKey: any, theData: any){
        this.key = theKey
        this.data = theData
        this.left = null
        this.right = null
        this.parent = null
        this.isRed = true
    }
    insertNode(root: RbNode, newNode: RbNode) : RbNode{
        if(root === null) return newNode
        if(newNode.getKey() === root.getKey()) {
            return root
        }
        else if(newNode.getKey() < root.getKey()) {
            this.left = this.insertNode(root.getLeft, newNode)
            root.left.setParent(root)
        }
        else {
            this.right = this.insertNode(root.getRight, newNode)
            root.right.setParent(root)
        }
        return root
    }
    
    insert(root: RbNode, key: any, data: any) {
        let newNode = new RbNode(key, data)
        root = this.insertNode(root, newNode)
        return root
    }
    // accessors
    get getKey() : any {
        return this.key
    }

    get getData() : any {
        return this.data
    }

    get getLeft() : any {
        return this.left
    }

    get getRight() : any {
        return this.right
    }
    
    get getSize() : any {
        if(this.left === null && this.right === null) return 1
        else return this.getLeft.getSize + 1 + this.getRight.getSize
    }


    set setParent(p: any) {
        this.parent = p
    }

    set setLeft(l: any) {
        this.left = l
    }

    set setRight(r: any) {
        this.right = r
    }

}

export default RbNode