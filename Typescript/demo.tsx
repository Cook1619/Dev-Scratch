function getRandomElement1<T>(args: T[]): T {
    const randomIndex = Math.floor(Math.random() * args.length);
    return args[randomIndex];
}

// This syntax with a trailing comma is needed is .tsx files
const getRandomElementT = <T,>(args: T[]): T => {
    const randomIndex = Math.floor(Math.random() * args.length);
    return args[randomIndex];
}

// Generics with multiple types

function merge<T, U>(obj1 : T, obj2: U): T & U{
    return {
        ...obj1,
        ...obj2
    }
}

const comboObject = merge({name: 'Matt'}, {pets:['Flynn']});

// Adding Type constraints  generics

function mergeNumber2<T extends object, U extends object>(obj1: T, obj2: U) : T & U {
    return {
        ...obj1,
        ...obj2
    }
}
// works
mergeNumber2({name: 'test'}, {married: true})

// doesn't
// mergeNumber2({name: 'test2'}, 5)

interface Length {
    length: number
}

// sense the interface follows the rules of what's being return aka length is a number, TS is happy
function getLength<T extends Length>(ele: T): number {
    return ele.length * 2;
}

getLength("test")