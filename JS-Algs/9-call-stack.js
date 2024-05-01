// ! The Call Stack
/*
   - In almost all programming languages, there is a built in data structure that manages what happens when functions are invoked
   - It's a stack data structure: First in Last out
   - Anytime a function is called, it is placed(pushed) on the top of the call stack
   - When JS sees the return keyword or when a function ends, the compiler wil remove (pop) that function off of the call stack
 */

// ! Example
function takeShower() {
  return "Showering!";
}

function eatBreakfast() {
  let meal = cookFood();
  return `Eating ${meal}`;
}

function cookFood() {
  let items = ["Oatmeal", "Eggs", "Protein Shake"];
  return items[Math.floor(Math.random() * items.length)];
}
function wakeUp() {
  takeShower();
  eatBreakfast();
  console.log("Ok ready to go to work!");
}

wakeUp();

// * The call-stack on this will look like
//  1. wakeUp() gets called, it is on the bottom of the call-stack
//  2. Then takeShower() gets added to the top of the call-stack, but returns something, so it gets popped off the stack
//  3. Then eatBreakfast() gets called, which calls cookFood(), now cookFood is on top of the call-stack
//  4. When cookFood is done it get popped off the stack, then eatBreakfast can finish, and gets popped off the stack
//  5. Finally wakeUp can resolve and logs in console message and gets popped off the stack
