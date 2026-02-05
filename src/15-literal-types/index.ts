export {};

/*****************************************************************************************
 * 📘 LITERAL TYPES IN TYPESCRIPT
 *****************************************************************************************/

/*
Literal Types = Restrict a variable to EXACT specific values.

👉 Instead of allowing general types (string, number, boolean),
   literal types allow ONLY fixed values.

👉 Improves type safety
👉 Very common in production code
*/

/*****************************************************************************************
 * ✅ STRING LITERAL TYPES
 *****************************************************************************************/

/*
Only specific string values allowed
*/

type Direction = "left" | "right" | "up" | "down";

let move: Direction;

move = "left"; // ✔ Allowed
move = "up"; // ✔ Allowed
// move = "forward"; ❌ Error

/*****************************************************************************************
 * ✅ NUMBER LITERAL TYPES
 *****************************************************************************************/

/*
Restrict numbers to specific values
*/

type DiceValue = 1 | 2 | 3 | 4 | 5 | 6;

let dice: DiceValue;

dice = 4; // ✔

// dice = 7; ❌

/*****************************************************************************************
 * ✅ BOOLEAN LITERAL TYPES
 *****************************************************************************************/

type Result = true;

let success: Result = true;

// success = false; ❌

/*****************************************************************************************
 * ✅ LITERAL TYPES WITH FUNCTIONS
 *****************************************************************************************/

function setTheme(theme: "dark" | "light") {
  console.log("Theme set to:", theme);
}

setTheme("dark"); // ✔
// setTheme("blue"); ❌

/*****************************************************************************************
 * ✅ LITERAL TYPES WITH OBJECT PROPERTIES
 *****************************************************************************************/

type UserRole = {
  role: "admin" | "user" | "guest";
};

const user: UserRole = {
  role: "admin",
};

/*****************************************************************************************
 * ✅ COMBINING LITERAL TYPES WITH UNION TYPES
 *****************************************************************************************/

/*
Literal types are usually used inside unions
*/

type PaymentStatus = "pending" | "success" | "failed";

let status: PaymentStatus = "pending";

/*****************************************************************************************
 * ✅ LITERAL TYPES VS ENUMS
 *****************************************************************************************/

/*
Literal unions are often used instead of enums
*/

type OrderStatus = "placed" | "shipped" | "delivered";

/*
Enums alternative:
*/

enum OrderStatusEnum {
  Placed = "placed",
  Shipped = "shipped",
  Delivered = "delivered",
}

/*****************************************************************************************
 * ✅ CONST ASSERTION (IMPORTANT ⭐)
 *****************************************************************************************/

/*
Without "as const"
*/

let theme = "dark"; // inferred as string (not literal)

/*
With "as const"
*/

let fixedTheme = "dark" as const;
// inferred as literal "dark"

/*****************************************************************************************
 * ✅ LITERAL TYPES WITH ARRAYS
 *****************************************************************************************/

const roles = ["admin", "user", "guest"] as const;

/*
Creates readonly literal array
*/

// typeof roles
//Means:👉 Get the TYPE of the variable roles
// type RolesType = readonly ["admin", "user", "guest"];
// What is [number] ?
// (typeof roles)[number]
// Means:👉 "Give me the type of any element inside this array"
type Role = (typeof roles)[number];

let newRole: Role = "admin";

/*

Visual Understanding

roles = ["admin", "user", "guest"]

typeof roles
↓
readonly ["admin", "user", "guest"]

(typeof roles)[number]
↓
"admin" | "user" | "guest"


*/

/*****************************************************************************************
 * 🔥 REAL WORLD USE CASES
 *****************************************************************************************/

/*
✔ API status values
✔ Role-based systems
✔ UI theme switching
✔ Payment states
✔ Configuration options
✔ Redux action types
*/

/*****************************************************************************************
 * ⭐ WHY LITERAL TYPES ARE POWERFUL
 *****************************************************************************************/

/*
Without literal types:
*/

function updateStatus(status: string) {}

/*
Problem:
Any string can be passed → unsafe
*/

/*
With literal types:
*/

function updateStatusSafe(status: "open" | "closed") {}

/*
Only valid values allowed → safer code
*/

/*****************************************************************************************
 * ⭐ SENIOR DEV BEST PRACTICES
 *****************************************************************************************/

/*
👉 Use literal unions instead of enums in many cases
👉 Combine with discriminated unions
👉 Use "as const" for static configuration
👉 Helps catch bugs at compile time
*/

/*****************************************************************************************
 * ⭐ SUMMARY
 *****************************************************************************************/

/*
Literal Types:
✔ Restrict values to exact constants
✔ Used with unions
✔ Improve code safety
✔ Common replacement for enums
✔ Work great with discriminated unio
*/
