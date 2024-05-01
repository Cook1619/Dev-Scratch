// ! Bubble Sort
// A sorting alg where the largest values bubble up to the top
// We go through each item in an array, compare it to the value ahead of it, if the number is larger, we swap places
// [29, 10, 14, 30, 37, 14, 18]
// First step is 29 bigger than 10? yes so now it would look like this [10,29,14,30,37,14,18]
/* 
  - Sorting in the process of rearranging the items in a collection (array) so that the items are in some kind of order
  - Sorting number from smallest to largest
  - Sorting names alphabetically
  - Sorting movies based on release year
  - Sorting movies based on revenue
*/

// * Before we sort, we must be able to swap
// Many sorting algorithms involve some type of swapping functionality (swapping two numbers to put them in order)
// Tried and true way
function swap(arr, idx1, idx2) {
  let temp = arr[idx1];
  arr[idx1] = arr[idx2];
  arr[idx2] = temp;
}

// Newer way, not as easy to read
function swap2(arr, idx1, idx2) {
  [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]];
}

// Bubble Sort Pseudocode
/*
  - Creation a function called bubbleSort which takes in an array of numbers and sorts them
  - Starting looping from with a variable called i at the end of the array towards the beginning
  - Start inner loop with a variable called j from the beginning until i - 1
  - If arr[j] is greater than arr[j+1] swap those two values
  - Return sorted array
*/
// Less optimized
function bubbleSort(arr) {
  // as i decrements, so does the amount of times j loops because of the condition
  // the i - 1 makes sure we have a clear boundary of the end of the array
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        // The swap
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}

// More optimized, helps for nearly sorted arrays, less iterations
function swap3(arr, index1, index2) {
  let temp = arr[index1];
  arr[index1] = arr[index2];
  arr[index2] = temp;
}

function bubbleSort2(arr) {
  let noSwaps;
  for (let i = arr.length; i > 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        swap3(arr, j, j + 1);
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}

bubbleSort([34, 65, 1, 4, 87, 34])[
  // Built in JS methods
  ("test", "alpha", "delta")
].sort(); // --> ["alpha", "delta", "test"]
// Not great with numbers
[1, 22, 3, 10, 4].sort(); // --> [1,10,22,3,4]
// You can tell sort what to do with an optional function
function numberCompare(num1, num2) {
  // you can flip this for descending order
  return num1 - num2;
}
// Another function you can pass sort to compare string lengths
function compareByLength(str1, str2) {
  return str1.length - str2.length;
}

[1, 22, 3, 10, 4].sort(numberCompare); // --> [1,3,4,10,22]
