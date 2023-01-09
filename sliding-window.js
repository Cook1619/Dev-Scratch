// ! Sliding Window

/*
    This pattern involves creating a window which can either be an array or number from one position to another
    Depending on the certain condition, the window either increases or closes (and a new window is created)
    Very useful for keeping track of a subset of data in an array/string etc
*/
// * Example
/*
    Write a function called maxSubarraySum which accepts an array of integers and a number called n. The function should calculate the maximum sum of n consecutive elements in the array
 */
// O(n^2)
function maxSubarraySum(arr, num) {
  if (num > arr.length) {
    return null;
  }
  let max = -Infinity;
  // the condition makes it so you don't ever go all the way to the end of the array
  // example arr.length = 4 [2,3,4,5], number is 2, the last iteration will end at 4 - 2 + 1 which evaluates to index of 3 so number 4 in that array and will add 4 and 5 together, but will not traverse any farther in the array
  for (let i = 0; i < arr.length - num + 1; i++) {
    temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}

// maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3);

// Refactored
// O(n)
function maxSubarraySum2(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  // edge case to return null right away in case the number is larger then the length of the array
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  // These numbers now are the same before the real logic begins
  // console.log(maxSubarraySum2([2, 5, 7, 3], 2)); So tempSum and maxSum are 7 at this point in this example
  // this iterates over the first 2 numbers and adds them so it 2 + 5 = 7
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    console.log({ tempSum });
    console.log(`arr[i - num]: ${arr[i - num]}`);
    console.log(`arr[i]: ${arr[i]}`);
    tempSum = tempSum - arr[i - num] + arr[i];
    console.log({ tempSum });
    // this updates maxsum if tempsum is larger like here if (temp > max)
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}
console.log(maxSubarraySum2([2, 5, 7, 3], 2));
/*
 ? Logs looks like this on each loop for this smaller array to get an idea of whats going on
{ tempSum: 7 }
arr[i - num]: 2
arr[i]: 7
{ tempSum: 12 }
{ tempSum: 12 }
arr[i - num]: 5
arr[i]: 3
{ tempSum: 10 }
12
*/
// maxSubarraySum2([2, 6, 9, 2, 1, 8, 5, 6, 3], 3);
