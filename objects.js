const a = "12";
const b = 4;
const c = true;

const admin = {
  firstName: "first",
  lastName: "last",
  role: "admin",
};

const user = {
  name: "",
  firstName: "first",
  lastName: "last",
  username: "Pavan",
  isLoggedIn: true,
  9: 5,
  let: "hey",
  "new-key": "new value",
  setName: function () {
    this.name = this.firstName + this.lastName;
  },
};

user.setName();
console.log(user);
user.getName = function () {
  console.log(user.name);
};
user.getName()