//Given two strs, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase or name formed by rearranging the letters of another, such as cinema, formed form iceman.

//Examaples:
//validAnagram('') // true
//validAnagram('aaz', 'zza') // false
//validAnagram('anagram', 'nagaram') // true

function validAnagram(str1,str2){
  if(str1.length !== str2.length){
    return false;
  }

  let counter1 = {}
  let counter2 = {}

  for(let val of str1){
    counter1[val] = (counter1[val] || 0) + 1
  }

  for(let val of str2){
    counter2[val] = (counter2[val] || 0) + 1
  }

  for(let key in counter1){
    if(!(key in counter2)){
      return false
    }
    if(counter2[key] !== counter1[key]){
      return false
    }
  }
  return true
}

console.log(validAnagram('apple', 'eppal'))
// console.log(validAnagram('carrot', 'carr'))
