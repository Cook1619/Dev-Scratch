// ! Insertion Sort
/*
  - Builds up the sort by gradually creating a larger portion which is always sorted
  - It iterates over the array and puts the value where it needs to based on condition
  - Pseudocode for insertion sort
    - Start by picking the second element in the array
    - Now compare the second element with the one before it and swap if necessary
    - Continue to the next element and if it is in the incorrect order, iterate through the sorted portion (the left side) to place the element in the correct place.
    - Repeat until the array is sorted
*/
// O(n^2)
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    // we want to compare the value of 1 behind i
    // the && condition will short circuit the loop if the current value of the arr[j] is larger
    for (let j = i - 1; j >= 0 && arr[j] > currentVal; j--) {
      arr[j + 1] = arr[j];
    }
    // this is where the swap happens of placing the currentValue in the index it needs to go
    arr[j + 1] = currentVal;
  }
  return arr;
}

insertionSort([2, 1, 76, 4]);
