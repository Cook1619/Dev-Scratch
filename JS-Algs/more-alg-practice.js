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
console.log('Testing Two Sum:')
console.log(twoSum([2, 7, 11, 15], 9)) //should return [0, 1] because arr[0] + arr[1] = 2 + 7 = 9
console.log(twoSum([3, 2, 4], 6)) // should return [1, 2] because arr[1] + arr[2] = 2 + 4 = 6
console.log(twoSum([3, 3], 6)) // should return [0, 1] because arr[0] + arr[1] = 3 + 3 = 6
console.log('hi', twoSum([1, 5, 3, 7, 2], 8)) // should return [0, 3] because arr[0] + arr[3] = 1 + 7 = 8
console.log(twoSum([1, 2, 3, 4, 5], 10)) // should return null because no two numbers add up to 10

