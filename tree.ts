import RbNode from './node'

class Tree {
    root: RbNode
    constructor(){
        this.root = null
    }
    insert(key: any, data: any){
        if(!this.root) this.root = new RbNode(key, data)
        else this.root = this.root.insert(this.root, key, data)
    }

    get getSize() : number {
        if(!this.root) return 0
        else return this.root.getSize
    }

    get getLeft() : any {
        return this.root.getLeft
    }
}

export default Tree
