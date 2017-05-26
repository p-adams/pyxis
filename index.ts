import Tree from './tree'
class Container {
    tree: any
    constructor() {
        this.tree = new Tree()
    }
    insert(key: any, data: any) : void {
        this.tree.insert(key, data)
    }
    remove(key: any) : void {
        this.tree.remove(key)
    }
    locate(key: any) : any {
        return this.tree.locate(key)
    }
    empty() : boolean{
        return this.tree.empty()
    }
    clear() {
        this.tree.clear()
    }
    size() {
        return this.tree.getSize
    }
    beg() {
        return this.tree.beg
    }
    end() {
        return this.tree.end
    }

}

//let container = new Container
export default Container