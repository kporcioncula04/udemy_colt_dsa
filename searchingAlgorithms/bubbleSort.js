// function bubbleSort(arr){

//   for(let i = 0; i < arr.length; i++){
//     for(let j = 0; j < arr.length; j++){
//       if(arr[j] > arr[j+1]){
//         //let's swap
//         let temp = arr[j]
//         arr[j] = arr[j+1]
//         arr[j+1] = temp
//       }
//     }
//   }
//   return arr
// }

// function bubbleSort(arr){
//   let range = arr.length
//   while( 0 < range){
//     for(let i = 0; i < range; i++){
//       if(arr[i] > arr[i+1]){
//         let temp = arr[i]
//         arr[i] = arr[i+1]
//         arr[i+1] = temp
//       }
//     }
//     range--
//   }
//   return arr
// }

function bubbleSort(arr){
  for(let i = arr.length - 1; i > 0; i--){
    for(let j = 0; j < i; j++){
      if(arr[j] > arr[j+1]){
        let temp = arr[j]
        arr[j] = arr[j+1]
        arr[j+1] = temp
      }
    }
  }
  return arr
}
console.log(bubbleSort([5,3,4,1,2]))
