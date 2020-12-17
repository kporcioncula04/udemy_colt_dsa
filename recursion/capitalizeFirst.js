//Given an array of strings, capitalize the first letter of each string in the array

// function capitalize(arr){
//   let newElem = []
//   for(let i = 0; i < arr.length; i++){
//     let currElem = arr[i]
//     let firstLetter = currElem[0].toUpperCase()
//     let sliced = currElem.slice(1, currElem.length)
//     let joined = firstLetter.concat(sliced)
//     newElem.push(joined)
//   }
//   return newElem
// }

// function capitalize(arr, newArr = []){
//   if(arr.length === 0){
//     return newArr
//   }

//   newArr.push(arr[0].charAt(0).toUpperCase() + arr[0].slice(1))

//   return capitalize(arr.slice(1), newArr)
// }

function capitalize(arr){
  if(arr.length === 0){
    return arr
  }
  return [arr[0][0].toUpperCase() + arr[0].slice(1)].concat(capitalize(arr.splice(1)));
}
console.log(capitalize(['car', 'taco', 'banana']))
