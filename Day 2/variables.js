// Variable declaration
let greeting = "Hello, World!";
console.log(greeting); 

// Variable reassignment
let number = 42;
console.log(number);
number = 100;
console.log(number);

// Constants
const pi = 3.14;
console.log(pi);




let treasureBox = {
    key1: "gold",
    key2: "gems",
    key3: "map"
  };
  
  for (let key in treasureBox) {
    console.log("I found " + treasureBox[key] + " with key " + key);
  }