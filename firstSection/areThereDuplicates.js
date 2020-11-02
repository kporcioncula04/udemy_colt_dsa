function areThereDuplicates(...args){
  let counter = {}

  for(let val of args){
    counter[val] = (counter[val]|| 0) + 1

    if(counter[val] > 1){
      return true
    }
  }

  return false
}

console.log(areThereDuplicates(1,2,3))
console.log(areThereDuplicates('a','b','c','a'))


