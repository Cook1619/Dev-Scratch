// What is Big O Nation?
// A way to generalize code, review code to see what code is 'best' aka more performant
// It allow us to talk formally about how the runtime of an algorithm grows as the input grows

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
// ! Contants Don't Matter
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
