function sameFrequency(int1,int2){
  let str1 = int1.toString()
  let str2 = int2.toString()

  let counter = {}

  for(let val of str1){
    counter[val] = (counter[val] || 0) + 1
  }

  for(let val of str2){
    counter[val] = (counter[val] || 0) - 1
  }

  for(let key in counter){
    if(counter[key] !== 0){
      return false
    }
  }
 return true
}

console.log(sameFrequency(182,281))
console.log(sameFrequency(223,456))
console.log(sameFrequency(12,90))
