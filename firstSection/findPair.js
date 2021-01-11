function findPair(arr,num){
  let dict = {};
  for(let d of arr){
      if(dict[d + num] || dict[d - num]) return true;
      if(!dict[d]) dict[d] = true;
  }
  return false;
}
//  (Time: O(n); Space: O(n))

findPair([6,1,4,10,2,4], 2)


