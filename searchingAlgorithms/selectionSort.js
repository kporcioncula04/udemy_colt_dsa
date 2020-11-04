// function selectionSort(arr){
//   for(let i = 0; i < arr.length; i++){
//     let min = i
//     let temp = arr[i]
//     for(let j = i+1; j < arr.length; j++){
//       if(arr[j] < arr[min]){
//         min = j
//       }
//     }
//     arr[i] = arr[min]
//     arr[min] = temp
//   }
//   return arr
// }

// console.log(selectionSort([5,3,4,1,2]))


// function selectionSort(arr){
//   for(let i = 0; i < arr.length; i++){
//     let smallestIdx = i
//     for(let j= i+1; j < arr.length;j++){
//       if(arr[smallestIdx] > arr[j]){
//         smallestIdx = j
//       }
//     }
//     let smallest = arr[smallestIdx]
//     arr[smallestIdx] = arr[i]
//     arr[i] = smallest
//   }
//   return arr
// }

// console.log(selectionSort([5,3,4,1,2,6,10,20]))

function selectionSort(arr){
  for(let i = 0; i < arr.length; i++){
     //position of smallest element
    let lowest = i;
    //we want to compare it to the next val
    //one val higher when comparing
    for(let j = i+1; j < arr.length; j++){
      if(arr[j] < arr[lowest]){
        lowest = j
      }
    }
    if( i !== lowest){
      let temp = arr[i]
      arr[i] = arr[lowest]
      arr[lowest] = temp
    }

  }
  return arr;
}

console.log(selectionSort([5,3,4,1,2,6,10,20]))

