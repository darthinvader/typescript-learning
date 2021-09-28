// const names: Array<string> = ["Max", "Manuel"];

// names[0].split(" ");

// const promise: Promise<string> = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject("This is not Done!");
//   }, 2001);
//   setTimeout(() => {
//     resolve("This is Done!");
//   }, 2000);
// });

// promise.then((data) => {
//   console.log(data);
// });

function merge<T, U>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

console.log(merge({ name: "Max" }, { age: 30 }));
const mergeObj = merge({ name: "Max" }, { age: 30 });
const mergeObj2 = merge<{ name: string }, { age: number }>(
  { name: "Max" },
  { age: 30 }
);
console.log(mergeObj2.name);
