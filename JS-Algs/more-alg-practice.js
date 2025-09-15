// Two Sum
// Given an array of integers and a target sum, return the indices of two numbers that add up to the target.

function twoSum(arr, target) {
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
console.log('Test 1:', twoSumSorted([2, 7, 11, 15], 9)) //should return [1,2] (1-indexed!)
console.log('Test 2:', twoSumSorted([2, 3, 4], 6)) //should return [1,3] 
console.log('Test 3:', twoSumSorted([-1, 0], -1)) // should return [1,2]
console.log('Test 4:', twoSumSorted([1, 2, 3, 4, 4, 9, 56, 90], 8)) //should return [4,5]


// Easy Problem: Palindrome Check
// Write a function that checks if a given string is a palindrome (reads the same forwards and backwards)
// Ignore spaces, punctuation, and case sensitivity

function isPalindrome(str) {
    const cleanString = str.toLowerCase().replace(/[^a-z0-9]/gi, '')
    let left = 0
    let right = cleanString.length - 1
    while (left < right) {
        if (cleanString[left] !== cleanString[right]) {
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
    if (arr.length === 0) return 0
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
// console.log('\n=== Testing Three Sum ===')
// console.log('Test 1:', threeSum([-1, 0, 1, 2, -1, -4])) // should return [[-1, -1, 2], [-1, 0, 1]]
// console.log('Test 2:', threeSum([0, 1, 1])) // should return [] (no triplets sum to 0)
// console.log('Test 3:', threeSum([0, 0, 0])) // should return [[0, 0, 0]]
// console.log('Test 4:', threeSum([-2, 0, 1, 1, 2])) // should return [[-2, 0, 2], [-2, 1, 1]]
// console.log('Test 5:', threeSum([1, 2, -2, -1])) // should return [] (no triplets sum to 0)
// console.log('Test 6:', threeSum([])) // should return [] (empty array)
// console.log('Test 7:', threeSum([1])) // should return [] (less than 3 elements)
// console.log('Test 8:', threeSum([1, 2])) // should return [] (less than 3 elements)


// Problem: First Duplicate
// Given an array of integers, find the first number that appears more than once.
// Return the first duplicate you encounter when reading from left to right.
// If no duplicates exist, return null.

function firstDuplicate(arr) {
    const dupMap = new Map();
    for (let i = 0; i < arr.length; i++) {
        if (dupMap.has(arr[i])) {
            return arr[i]
        }
        dupMap.set(arr[i], 1)
    }
    return null
}

// function firstDuplicate(arr) {
//     const seen = new Set()

//     for (let i = 0; i < arr.length; i++) {
//         if (seen.has(arr[i])) {
//             return arr[i]
//         }
//         seen.add(arr[i])
//     }

//     return null
// }
// Test cases:
// console.log('\n=== Testing First Duplicate ===')
// console.log('Test 1:', firstDuplicate([2, 5, 1, 2, 3, 5, 1, 2, 4])) // should return 2 (first duplicate encountered)
// console.log('Test 2:', firstDuplicate([2, 1, 3, 5, 3, 2])) // should return 3 (3 appears before the second 2)
// console.log('Test 3:', firstDuplicate([2, 3, 1])) // should return null (no duplicates)
// console.log('Test 4:', firstDuplicate([])) // should return null (empty array)
// console.log('Test 5:', firstDuplicate([1])) // should return null (single element)
// console.log('Test 6:', firstDuplicate([5, 5])) // should return 5 (immediate duplicate)



// Problem: Find Missing Number
// Given an array containing n distinct numbers taken from 0, 1, 2, ..., n, 
// find the one number that is missing from the array.
// The array will always have exactly one missing number.

function findMissingNumber(nums) {
    const seen = new Set(nums)

    for (let i = 0; i <= nums.length; i++) {
        if (!seen.has(i)) {
            return i
        }
    }
}

// Test cases:
// console.log('\n=== Testing Find Missing Number ===')
// console.log('Test 1:', findMissingNumber([3, 0, 1])) // should return 2 (missing from 0,1,2,3)
// console.log('Test 2:', findMissingNumber([0, 1])) // should return 2 (missing from 0,1,2)
// console.log('Test 3:', findMissingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1])) // should return 8 (missing from 0-9)
// console.log('Test 4:', findMissingNumber([0])) // should return 1 (missing from 0,1)
// console.log('Test 5:', findMissingNumber([1])) // should return 0 (missing from 0,1)
// console.log('Test 6:', findMissingNumber([1, 2, 3, 4, 5])) // should return 0 (missing from 0-5)


// Problem: Contains Duplicate
// Given an integer array, return true if any value appears at least twice in the array, 
// and return false if every element is distinct.
// This is asking "does this array have ANY duplicates?" rather than "what is the first duplicate?"

function containsDuplicate(nums) {
   const numLength = nums.length
   const newArr = new Set(nums)
   return numLength > newArr.size
}

// Test cases:
// console.log('\n=== Testing Contains Duplicate ===')
// console.log('Test 1:', containsDuplicate([1, 2, 3, 1])) // should return true (1 appears twice)
// console.log('Test 2:', containsDuplicate([1, 2, 3, 4])) // should return false (all distinct)
// console.log('Test 3:', containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2])) // should return true (multiple duplicates)
// console.log('Test 4:', containsDuplicate([])) // should return false (empty array)
// console.log('Test 5:', containsDuplicate([1])) // should return false (single element)
// console.log('Test 6:', containsDuplicate([5, 5])) // should return true (immediate duplicate)

// Problem: Valid Anagram
// Given two strings, return true if they are anagrams of each other, 
// and false otherwise. An anagram is a word formed by rearranging the letters 
// of another word, using all the original letters exactly once.
// (Case insensitive, ignore spaces)

function validAnagram(s, t) {
    const cleansedString1 = s.toLowerCase().replace(/ /g, '')
    const cleansedString2 = t.toLowerCase().replace(/ /g, '')
    const mapStr1 = new Map()
    const mapStr2 = new Map()
    for(let i = 0; i < cleansedString1.length; i++){
        if (mapStr1.has(cleansedString1[i])){
            mapStr1.set(cleansedString1[i], mapStr1.get(cleansedString1[i]) + 1)
        } else {
            mapStr1.set(cleansedString1[i], 1)
        } 
    }

    for(let i = 0; i < cleansedString2.length; i++){
        if (mapStr2.has(cleansedString2[i])){
            mapStr2.set(cleansedString2[i], mapStr2.get(cleansedString2[i]), + 1)
        } else {
            mapStr2.set(cleansedString2[i], 1)
        } 
    }

    if (mapStr1.size !== mapStr2.size){
        return false
    }
    
    for(let [key, value] of mapStr1){
        if (!mapStr2.has(key) || mapStr2.get(key) !== value){
            return false
        }
    }
    return true

}

// Test cases:
// console.log('\n=== Testing Valid Anagram ===')
// console.log('Test 1:', validAnagram("anagram", "nagaram")) // should return true
// console.log('Test 2:', validAnagram("rat", "car")) // should return false  
// console.log('Test 3:', validAnagram("listen", "silent")) // should return true
// console.log('Test 4:', validAnagram("hello", "bello")) // should return false
// console.log('Test 5:', validAnagram("", "")) // should return true (both empty)
// console.log('Test 6:', validAnagram("a", "ab")) // should return false (different lengths)
// console.log('Test 7:', validAnagram("Astronomer", "Moon starer")) // should return true (ignore spaces/case)


// Problem: Group Anagrams
// Given an array of strings, group the anagrams together. 
// Return the groups as an array of arrays.
// Anagrams are words that use the same letters but in different order.

function groupAnagrams(strs) {
    const map = new Map()
    
    for (let i = 0; i < strs.length; i++) {
        const currentWord = strs[i]
        
        // STEP 1: Create a signature that all anagrams will share
        // Method: Sort the characters alphabetically
        // "eat" -> ['e','a','t'] -> ['a','e','t'] -> "aet"
        // "tea" -> ['t','e','a'] -> ['a','e','t'] -> "aet"  
        // "ate" -> ['a','t','e'] -> ['a','e','t'] -> "aet"
        const signature = currentWord.split('').sort().join('')
        
        // STEP 2: Check if we've seen this signature before
        if (map.has(signature)) {
            // We have! Add this word to the existing group
            map.get(signature).push(currentWord)
        } else {
            // New signature! Create a new group with this word
            map.set(signature, [currentWord])
        }
    }
    
    // STEP 3: Return all the groups as an array of arrays
    // Map values are the arrays of anagram groups
    return Array.from(map.values())
}
// Test cases:
// console.log('\n=== Testing Group Anagrams ===')
// console.log('Test 1:', groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))
// // should return: [["eat","tea","ate"], ["tan","nat"], ["bat"]]
// // (order within groups and order of groups doesn't matter)

// console.log('Test 2:', groupAnagrams(["abc", "bca", "cab", "xyz"]))
// // should return: [["abc","bca","cab"], ["xyz"]]

// console.log('Test 3:', groupAnagrams(["a"]))
// // should return: [["a"]]

// console.log('Test 4:', groupAnagrams([""]))
// // should return: [[""]]

// console.log('Test 5:', groupAnagrams(["ab", "ba", "abc", "cba", "bac", "acb"]))
// should return: [["ab","ba"], ["abc","cba","bac","acb"]]

// Problem: Find the Longest String
// Given an array of strings, return the longest string.
// If there's a tie, return the first one you encounter.

function findLongestString(strings) {
    if(strings.length === 0) return []
    let longest = strings[0]
    for (let i = 0; i < strings.length; i++){
        if(strings[i].length > longest.length){
            longest = strings[i]
        }
    }
    return longest
}

// Test cases:
// console.log('\n=== Testing Find Longest String ===')
// console.log('Test 1:', findLongestString(["cat", "dog", "elephant"])) // should return "elephant"
// console.log('Test 2:', findLongestString(["hello", "world"])) // should return "hello" (tie, so first one)
// console.log('Test 3:', findLongestString(["a"])) // should return "a"
// console.log('Test 4:', findLongestString(["short", "medium", "really long string"])) // should return "really long string"
// console.log('Test 5:', findLongestString([])) // should return null or "" (your choice for empty array)

// Problem: Count Words in a Sentence
// Given a sentence (string), count how many words are in it.
// Words are separated by spaces. Ignore extra spaces.

function countWords(sentence) {
    const cleaned = sentence.trim().replace(/\s+/g, ' ')
    
    // Add this check for empty string after trimming
    if(cleaned === '') return 0
    
    return cleaned.split(' ').length
}

// Test cases:
// console.log('\n=== Testing Count Words ===')
// console.log('Test 1:', countWords("Hello world")) // should return 2
// console.log('Test 2:', countWords("I love programming")) // should return 3
// console.log('Test 3:', countWords("JavaScript")) // should return 1
// console.log('Test 4:', countWords("")) // should return 0
// console.log('Test 5:', countWords("  extra       spaces      here  ")) // should return 3 (ignore extra spaces)
// console.log('Test 6:', countWords("a")) // should return 1


// Problem: Reverse a String
// Given a string, return it reversed.
// Simple as that - just flip the characters around!

function reverseString(str) {
    const newStr = str.split('')
    let returnedStr = []
    for(let i = 0; i < newStr.length; i++){
        returnedStr.unshift(str[i])
    }
    return returnedStr.join('') || ''
}

// Test cases:
console.log('\n=== Testing Reverse String ===')
console.log('Test 1:', reverseString("hello")) // should return "olleh"
console.log('Test 2:', reverseString("JavaScript")) // should return "tpircSavaJ"
console.log('Test 3:', reverseString("a")) // should return "a"
console.log('Test 4:', reverseString("")) // should return ""
console.log('Test 5:', reverseString("12345")) // should return "54321"
console.log('Test 6:', reverseString("racecar")) // should return "racecar" (palindrome!)

// Problem: Find the Second Largest Number
// Given an array of numbers, return the second largest number.
// If there's no second largest (like all numbers are the same), return null.

function findSecondLargest(arr) {
    const mySet = new Set(arr)
    const myArr = [...mySet].sort((a, b) => a - b)
    if (myArr.length === 1 || myArr.length === 0) return null
    return myArr[myArr.length - 2]
}

// Test cases:
// console.log('\n=== Testing Find Second Largest ===')
// console.log('Test 1:', findSecondLargest([1, 3, 2, 8, 5])) // should return 5 (8 is largest, 5 is second)
// console.log('Test 2:', findSecondLargest([10, 10, 10])) // should return null (all same numbers)
// console.log('Test 3:', findSecondLargest([5])) // should return null (only one number)
// console.log('Test 4:', findSecondLargest([7, 7, 3, 3, 1])) // should return 3 (7 is largest, 3 is second)
// console.log('Test 5:', findSecondLargest([100, 50, 75, 25])) // should return 75
// console.log('Test 6:', findSecondLargest([])) // should return null (empty array)
// console.log('Test 7:', findSecondLargest([42, 42])) // should return null (only one unique number)
// console.log('Test 8:', findSecondLargest([-1, -5, -3])) // should return -3 (-1 is largest, -3 is second)

// Problem: Find Common Elements
// Given two arrays, return a new array containing elements that appear in both arrays.
// Don't worry about duplicates - if an element appears in both, include it once.

function findCommonElements(arr1, arr2) {
    let newArr = []
    for(let i = 0; i < arr1.length; i++){
        if (arr2.includes(arr1[i])){
            newArr.push(arr1[i])
        }
    }
    return newArr
}

function findCommonElements(arr1, arr2) {
    const set2 = new Set(arr2)
    return arr1.filter(item => set2.has(item))
}

// Test cases:
// console.log('\n=== Testing Find Common Elements ===')
// console.log('Test 1:', findCommonElements([1, 2, 3], [2, 3, 4])) // should return [2, 3]
// console.log('Test 2:', findCommonElements(['a', 'b', 'c'], ['b', 'c', 'd'])) // should return ['b', 'c']
// console.log('Test 3:', findCommonElements([1, 2, 3], [4, 5, 6])) // should return [] (no common elements)
// console.log('Test 4:', findCommonElements([], [1, 2, 3])) // should return [] (empty first array)
// console.log('Test 5:', findCommonElements([1, 2, 3], [])) // should return [] (empty second array)
// console.log('Test 6:', findCommonElements([1, 1, 2], [2, 2, 3])) // should return [2] (no duplicates in result)
// console.log('Test 7:', findCommonElements([5], [5])) // should return [5] (single match)