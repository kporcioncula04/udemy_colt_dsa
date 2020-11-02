// function factorial(num){
//   let total = 1;
//   for(let i = num; i > 1; i--){
//     total *= i
//   }
//   return total;
// }

// console.log(factorial(4))


function factorialRecusive(num){
  //base case
  if(num === 1){
    return 1
  }
  //recusive call

  return num * factorialRecusive(num - 1)
}
console.log(factorialRecusive(4))
