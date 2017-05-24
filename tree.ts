import RbNode from './node'

class Tree {
    root: RbNode
    constructor(){
        this.root = null
    }
    insert(key: any, data: any) : void {
        if(!this.root) this.root = new RbNode(key, data)
        this.root = this.root.insert(this.root, key, data)
    }
    locate(key: any) : any {
        if(this.root) return this.root.locate(this.root, key).getData
    }

    get getSize() : number {
        return this.root.getSize(this.root)
    }
}

export default Tree
