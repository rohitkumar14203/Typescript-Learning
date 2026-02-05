// regular function
function add(a: number, b: number): number {
  return a + b;
}

console.log(add(2, 3)); // Output: 5

// arrow function
const multiply = (x: number, y: number): number => {
  return x * y;
};

console.log(multiply(4, 5)); // Output: 20

// function with optional parameter
// The 'greeting' parameter is optional, denoted by the '?' symbol
//  greet(name: string, greeting?: string): string -> string is the return type of the function, indicating that it returns a string.
function greet(name: string, greeting?: string): string {
  if (greeting) {
    return `${greeting}, ${name}!`;
  } else {
    return `Hello, ${name}!`;
  }
}

console.log(greet("Alice")); // Output: Hello, Alice!
console.log(greet("Bob", "Hi")); // Output: Hi, Bob!


//! Return type annotations 
// The ': number' after the parameter list indicates that the function returns a number.         
// function with return type annotation

function square(n: number): number {
  return n * n;
}

console.log(square(5)); // Output: 25

// arrow function with return type annotation
const squareArrow = (n: number): number => {
  return n * n;
}
console.log(squareArrow(6)); // Output: 36