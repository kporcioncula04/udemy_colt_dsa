function constructNote(mess, letters){
  let map ={}

  for(let val of letters){
      map[val] = (map[val] || 0) + 1
  }

  for(let val of mess){
    if(map[val]> 0){
      map[val]--;
    } else{
      return false
    }
  }

  console.log(map)
  return true

}

constructNote('abca', 'dcabaa')
