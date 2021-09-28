const names: Array<string> = ["Max", "Manuel"];

names[0].split(" ");

const promise: Promise<string> = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("This is not Done!");
  }, 2001);
  setTimeout(() => {
    resolve("This is Done!");
  }, 2000);
});

promise.then((data) => {
  console.log(data);
});
