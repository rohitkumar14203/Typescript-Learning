export {};
/*****************************************************************************************
 * ✅ TYPE ALIAS WITH READONLY PROPERTIES
 *****************************************************************************************/

/*
readonly prevents modification after assignment
*/

/*****************************************************************************************
 * 📘 READONLY IN TYPESCRIPT
 *****************************************************************************************/

/*
readonly = Prevents modification after value is assigned.

👉 Makes property IMMUTABLE
👉 Helps avoid accidental changes
👉 Improves code safety
👉 Useful in production and large projects
*/

type Product = {
  readonly id: number;
  name: string;
};

const product: Product = {
  id: 1,
  name: "Laptop",
};

// ❌ product.id = 2  → Error

/*
Readonly array prevents:
- push
- pop
- splice
- direct modification
*/

const numbers: readonly number[] = [1, 2, 3, 4];

// numbers.push(5);        // ❌ Error
// numbers[0] = 10;        // ❌ Error

console.log(numbers[0]); // ✔ Allowed

const values: ReadonlyArray<string> = ["A", "B", "C"];

// values.push("D");       // ❌ Error

/*****************************************************************************************
 * ✅ READONLY WITH INTERFACES
 *****************************************************************************************/

interface Car {
  readonly brand: string;
  model: string;
}

const car: Car = {
  brand: "Toyota",
  model: "Fortuner",
};

// car.brand = "BMW";      // ❌ Error

/*****************************************************************************************
 * ✅ READONLY DOES NOT MAKE OBJECT FULLY IMMUTABLE
 *****************************************************************************************/

/*
Important Concept ⭐

readonly only prevents reassignment of property reference.
It DOES NOT freeze nested object values.
*/
