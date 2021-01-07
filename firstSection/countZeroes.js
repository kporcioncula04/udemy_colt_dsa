// function countZeroes(arr){
//   // add whatever parameters you deem necessary - good luck!!!
//   let counter = 0;

//   for(let i = 0; i < arr.length; i++){
//       let currElem = arr[i]

//       if(currElem === 0){
//           counter +=1
//       }
//   }

//   return counter
// }
//Time o(n)

// function countZeroes(arr){
//   let start = 0;
//   let end = arr.length
//   let mid;

//   while(start < end){
//     mid = Math.floor((start + end)/ 2)

//     if(arr[mid] === 1){
//       if(!arr[mid +1]) return arr.length - mid -1;
//       else start = mid +1
//     } else {
//       if(arr[mid -1] === 1) return arr.length - mid;
//       else end = mid;
//     }
//   }

//   return arr.length
// }

function countZeroes(arr){
  let i = 0;
  let j = arr.length - 1;
  let mid = Math.floor((i + j)/ 2)
  let count = 0;

  while(i <=j ){
    if(arr[mid]=== 0){
      //we increment the count
      count += j + 1 - mid
      j = mid - 1
    } else i = mid + 1;
      mid = Math.floor((i+j)/2)
  }

  return count;
}
//time o(log n)
console.log(countZeroes([1,0,0,0,0]))
