export {};

/*****************************************************************************************
 * 📘 UNION TYPES IN TYPESCRIPT
 *****************************************************************************************/

/*
Union Type = A value that can be one of multiple types.

👉 Uses "|" (pipe) symbol
👉 Improves flexibility
👉 Very common in real-world TypeScript
*/

/*****************************************************************************************
 * ✅ BASIC UNION TYPE
 *****************************************************************************************/

let id: string | number;

id = "ABC123"; // ✔ Allowed
id = 101; // ✔ Allowed
// id = true;    // ❌ Error

/*****************************************************************************************
 * ✅ UNION TYPE IN FUNCTIONS
 *****************************************************************************************/

function printId(value: string | number) {
  console.log("ID:", value);
}

printId("user123");
printId(456);

/*****************************************************************************************
 * ✅ TYPE NARROWING (VERY IMPORTANT ⭐)
 *****************************************************************************************/

/*
When using union types, TypeScript needs to know
which type is currently being used.
*/

function processValue(value: string | number) {
  if (typeof value === "string") {
    console.log(value.toUpperCase()); // string methods allowed
  } else {
    console.log(value.toFixed(2)); // number methods allowed
  }
}

/*****************************************************************************************
 * ✅ UNION WITH TYPE ALIAS
 *****************************************************************************************/

type ID = string | number;

const userId: ID = "XYZ";
const orderId: ID = 1001;

/*****************************************************************************************
 * ✅ UNION WITH OBJECT TYPES
 *****************************************************************************************/

type Admin = {
  role: "admin";
  accessLevel: number;
};

type Customer = {
  role: "customer";
  purchaseLimit: number;
};

type User = Admin | Customer;

function getUserInfo(user: User) {
  if (user.role === "admin") {
    console.log("Access Level:", user.accessLevel);
  } else {
    console.log("Purchase Limit:", user.purchaseLimit);
  }
}

/*****************************************************************************************
 * ✅ UNION WITH ARRAYS
 *****************************************************************************************/

/*
Array elements can be multiple types
*/

let values: (string | number)[] = [1, "two", 3, "four", "six", 5];

/*****************************************************************************************
 * ❗ COMMON BEGINNER MISTAKE
 *****************************************************************************************/

/*
Wrong:
string[] | number[]

Means:
Either entire array is string[] OR entire array is number[]

Correct:
(string | number)[]
Means:
Each element can be string OR number
*/

// ✔ Correct
let mixedArray: (string | number)[] = [1, "two", 3];

// ✔ Either all strings or all numbers
let separateArray: string[] | number[] = ["a", "b"];

/*****************************************************************************************
 * ✅ UNION WITH LITERAL TYPES
 *****************************************************************************************/

/*
Restricts value to specific allowed values
*/

type Status = "pending" | "success" | "failed";

let paymentStatus: Status;

paymentStatus = "pending"; // ✔
// paymentStatus = "done";   // ❌ Error

/*****************************************************************************************
 * ✅ UNION WITH NULL / UNDEFINED
 *****************************************************************************************/

let username: string | null = null;

username = "rohit";

/*****************************************************************************************
 * ✅ UNION WITH FUNCTIONS RETURN TYPES
 *****************************************************************************************/

function formatValue(value: number): string | number {
  if (value > 100) {
    return "Large Number";
  }
  return value;
}

/*****************************************************************************************
 * 🔥 REAL WORLD USE CASES
 *****************************************************************************************/

/*
✔ API response handling
✔ Optional values
✔ Status flags
✔ Dynamic input values
✔ Role-based user types
✔ Payment states
*/

/*****************************************************************************************
 * ⭐ UNION vs INTERSECTION
 *****************************************************************************************/

/*
UNION ( | )
👉 Either one type OR another

Example:
string | number


INTERSECTION ( & )
👉 Must contain ALL types combined

Example:
Admin & User
*/

/*****************************************************************************************
 * ⭐ SENIOR DEV BEST PRACTICES
 *****************************************************************************************/

/*
👉 Always use TYPE NARROWING
   - typeof
   - in operator
   - equality checks

👉 Use literal unions for enums replacement

👉 Keep unions small and readable
*/

/*****************************************************************************************
 * ⭐ SUMMARY
 *****************************************************************************************/

/*
Union Types:
✔ Allow multiple possible types
✔ Use "|" operator
✔ Require type narrowing
✔ Used heavily in real applications
✔ Very important TypeScript feature

*/
