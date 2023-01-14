// ! Merge Sort
/*
  - It's a combination of two things = merging and sorting
  - Exploits the fact that arrays of 0 or 1 element are always sorted
  - Works by decomposing an array into smaller arrays of 0 to 1 elements, then building up a newly sorted array
*/
// Hows does it work???

//      [7,3,9,6,1,3,5,2]
//    [7,3,9,6]   [1,3,5,2]
//   [7,3] [9,6] [1,3] [5,2]
//  [7][3][9][6] [1][3][5][2]

// Then we merge them and sort
//  [7][3] [9][6] [1][3] [5][2]
// [3,7]   [6,9]  [1,3]  [2,5]
// and repeat
// [3,6,7,9]  [1,2,3,5]
// [1,2,3,5,6,7,9] final sort

// So the way merge sort works is by using the divide and conquer method, it splits up the input so everything is its own array, then starts sorting pairs at a time until there return the whole array sorted

// Merging Arrays, only works on sorted arrays
/*
  - In order to implement merge sort, it's useful to first implement a function responsible for merging 2 sorted arrays
  - Given two arrays which are sorted, this help function should create a new array which is also sorted, and consists of all of the elements in the two input arrays
  - This function should run in O(n + m) and O(n + m) space and should not modify the parameters passed in
*/
// Merging arrays pseudocode
/*
  - Create an empty array, take a look at the smallest values in each input array
  - While there are still values we haven't looked at..
    - If the value in the first array is smaller then the value in the second array, push the value in the first array into our results and move on to the next value in the first array
    - If the value in the first array is larger than the value in the second array, push the value in the second array into our results and move on to the next value in the second array
    - Once we exhaust one array, push in all the remaining values from the other array
*/

// One implementation
function merge(left, right) {
  let result = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while (leftIndex < left.length && rightIndex < right.length) {
    if (left[leftIndex] < right[rightIndex]) {
      result.push(left[leftIndex]);
      leftIndex++;
    } else {
      result.push(right[rightIndex]);
      rightIndex++;
    }
  }

  return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

//   merge([1,10,50],[2,14,99,100])

// Another implementation which makes more sense to me, but longer
function merge(arr1, arr2) {
  // create results array to push on values
  const results = [];
  // this makes it easier to me then reading nested loops
  let i = 0;
  let j = 0;
  // we continue to loop while both arrays still have values
  while (i < arr1.length && j < arr2.length) {
    // so in the first iteration were check if 2 is greater than 1, if it is push arr[i] onto results array
    if (arr2[j] > arr1[i]) {
      results.push(arr1[i]);
      // moving the pointer index up to the next value
      i++;
      // this else catching equality and when arr[i] is greater then arr[j]
    } else {
      results.push(arr2[j]);
      j++;
    }
    // once we have exausted the values in arr1 or arr2 we need to check if there are any values left and push them on the results array
  }
  while (i < arr1.length) {
    results.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    results.push(arr2[j]);
    j++;
  }
  // return value when done looping
  return results;
}

merge([1, 10, 50], [2, 14, 99, 100]);

// Sorting part of merge sort :-)
/*
  - Break up the array into halves until you have arrays that are empty or have one element
  - Once you have smaller sorted arrays, merge those arrays with other sorted arrays until you are back at the full of the array
*/
