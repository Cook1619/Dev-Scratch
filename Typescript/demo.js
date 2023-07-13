"use strict";
function getRandomElement1(args) {
    const randomIndex = Math.floor(Math.random() * args.length);
    return args[randomIndex];
}
// This syntax with a trailing comma is needed is .tsx files
const getRandomElementT = (args) => {
    const randomIndex = Math.floor(Math.random() * args.length);
    return args[randomIndex];
};
// Generics with multiple types
function merge(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
const comboObject = merge({ name: 'Matt' }, { pets: ['Flynn'] });
// Adding Type constraints  generics
function mergeNumber2(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
// works
mergeNumber2({ name: 'test' }, { married: true });
// sense the interface follows the rules of what's being return aka length is a number, TS is happy
function getLength(ele) {
    return ele.length * 2;
}
getLength("test");
