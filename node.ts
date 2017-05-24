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
        if(root == null) return newNode
        
        if(newNode.getKey < root.getKey) {
            root.left = this.insertNode(root.left, newNode)
            root.left.setParent = root
        }
        else if(newNode.getKey > root.getKey) {
            root.right = this.insertNode(root.right, newNode)
            root.right.setParent = root
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
    
    getSize(n : any) : number {
        if(n == null) return 0
        else {
            return this.getSize(n.getLeft) + 1 + this.getSize(n.getRight)
        }
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