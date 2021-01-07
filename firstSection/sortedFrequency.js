// function sortedFrequency(arr, target){

//   let counter = 0;
//          if(!arr.includes(target)) return -1

//   for(let i = 0; i < arr.length; i++){
//       let currElem = arr[i]

//       if(currElem === target) counter += 1

//   }
//   return counter
// }

function sortedFrequency(arr,target){
  let leftIdx = 0;
  let rightIdx = arr.length - 1;
  let counter = 0;

  while(leftIdx <= rightIdx){
    let middle = Math.floor((leftIdx + rightIdx)/ 2)
    let currElem = arr[middle]

    if(currElem !== target && (arr[leftIdx]=== target || arr[rightIdx]=== target)){
      counter++;
      leftIdx++
      rightIdx--;
    } else if(currElem < target){
      leftIdx = middle + 1;
    } else if(currElem === target){
      if((leftIdx === middle || rightIdx === middle) && (arr[leftIdx] !== target || arr[rightIdx] !== target))break;
      counter++;
      leftIdx++;
      rightIdx--
    } else if(currElem > target){
      rightIdx = middle;
      leftIdx = middle -1
    }
  }

  if(counter > 0) return counter;
  return -1;

}

console.log(sortedFrequency([1,1,2,2,2,2,3], 2))
console.log(sortedFrequency([1,1,2,2,2,2,3],4))
