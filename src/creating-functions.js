// 1. Define a function that takes a number and increments it by 1.
//
// Example Input and Output:
// Input  | Output
// 1      | 2
// 2      | 3
//
// TODO: write code below
function addOne(input){
return input+1
}
//console.log(addOne(5))
// 2. Define a function that capitalises any string

// Example Input and Output:
//
// Input | Output
// hello | Hello
// world | World
// Hello | Hello


// TODO: write code below
function AnyCapital(letter){
  return letter.charAt(0).toUpperCase() + letter.slice(1)
}
console.log(AnyCapital('hello'))

// 3. Define a function that takes any person's name and returns it with a smiley :)!
// Remember to make the name capitalized!
//
// Example Input and Output:
//
// Input  | Output
// edward | Hi, Edward :)
// Aiyana | Hi, Aiyana :)
//
// TODO: write code below
function person(name){
  return 'Hi '+ name.charAt(0).toUpperCase() + name.slice(1) + ' :)!'
}
console.log(person('didier'))
// 4. Define a function that takes an array of data and returns how many strings are in the array.
//
// Example Input and Output:
//
// Input                | Output
// ['edward']           | 1
// ['edward', 'aiyana'] | 2
// [1]                  | 0
// [1, 'edward']        | 1
//
// TODO: write code below
function countstring(array){
  let count = 0
  for(let i = 0; i <  array.length; i++) {
if(typeof array[i]  === 'string') {
 count ++
}
  }
  return count
}
console.log(countstring([154154]))
// 5. Define a function that takes an object and adds a property 'edward' to the object if it doesn't yet exist with a default value of 'amazing'
//
// Example Input and Output:
//
// Input                    | Output
// {}                       | { edward: 'amazing' }
// { aiyana: 'fantastic' }  | { aiyana: 'fantastic', edward: 'amazing' }
// { edward: 'fabulous'}    | { edward: 'fabulous'}
//
// TODO: write code below
function objProperty(objName){
  if(objName.edward === undefined){
  objName.edward = 'amazing' 
  }
  return  objName
}

// TODO: change each undefined below to be the name of the functions you defined
module.exports = {
  a: addOne, // 1. change undefined to be the name of the function you defined for the first TODO
  b: AnyCapital, // 2. change undefined to be the name of the function you defined for the second TODO)
  c: person, // etc
  d: countstring,
  e: objProperty
}
