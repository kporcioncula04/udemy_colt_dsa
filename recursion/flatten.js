//write a recursive function called flatten which accepts an array of arrays and returns a new array with all values flattened.


// function flatten(arr){
//   // add whatever parameters you deem necessary - good luck!
//     let newArr = [];

//     for(let i = 0; i < arr.length; i++){
//         let currElem = arr[i]

//         if(Array.isArray(currElem)){
//             newArr.push(...flatten(currElem))
//         } else {
//             newArr.push(currElem)
//         }
//     }

//     return newArr;
// }

function flatten(arr, newArr=[]){
  if(arr.length === 0) return newArr
  if(typeof arr[0] === 'object') flatten(arr[0], newArr)
  if(typeof arr[0] === 'number') newArr.push(arr[0])

  return flatten(arr.splice(1, arr.length), newArr)
}

console.log(flatten([1, 2, 3, [4, 5] ]))
console.log(flatten([1, [2, [3, 4], [[5]]]]))
console.log(flatten([[1],[2],[3]]))
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]))
