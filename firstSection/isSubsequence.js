//write a function called isSubsequence which takes in two strings and checks whether the characters in the first string form a subsequence of the characters in the second string. the function should check whether the characeters in the first string appear somewhere in the second string, WITHOUT THERI ORDER CHANGING.

//isSubsequence('hello','hello world') // true
//isSubsequence('sing', 'string') // true
//isSubsequnce('abc','acb') // false( ordrer matters )

function isSubsequence(str1,str2){
  let i = 0;
  let j = 0;

  while(j < str2.length){
    if(str2[j]=== str1[i]) i++
    if(i === str1.length) return true;
    j++
  }
  return false
}

console.log(isSubsequence('hello', 'hello world'))
console.log(isSubsequence('abc','acb'))

//iterate through the string second string
//if the str1 is a substring of the str2
//how do we check if they are in order tho?
//if the word exists in a substirng manner

