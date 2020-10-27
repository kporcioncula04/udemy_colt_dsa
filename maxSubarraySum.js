//write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the max sum of n consecutive elems in the arr.

//maxSubarraySum([1,2,5,2,8,1,5], 2) // 10
//maxSubarraySum([1,2,5,2,8,1,5],4) // 17

function maxSubarraySum(arr,n){
  let max = 0;
  let temp = 0;

  if(arr.length < n) return null

  for(let i = 0; i < n; i++){
    max += arr[i]
  }
  temp = max
  for(let i = n; i < arr.length; i++){
    temp = temp - arr[i-n] + arr[i]
    max = Math.max(max, temp)
  }

  return max
}
console.log(maxSubarraySum([1,2,5,2,8,1,5], 2))
console.log(maxSubarraySum([2,6,9,2,1,8,5,6,3], 3))
