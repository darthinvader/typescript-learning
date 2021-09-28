function Logger(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

@Logger("LOGGIN - PERSON")
class Person {
  name = "Max";
  construction() {
    console.log("creating person object");
  }
}

const pers = new Person();
console.log(pers);
