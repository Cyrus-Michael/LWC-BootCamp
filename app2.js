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

//Add elements in Array
numberOne = [10, 11, 12, ...numberOne, 21, 22, 23];
console.log("numberOne", numberOne);

//Adding the object
let myObject1 = { fname: "Ciro", skills: ["JS", "LWC", "Apex"] };
let myObject2 = { lname: "Gongo", country: ["Angola"] };
let finalObject = { ...myObject1, ...myObject2};
console.log("finalObject", finalObject);

//Copy an Array and Object
let myFavFruits = ["Apple", "Grapes", "Banana"];
let myFavFruitsCopy = myFavFruits;
console.log("myFavFruits", myFavFruits);
console.log("myFavFruitsCopy", myFavFruitsCopy);
myFavFruits.push("Cherry");
console.log("myFavFruitsCopy", myFavFruitsCopy);
console.log("myFavFruits", myFavFruits); //Deep Copy

//Copy an Array and Object with spread operator
let myFavFruits2 = ["Apple", "Grapes", "Banana"];
let myFavFruitsCopy2 = [...myFavFruits2]; //Shallow Copy
console.log("myFavFruits2", myFavFruits2);
console.log("myFavFruitsCopy", myFavFruitsCopy2);
myFavFruits2.push("Cherry");
console.log("myFavFruitsCopy2", myFavFruitsCopy2);
console.log("myFavFruits2", myFavFruits2);

let myDetails = { fname: "Ankit", lname: "Jain" };
let myDetailsCopy = { ...myDetails };
myDetailsCopy.age = 75,
console.log("myDetailsCopy", myDetailsCopy);
console.log("myDetails", myDetails);
