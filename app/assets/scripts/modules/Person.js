class Person {
  constructor(fullName, favColour) {
    this.name = fullName;
    this.favouriteColor = favColour;
  }


  greet() {
    console.log("Hi there, my name is " + this.name + " and my favourite colour is " + this.favouriteColor + ".");
  }
}

export default Person;
