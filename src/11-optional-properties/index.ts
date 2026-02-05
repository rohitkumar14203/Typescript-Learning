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
