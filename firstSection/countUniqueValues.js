//implement a function which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted.

function countUniqueValues(array){
  // let count = 0;
  // let i = 0;
  // let j = 1;

  // while(j <= array.length){
  //   if(array[i] === array[j]){
  //     j++
  //   } else{
  //     i = j
  //     count++
  //     j++
  //   }
  // }
  // return count

  // let count = 0;
  // let i = 0;
  // let j = 1;

  // while(j <= array.length){
  //   if(array[i] !== array[j]){
  //     count++
  //   }
  //   i++
  //   j++
  // }
  // return count

  let i = 0;
  let j = 1;

  while(j < array.length){
    while(array[i] === array[j]){
      j++
    }
    i++
    array[i] = array[j]
  }
  return i
}
console.log(countUniqueValues([1,1,1,1,1,2]))
// console.log(countUniqueValues([]))
console.log(countUniqueValues([-2,-1,-1,0,1]))
console.log(countUniqueValues([1,2,3,4,4,5,5,6,7]))
