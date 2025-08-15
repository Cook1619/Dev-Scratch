// Two Sum
// Given an array of integers and a target sum, return the indices of two numbers that add up to the target.

function twoSum(arr, target){
    const hashMap = new Map() // Store: value -> index
    
    for (let i = 0; i < arr.length; i++) {
        const currentValue = arr[i]
        const complement = target - currentValue  // What number do we need to find?
        
        // Step 1: Check if complement exists in our hashMap
        if (hashMap.has(complement)) {
            // Found it! Return the indices
            return [hashMap.get(complement), i]
        }
        
        // Step 2: If not found, add current value and its index to hashMap
        hashMap.set(currentValue, i)
    }
    
    // Step 3: No solution found
    return null
}

// Sample test cases:
// console.log('Testing Two Sum:')
// console.log(twoSum([2, 7, 11, 15], 9)) //should return [0, 1] because arr[0] + arr[1] = 2 + 7 = 9
// console.log(twoSum([3, 2, 4], 6)) // should return [1, 2] because arr[1] + arr[2] = 2 + 4 = 6
// console.log(twoSum([3, 3], 6)) // should return [0, 1] because arr[0] + arr[1] = 3 + 3 = 6
// console.log(twoSum([1, 5, 3, 7, 2], 8)) // should return [0, 3] because arr[0] + arr[3] = 1 + 7 = 8
// console.log(twoSum([1, 2, 3, 4, 5], 10)) // should return null because no two numbers add up to 10

// Two Sum II - Input Array is Sorted
// Given a 1-indexed array of integers that is already sorted in non-decreasing order, 
// find two numbers such that they add up to a specific target number. 
// Return the indices of the two numbers (1-indexed, not 0-indexed) as an integer array [index1, index2].
function twoSumSorted(numbers, target) {
    let left = 0  // Start at beginning INDEX
    let right = numbers.length - 1  // Start at end INDEX
    
    while (left < right) {
        const sum = numbers[left] + numbers[right]  // Add the VALUES
        
        if (sum === target) {
            return console.log('yo', [left + 1, right + 1])  // Return 1-indexed INDICES
        } else if (sum < target) {
            left++   // Sum too small, move left pointer right
        } else {
            right--  // Sum too large, move right pointer left
        }
    }
    return []  // No solution found
}

// Test cases for Two Sum II:
twoSumSorted([2,7,11,15], 9) //should return [1,2] (1-indexed!)
twoSumSorted([2,3,4], 6) //should return [1,3] 
twoSumSorted([-1,0], -1) // should return [1,2]
twoSumSorted([1,2,3,4,4,9,56,90], 8) //should return [4,5]
















// Three Sum Problem
// Given an array of integers, find all unique triplets that sum to zero. Return them as an array of arrays.
// This builds on Two Sum but adds complexity with:
// Finding triplets instead of pairs
// Returning ALL solutions (not just the first)
// Avoiding duplicate triplets

function threeSum(arr, ){

}


// Test cases for Three Sum:
// threeSum([-1, 0, 1, 2, -1, -4]) should return [[-1, -1, 2], [-1, 0, 1]]
// threeSum([0, 1, 1]) should return [] (no triplets sum to 0)
// threeSum([0, 0, 0]) should return [[0, 0, 0]]
// threeSum([-2, 0, 1, 1, 2]) should return [[-2, 0, 2], [-2, 1, 1]]
// threeSum([1, 2, -2, -1]) should return [] (no triplets sum to 0)
// threeSum([-1, 0, 1, 2, -1, -4, -2, -3, 3, 0, 4]) should return multiple triplets
threeSum([]) // should return [] (empty array)
threeSum([1]) // should return [] (less than 3 elements)
threeSum([1, 2]) // should return [] (less than 3 elements)