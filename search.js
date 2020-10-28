function search(arr, n){
  // return arr.indexOf(n)

  let mid = Math.ceil(arr.length / 2)

  if(arr[mid] === n){
    return mid
  } else if(arr[mid] < n){
    for(let i = mid; i < arr.length; i++){
      let currElem = arr[i]
      if(currElem === n){
        return i
      }
    }
  }  else if(arr[mid] > n){
    for(let i = 0; i < mid; i++){
      let currElem = arr[i]
      if(currElem === n){
        return i
      }
    }
  }
  return -1

  // let min = 0;
  // let max = arr.length - 1

  // while(min <= max){
  //   let mid = Math.floor((min+max)/ 2) //why do we do this?
  //   let currELem = arr[mid]

  //   if(currELem < n){
  //     min = mid + 1
  //   } else if(currELem > n){
  //     max = mid -1
  //   } else{
  //     return mid;
  //   }
  // }
  // return -1
}

console.log(search([1,2,3,4,5,6], 4))
console.log(search([1,2,3,4,5,6], 11))
console.log(search([1,2,3,4,5,6], 5))
