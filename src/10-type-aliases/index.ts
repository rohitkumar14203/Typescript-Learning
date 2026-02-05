export {};
/*****************************************************************************************
 * 📘 TYPE ALIASES IN TYPESCRIPT
 *****************************************************************************************/

/*
Type Alias = Creating a custom name for any type.

👉 Helps:
- Improve readability
- Reuse types
- Make code scalable
- Avoid repeating complex types
*/

/*****************************************************************************************
 * ✅ BASIC TYPE ALIAS
 *****************************************************************************************/

/*
Here we create a custom type called "Person"
*/

type Person = {
  name: string;
  age: number;
};

/*
Now "Person" behaves like a normal type.
*/

const person: Person = {
  name: "Alice",
  age: 30,
};

/*
Using type alias in function parameters
*/

function greet1(person: Person): string {
  return `Hello, ${person.name}! You are ${person.age} years old.`;
}

console.log(greet1(person));

/*****************************************************************************************
 * ✅ TYPE ALIAS WITH UNION TYPES
 *****************************************************************************************/

/*
Union means: Value can be one of multiple types
*/

type ID = string | number;

/*
Now ID can accept string OR number
*/

function printID(id: ID): void {
  console.log(`ID: ${id}`);
}

printID("abc123");
printID(456);

/*****************************************************************************************
 * ✅ TYPE ALIAS WITH INTERSECTION TYPES
 *****************************************************************************************/

/*
Intersection means: Combine multiple types into one
*/

type Employee = Person & {
  employeeId: number;
};

/*
Employee now contains:
- name
- age
- employeeId
*/

const employee: Employee = {
  name: "Bob",
  age: 25,
  employeeId: 101,
};

function getEmployeeInfo(emp: Employee): string {
  return `Employee Name: ${emp.name}, Age: ${emp.age}, Employee ID: ${emp.employeeId}`;
}

console.log(getEmployeeInfo(employee));

/*****************************************************************************************
 * ✅ TYPE ALIAS FOR FUNCTIONS
 *****************************************************************************************/

/*
Type aliases can describe function shapes
*/

type AddFunction = (a: number, b: number) => number;

const add1: AddFunction = (a, b) => a + b;

console.log(add1(2, 3));

/*****************************************************************************************
 * ✅ TYPE ALIAS FOR ARRAYS
 *****************************************************************************************/

/*
Alias can be used for arrays
*/

type NumberArray = number[];

const numbers1: NumberArray = [1, 2, 3, 4];

/*****************************************************************************************
 * ✅ TYPE ALIAS WITH OPTIONAL PROPERTIES
 *****************************************************************************************/

/*
"?" means property is optional
*/

type User = {
  username: string;
  email?: string;
};

const user1: User = {
  username: "rohit",
};

const user2: User = {
  username: "ghost",
  email: "ghost@mail.com",
};

/*****************************************************************************************
 * ✅ TYPE ALIAS WITH READONLY PROPERTIES
 *****************************************************************************************/

/*
readonly prevents modification after assignment
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

/*****************************************************************************************
 * ✅ TYPE ALIAS VS INTERFACE (IMPORTANT INTERVIEW TOPIC)
 *****************************************************************************************/

/*
TYPE ALIAS
✔ Works with primitives
✔ Supports unions & intersections
✔ Can describe functions & tuples

INTERFACE
✔ Mainly used for object shapes
✔ Supports declaration merging
✔ Preferred for large scalable apps

👉 Modern practice:
Use "type" for flexibility
Use "interface" for object contracts

👉 Both "type" and "interface" can be used to define OBJECT SHAPES.
There is NO restriction that alias cannot define objects.


*/

/*****************************************************************************************
 * ✅ TYPE ALIAS WITH TUPLES
 *****************************************************************************************/

/*
Tuple = Fixed length + fixed type order
*/

type Coordinates = [number, number];

const location1: Coordinates = [28.61, 77.23];

/*****************************************************************************************
 * ✅ NESTED TYPE ALIAS
 *****************************************************************************************/

type Address = {
  city: string;
  country: string;
};

type Customer = {
  name: string;
  address: Address;
};

const customer: Customer = {
  name: "Rahul",
  address: {
    city: "Delhi",
    country: "India",
  },
};

/*****************************************************************************************
 * 🔥 REAL WORLD BEST PRACTICES
 *****************************************************************************************/

/*
1. Use PascalCase for type names
   ✔ Person
   ✔ EmployeeDetails

2. Keep types reusable and modular

3. Prefer separate files for large projects
   types/user.types.ts
   types/order.types.ts

4. Avoid overly complex nested types
   Break into smaller reusable types
*/

/*****************************************************************************************
 * ⭐ SUMMARY
 *****************************************************************************************/

/*
Type Alias allows:
✔ Custom type naming
✔ Reusable structures
✔ Union & Intersection types
✔ Function type definitions
✔ Tuple definitions
✔ Cleaner and maintainable code
*/
