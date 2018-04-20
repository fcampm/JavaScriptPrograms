/*
 * Author: Fabián Camp Mussa.
 * Github: https://github.com/fcampm
 * Created on April 19, 2018.
 * */

// Print in screen String data type.
console.log("Hello World");
console.log("JavaScript");

// Print in screen numbers and floating numbers data type.
console.log(33.7);
console.log(10);

// Print in screen boolean values and null value.
console.log(true);
console.log(null);

// Print the length of an String using a property explain in Note 4.
console.log("Teaching the world how to learn JavaScript".length);

// Print the message between "" to uppercase explain in Note 5.
console.log("Hello there, general Kenobi".toUpperCase());

// Print the message between "" without the whitespaces of the message. The explanation of this command its in Note 6.
console.log("      I don't want this horribles whitespaces       ".trim());

// Print the next number rounded to the upward nearest.
console.log(Math.ceil(1.4));

// Print if the argument given it's an integer.
console.log(Number.isInteger(2017));

/* Notes:
* 1. If you want to print in the screen a message, number, a boolean value; you use console.log command.
* 2. JavaScript language counts with a several different data types. This data types are: Strings, numbers (including
* decimals), booleans and the null type.
* 3. As same as almost all languages, JavaScript counts with the addition, subtraction, multiplication and division.
* 4. The String data type has a property that counts the length of the String between the "" including the space between
* the words.
* 5. String data type has another property that changes to uppercase the String between "".
* 6. When you have a message like this: "    I want to break free    " and you want that the print of the message be like
* this I want to break free and not like:     I want to break free   . You need to use the String property call trim.
* trim() command deletes the whitespaces at the begining and the end of the String.
* 7. Command ceil its used to round a number upwards to the nearest integer then it returns the result. This command is
* available in the Math library, check out documentation in the internet for seing all the commands.
* 8. Command isInteger returns false or true depending on the argument given, true if the argument it's an integer returns
* true otherwise returns false. You can find this command in the Number library.
*/