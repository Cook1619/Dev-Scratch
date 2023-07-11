function numberIdentity(arg: number): number{
    return arg;
}

numberIdentity(2);

function stringIdentity(arg: string): string{
    return 'test';
}

stringIdentity('test');

// lets makes a generic
// whatever the input is that will be the return type
function identity<T>(arg: T): T {
    return arg;
}
// Will now work with all types
identity('test');
identity(true);
identity(4);