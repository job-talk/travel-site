function Person(fullName, favColour) {
  this.name = fullName;
  this.favouriteColor = favColour;
  this.greet = function() {
    console.log("Hello, my name is " + this.name + " and my favourite colour is " + this.favouriteColor + ".");
  }
}

module.exports = Person;
