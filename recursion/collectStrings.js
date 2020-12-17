//write a function called collectStrings which accepts an object and returns an array of all the values in the objext that have a type of string


function collectStrings(collections){
  let vals = []

  for(let elem in collections){
    let key = collections[elem]

    if(typeof key === 'string'){
      vals.push(key)
    } else if(typeof key === 'object'){
      vals = vals.concat(collectStrings(key))
    }
  }

  return vals
}

let obj = {
  stuff: "foo",
  data: {
      val: {
          thing: {
              info: "bar",
              moreInfo: {
                  evenMoreInfo: {
                      weMadeIt: "baz"
                  }
              }
          }
      }
  }
}
console.log(collectStrings(obj))
