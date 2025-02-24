// Number : Number Represents both integers and floating point numbers

let age = 28;
console.log(age);

let percentage = 90.9;
console.log(percentage);

age = age + 1;
console.log(age);

let num = 10;
console.log(num ** 3);

let maxminumNumber = 9007199254740991; // maximum safe number
console.log(maxminumNumber);
maxminumNumber = maxminumNumber + 1;
console.log(maxminumNumber);
maxminumNumber = maxminumNumber + 1;
console.log(maxminumNumber);
maxminumNumber = maxminumNumber + 2;
console.log(maxminumNumber);

let num1 = "28";
console.log(typeof num1);
console.log(typeof +num1);

//boolean

// let isBookAvailable = true
// console.log(isBookAvailable)
// console.log(typeof isBookAvailable)

// let isBookAvailable = false
// console.log(isBookAvailable)
// console.log(typeof isBookAvailable)

// let isBookGood= true
// if(isBookGood){
//     console.log("buy Book")
// }
// else{
//     console.log("Don't buy Book")
// }

//string

let myName = "lokesh";
console.log(myName.toUpperCase());
console.log(typeof myName);

//undefined
let name;
console.log(name);

function greet(name) {
  console.log(name);
}
greet();

function doNothing() {}
console.log(doNothing());

const obj = {a:1}
console.log(obj.b)

const arr = [1,2,3,,]
console.log(arr[3])

let mymarks
mymarks = 90
console.log(mymarks)
mymarks = undefined
console.log(mymarks)


//null
let Marks = null
console.log(Marks)
console.log(typeof Marks)