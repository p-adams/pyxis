# pyxis.ts
# An associative container for TypeScript
Pyxis has the following properties:

1) Associative: values are referenced by key and not by position.
     
2) Unique keys: each key in container is unique.
     
3) Ordered: all keys are kept in order.
     
4) Mapped: each entry associates a key to a mapped value.
     
Pyxis currently supports the following operations:

1) `isEmpty` : test whether container is empty or not.

2) `clear` : empties container

3) `size`  : returns number of entries in container.
     
4) `locate(key)` : locates value of entry by key. 
     
5) `insert(key, value)` : inserts a unique key into container in sorted order.
     
6) `remove(key)` : removes key and its associated value from the container.

7) `enum` : enumerate the keys in the container
     
 

