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
            return [left + 1, right + 1]  // Return 1-indexed INDICES
        } else if (sum < target) {
            left++   // Sum too small, move left pointer right
        } else {
            right--  // Sum too large, move right pointer left
        }
    }
    return []  // No solution found
}

// Test cases for Two Sum II:
console.log('\n=== Testing Two Sum Sorted ===')
console.log('Test 1:', twoSumSorted([2,7,11,15], 9)) //should return [1,2] (1-indexed!)
console.log('Test 2:', twoSumSorted([2,3,4], 6)) //should return [1,3] 
console.log('Test 3:', twoSumSorted([-1,0], -1)) // should return [1,2]
console.log('Test 4:', twoSumSorted([1,2,3,4,4,9,56,90], 8)) //should return [4,5]


// Easy Problem: Palindrome Check
// Write a function that checks if a given string is a palindrome (reads the same forwards and backwards)
// Ignore spaces, punctuation, and case sensitivity

function isPalindrome(str) {
    const cleanString = str.toLowerCase().replace(/[^a-z0-9]/gi, '')
    let left = 0
    let right = cleanString.length -1
    while(left < right){
        if (cleanString[left] !== cleanString[right]){
            return false
        }
        left++
        right--
    }
    return true
}

// Test cases:
console.log('\n=== Testing Palindrome ===')
console.log('racecar:', isPalindrome("racecar"))// should return true
console.log('A man a plan a canal Panama:', isPalindrome("A man a plan a canal Panama")) //should return true
console.log('race a car:', isPalindrome("race a car")) // should return false
console.log('hello:', isPalindrome("hello")) // should return false
console.log('Madam:', isPalindrome("Madam")) // should return true
console.log('empty string:', isPalindrome("")) // should return true (empty string)
console.log('single char:', isPalindrome("a")) // should return true (single character)

// Two Sum with Target Count
// Given an array of integers and a target sum, return how many pairs of numbers add up to the target.
// Unlike the original Two Sum, we want to count ALL valid pairs, not just return the first one.

function twoSumCount(arr, target) {
    const hashMap = new Map() // Store: value -> count of how many times we've seen it
    let count = 0
    
    for (let i = 0; i < arr.length; i++) {
        const currentValue = arr[i]
        const complement = target - currentValue
        
        // Step 1: Check if complement exists in hashMap
        if (hashMap.has(complement)) {
            // Add the number of times we've seen the complement
            // Each occurrence of complement can pair with current value
            count += hashMap.get(complement)
        }
        
        // Step 2: Add current value to hashMap (or increment its count)
        if (hashMap.has(currentValue)) {
            hashMap.set(currentValue, hashMap.get(currentValue) + 1)
        } else {
            hashMap.set(currentValue, 1)
        }
    }
    
    return count
}

// Test cases:
// console.log('\n=== Testing Two Sum Count ===')
// console.log('Test 1:', twoSumCount([1, 2, 3, 4, 5], 5)) // should return 2 (pairs: [1,4] and [2,3])
// console.log('Test 2:', twoSumCount([1, 1, 1, 1], 2)) // should return 6 (six ways to pick two 1's that sum to 2)
// console.log('Test 3:', twoSumCount([1, 2, 3], 7)) // should return 0 (no pairs sum to 7)
// console.log('Test 4:', twoSumCount([3, 3], 6)) // should return 1 (one pair: [3,3])
// console.log('Test 5:', twoSumCount([], 5)) // should return 0 (empty array)


// Problem 1: Find Maximum Number
// Given an array of numbers, return the largest number
function findMax(arr) {
    return arr.reduce((acc, currentValue) => {
        return acc > currentValue ? acc : currentValue
    }, arr[0]) 
}

// Test cases:
// console.log('\n=== Testing Find Max ===')
// console.log('Result:', findMax([1, 3, 2, 8, 5])) //should return 8
// console.log('Result:', findMax([10])) // should return 10
// console.log('Result:', findMax([5, 5, 5])) // should return 5
// console.log('Result:', findMax([-1, -5, -3])) // should return -1

// Problem 2: Count Occurrences  
// Given an array and a target value, count how many times the target appears
function countOccurrences(arr, target) {
    // Original solution - forEach approach:
    // let count = 0
    // arr.forEach((value) => {
    //     if(value === target){
    //         count++
    //     }
    // })
    // return count

    // Alternative 1: Using filter
    // return arr.filter(value => value === target).length

    // Alternative 2: Using reduce
    return arr.reduce((count, value) => {
        return value === target ? count + 1 : count
    }, 0)

    // Alternative 3: Traditional for loop
    // let count = 0
    // for (let i = 0; i < arr.length; i++) {
    //     if (arr[i] === target) {
    //         count++
    //     }
    // }
    // return count
}

// Test cases:
// console.log('\n=== Testing Count Occurrences ===')
// console.log('Result:', countOccurrences([1, 2, 2, 3, 2], 2)) // should return 3
// console.log('Result:', countOccurrences([1, 2, 3], 4)) // should return 0  
// console.log('Result:', countOccurrences(['a', 'b', 'a', 'c', 'a'], 'a')) // should return 3

// Problem 3: Sum of Array
// Given an array of numbers, return the sum of all numbers
function sumArray(arr) {
    return arr.reduce((acc, value) => {
        return acc + value
    }, 0)
}

// Test cases:
// console.log('\n=== Testing Sum Array ===')
// console.log('Result:', sumArray([1, 2, 3, 4, 5])) // should return 15
// console.log('Result:', sumArray([])) // should return 0
// console.log('Result:', sumArray([10])) // should return 10
// console.log('Result:', sumArray([-1, 1, -2, 2])) // should return 0


// Problem 4: Find Average
// Given an array of numbers, return the average (mean) of all numbers
function findAverage(arr) {
    if(arr.length === 0) return 0
    const total = arr.reduce((acc, value) => acc + value, 0)
    return total / arr.length
}

// Test cases:
// console.log('\n=== Testing Find Average ===')
// console.log('Result:', findAverage([1, 2, 3, 4, 5])) // should return 3
// console.log('Result:', findAverage([10])) // should return 10  
// console.log('Result:', findAverage([])) // should return 0 (or you could return null for empty array)
// console.log('Result:', findAverage([2, 4, 6])) // should return 4

// Problem 5: Find Even Numbers
// Given an array of numbers, return a new array with only the even numbers
function findEvens(arr) {
    return arr.filter((num) => num % 2 === 0)
}

// Test cases:
// console.log('\n=== Testing Find Evens ===')
// console.log('Result:', findEvens([1, 2, 3, 4, 5, 6])) // should return [2, 4, 6]
// console.log('Result:', findEvens([1, 3, 5])) // should return []
// console.log('Result:', findEvens([])) // should return []
// console.log('Result:', findEvens([0, -2, -1, 8])) // should return [0, -2, 8]

// Problem 6: Count Vowels
// Given a string, count how many vowels (a, e, i, o, u) it contains (case insensitive)  
function countVowels(str) {
    const vowels = ['a', 'e', 'i', 'o', 'u']
    const cleansedString = str.toLowerCase().split('')
    return cleansedString.reduce((count, value) => {
        return vowels.includes(value) ? count + 1 : count
    }, 0)
}

// Test cases:
console.log('\n=== Testing Count Vowels ===')
console.log('Result:', countVowels("hello")) // should return 2 (e, o)
console.log('Result:', countVowels("programming")) // should return 3 (o, a, i) 
console.log('Result:', countVowels("xyz")) // should return 0
console.log('Result:', countVowels("AEIOU")) // should return 5
console.log('Result:', countVowels("")) // should return 0

// Problem 7: Remove Duplicates  
// Given an array, return a new array with duplicate values removed
function removeDuplicates(arr) {
    // Your solution here - hint: think about what you've learned with hash maps/sets!
}

// Test cases:
// console.log('\n=== Testing Remove Duplicates ===')
// console.log('Result:', removeDuplicates([1, 2, 2, 3, 3, 3])) // should return [1, 2, 3]
// console.log('Result:', removeDuplicates(['a', 'b', 'a', 'c'])) // should return ['a', 'b', 'c'] 
// console.log('Result:', removeDuplicates([])) // should return []
// console.log('Result:', removeDuplicates([1, 1, 1])) // should return [1]




// Three Sum Problem
// Given an array of integers, find all unique triplets that sum to zero. Return them as an array of arrays.
// This builds on Two Sum but adds complexity with:
// Finding triplets instead of pairs
// Returning ALL solutions (not just the first)
// Avoiding duplicate triplets

function threeSum(arr) {
    // Edge case: need at least 3 elements
    if (arr.length < 3) return [];
    
    const result = [];
    
    // Step 1: Sort the array (crucial for avoiding duplicates and using two pointers)
    arr.sort((a, b) => a - b);
    
    // Step 2: Loop through array, fixing each element as the first number
    for (let i = 0; i < arr.length - 2; i++) {
        // Skip duplicate values for the first number
        if (i > 0 && arr[i] === arr[i - 1]) continue;
        
        const firstNum = arr[i];
        const target = 0 - firstNum; // We need the other two numbers to sum to this
        
        // Step 3: Use Two Sum approach on the remaining array
        let left = i + 1;
        let right = arr.length - 1;
        
        while (left < right) {
            const sum = arr[left] + arr[right];
            
            if (sum === target) {
                // Found a valid triplet!
                result.push([firstNum, arr[left], arr[right]]);
                
                // Skip duplicates for left and right pointers
                while (left < right && arr[left] === arr[left + 1]) left++;
                while (left < right && arr[right] === arr[right - 1]) right--;
                
                left++;
                right--;
            } else if (sum < target) {
                left++; // Need a larger sum
            } else {
                right--; // Need a smaller sum
            }
        }
    }
    
    return result;
}


// Test cases for Three Sum:
console.log('\n=== Testing Three Sum ===')
console.log('Test 1:', threeSum([-1, 0, 1, 2, -1, -4])) // should return [[-1, -1, 2], [-1, 0, 1]]
console.log('Test 2:', threeSum([0, 1, 1])) // should return [] (no triplets sum to 0)
console.log('Test 3:', threeSum([0, 0, 0])) // should return [[0, 0, 0]]
console.log('Test 4:', threeSum([-2, 0, 1, 1, 2])) // should return [[-2, 0, 2], [-2, 1, 1]]
console.log('Test 5:', threeSum([1, 2, -2, -1])) // should return [] (no triplets sum to 0)
console.log('Test 6:', threeSum([])) // should return [] (empty array)
console.log('Test 7:', threeSum([1])) // should return [] (less than 3 elements)
console.log('Test 8:', threeSum([1, 2])) // should return [] (less than 3 elements)