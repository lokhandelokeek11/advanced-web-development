// use let not allowed
const username = {
    firstName: "Lokeek",
    isLoggedIn: true,
};
// It will give error for assignment problem the difference between const and let
//const myFirstName = "Lokhande";
// myFirstName = "Comp Developer";

username.firstName = "Prem";
username.lastName = "Lokhande";

console.log(username.firstName);
console.log(username.lastName)


console.log(username)
console.log(typeof obj)