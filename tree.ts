import RbNode from './node'

class Tree {
    root: RbNode
    constructor(){
        this.root = null
    }
    insert(key: any, data: any) : void {
        if(!this.root) this.root = new RbNode(key, data)
        else this.root = this.root.insert(this.root, key, data)
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
        if(!this.root) return 0
        else return this.root.getSize(this.root)
    }
    get beg() : any {
        return this.root.min(this.root)
    }
    get end() : any {
        return this.root.max(this.root)
    }
    get getKey() : any {
        return this.root.getKey
    }
    enum() : any {
        if(this.root) return this.root.enum(this.root).reverse()
    }
}

export default Tree
