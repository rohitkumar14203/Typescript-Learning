

// Void : it use to represent the absence of any type.
// It is mostly used as the return type of functions that do not return a value.

// Example of a void function:
// This function takes a string message as a parameter 
// and logs it to the console without returning any value.
function logMessage(message: string): void {
    console.log(message);
}

// The function logMessage takes a string parameter and does not return any value,
//  hence its return type is void.
logMessage("void function example");


// ! Note: In TypeScript, a function with a void return type can still return undefined explicitly,
// ! but it cannot return any other type of value.
// so should avoid using void 