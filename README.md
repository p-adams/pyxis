# pyxis.ts
# An associative container for TypeScript</h2>

1) Associative: values are referenced by key and not by position.
     
2) Unique keys: each key in container is unique.
     
3) Ordered: all keys are kept in order.
     
4) Mapped: each entry associates a key to a mapped value.
     
<h2>Pyxis currently supports the following operations:</h2>

1) `isEmpty` : test whether container is empty or not.

2) `clear` : empties container

3) `size`  : returns number of entries in container.
     
4) `locate(key)` : locates value of entry by key. 
     
5) `insert(key, value)` : inserts a unique key into container in sorted order.
     
6) `remove(key)` : removes key and its associated value from the container.

7) `enum` : enumerate the keys in the container


<h2>Usage:</h2>

Install:

    npm install pyxis

Compile:

    tsc file-name.ts --target es5

Run: 

    node file-name.js

<h2>Example:</h2>

    import Container from './node_modules/pyxis/index'

    // create new container
    let container = new Container()

    // insert key-value pairs into container
    // key and value can be of any type
    container.insert(1, "foo")
    container.insert(2, "bar")
    container.insert(3, "baz")

    // enumerate each key in the container
    container.enum().forEach(el => {
        console.log(el.key, el.value)
        /*
            1 'foo'
            2 'bar'
            3 'baz'
        */
    })

    // find item in container with key of "3"
    console.log(container.locate(3)) // baz

    // get the size of the container
    console.log(container.size()) // 3

    // remove item from container with key of "1"
    container.remove(1)

    console.log(container.size()) // 2

    // test if container is empty
    if(!container.empty()) console.log('contains stuff') // contains stuff

    // clear all contents of container
    container.clear()

    console.log(container.size()) // 0
 

