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
    locate(root: any, key: any) : any {
        if(root === null) return null
        else if(root.getKey === key) return root
        else if(key <= root.getKey) return this.locate(root.getLeft, key)
        else return this.locate(root.right, key)
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
        //this.processInsert(root, newNode)
        return root
    }

    rotate(obj: any, recolor: boolean) {
        let x = this
        console.log(`rotating: ${x.getKey}`)
        console.log(`root: ${obj.root.getKey}`)
        let parent = x.getParent
        let gp = this.getGrandparent(x)
        if(gp != null) {
            if(this.getRightChild(gp) === parent) {
                gp.setRight = x
            }
            else {
                gp.setLeft = x
            }
        }
        else {
            obj.root = x
        }
        if(x === this.getRightChild(parent)) {
            let left = x.getLeft
            x.setLeft = parent
            parent.setParent = x
            parent.setRight = left
            if(left != null) {
                left.setParent = parent
            }
        }
        if(x === this.getLeftChild(parent)) {
            let right = x.getRight
            x.setRight = parent
            parent.setParent = x
            parent.setLeft = right
            if(right != null) {
                right.setParent = parent
            }
        }

        if(recolor) {
            let xc : boolean = x.getColor()
            let pc = null
            if(parent) pc = parent.getColor()
            x.setColor = pc
            parent.setColor = xc
        }
    }

    processInsert(root: any, x: any) {
        x.setColor = false
        if(x != root && this.getAncestor(x).getColor() === false) {
            let uncle = this.getSibling(this.getAncestor(x))
            if(uncle != null && uncle.getColor() === false) {
                let pt = this.getAncestor(x)
                this.recolor(pt, uncle, true, true)
                let gp = this.getGrandparent(x)
                gp.setColor = false
                x = gp
                this.processInsert(root, x)
            }
            else if(this.getAncestor(x) === this.getLeftChild(this.getGrandparent(x))) {
                if(x === this.getRightChild(this.getAncestor(x))) {
                    x.rotate(root, true)
                    x.rotate(root, true)
                }
                else {
                    x.getParent.rotate(root, true)
                }
            }
            else if(this.getAncestor(x) === this.getRightChild(this.getGrandparent(x))) {
                if(x === this.getLeftChild(this.getAncestor(x))) {
                    x.rotate(root, true)
                    x.rotate(root, true)
                }
                else {
                    x.getParent.rotate(root, true)
                }
            }
        }
        root.setColor = true
    }

    min(node: any) : any {
        while(node.getLeft != null) {
            node = node.getLeft
        }
        return node
    }

    pullupNode(node : any) : any {
        if(node.getRight != null) return this.min(node.getRight)
        let parent = node.getParent
        while(parent != null && node === parent.getRight) {
            node = parent
            parent = parent.getParent
        }
        return parent
    }

    remove(root: any, key: any) : any {
        let result = this.locate(root, key)
        let y = null
        let x = null
        if(result.getLeft != null && result.getRight != null){
            y = this.pullupNode(result)
        }
        else y = result
        if(y.getLeft != null) x = y.getLeft
        else x = y.getRight
        if(x) x.setParent = y.getParent
        if(y.getParent === null) root = x
        else{
            if(y === y.getParent.getLeft) {
                y.getParent.setLeft = x
            }
            else {
                y.getParent.setRight = x
            }
        }
        if(y != result) result.setKey = y.getKey
        return root

    }

    getAncestor(x : any) : any {
        if(!x) return null
        else return x.getParent
    }

    getGrandparent(x : any) : any {
       if(x === null || x.getParent === null) return null
       else return x.getParent.getParent
    }

    getSibling(x : any) : any {
        if(x === null || x.getParent === null) return null
        if(x === x.getParent.getLeft) return x.parent.getRight
        else return x.parent.getLeft
    }

    getLeftChild(x: any) : any {
        if(!x) return null
        else return x.getLeft
    }

    getRightChild(x: any) : any {
        if(!x) return null
        else return x.getRight
    }


    getColor() : boolean {
        return this.isBlack
    }

    recolor(x: any, y: any, c1: boolean, c2: boolean){
        this.setNodeColor(x, c1)
        this.setNodeColor(y, c2)
    }

    setNodeColor(x: any, color: boolean) {
        if(x) x.setColor = color
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

    get getParent() :any {
        return this.parent
    }
    
    getSize(n : any) : number {
        if(n == null) return 0
        else {
            return this.getSize(n.getLeft) + 1 + this.getSize(n.getRight)
        }
    }

    set setKey(k: any) {
        this.key = k
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

    set setColor(c: boolean) {
        this.isBlack = c
    }

}

export default RbNode