// ! Searching Algorithms

/*  
  * Linear Search JS methods on arrays
    - indexOf returns the index if found otherwise -1
    - includes returns true if in array, otherwise false
    - find 
    - findIndex
*/

// Write a function called linearSearch which accepts an array and a value, and returns the index at which the value exists. If the value does not exist in the array, return -1.
function linearSearch(arr, value) {
  for (let i = 0; i <= arr.length; i++) {
    console.log(arr[i], value);
    if (arr[i] === value) {
      return i;
    }
  }
  return -1;
}

console.log("returned value", linearSearch([9, 8, 7, 6, 5, 4, 3, 2, 1, 0], 4));
