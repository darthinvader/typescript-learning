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

function merge<T extends Object, U extends Object>(objA: T, objB: U) {
  return Object.assign(objA, objB);
}

console.log(merge({ name: "Max" }, { age: 30 }));
const mergeObj = merge({ name: "Max" }, { age: 30 });
const mergeObj2 = merge<{ name: string }, { age: number }>(
  { name: "Max" },
  { age: 30 }
);
console.log(mergeObj2.name);
interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "Got No Value";
  if (element.length > 0) descriptionText = "Got 1 element";
  if (element.length > 1)
    descriptionText = "Got " + element.length + " elements";
  return [element, descriptionText];
}

console.log(countAndDescribe("Hello There"));

function extractAndConvert<T extends object, U extends keyof T>(
  obj: T,
  key: U
) {
  return "Value: " + obj[key];
}

console.log(extractAndConvert({ name: "Yiannis" }, "name"));
