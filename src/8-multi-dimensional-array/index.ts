// Nested Array or Multi-dimensional Array

// A multi-dimensional array is an array that contains other arrays as its elements.
// Example of a 2D array (array of arrays)
let matrix: number[][] = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

let tripleDimensionalArray: number[][][] = [
  [
    [1, 2],
    [3, 4],
  ],
  [
    [5, 6],
    [7, 8],
  ],
];

// Accessing elements in a multi-dimensional array
console.log(matrix[0]?.[0]); // Output: 1
console.log(matrix[1]?.[2]); // Output: 6

// console.log(matrix[0]?.[0]); // Output: 1
// console.log(matrix[1]?.[2]); // Output: 6

// ✅ Solution 1 — Use Optional Chaining (Safest)
// console.log(matrix[0]?.[0]);
// console.log(matrix[1]?.[2]);

// ✔ Prevents runtime crash
// ✔ Recommended safe approach

// If element doesn’t exist → returns undefined
