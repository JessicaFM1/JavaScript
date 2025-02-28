//SLICE()
const animals = ['ant','bison','camel','duck','elephant']
console.log (animals.slice(2))
console.log(animals.slice(2,4))
console.log(animals.slice(1,6))
console.log(animals.slice(-2))
console.log(animals.slice(2,-1))
console.log(animals.slice())

//COPYING AN ARRAT
const originalArray = [1,2,3,4,5]
const copyOfArray = [...originalArray]
console.log(originalArray)
console.log(copyOfArray)

//COMBINING ARRAYS
const array1 = [1,2,3]
const array2 = [4,5,6]
const combinedArray = [...array1,...array2]
console.log(array1)
console.log(array2)
console.log(combinedArray)

//CREATING ARRAYS WITH ADDITIONAL ELEMENTS
const baseArray = [1,2,3]
const arrayWithAdditionalElements = [...baseArray,4,5,6]
console.log(baseArray)
console.log(arrayWithAdditionalElements)

//PASS ELEMENTS TO FUNCTIONS
function sum(a,b,c){
    return a+b+c
}
const numbers = [1,2,3]
const result = sum(...numbers)
console.log(result)