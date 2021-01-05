function getDigit(nums,place){
  return Math.floor(Math.abs(nums)/ Math.pow(10,place)) % 10;
}
// const getDigit = (num, place) => {
//   const numStr = "" + num
//   console.log('numstr', numStr)
//   const digit = numStr.split("").reverse()[place]
//   console.log('digi', digit)
//   return digit ? +digit : 0
//  }
// console.log(getDigit(12345, 1))
// console.log(getDigit(12345, 2))
// console.log(getDigit(12345, 3))


// function digitCount(num){
//   return num.toString().length
// }

function digitCount(num){
  if(num === 0) return 1;
  return Math.floor(Math.log10(Math.abs(num))) + 1
}

// console.log(digitCount(123))
// console.log(digitCount(1234))
// console.log(1)

function mostDigits(arr){
  let most = 0;
  for(let i = 0; i < arr.length; i++){
    let currElem = arr[i]
    most = Math.max(most, digitCount(currElem))
  }
  return most
  // return digitCount(Math.max(...arr))
}

function radixSort(nums){
  let maxDigitCount = mostDigits(nums)

  for(let i = 0; i < maxDigitCount; i++){
    let digitBuckets = Array.from({length:10}, () => [])
   for(let j = 0; j < nums.length; j++){
     let digit = getDigit(nums[j],i )
     digitBuckets[digit].push(nums[j])
   }
   nums = [].concat(...digitBuckets)
  }
  return nums
}

console.log(radixSort([123,32,54,4406]))


//BIG O
//space - O(n+k)
//time - O(nk)
