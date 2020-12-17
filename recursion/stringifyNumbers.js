//write a function called stringifyNumbers which takes in an object and finds all of the values which are numbers and converts them to strings.

function stringifyNumbers(object){
  let newObj ={}

  for(let elem in object){
    let key = object[elem]
    if(typeof key === 'number'){
      newObj[elem] = key.toString()
    } else if(typeof key === 'object' && !Array.isArray(key)){
      newObj[elem] = stringifyNumbers(key)
    } else{
      newObj[elem] = key
    }
  }

 return newObj
}


let obj = {
  num: 1,
  test: [],
  data: {
      val: 4,
      info: {
          isRight: true,
          random: 66
      }
  }
}
console.log(stringifyNumbers(obj))
