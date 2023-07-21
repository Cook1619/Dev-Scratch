// ! Recursion, what is it?
/*
    A process that calls itself (a function which calls itself)
     - It's everywhere! 
     - Object traversal
     - It's sometimes a cleaner alternative to iteration
    ? How a recursive function works
     - Invoke the same function with a different input until you reach your base case
     - Base case - the condition when the recursion ends
       - This is the most important concept to understand
     - Different input, each time it gets called, it will have a different input
*/

// ! Example
function countDown(num) {
  // this condition is our base case, our stopping point, if we didn't have this the function would never end
  if (num <= 0) {
    console.log("All done!");
    return;
  }
  console.log({ num });
  num--;
  countDown(num);
}
// countDown(5);
// { num: 5 }
// { num: 4 }
// { num: 3 }
// { num: 2 }
// { num: 1 }
// All done!

// ! Same thing without recursion
function countDown2(num) {
  for (let i = num; i > 0; i--) {
    console.log({ i });
  }
  console.log("All done!");
}
// countDown2(5);

// ! Second recursion function
function sumRange(num) {
  if (num === 1) return 1;
  return num + sumRange(num - 1);
}

// ! Factorial Iteratively
function factorial(num) {
  let total = 1;
  for (let i = num; i > 1; i--) {
    total *= i;
  }
  return total;
}
// Factorial of 3 for example, all that means is 3 * 2 * 1 = 6

function factorial2(num) {
  if (num === 1) return 1;
  console.log({ num });
  return num * factorial2(num - 1);
}
// console.log(factorial2(3));
// { num: 3 }
// { num: 2 }
// 6
// return 1 function is done then continue with the stack
// 2 * (2 - 1) -->  2 * 1
// 3 * (3 - 1) --> 3 * 2 = 6

// ! Where things go wrong
/*  
  - If you don't have a base case or your base case is wrong
  - Forgetting to return, or returning the wrong thing
*/

// * Helper method recursion
// * This function doesn't actually do anything just an example
function outer(input) {
  let outerScope = [];
  function helper(helperInput) {
    // modify outer scope
    helper(helperInput--);
  }
  helper(input);
  return outerScope;
}

// Better example which collects the odd numbers and puts them in an array
// We have this wrapper function because if we did this in one function recursion the result would be reset, so you would have to store that variable outside that function. So this is why you wrap another function around it
function collectOddValues(arr) {
  let result = [];

  function helper(helperInput) {
    // base case!!
    if (helperInput.length === 0) {
      return;
    }
    // checks the first element in the array
    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }
    // removes the first element, so were modifying the original array, so we keep shrinking the array until it returns
    helper(helperInput.slice(1));
  }

  helper(arr);

  return result;
}

// collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9]);

// ! Pure recursion for the same problem
/* Tip 
    - For pure recursion use methods like slice, spread, and concat that makes copies of the array so you don't mutate them
    - Remember that strings are immutable so you will need to use methods like slice, substr, or substring to make copies of strings
    - To make copies of objects use Object.assign, or the spread operator
*/
function collectOddValues2(arr) {
  let newArr = [];
  // base case
  if (arr.length === 0) {
    return newArr;
  }

  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }
  // makes copy of orig array
  newArr = newArr.concat(collectOddValues2(arr.slice(1)));
  return newArr;
}
// This one works just like factorial, where its going to keep removing values from the array until its empty, but then were left with the call-stack
// collectOddValues([1,2,3,4,5])
//     [1].concat(collectOddValues([2,3,4,5])) ... etc
// collectOddValues([1, 2, 3, 4, 5]); // [1,3,5]

function power(base, exp) {
  if (exp === 0) return 1;
  return base * power(base, exp - 1);
}

console.log(power(2, 2));
