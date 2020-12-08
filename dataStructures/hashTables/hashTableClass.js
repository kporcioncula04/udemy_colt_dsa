class HashTable {
  constructor(size) {
    this.keyMap = new Array(size)
  }
  _hash(key) {
    let total = 0;
    let WEIRD_PRIME = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i]
      let value = char.charCodeAt(0) - 96
      total = (total * WEIRD_PRIME + value) % this.keyMap.length;
    }
    return total;
  }

  set(key, value) {
    let index = this._hash(key)
    if (!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value])
  }

  get(key) {
    let index = this._hash(key)
    if (this.keyMap[index]) {
      for (let i = 0; i < this.keyMap[index].length; i++) {
        if (this.keyMap[index][i][0] === key) {
          return this.keyMap[index][i][1]
        }
      }
    }
    return undefined;
  }

  keys() {
    let hashTable = this.keyMap
    let keys = []
    for (let i = 0; i < hashTable.length; i++) {
      let currElem = hashTable[i]

      if (currElem) {
        for (let j = 0; j < currElem.length; j++) {
          if (!keys.includes(currElem[j][0])) {
            keys.push(currElem[j][0])
          }
        }
      }
    }
    return keys
  }

  values() {
    let hashTable = this.keyMap
    let vals = []
    for (let i = 0; i < hashTable.length; i++) {
      let currElem = hashTable[i]

      if (currElem) {
        for (let j = 0; j < currElem.length; j++) {
          if (!vals.includes(currElem[j][1])) {
            vals.push(currElem[j][1])
          }
        }
      }
    }
    return vals
  }
}

let ht = new HashTable(17)
ht.set('hello wold', 'goodbye')
ht.set('dogs', 'are cool')
ht.set('cats', 'are fine')
ht.set('i love', 'pizza')

//console.log(ht)
console.log(ht.get('dogs'))
// console.log(ht.get('are we doneuyghy˜?'))
console.log(ht.keys())
console.log(ht.values())


// Big O of HashTable

// insert: O(1)
// delete: O(1)
// access: 0(1)
