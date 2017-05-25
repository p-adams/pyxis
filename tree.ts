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
    remove(key : any) {
        if(this.root) return this.root.remove(this.root, key)
    }
    clear() {
        delete this.root
    }
    isEmpty() {
        if(!this.root) return true
        else return false
    }
    get getRootKey() : any {
        return this.root.getKey
    }

    get getSize() : number {
        return this.root.getSize(this.root)
    }
}

export default Tree
