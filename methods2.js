/* More Array methods with my examples
https://javascript.info/array-methods

*/

// ******** Insert, Delete, Replace Methods ************

// Example
let arr1 = [3,4,5,6,7]

// method           //output            //action


arr1.push(8)        //[3,4,5,6,7,8]     - adds items to end the end of an array
arr1.pop()          // [3,4,5,6]        - extracts item from end of an array
arr1.shift()        //[4,5,6,7]         - extracts item from beginning of array
arr1.unshift(2)     // [2,3,4,5,6,7]    - adds items to the beginning of array

arr1.splice(index, [deleteCount, elem1,...,elemN])
arr1.splice(0,2,'3','4')    //['3','4',5,6,7]       - replaces items in an array
arr1.splice(2,0,55,555)     //[3,4,55,555,5,6,7]    - inserts items into an array at index(n)
arr1.splice(0,2)            //[5,6,7]               - deletes items in array at index(n)
arr1.splice(-1,0,77,777)    //[3,4,5,6,77,777,7]    - negative index, start from end and add

// get array of elements removed by doing
let removed = arr.splice(0,2) // [3,4]

arr1.slice(2,4)     //newArr [5,6]          - copies a new array from start index to end index

arr1.concat([8,9],10,11) // => newArr [3,4,5,6,7,8,9] ==> finalResult [3,4,5,6,7,8,9,10,11]
// - copies a new array from arr1 AND arguments that are arrays [6,7], then adds other args


const arrayLike = {
    0: "an",
    1: "array",
    [Symbol.isConcatSpreadable]: true,
    length: 2
  };

  arr1.concat(arrayLike) // => newArr [3, 4, 5, 6, 7, "an", "array"]
  // for array-like objects, setting the Symbol.isConcatSpreadable property to true will add elements rather than whole objects
  
  arr1.forEach(e => {
    console.log(e+1)
  }) // => 4,5,6,7,8 ** iterates through each element in an array and runs the function

// **************** Searching in Arrays ******************

//arr1.method(item,position)
arr1.indexOf(3)      // => 0     ** finds index of item from position(optional param. if none, position = 0)
arr1.lastIndexOf(4)  // => 1     ** same as indexOf but goes searches array from right to left

arr1.includes(4)     // => true  ** returns true if item is found in array
arr1.includes(2,3)   // => false ** searches from position index 3

let students = [
  {id:1, name:"Emily"},
  {id:2, name:"Deneille"},
  {id:3, name:"Mandy"}
]

let student = students.find(item => item.id == 1)
console.log(student.name) // "Emily" - finds element in array of objects

students.findIndex(item => item.id == 1) //0 -  returns the index where the element was found

// filter returns array of all matching elements. returns empty array if nothing found
let someStudents = users.filter((item => item.id > 1))
console.log(someStudents) // [{id:2, name:"Deneille"}, {id:3, name:"Mandy"}]

// ********** Transform Array Methods ************

let groceries = ['milk', 'eggs', 'waffles', 'yogurt']
let nums = [8,9,5,1,13]

// calls the function on each item in the array and returns an array of the results
groceries.map(item => item.length * 2) // [8,8,14,12]

groceries.sort() // ['eggs', 'milk', 'waffles', 'yogurt'] - sorts an array as STRINGS by default
nums.sort()     // beacuse .sort() uses strings to sort, need to pass in a compare function
nums.sort((a,b) => a-b) // [1,5,8,9,13] - sorts number values ascending
nums.sort((b,a) => a-b) // [13,9,8,5,1]  - sorts by descending order

groceries.reverse() // ['yogurt','waffles', 'eggs', 'milk'] - reverses elements in an array


let characters = 'Gon, Killua, Kurapika'
characters.split(',') //    ['Gon', Killua', 'Kurapika'] - splits a string into an array by the given dilimeter
characters.split('')    // ['G','o','n',','K','i','l','l'....etc] an empty delim will split into individual characters

let arrCharacters = ['Gon','Killua','Kurapika']
arrCharacters.join('*') // 'Gon*Killua*Orchid' - turns away into a string by joining with ()

Array.reduce(function(accumulator, item, index, array){ ... }, [inititial])
nums.reduce((sum, current) => sum + current, 0) // => 42   - calculates a single value based on the values of the array. applies the function to each element and "carries on" the result to the the next call. accumulator param is the result of the previous function call or equals to initial for the first call, if initial is provided

