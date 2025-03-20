// Write a function in JavaScript that takes a string as input and returns the string reversed

// reverseString("hello"); // Output: "olleh"
// reverseString("JavaScript"); // Output: "tpircSavaJ"
// reverseString(""); // Output: ""
// reverseString("a"); // Output: "a"

// Reqs
// The function should handle empty strings.
// The function should work for strings of any length.

function reverseString(str) {
    if (str === "") return ""; // Return empty string if input is empty
    let newStr = []
    for (let i = 0; i < str.length; i++) {
        newStr.unshift(str[i])
    }
    return newStr.toString().replace(/,/g, "")
}

function reverseString2(str) {
    if (str === "") return ""; // Return empty string if input is empty
    let newStr = "";
    for (let i = str.length - 1; i >= 0; i--) {
        newStr += str[i]; // Append characters from the end of the string
    }
    return newStr;
}

function reverseString3(str){
    return str.split('').reverse().join('')
}

console.log(reverseString3("hello"))
console.log(reverseString3("JavaScript"))