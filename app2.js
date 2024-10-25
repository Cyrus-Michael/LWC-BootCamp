console.log("Spread Operator");
let numberOne = [1, 2, 3];
let numberTwo = [4, 5, 6];

//Concatenation of Array
let combinedArray = [...numberOne, ...numberTwo];
console.log("numberOne", numberOne);
console.log("numberTwo", numberTwo);
console.log("combinedArray", combinedArray);

//Expand the string
let myName = "My Name Is Ciro";
console.log(myName);
console.log(...myName);