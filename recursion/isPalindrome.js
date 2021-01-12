function isPalindrome(str){

    str = str.replace(/[^0-9a-zA-Z]+/gmi,"");
    str = str.toLowerCase();
  if(str.length === 1) return true
  if(str.length === 2) return str[0] === str[1]
  if(str[0] === str.slice(-1)) return isPalindrome(str.slice(1,-1))
  return false
}

console.log(isPalindrome('awesome'))
console.log(isPalindrome('racecar'))
console.log(isPalindrome('kayak'))
console.log(isPalindrome("A man, a plan, a canal: Panama"))

