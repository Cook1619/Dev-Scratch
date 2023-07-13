"use strict";
function numberIdentity(arg) {
    return arg;
}
numberIdentity(2);
function stringIdentity(arg) {
    return 'test';
}
stringIdentity('test');
// lets makes a generic
// whatever the input is that will be the return type
function identity(arg) {
    return arg;
}
// Will now work with all types
identity('test');
identity(true);
identity(4);
function getRandomElement(args) {
    const randomIndex = Math.floor(Math.random() * args.length);
    return args[randomIndex];
}
// Now will return different item in the array no matter what the type
getRandomElement([1, 5, 3, 6, 7, 4]);
getRandomElement(['test', 'tee', 'ttaaa', 'deee']);
