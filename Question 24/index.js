"use strict";
let str1 = "hello";
let str2 = "world";
let num1 = 10;
let num2 = 20;
let arr = [1, 2, 3, 4, 5];
// Tests for equality and inequality with strings
console.log(`Is str1 equal to str2? I predict False.`);
console.log(str1 == str2);
console.log(`Is str1 not equal to str2? I predict True.`);
console.log(str1 != str2);
console.log(`Is str1 equal to 'hello'? I predict True.`);
console.log(str1 == "hello");
console.log(`Is str2 not equal to 'world'? I predict False.`);
console.log(str2 != "world");
// Tests using the lower case function
console.log(`Is str1 in lower case equal to 'hello'? I predict True.`);
console.log(str1.toLowerCase() == "hello");
console.log(`Is str2 in lower case equal to 'world'? I predict True.`);
console.log(str2.toLowerCase() == "world");
console.log(`Is str1 in lower case not equal to 'world'? I predict True.`);
console.log(str1.toLowerCase() != "world");
console.log(`Is str2 in lower case not equal to 'hello'? I predict True.`);
console.log(str2.toLowerCase() != "hello");
// Numerical tests
console.log(`Is num1 greater than num2? I predict False.`);
console.log(num1 > num2);
console.log(`Is num2 greater than num1? I predict True.`);
console.log(num2 > num1);
console.log(`Is num1 less than num2? I predict True.`);
console.log(num1 < num2);
console.log(`Is num2 less than num1? I predict False.`);
console.log(num2 < num1);
console.log(`Is num1 greater than or equal to 10? I predict True.`);
console.log(num1 >= 10);
console.log(`Is num2 greater than or equal to 10? I predict True.`);
console.log(num2 >= 10);
console.log(`Is num1 less than or equal to 20? I predict True.`);
console.log(num1 <= 20);
console.log(`Is num2 less than or equal to 20? I predict True.`);
console.log(num2 <= 20);
// Tests using "and" and "or" operators
console.log(`Is num1 greater than 5 and less than 15? I predict True.`);
console.log(num1 > 5 && num1 < 15);
console.log(`Is num2 greater than 30 or less than 15? I predict False.`);
console.log(num2 > 30 || num2 < 15);
// Test whether an item is in an array
console.log(`Is 3 in the array? I predict True.`);
console.log(arr.includes(3));
console.log(`Is 6 in the array? I predict False.`);
console.log(arr.includes(6));
// Test whether an item is not in an array
console.log(`Is 6 not in the array? I predict True.`);
console.log(!arr.includes(6));
console.log(`Is 3 not in the array? I predict False.`);
console.log(!arr.includes(3));
