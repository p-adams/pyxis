class RbNode{
    key: any
    data: any 
    left: RbNode
    right: RbNode
    parent: RbNode
    isBlack: boolean
    constructor(theKey: any, theData: any){
        this.key = theKey
        this.data = theData
        this.left = null
        this.right = null
        this.parent = null
        this.isBlack = false
    }
    insertNode(root: any, newNode: any) : any {
        if(root === null) return newNode
        
        if(newNode.getKey < root.getKey) {
            root.left = this.insertNode(root.left, newNode)
            root.left.parent = root
        }
        else if(newNode.getKey > root.getKey) {
            root.right = this.insertNode(root.right, newNode)
            root.right.parent = root
        }
        return root
    }
    
    insert(root: any, key: any, data: any) {
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
    
    get getSize() : number {
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