function isPalindrome(str) {
    // Normalize the string: remove non-alphanumeric characters and convert to lowercase
    const cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, "");

    // Initialize two pointers
    let left = 0;
    let right = cleanedStr.length - 1;

    // Compare characters while moving pointers toward the center
    while (left < right) {
        if (cleanedStr[left] !== cleanedStr[right]) {
            return false; // Not a palindrome
        }
        left++;
        right--;
    }

    return true; // It's a palindrome
}

// Test cases
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello"));   // false
console.log(isPalindrome("A man a plan a canal Panama")); // true
console.log(isPalindrome(""));        // true
console.log(isPalindrome("a"));       // true