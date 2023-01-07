// What is Big O Nation?
// A way to generalize code, review code to see what code is 'best' aka more performant
// It allow us to talk formally about how the runtime of an algorithm grows as the input grows
// To analyze the performance of an algorithm, we use Big O Notation
// Big O  can give us a high level understanding of the time or space complexity of an algorithm

// Why do we care?
// faster, less memory intensive

// https://rithmschool.github.io/function-timer-demo/

// Slower
// this is n operations, way more. As n grows so does the operations
// Big O of O(n)
function addUpTo(n) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

var t1 = performance.now();
addUpTo(1000000000);
var t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`);
// Time Elapsed: 0.9438738331794739 seconds.

// Faster
// 3 operations no matter what
// Big O of O(1)
function addUpTo2(n) {
  return (n * (n + 1)) / 2;
}

var time1 = performance.now();
addUpTo2(1000000000);
var time2 = performance.now();
//  dividing by a 1000 because its in milliseconds and we want to work in seconds
console.log(`Time Elapsed: ${(time2 - time1) / 1000} seconds.`);
// Time Elapsed: 0.000014042139053344726 seconds.

// Problem with this method it there are a lot of variables to time, the better solution is counting the operations

// Simplifying Big O Expressions
// ! Constants Don't Matter
// * O(2n)  --> O(n) // middle
// * O(500)  --> O(1) // fastest
// * O(13n^2)  --> O(n^2) // slowest

// Big O Shorthands
// * Arithmetic operations are constant
// * Variable assignment are constant
// * Accessing elements in an array (by index) or object (by key) is constant
// * In a loop, the complexity is the length of the loop times the complexity of whatever happens inside of the loop

// Simplified
// O(n^2 + n^3) --> O(n^3)

// * Space complexity
// - Most primitives (booleans, numbers, undefined, null) are constant space
// - Strings require O(n) space (where n is the string length)
// - Reference types are generally O(n), where n is the length for arrays, or the number of keys for objects

function sum(arr) {
  let total = 0;
  for (let i = 1; i <= arr.length; i++) {
    total += arr[i];
  }
  return total;
}
// As far as space goes now matter how large or small the array grows this is still O(1)
// This references the 2 variables created

// Logs

// * log˅2(8) = 3  --> 2^3 = 8
// the 2 goes below the word log, its the inverse or powers, this is basically saying 2 * 2 * 2 = 8
// * log === log˅2

/* 
    8
/2  4 
/2  2
/2  1

= log(8) = 3
*/

if (typeof str !== "string") {
  throw new Error(`Input is not of type string`);
}

function reverseString1(str) {
  return str.split("").reverse().join("");
}

console.log(reverseString1("Hello"));

function reverseString2(str) {
  let newString = "";
  for (let i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }
  return newString;
}

console.log(reverseString2("Hello"));

// Scaling vertically means giving your computer more power in forms of ram, cpu, and hard disc space to handle the load (terraform)
// Scaling horizontally means adding more computers to handle the load (more k8 clusters)

//! Explain how a web application communicates with an api to a 5 year old any tech terms?
// * Easiest example I can come up with is like when we go out to a restaurant and we have us, the waiter, and cooks in the kitchen. When we go to the restaurant we give the waiter our order (REQUEST), then the waiter gives our order to the cooks. When the food is done the waiter then goes back to the kitchen to bring our food to us. Likewise, during this time we can tell the waiter if we want a small change to our order, or cancel our order and start over.
