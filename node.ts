class BSTNode{
    key: any
    data: any 
    left: BSTNode
    right: BSTNode
    parent: BSTNode
    dt: any[] = []
   
    constructor(theKey: any, theData: any){
        this.key = theKey
        this.data = theData
        this.left = null
        this.right = null
        this.parent = null
    }
    locate(root: any, key: any) : any {
        if(root === null) return null
        else if(root.getKey === key) return root
        else if(key <= root.getKey) return this.locate(root.getLeft, key)
        else return this.locate(root.right, key)
    }
    getSize(n : any) : number {
        if(n == null) return 0
        else return this.getSize(n.getLeft) + 1 + this.getSize(n.getRight)
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
        let newNode = new BSTNode(key, data)
        root = this.insertNode(root, newNode)
        return root
    }

    min(node: any) : any {
        while(node.getLeft != null) {
            node = node.getLeft
        }
        return node
    }

    max(node: any) : any {
        while(node.getRight != null) {
            node = node.getRight
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
        if (root == null) return root;
	    else if (key < root.key) root.left = this.remove(root.left, key);
	    else if (key > root.key) root.right = this.remove(root.right, key);
	    else {
		if (root.left == null && root.right == null) {
			let temp = root;
			root = root.right;
		}
		else if (root.right == null) {
			let temp = root;
			root = root.left;
		}
		else if (root.left == null) {
			let temp = root;
			root = root.right;
		} 
		else {
			let temp = this.min(root.right);
			root.key = temp.key;
			root.right = this.remove(root.right, temp.key);
		    }
	    }
	    return root;
    }

   enum(root: any) : any {
        if(root == null) return this.dt
        if(root.left) this.dt = root.left.enum(root.left)
        if(root.right) this.dt = root.right.enum(root.right)
        this.dt.push({key: this.key, value: this.data})
        return this.dt
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

    get getParent() : any {
        return this.right
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


}

export default BSTNode