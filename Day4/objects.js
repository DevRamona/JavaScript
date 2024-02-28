let calculator = {
    add: function(a,b){
      return a + b;
    },
    subtract: function(a,b){
      return a - b;
    },
  };
  console.log(calculator.subtract (5,3));

  let person ={
    name: "John",
    age: 30,
    city: "New York"
  };
  person.gender = "male";
  person ["fit"] = "Female";
  console.log(person.fit);
  
  let dog ={
    name: "Max",
    bark:function(){
        console.log(this.name + " " + 'Says I am hungry');
    },

  };
  dog.bark();