// Type Conversions
// 1. Implicit Type Conversion: Automatically done by the JavaScript Engine
// 2. Explicit Type Conversion: Manually done by developers

// String Conversion
let marks = 100;
let firstName = "lokesh";
let cash = "1000";
let emptyString = "";
let isPassed = true;
let result;
let myValue = null;
let bigValue = 500n;
let s1 = Symbol("id");

// console.log("=========== Original Values =========");
// console.log(marks);
// console.log(firstName);
// console.log(cash);
// console.log(emptyString);
// console.log(isPassed);
// console.log(result);
// console.log(myValue);
// console.log(bigValue);
// console.log(s1);

// // String Conversion
// let marksStr = String(marks);
// let firstNameStr = String(firstName);
// let cashStr = String(cash);
// let emptyStringStr = String(emptyString);
// let isPassedStr = String(isPassed);
// let resultStr = String(result);
// let myValueStr = String(myValue);
// let bigValueStr = String(bigValue);
// let s1Str = String(s1);

// console.log("=========== Type String Conversion =========");
// console.log(marksStr);
// console.log(firstNameStr);
// console.log(cashStr);
// console.log(emptyStringStr);
// console.log(isPassedStr);
// console.log(resultStr);
// console.log(myValueStr);
// console.log(bigValueStr);
// console.log(s1Str);

// Number Conversion
let marksNum = Number(marks);
let firstNameNum = Number(firstName);
let cashNum = Number(cash);
let emptyStringNum = Number(emptyString);
let isPassedNum = Number(isPassed);
let resultNum = Number(result);
let myValueNum = Number(myValue);
let bigValueNum = Number(bigValue);
let s1Num;


console.log("=========== Type Number Conversion =========");
console.log(marksNum);       // 100
console.log(firstNameNum);   // NaN (Cannot convert "lokesh" to a number)
console.log(cashNum);        // 1000 (String "1000" converts to number)
console.log(emptyStringNum); // 0 (Empty string converts to 0)
console.log(isPassedNum);    // 1 (true converts to 1, false converts to 0)
console.log(resultNum);      // NaN (undefined converts to NaN)
console.log(myValueNum);     // 0 (null converts to 0)
console.log(bigValueNum);    // 500 (BigInt converts to number)
console.log(s1Num);          // Error message for Symbol