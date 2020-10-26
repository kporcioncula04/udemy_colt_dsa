//Given two strs, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase or name formed by rearranging the letters of another, such as cinema, formed form iceman.

//Examaples:
//validAnagram('') // true
//validAnagram('aaz', 'zza') // false
//validAnagram('anagram', 'nagaram') // true

function validAnagram(str1, str2){

  if(str1.length !== str2.length){
    return false
  }

  let map = {}

  for(let char of str1){
    map[char] = (map[char] || 0) + 1
  }

  for(let char of str2){
    if(map[char] > 0){
      map[char]--
    } else{
      return false
    }
  }

  return true
}

console.log(validAnagram('anagram', 'nagaram'))
console.log(validAnagram('rat', 'cat'))
console.log(validAnagram('awesome', 'aweso'))
// console.log(validAnagram('awesome', 'aweso'))
