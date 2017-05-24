import RbNode from './node'

class Tree {
    root: RbNode
    constructor(){
        this.root = null
    }
    insert(key: any, data: any){
        if(!this.root) this.root = new RbNode(key, data)
        this.root = this.root.insert(this.root, key, data)
    }

    get getSize() : number {
        return this.root.getSize(this.root)
    }

    get getLeft() : any {
        return this.root.getLeft
    }

    get getRoot() : any {
        return this.root
    }
}

export default Tree
