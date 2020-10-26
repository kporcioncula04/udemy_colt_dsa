//write a function called sumZero which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes both calues that sum to zero or undefined if a pair does not exists

//sumZero([-3,-2,-1, 0, 1,2,3]) [-3,3]
//sumZero([-2, 0, 1, 3])// undefined

// function sumZero(array){

//   for(let i = 0; i < array.length; i++){
//     let currElem = array[i];
//     for(let j = i + 1; j < array.length; j++){
//       let nextElem = array[j]
//       let sum = currElem + nextElem
//       if(sum === 0){
//         return [currElem, nextElem]
//       }
//     }
//   }

//   return undefined
// }

// console.log(sumZero([-3,-2,-1, 0, 1, 2, 3]))
// console.log(sumZero([-2,0,1,3]))


function sumZero(array){
  let left = 0;
  let right = array.length - 1
  while(left < right){
    let sum = array[left] + array[right]

   if(sum > 0){
     left += 1
   } else if(sum < 0){
     right -=1
   } else if(sum === 0){
     return [array[left], array[right]]
   }
  }

  return undefined
}

console.log(sumZero([-3,-2,-1, 0, 1, 2, 3]))
console.log(sumZero([-2,0,1,3]))
