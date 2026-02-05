console.log("Array Types in TypeScript");

// [] notation(bracket notation)
let numbers: number[] = [1, 2, 3, 4, 5];
let strings: string[] = ["a", "b", "c"];
let booleans: boolean[] = [true, false, true];


// Generic Array<Type> notation
// its old style but still valid
let moreNumbers: Array<number> = [6, 7, 8, 9, 10];
let moreStrings: Array<string> = ["d", "e", "f"];
let moreBooleans: Array<boolean> = [false, true, false];