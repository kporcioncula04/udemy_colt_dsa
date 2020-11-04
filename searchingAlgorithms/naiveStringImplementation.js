// function naiveSearch(long,short){
//   let count = 0;

//   for(let i = 0; i < long.length; i++){
//     for(let j = 0; j < short.length; j++){
//         if(long[i+j] !== short[j]) break
//       //when we find a match we increment the count
//       // if we made it to the last string of short
//       //if j reached the end of the short length
//       //you need it to stop at some point
//         if(j === short.length -1) count++
//     }
//   }

//   return count
// }

// console.log(naiveSearch('wowomgzomg','omg'))

function naiveSearch(long,short){
  let count = 0;

  let j = 0;

  for(let i = 0; i < long.length; i++){
    if(long[i] === short[j]){
      j++
    } else {
      j = 0
    }

    if(j === short.length){
      count++
      j = 0;
    }
  }
  return count
}

 console.log(naiveSearch('wowomgzomg','omg'))
