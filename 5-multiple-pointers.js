// ! Multiple Pointers
/* 
    Creating pointers or values that correspond to an index or position and moves towards the beginning, end or middle based on the certain condition

    Very efficient for solving problems with minimal space complexity as well
*/

// Write a function called sumZero which accepts a sorted array of integers. This function should find the first pair where the sum is 0. Return an array that includes both values that sum to zero or undefined if the pair doesn't exist.
// time comp - O(n^2)
// space comp - O(1)
function sumZero1(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}

sumZero1([-4, -3, -2, -1, 0, 1, 2, 5]);

// Refactor
/*
 - What this does is creates variables for the start and end of array
 - Once again this has to be a sorted array for this to work so the start of the array should have the smaller numbers so the condition is if the start of the array is greater then the end of the array
  - Then we create a variable sum and add the 2 numbers together
  - if it 0 return
  - if the sum is greater than 0 we know we need a smaller number so we need to decrement from right side
  - if the sum is less than 0 we know we to go to a larger number so we increment from the left side
*/
// time O(N)
// space O(1)
function sumZero2(arr) {
  let left = 0;
  // gets the last index of the array
  let right = arr.length - 1;
  // this needs to be this condition otherwise we can get a false positive because if not zero could be adding to 0
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

console.log(sumZero2([-4, -3, -2, -1, 0, 1, 2, 3, 10]));
// -4 + 10 --> 6 decrement right side
// -4 + 3 --> -1 increment left side
// -3 + 3 --> 0 return done

// * Count Unique Values
/* 
    Implement a function called countUniqueValues, which accepts a sorted array, and counts the unique values in the array. There can be negative numbers in the array, but it will always be sorted
*/
// O(n)
function countUniqueValues(arr) {
  if (arr.length === 0) {
    return 0;
  }
  let i = 0;
  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }
  return i + 1;
}

// console.log(countUniqueValues([1, 1, 1, 1, 1, 2])); // 2
// console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])); // 7
// console.log(countUniqueValues([])); // 0
console.log(countUniqueValues([6, 6, 8, 8, 9, 9]));
// countUniqueValues([-2,-1,-1,0,1]) // 4
