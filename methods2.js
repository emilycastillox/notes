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

