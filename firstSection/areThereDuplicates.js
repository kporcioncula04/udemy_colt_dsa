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

// function areThereDuplicates(...vals){
//   return new Set(vals).size !== vals.length
// }


// function areThereDuplicates(...vals) {
//   let j = 1
//   for (let arg in vals) {
//     if(vals[arg] === vals[j]) {
//       return true
//     } else {
//       j++
//     }
//   }
//   return false
// }


console.log(areThereDuplicates(1,2,2,3))
console.log(areThereDuplicates(1,2,3))
console.log(areThereDuplicates('a','b','c','a'))


