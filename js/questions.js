const questions = [
  {
    numb:1,
    question: "What does the 'DOM' stand for in JavaScript?",
    options: [
      "Document Object Model",
      "Data Object Model",
      "Dynamic Object Model",
      "Document Oriented Model",
    ],
    correctAnswer: "Document Object Model",
  },
  {
    numb:2,
    question: "Which keyword is used to declare variables in JavaScript?",
    options: ["dim", "var", "let", "const"],
    correctAnswer: "var",
  },
  {
    numb:3,
    question: "What will the following code output: console.log(typeof []);",
    options: ["'array'", "'object'", "'array'", "'undefined'"],
    correctAnswer: "'object'",
  },
  {
    numb: 4,
    question:
      "Which function is used to parse a string to an integer in JavaScript?",
    options: ["parseInt()", "parseInteger()", "toInt()", "stringToInt()"],
    correctAnswer: "parseInt()",
  },
  {
    numb:5,

    question: "What will the following code output: console.log(1 + '2');",
    options: ["'12'", "3", "NaN", "Error"],
    correctAnswer: "'12'",
  },
  {
    numb:6,

    question:
      "Which operator is used to compare both value and type in JavaScript?",
    options: ["==", "===", "=", "!="],
    correctAnswer: "===",
  },
  {
    numb:7,

    question: "What does the 'this' keyword refer to in JavaScript?",
    options: [
      "Current function",
      "Global object",
      "Parent object",
      "Current object",
    ],
    correctAnswer: "Current object",
  },
  {
    numb:8,

    question:
      "Which method is used to add a new element to the end of an array?",
    options: ["push()", "append()", "addToEnd()", "insertEnd()"],
    correctAnswer: "push()",
  },
  {
    numb:9,

    question: "What is the result of the expression: 10 % 3 ?",
    options: ["3", "1", "0", "10"],
    correctAnswer: "1",
  },
  {
  numb:10,

    question: "Which of the following is not a JavaScript data type?",
    options: ["Boolean", "String", "Undefined", "Float"],
    correctAnswer: "Float",
  },
  {
  numb:11,

    question:
      "What is the correct way to write a single-line comment in JavaScript?",
    options: [
      "// This is a comment",
      "' This is a comment",
      "/* This is a comment */",
      "# This is a comment",
    ],
    correctAnswer: "// This is a comment",
  },
  {
  numb:12,

    question: "What does the 'NaN' stand for in JavaScript?",
    options: [
      "Not a Null",
      "Not a Number",
      "New Allocation Number",
      "Negative Analysis Number",
    ],
    correctAnswer: "Not a Number",
  },
  {
  numb:13,

    question: "Which method is used to remove the last element from an array?",
    options: ["pop()", "removeLast()", "deleteLast()", "splice()"],
    correctAnswer: "pop()",
  },
  {
  numb:14,

    question: "What is the correct way to write a function in JavaScript?",
    options: [
      "function myFunction() {}",
      "myFunction = function() {}",
      "def myFunction() {}",
      "void myFunction() {}",
    ],
    correctAnswer: "function myFunction() {}",
  },
  {
  numb:15,

    question:
      "What will the following code output: console.log(Boolean('false'));",
    options: ["false", "true", "undefined", "Error"],
    correctAnswer: "true",
  },
  {
  numb:16,

    question:
      "Which method is used to join the elements of an array into a string?",
    options: ["join()", "merge()", "concat()", "combine()"],
    correctAnswer: "join()",
  },
  {
  numb:17,

    question: "What does the 'typeof' operator return for an array?",
    options: ["'array'", "'object'", "'undefined'", "'null'"],
    correctAnswer: "'object'",
  },
  {
  numb:18,

    question:
      "Which built-in method returns the index within the calling String object of the first occurrence of the specified value?",
    options: ["indexOf()", "search()", "findIndex()", "startsWith()"],
    correctAnswer: "indexOf()",
  },
  {
  numb:19,

    question: "Which operator is used to concatenate strings in JavaScript?",
    options: ["+", "-", "*", "/"],
    correctAnswer: "+",
  },
  {
  numb:20,

    question: "What will the following code output: console.log(typeof NaN);",
    options: ["'number'", "'NaN'", "'undefined'", "'string'"],
    correctAnswer: "'number'",
  },
  {
  numb:21,

    question:
      "What is the purpose of the 'use strict' directive in JavaScript?",
    options: [
      "To enforce stricter syntax checking",
      "To allow more lenient syntax",
      "To enable experimental features",
      "To disable all warnings",
    ],
    correctAnswer: "To enforce stricter syntax checking",
  },
  {
  numb:22,

    question:
      "Which built-in method is used to execute a function repeatedly, with a fixed time delay between each call?",
    options: ["setInterval()", "setTimeout()", "execInterval()", "loop()"],
    correctAnswer: "setInterval()",
  },
  {
  numb:23,

    question: "What is the result of the expression: '5' - 3 ?",
    options: ["2", "8", "53", "Error"],
    correctAnswer: "2",
  },
  {
  numb:24,

    question:
      "Which method is used to convert a JavaScript object to a JSON string?",
    options: ["toJSON()", "stringify()", "convert()", "parse()"],
    correctAnswer: "stringify()",
  },
  {
  numb:25,

    question:
      "What does the 'isNaN' function return if the argument is not a number?",
    options: ["true", "false", "null", "Error"],
    correctAnswer: "true",
  },
  {
  numb:26,

    question:
      "What will the following code output: console.log(typeof function() {});",
    options: ["'function'", "'object'", "'undefined'", "'null'"],
    correctAnswer: "'function'",
  },
  {
  numb:27,

    question:
      "Which built-in method is used to sort the elements of an array in place?",
    options: ["sort()", "order()", "arrange()", "organize()"],
    correctAnswer: "sort()",
  },
  {
  numb:28,

    question: "What does the 'length' property of an array return?",
    options: [
      "The number of elements in the array",
      "The total memory size of the array",
      "The last index of the array",
      "The maximum length of the array",
    ],
    correctAnswer: "The number of elements in the array",
  },
  {
  numb:29,

    question:
      "Which of the following statements correctly declares an array in JavaScript?",
    options: [
      "var myArray = []",
      "array myArray = []",
      "new Array myArray",
      "var myArray = {}",
    ],
    correctAnswer: "var myArray = []",
  },
  {
  numb:30,

    question:
      "What is the purpose of the 'return' statement in a JavaScript function?",
    options: [
      "To stop the execution of the function and return a value",
      "To restart the function from the beginning",
      "To skip the current iteration of a loop",
      "To define the type of the function",
    ],
    correctAnswer: "To stop the execution of the function and return a value",
  },
  {
  numb:30,

    question: "What does the 'charAt()' method do in JavaScript?",
    options: [
      "Returns the character at a specified index",
      "Removes whitespace from both ends of a string",
      "Returns the position of the first occurrence of a specified value in a string",
      "Converts a string to uppercase letters",
    ],
    correctAnswer: "Returns the character at a specified index",
  },
  {
  numb:31,

    question: "Which symbol is used for single-line comments in JavaScript?",
    options: ["//", "/* */", "#", "--"],
    correctAnswer: "//",
  },
  {
  numb:32,

    question: "What will the following code output: console.log(2 * '3');",
    options: ["6", "'6'", "Error", "undefined"],
    correctAnswer: "6",
  },
  {
  numb:33,

    question: "Which of the following is not a JavaScript loop statement?",
    options: ["for", "foreach", "while", "do...while"],
    correctAnswer: "foreach",
  },
  {
  numb:34,

    question: "What does the 'continue' statement do in a loop?",
    options: [
      "Skips the remaining code inside the loop and moves to the next iteration",
      "Stops the execution of the loop",
      "Restarts the loop from the beginning",
      "Breaks out of the loop entirely",
    ],
    correctAnswer:
      "Skips the remaining code inside the loop and moves to the next iteration",
  },
  {
  numb:35,

    question:
      "Which function is used to convert a string to a floating-point number in JavaScript?",
    options: ["parseFloat()", "tofloat()", "stringToFloat()", "parseDouble()"],
    correctAnswer: "parseFloat()",
  },
  {
  numb:36,

    question: "What does the 'push()' method do in JavaScript arrays?",
    options: [
      "Adds one or more elements to the end of an array",
      "Removes the last element of an array",
      "Returns the first element of an array",
      "Sorts the elements of an array",
    ],
    correctAnswer: "Adds one or more elements to the end of an array",
  },
  {
  numb:37,

    question:
      "What will the following code output: console.log(Math.max(10, 5, 20, 15));",
    options: ["10", "20", "15", "Error"],
    correctAnswer: "20",
  },
  {
  numb:38,

    question: "What is the result of the expression: '5' === 5 ?",
    options: ["true", "false", "undefined", "Error"],
    correctAnswer: "false",
  },
  {
  numb:39,
  question:
      "Which built-in method is used to convert a string to lowercase letters?",
    options: ["toLowerCase()", "toLower()", "lowerCase()", "convertToLower()"],
    correctAnswer: "toLowerCase()",
  },
  {
  numb:40,

    question: "What does the '||' operator do in JavaScript?",
    options: ["Logical AND", "Logical OR", "Logical NOT", "Bitwise OR"],
    correctAnswer: "Logical OR",
  },
  {
  numb:41,

    question:
      "Which method is used to extract a section of a string in JavaScript?",
    options: ["slice()", "cut()", "extract()", "substring()"],
    correctAnswer: "slice()",
  },
  {
  numb:41,

    question:
      "What is the correct way to access the length of a string in JavaScript?",
    options: [
      "string.length",
      "string.length()",
      "length(string)",
      "lengthOf(string)",
    ],
    correctAnswer: "string.length",
  },
  {
  numb:42,

    question: "What will the following code output: console.log(3.toString());",
    options: ["3", "Error", "undefined", "null"],
    correctAnswer: "Error",
  },
  {
  numb:43,

    question:
      "Which built-in method removes the last element from an array and returns that element?",
    options: ["pop()", "removeLast()", "deleteLast()", "splice()"],
    correctAnswer: "pop()",
  },
  {
  numb:44,

    question: "What does the 'typeof' operator return for a function?",
    options: ["'function'", "'object'", "'undefined'", "'null'"],
    correctAnswer: "'function'",
  },
  {
  numb:45,

    question: "What is the purpose of the 'new' keyword in JavaScript?",
    options: [
      "To create a new function",
      "To create a new object instance",
      "To declare a new variable",
      "To define a new prototype",
    ],
    correctAnswer: "To create a new object instance",
  },
  {
  numb:46,

    question: "What will the following code output: console.log(2 == '2');",
    options: ["true", "false", "undefined", "Error"],
    correctAnswer: "true",
  },
  {
  numb:47,

    question: "What is the output of the following code: console.log(3 * '2');",
    options: ["6", "'6'", "Error", "undefined"],
    correctAnswer: "6",
  },
  {
  numb:48,

    question:
      "Which method is used to convert a string to uppercase letters in JavaScript?",
    options: ["toUpperCase()", "toUpper()", "upperCase()", "convertToUpper()"],
    correctAnswer: "toUpperCase()",
  },
  {
  numb:49,

    question: "What does the '&&' operator do in JavaScript?",
    options: ["Logical AND", "Logical OR", "Logical NOT", "Bitwise AND"],
    correctAnswer: "Logical AND",
  },
  {
  numb:50,

    question:
      "Which method is used to find the index of a specified value in an array?",
    options: ["indexOf()", "search()", "findIndex()", "includes()"],
    correctAnswer: "indexOf()",
  },
  {
  numb:51,
    
    question:
      "What is the correct way to check if a variable is undefined in JavaScript?",
    options: [
      "typeof variable === 'undefined'",
      "variable === undefined",
      "variable == 'undefined'",
      "variable.equals(undefined)",
    ],
    correctAnswer: "typeof variable === 'undefined'",
  },
  {
  numb:52,

    question:
      "What will the following code output: console.log(Math.min(10, 5, 20, 15));",
    options: ["10", "20", "5", "Error"],
    correctAnswer: "5",
  },
  {
  numb:53,

    question: "Which operator is used for exponentiation in JavaScript?",
    options: ["^", "**", "^^", "//"],
    correctAnswer: "**",
  },
  {
  numb:54,

    question: "What does the 'splice()' method do in JavaScript?",
    options: [
      "Adds or removes elements from an array",
      "Concatenates two or more arrays",
      "Reverses the order of the elements in an array",
      "Sorts the elements of an array",
    ],
    correctAnswer: "Adds or removes elements from an array",
  },
  {
  numb:55,

    question: "What is the result of the expression: 10 % 4 ?",
    options: ["6", "2", "3", "10"],
    correctAnswer: "2",
  },
  {
  numb:56,

    question:
      "What is the correct way to round a number to the nearest integer in JavaScript?",
    options: ["Math.round()", "Math.ceil()", "Math.floor()", "Math.trunc()"],
    correctAnswer: "Math.round()",
  },
  {
  numb:57,

    question: "What is the result of the expression: '5' + 3 ?",
    options: ["53", "8", "'53'", "Error"],
    correctAnswer: "'53'",
  },
  {
  numb:58,

    question:
      "Which method is used to convert a string to an integer in JavaScript?",
    options: ["parseInt()", "toInt()", "stringToInt()", "convertToInt()"],
    correctAnswer: "parseInt()",
  },
  {
  numb:59,

    question: "What does the 'concat()' method do in JavaScript?",
    options: [
      "Concatenates two or more strings",
      "Splits a string into an array of substrings",
      "Removes whitespace from both ends of a string",
      "Reverses the characters in a string",
    ],
    correctAnswer: "Concatenates two or more strings",
  },
  {
  numb:60,

    question: "What will the following code output: console.log(Boolean(0));",
    options: ["true", "false", "undefined", "Error"],
    correctAnswer: "false",
  },
  {
  numb:61,

    question: "Which operator is used to access the properties of an object?",
    options: [".", ">", ":", "::"],
    correctAnswer: ".",
  },
  {
  numb:62,

    question: "What does the 'forEach()' method do in JavaScript?",
    options: [
      "Executes a provided function once for each array element",
      "Sorts the elements of an array",
      "Returns the first element of an array",
      "Reverses the order of the elements in an array",
    ],
    correctAnswer: "Executes a provided function once for each array element",
  },
  {
  numb:63,

    question: "What is the correct way to write an if statement in JavaScript?",
    options: [
      "if (condition) { // code }",
      "if condition { // code }",
      "{ if (condition) // code }",
      "{ condition ? // code : // code }",
    ],
    correctAnswer: "if (condition) { // code }",
  },
  {
  numb:64,
    
    question:
      "What will the following code output: console.log(null == undefined);",
    options: ["true", "false", "undefined", "Error"],
    correctAnswer: "true",
  },
  {
  numb:65,

    question: "Which method is used to remove the first element from an array?",
    options: ["shift()", "removeFirst()", "deleteFirst()", "splice()"],
    correctAnswer: "shift()",
  },
  numb: 66,
  {
    question: "What is the result of the expression: '20' / 4 ?",
    options: ["5", "4", "'5'", "Error"],
    correctAnswer: "5",
  },
];
