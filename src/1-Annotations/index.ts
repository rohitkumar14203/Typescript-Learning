// tsc ? 
// tsc stands for TypeScript Compiler. It is a command-line tool that compiles TypeScript code into JavaScript code.


//string
// : string is annotation indicating that the variable myString is of type string
let myString: string = "Hello, TypeScript!";

console.log(myString);



//number
// : number indicates that myNumber is of type number
let myNumber: number = 42;
console.log("Number:", myNumber);

//boolean
// : boolean indicates that isActive is of type boolean
let isActive: boolean = true;
console.log("isActive:", isActive);

//array
// : number[] indicates that myArray is an array of numbers
let myArray: number[] = [1, 2, 3, 4, 5];
console.log("Array:", myArray);

//tuple
// : [string, number, string, number] indicates that myTuple is a tuple with a string and a number
let myTuple: [string, number, string, number] = ["Age", 30, "name", 10];
console.log("Tuple:", myTuple);
console.log("Running...");
// what is tuple?
// A tuple is a special type in TypeScript that allows you to store a fixed number of elements with different types.
// In the example above, myTuple can hold a string as its first element and a number as its second element.
// This is useful when you want to group related values of different types together.
