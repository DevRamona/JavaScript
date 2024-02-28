

// Arrays
let arrays = [["a","b"],["c","d"],["e","f"],"g","h"]
console.log(arrays[0][1]);

// Objects
let object = {
    citizens: {
        men: 10,
        women: 20
    },
    houses:{
        "under-construction":10,
        furnished: 20
    },
    cars: {
        sedans: 10,
        suv: 20,
        wagon: 30
    }

}
console.log(object.cars.sedans);
for(let key in object.cars) {
    console.log(key + " " + object.cars[key]);
}

// forEach
let countries = ["China", "India", "USA",];
countries.forEach(function(country) {
  console.log("I like " + country);
});
//for in
let house = {
    room1: "bed",
    room2: "bath",
    room3: "kitchen"
  };
  
  for (let room in house) {
    console.log("I found " + house[room] + " in " + room);
  }

  let calculator = {
    add: function(a,b){
      return a + b;
    },
    subtract: function(a,b){
      return a - b;
    },
  };
  console.log(calculator.subtract (5,3));