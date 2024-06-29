function Person() {
  this.name = "John";

  Person.prototype.log = function () {
    console.log(this);
  };
}

const person1 = new Person();

console.log(person1.log());
