// Q1. Return the sum of two numbers

// Create a function that takes two arguments as a fuunction and return their sum

// addition (3, 2) -> 5
// addition (-3, -6) -> -9
// addition (7, 3) -> 10

// remember to use return if you want to use the value

function addition(num1, num2) {
    return num1 + num2;
}

console.log(addition(3, 2));
console.log(addition(-3, -6));
console.log(addition(7, 3));


// Q2. Convert Hours into Seconds

// Create a function that converts hours into seconds

//hoursIntoSeconds(2) -> 7200
//hoursIntoSeconds(10) -> 36000
//hoursIntoSeconds(24) -> 864000

function hoursIntoSeconds(hour) {
   return seconds = hour * 60 * 60;
   
}

console.log(hoursIntoSeconds(2));
console.log(hoursIntoSeconds(10));
console.log(hoursIntoSeconds(24));

// Q3. Calculate the Perimeter of a Rectangle

// Create a function that takes length and width of a rectangle and return it's perimeter

//calcPerimeter(6, 7) -> 26
//calcPerimeter(20, 10) -> 60
//calcPerimeter(2, 9) -> 22

// math code is exactly the same as math in real life

// Use P E M D A S *****************************************************

function calcPerimeter(length, width) {
    return 2 * (length + width);
}

console.log(calcPerimeter(6, 7));
console.log(calcPerimeter(20, 10));
console.log(calcPerimeter(2, 9));

// Q4. Calculate the Area of a Triangle

// Write a function that takes the base and height of a triangle and retuen it area

//calcTriangleArea(3, 2) -> 3
//calcTriangleArea(10, 10) -> 50
//calcTriangleArea(20, 20) -> 200

// - take in two aruguments, base & height
// - Forumla to calculate area is 0.5 * base * height
// - return the answer and console.log it

function calcTriangleArea(base, height) {
    return 0.5 * (base * height);
}

console.log(calcTriangleArea(3, 2));
console.log(calcTriangleArea(10, 10));
console.log(calcTriangleArea(20, 20));

// Q5. Extend a String

// Write a function that accepts a string and add "Frontend" onto the end of it

//appendFrontend('Apple') -> "AppleFrontend"
//appendFrontend('Banana') -> "BananaFrontend"
//appendFrontend('Orange') -> "OrangeFrontend"

// - Accept a String
// - Adding strings is similar to adding numbers
// - Dont forget to return your result

function appendFrontend(string) {
    return string + 'Frontend';
}

console.log(appendFrontend('Apple'));
console.log(appendFrontend('Banana'));
console.log(appendFrontend('Orange'));

// Q6. Greater then 100?

// Give two numbers, return true if the sum of both numbers is greater than 100.
// Otherwise , return false.

//sumGreaterThan100(20, 10) -> false
//sumGreaterThan100(50, 60) -> true
//sumGreaterThan100(100, -50) -> false

function sumGreaterThan100(num1, num2) {
    return num1 + num2 >= 100;
}

console.log(sumGreaterThan100(20, 10));
console.log(sumGreaterThan100(50, 60));
console.log(sumGreaterThan100(100, -50));


// Q7. Less than or Equal to Zero

// Write a fucntion that accepts a number and returns true if it is less then
// or Equal to Zero, otherwise return false.

// lessThanOrEqualToZero(3) -> false
// lessThanOrEqualToZero(0) -> true
// lessThanOrEqualToZero(-2) -> true

// - Tip: Use the less than or Equal to Operator

function lessThanOrEqualToZero(num) {
    return num <= 0;
}

console.log(lessThanOrEqualToZero(3));
console.log(lessThanOrEqualToZero(0));
console.log(lessThanOrEqualToZero(-2));

// Q8. Opposite Boolean

// Given a boolean (true or false), return the opposite boolean.

// oppositeBoolean(true) -> false
// oppositeBoolean(false) -> true

function oppositeBoolean(bool) {
    // adding a ! in front of your value is going to give you the opposite of the val.
return !bool;
    
}
console.log(oppositeBoolean(true))
console.log(oppositeBoolean(false))

// Q9. Is not the number 0

// Given ANY element, return true if it is NOT the number 0.

//isNotZero(5) -> true
//isNotZero(0) -> false
//isNotZero(null) -> true

function isNotZero(num) {
    // adding a !== means not equal to values and types
   return num !== 0;
}

console.log(isNotZero(5));
console.log(isNotZero(0));
console.log(isNotZero(null));

// Q10. Calculate the remainder

// Given two numbers, return their remainder when divided by each other

// calcRemainder(4, 2) -> 0
// calcRemainder(7, 8) -> 7
// calcRemainder(9, 8) -> 1

function calcRemainder(num1, num2) {
    // % calculates the remainder for you
    return num1 % num2;
}

console.log(calcRemainder(4, 2));
console.log(calcRemainder(7, 8));
console.log(calcRemainder(9, 8));

// Q11. is the number odd?

// Given two numbers, return true if the number is odd

// isOdd(1) -> true
// isOdd(2) -> false
// isOdd(3) -> true

function isOdd(num) {
    return num % 2 !== 0
}

console.log(isOdd(1));
console.log(isOdd(2));
console.log(isOdd(3));

// Q12. If a number is even. return 1 otherwise return -1

// Creat a function that takes a number argument and returns 1 if the number is even.
// If the number is odd return -1

// booleanInteger(1) -> -1
// booleanInteger(2) -> 1
// booleanInteger(5) -> -1

function booleanInteger(num) {

    // use Ternary Operator >>>>  var % 2 === 0 ? 1 : -1;
    return num % 2 === 0 ? 1 : -1;
}

console.log(booleanInteger(1));
console.log(booleanInteger(2));
console.log(booleanInteger(5));

// EX.
// 5 ? true : false
// - true
// false ? true : false
// - false
// '' ? true : false
// - false
// 0 ? true : false
// - false
// 10 ? true : false
// - true

/*
if you see any of these then it is automatically falsy

if (false) {
  // Not reachable


if (null) {
  // Not reachable
}

if (undefined) {
  // Not reachable
}

if (NaN) {
  // Not reachable
}

if ("") {
  // Not reachable
}
*/

// Q13. Check if a user is logged in AND subscribed

// Create a function that takes in two strings. if the string is equal to
// 'LOGGED_IN' AND the second string is equal to 'SUBSCRIBED' return true,
// otherwise return false.

// isLoggedInAndSubscribed('LOGGED_IN', 'SUBSCRIBED') -> true
// isLoggedInAndSubscribed('LOGGED_IN', 'UNSUBSCRIBED') -> false
// isLoggedInAndSubscribed('LOGGED_OUT', 'SUBSCRIBED') -> false

//               && "AND" symbol     || "OR"  symbol

function isLoggedInAndSubscribed(logged_in, subscribed) {
  //  if (logged_in === 'LOGGED_IN' && subscribed === 'SUBSCRIBED') {
   //     return true
  //  }
  //  return false;

    // OR

    return (logged_in === 'LOGGED_IN') && (subscribed === 'SUBSCRIBED')

}

console.log(isLoggedInAndSubscribed('LOGGED_IN', 'SUBSCRIBED'));
console.log(isLoggedInAndSubscribed('LOGGED_IN', 'UNSUBSCRIBED'));
console.log(isLoggedInAndSubscribed('LOGGED_OUT', 'SUBSCRIBED'));

// Q14. Check if a user is logged in OR subscribed

// Create a function that takes in two strings. if the string is equal to
// 'LOGGED_IN' AND the second string is equal to 'SUBSCRIBED' return true,
// otherwise return false.

// isLoggedInAndSubscribed('LOGGED_IN', 'SUBSCRIBED') -> true
// isLoggedInAndSubscribed('LOGGED_IN', 'UNSUBSCRIBED') -> false
// isLoggedInAndSubscribed('LOGGED_OUT', 'SUBSCRIBED') -> false

function isLoggedInAndSubscribed(logged_in, subscribed) {
    //  if (logged_in === 'LOGGED_IN' || subscribed === 'SUBSCRIBED') {
     //     return true
    //  }
    //  return false;
  
      // OR
  
      return (logged_in === 'LOGGED_IN') || (subscribed === 'SUBSCRIBED')
  
  }
  
  console.log(isLoggedInAndSubscribed('LOGGED_IN', 'SUBSCRIBED'));
  console.log(isLoggedInAndSubscribed('LOGGED_IN', 'UNSUBSCRIBED'));
  console.log(isLoggedInAndSubscribed('LOGGED_OUT', 'SUBSCRIBED'));
  console.log(isLoggedInAndSubscribed('LOGGED_OUT', 'UNSUBSCRIBED'));

  // LAST ONE IS NEITHER LOGGIN IN OUT SUBSCRIBED SO IT RETURNS FALSE!!