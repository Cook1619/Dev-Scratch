// ! Section Sort
/* 
  - Similar to bubble sort, but instead of first placing large values into the sorted position, it places small values into sorted position
*/

/*
  - Store the first element as the smallest value you've seen so far
  - Compare this item to the next item in the array until you find a smaller number
  - If a smaller number is found, designate that smaller number to be the new "minimum" and continue until the end of the array.
  - If the minimum is not the value (index) you initially began with, swap those two values
  - Repeat this with the next element until the array is sorted
 */
function selectionSort(arr) {
  const swap = (arr, index1, index2) => {
    let temp = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = temp;
  };
  for (let i = 0; i < arr.length; i++) {
    let min = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j;
      }
    }
    if (i !== min) swap(arr, i, min);
  }
  return arr;
}
