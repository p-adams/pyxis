import RbNode from './node'

class Tree {
    root: RbNode
    insert(key: any, data: any){
        if(this.root === null) this.root = new RbNode(key, data)
        else this.root = this.root.insert(this.root, key, data)
    }

    get getSize() : number {
        if(!this.root) return 0
        else return this.root.getSize
    }
}

export default Tree
