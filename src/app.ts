interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn;

add = (a, b) => {
  return a + b;
};
// type AddFn = (a: number, b: number) => number;
// let add: AddFn;
// add = (a, b) => {
//   return a + b;
// };

interface Named {
  readonly name?: string;

  outputName?: string;
}

interface Greetable extends Named {
  greet(phrase: string): void;
}

class Person implements Greetable {
  name: string;
  age = 30;
  constructor(n: string) {
    this.name = n;
  }

  greet(phrase: string) {
    console.log(phrase);
  }
}

let user1: Greetable;
((a?: string) => {
  console.log("Hmmm" + a);
})("Hello");

user1 = new Person("Max");
user1.greet("Hi there");
