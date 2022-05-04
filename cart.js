///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/


//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: 'pizza', 
        price: 9.99
    }, 
    {
        name: 'pasta', 
        price: 8.99
    }, 
    {
        name: 'salad', 
        price: 7.99
    }
]

//CODE HERE


const  sum = cart.reduce(function(accumulator, curValue) {

    return accumulator + curValue.price}, 0)

console.log(sum)
// const summedPrice = cart.reduce((totalPrice, currentFoodItem) => totalPrice + currentFoodItem.price, 0);
// console.log(summedPrice);




//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE
const calcFinalPrice = (cartTotal, couponValue, tax) => {
    let taxTotal = sum / tax;
    let taxedPrice = 
    let cartTotal = taxedPrice - 
    return (`Your final price after tax and coupons is ${finalPrice}`)
}

calcFinalPrice(sum, 6.00, .06);
console.log(calcFinalPrice);


//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE
My object is called newCustomer
The properties that I chose to give to the newCustomer object are name, age, allergies, card type, and veteran. 
I chose name because so that the server can call the customer by name, increasing potential tips:) 
The name data type will be a string, because the name will be a word. 
I chose age because it will let the server of this customer know if they need to bring out the adult, child, or senior menu. 
The age data type will be a  number, because ages are expressed in number form.  
I chose allergies so that the server knows the items to make sure is not included in the customers food. 
The allergies data type will either be a string because the, listed allergy will be a word, or unassigned(undefined) if the customer does not have allergies. 
I chose cardType because the restaurant does not accept Mastercard.
The cardType data type will be a string because it will be a word. 
I chose Veteran because it will let the server know if they should give a military discount or not. 
The Veteran data type will be a boolean because true will express that they are a veteran, and false will express that they are not. 
*/

/*
    Now, create a customer object following your own
    guidelines.
*/

const newCustomer = { 
    name: 'Jason',
    age: 18,
    allergies: 'none', 
    cardType: 'Visa',
    veteran: true
};

console.log(newCustomer);