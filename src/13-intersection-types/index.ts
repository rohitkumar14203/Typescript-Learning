export {};

/*****************************************************************************************
 * ✅ TYPE ALIAS vs INTERFACE (Correct Understanding)
 *****************************************************************************************/

/*
👉 Both "type" and "interface" can be used to define OBJECT SHAPES.
There is NO restriction that alias cannot define objects.
*/

/*****************************************************************************************
 * ✅ TYPE ALIAS WITH OBJECT
 *****************************************************************************************/

type Person = {
  name: string;
  age: number;
};

const person: Person = {
  name: "Rohit",
  age: 22,
};

/*****************************************************************************************
 * ✅ INTERFACE WITH OBJECT
 *****************************************************************************************/

interface User {
  username: string;
  email: string;
}

const user: User = {
  username: "ghost",
  email: "ghost@mail.com",
};

/*****************************************************************************************
 * 🔥 REAL DIFFERENCE BETWEEN TYPE & INTERFACE
 *****************************************************************************************/

/*
=======================
TYPE ALIAS
=======================

✔ Can be used for:
   - Objects
   - Primitives
   - Union types
   - Intersection types
   - Tuples
   - Functions
   - Complex combinations

✔ More flexible
✔ Cannot be re-opened or merged



=======================
INTERFACE
=======================

✔ Mainly designed for object structures
✔ Supports declaration merging
✔ Supports class implementation
✔ Better for large scale contracts
✔ Can be extended easily
*/

/*****************************************************************************************
 * ✅ DECLARATION MERGING (Interface Special Feature)
 *****************************************************************************************/

interface Animal {
  name: string;
}

interface Animal {
  age: number;
}

/*
Both interfaces merge automatically
*/

const dog: Animal = {
  name: "Tommy",
  age: 5,
};

/*****************************************************************************************
 * ❌ TYPE ALIAS DOES NOT SUPPORT MERGING
 *****************************************************************************************/

/*
This will throw error
*/

// type Animal = {
//   name: string;
// };

// type Animal = {
//   age: number;
// };

/*****************************************************************************************
 * ✅ WHEN TO USE WHAT (Senior Dev Guideline)
 *****************************************************************************************/

/*
👉 Use TYPE when:

✔ Working with unions
✔ Working with intersections
✔ Creating utility types
✔ Creating function signatures
✔ Creating tuples
✔ Need flexibility



👉 Use INTERFACE when:

✔ Designing object contracts
✔ Writing OOP style code
✔ Designing public APIs
✔ Expect future extension
✔ Using classes
*/

/*****************************************************************************************
 * ⭐ MODERN INDUSTRY PRACTICE (2025+)
 *****************************************************************************************/
/*

Most modern projects actually use TYPE more frequently
because it is more powerful.

But INTERFACE is still preferred for:

✔ SDK design
✔ Library public contracts
✔ Large team architecture
*/
