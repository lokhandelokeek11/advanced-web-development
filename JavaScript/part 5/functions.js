/*1. Write a function named `makeTea' that takes one
parameter, `type0fTea , and returns a string like
`"Making green tea" when called with `"green tea"'.
Store the result in a variable named `teaOrder'.
*/
function makeTea(typeofTea){
    return `Making ${typeofTea}`;
    console.log(test);
}
let teaOrder = makeTea("lemonTea")
//console.log(teaOrder)

/* 
2. Create a function named `orderTea' that takes one
parameter, `teaType'. Inside this function, create
another function named `confirmOrder' that returns a
message like '"Order confirmed for chai"'.
Call `confirmOrder' from within `orderTea' and return the
result.
*/
function orderTea(teaType){
    function confirmOrder(){
        return `Order Confirmed for chai`;
    }
    return confirmOrder()
}
let orderConfirmation = orderTea("Chai")
//console.log(orderConfirmation)

/* 
3. Write an arrow function named `calculateTotal' that
takes two parameters: `price' and `quantity'. The
function should return the total cost by multiplying the
`price' and `quantity'.
Store the result in a variable named `totalCost'.
*/

//normal function 
//function greet () {}

//arrow function
//const greet = () => {}

const calculateTotal = (price,quantity) => {
    return price * quantity
}
let totalCost = calculateTotal(499 * 100)
//console.log(calculateTotal)

/* 
4. Write a function named `processTeaOrder' that takes
another function, `makeTea', as a parameter and calls it
with the argument `"earl grey"'.
Return the result of calling `makeTea'.
*/
function makeTea(typeofTea){
    return `maketea : ${typeofTea}`;
}

function processTeaOrder(teaFunction){
    return teaFunction('earl grey')
}
let order = processTeaOrder(makeTea)
console.log(order);