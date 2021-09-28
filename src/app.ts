function Logger(constructor: Function) {
  console.log("Logging...");
  console.log(constructor);
}

@Logger
class Person {
  name = "Max";
  construction() {
    console.log("creating person object");
  }
}

const pers = new Person();
console.log(pers);
