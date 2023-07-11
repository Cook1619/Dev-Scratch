function getRandomElement<T>(args: T[]): T {
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