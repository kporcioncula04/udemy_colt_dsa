// function insertionSort(arr){

//   for(let i = 1; i < arr.length; i++){
//     let currElem = arr[i]
//     let j = i -1;

//     while((j > -1) && (arr[j] > currElem)){
//       arr[j+1] = arr[j]
//       j--;
//     }
//     arr[j+1] = currElem
//   }

//   console.log(arr)
//   return arr
// }

// console.log(insertionSort([3,2,4,5,1,8,10]))


// function insertionSort(arr){
//   for(let i = 1; i < arr.length; i++){
//     let currIdx = i

//     while(arr[currIdx -1] > arr[currIdx]){
//       let temp = arr[currIdx -1]
//       arr[currIdx -1]= arr[currIdx]
//       arr[currIdx] = temp
//       currIdx--
//     }
//   }
//   return arr
// }


function insertionSort(arr){

  for(let i = 1; i  < arr.length;i++){
    for(let j = i; j >=0 ;j--){
      let currElem = arr[j]
      let prev = arr[j - 1]

      if(prev > currElem){
        arr[j - 1] = currElem
        arr[j] = prev
      } else {
        j = 0
      }
    }
  }
  return arr
}
console.log(insertionSort([3,2,4,5]))

//works with nearly sorted data
//if new elements are being added
