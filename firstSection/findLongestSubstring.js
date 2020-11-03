function findLongestSubstring(str){
  let max = 0
  let i = 0;
  let j = 1;
  let sliced = str[i]

  while(j < str.length){
    if(!(sliced.includes(str[j]))){
      sliced += str[j]
      max = ( max < sliced.length ? sliced.length : max)
      j++
    } else {
      max = (max < sliced.length ? sliced.length : max)
      i = str.indexOf(str[j], i) +1
      j++
      sliced = str[i]
    }
  }
  ``
  return max
}
