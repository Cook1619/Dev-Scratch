// ! Frequency Patterns

// * This pattern uses objects or sets to collect values/frequencies of values
// * This can often avoid the need for nested loops of O(N^2) operations with arrays/strings

// EXAMPLE
// ? Write a function called same, which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same

// Brute force solutioon
function same(arr1, arr2) {
  // if the 2 arrays have different lengths it will be false immediatly, no reason to do anything else
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex === -1) {
      return false;
    }
    // this removes a value from the second array to keep track of what has been accounted for
    arr2.splice(correctIndex, 1);
  }
  return true;
}

// same([1,2,3], [4,1,9]) // true
// same([1,2,3],[1,9])  //false
// same([1,2,1],[4,4,1]) // false (must be same frequency)

// Refactored
function same2(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let frequencyCounter1 = {};
  let frequencyCounter2 = {};
  for (let val of arr1) {
    console.log("VAL", val);
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}

// same2([2, 5, 5, 6], [4, 25, 25, 36]); // true
// same2([1,2,3],[1,9])  //false
// same2([1,2,1],[4,4,1]) // false (must be same frequency)

function validAnagram(string1, string2) {
  // add whatever parameters you deem necessary - good luck!
  if (string1.length !== string2.length) {
    return false;
  }
  let fc1 = {};
  let fc2 = {};

  for (let val of string1.split("")) {
    fc1[val] = (fc1[val] || 0) + 1;
  }

  for (let val of string2.split("")) {
    fc2[val] = (fc2[val] || 0) + 1;
  }
  for (let key in fc1) {
    if (!(key in fc2)) {
      return false;
    }
    if (fc2[key] !== fc1[key]) {
      return false;
    }
  }
  return true;
}

// validAnagram("", ""); // true
validAnagram("aaz", "zza"); // false
validAnagram("anagram", "nagaram"); // true
// validAnagram("rat", "car"); // false) // false
// validAnagram("awesome", "awesom"); // false
// validAnagram("amanaplanacanalpanama", "acanalmanplanpamana"); // false
// validAnagram("qwerty", "qeywrt"); // true
// validAnagram("texttwisttime", "timetwisttext"); // true

// This one creates one object that iterates over the second string then compares values, uses that object to then decrement as it goes
function validAnagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }

  const lookup = {};

  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    // if letter exists, increment, otherwise set to 1
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }
  console.log(lookup);

  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    // can't find letter or letter is zero then it's not an anagram
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }

  return true;
}

// {a: 0, n: 0, g: 0, r: 0, m: 0,s:1}
// validAnagram('anagrams', 'nagaramm')
