// checking if a number is greater than another number

let num1 = 10;
let num2 = 20;
console.log("I am regular code")

if (num1 > num2){
    console.log(" num1 is grater than num2")
}
else{
    console.log("num2 is greater than num1")
}

console.log("I am regular code")

//checking if a string is equal to another string
let username = "chai"
let anotherUsername = "coffee"

if(username == anotherUsername){
    console.log("Pick another username");
}
else{
    console.log("You can choose this username")
}

//checking if a variable is a number or not 
//let score = 44;
let score = '44'; //string datatype
if(typeof score == 'number'){
    console.log("yes,this is a number")
}
else{
    console.log("No that is not a number")
}

//checking if a boolean value is true of false

let isTeaReady = false;

if(isTeaReady){
    console.log("Tea is ready");
} else{
    console.log("Tea is not ready")
}