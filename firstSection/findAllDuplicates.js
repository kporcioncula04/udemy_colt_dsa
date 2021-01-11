function findAllDuplicates(arr){
  // add whatever parameters you deem necessary - good luck!
  let map = {}
  let result = []

  for(let val of arr){
    map[val] = (map[val] || 0) + 1
  }

  for(let val in map){
    if(map[val] === 2){
      result.push(Number(val))
    }
  }

 return result
}



// function findAllDuplicates(arr){
//   let obj = {}
//   let results = []

//   for(let elem of arr){
//     if(elem in obj) results.push(elem)
//     else obj[elem] = 1
//   }
//   return results
// }
console.log(findAllDuplicates([4,3,2,7,8,2,3,1]))
console.log(findAllDuplicates([4,4,3,3,2,1,1,0]))
