// ! Problem solving breakdown
/*
  Understand the Problem
  ? Can you restate the problem in your own words?
  ? What are the inputs that go into the problem?
  ? What are the outputs? What should it look like?
  ? Can the outputs be determined from the inputs?  You may not be able to answer this immediately 
  ? How should I label the important pieces of data that are part of the problem?
*/

/*
  Exploring Examples
  ? Start with simple examples
  ? Progress to more complex examples
  ? Explore examples with empty inputs
  ? Explore examples with invalid inputs
*/

/*
  Break it down!
  ? Write down the steps you wanna take, could be small little notes for the path you wanna take
  ? Write the skeleton of your function and write pseudo code steps to take in there
*/

// ! Sample
// TODO: Write a function which takes in a string and returns counts of each character in a string
/*
    Return an object, only care about alpha numeric characters, ignore spaces
*/

function charCount(str) {
  // make an object to return
  // loop over string, for each character
  // if the char is a num/letter and is a key in object, add one to count
  // if the char is a num/letter and is NOT a key in object, add it and set value to one
  // if char is something else (space, period, etc) don't do anything
  // return object
}

// * Solve and simplify
/* 
  If you can't solve the problem, solve a simpler problem, if you can't figure out one piece of the problem, try to work around it and solve everything else
  By doing this, it's quite possible this problem may become easier to figure out and pieces will click into place
  So 4 steps
   - Find the core difficulty in what you're trying to do
   - Temporarily ignore that difficulty
   - Write a simplified solution
   - Then incorporate that difficulty back in
*/

/*
  * Refactoring Questions
  - Can you check the result?
  - Can you derive the result differently?
  - Can you understand it at a glance?
  - Can you uise the result of method for some other problem?
  - Can you improve the performance of your solution?
  - Can you think of other ways to refactor?
  - How have other people solved this problem?
*/

function charCount(str) {
  // make an object to return at the end
  const result = {};
  // loop over string evaluating each char
  for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase();
    // checks for alpha numeric characters
    if (/[a-z0-9]/.test(char)) {
      // if the char is a num/letter and is a key in object, add one to count
      if (result[char] > 0) {
        result[char]++;
        // if the char is a num/letter and is NOT a key in object, add it and set value to one
      } else {
        result[char] = 1;
      }
    }
  }
  // return object
  return result;
}

console.log(charCount("HelLo"));

// Refaactored using for of, if you we us a for of it gives us each individual char immediatly without have to use i in the for loop
function charCount2(str) {
  // make an object to return at the end
  const result = {};
  // loop over string evaluating each char
  for (let char of str) {
    char = char.toLowerCase();
    // checks for alpha numeric characters
    if (/[a-z0-9]/.test(char)) {
      // if the char is a num/letter and is a key in object, add one to count
      result[char] > 0 ? result[char]++ : (result[char] = 1);
    }
  }
  // return object
  return result;
}

console.log(charCount2("HelLo"));

// 55% more performant then regex
function isAlphaNumeric(char) {
  let code = char.charCodeAt(0);
  if (
    !(code > 47 && code < 58) && // numeric (0-9)
    !(code > 64 && code < 91) && // upper alpha (A-Z)
    !(code > 96 && code < 123) // lower alpha (a-z)
  ) {
    return false;
  }
  return true;
}

function charCount3(str) {
  // make an object to return at the end
  const result = {};
  // loop over string evaluating each char
  for (let char of str) {
    // checks for alpha numeric characters
    if (isAlphaNumeric(char)) {
      char = char.toLowerCase();
      // if the char is a num/letter and is a key in object, add one to count
      result[char] > 0 ? result[char]++ : (result[char] = 1);
    }
  }
  // return object
  return result;
}

console.log(charCount3("HelLo"));
