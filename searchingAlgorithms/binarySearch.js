
function binarySearch(arr,val){
  let left = 0;
  let right = arr.length - 1
  let mid = Math.floor((left + right) / 2)
  while(left < arr.length){
    if(mid === val) return arr.indexOf(mid)
     else if(mid < val){
       //left
       mid += 1
     } else {
       mid -= 1
     }
  }
  return -1
}

console.log(binarySearch([1,2,3,4,5], 4))
