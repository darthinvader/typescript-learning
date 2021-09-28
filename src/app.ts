type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
  name: "Max",
  privileges: ["create-server"],
  startDate: new Date(),
};

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable & Numeric;

function add(a: number, b: number): number;
function add(a: string, b: string): string;
function add(a: string, b: number): string;
function add(a: number, b: string): string;
function add(a: Combinable, b: Combinable) {
  if (typeof a === "string" || typeof b === "string") {
    return a.toString() + b.toString();
  }
  return a + b;
}

const result = add("Max", "Swarcz");
result.split(" ");

const fetchedUserData = {
  id: "u1",
  name: "max",
  // job: { title: "CEO", description: "My own company" },
};

// console.log(fetchedUserData?.job?.title);
// type UnknownEmployee = Employee | Admin;

// function printEmployeeInformation(emp: UnknownEmployee) {
//   console.log("Name:" + emp.name);
//   if ("privileges" in emp) {
//     console.log("Privileges:" + emp.privileges);
//   }
//   if ("startDate" in emp) {
//     console.log("Start Date:" + emp.startDate);
//   }
// }

// printEmployeeInformation({ name: "Mau", startDate: new Date() });

// class Car {
//   drive() {
//     console.log("Driving ...");
//   }
// }

// class Truck {
//   drive() {
//     console.log("Driving a Truck...");
//   }
//   loadCargo(amount: number) {
//     console.log("Loading Cargo:" + amount);
//   }
// }

// type Vehicle = Car | Truck;

// const v1 = new Car();
// const v2 = new Truck();

// function useVehicle(vehicle: Vehicle) {
//   vehicle.drive();
//   if (vehicle instanceof Truck) vehicle.loadCargo(1000);
//   // if ("loadCargo" in vehicle) vehicle.loadCargo(1000);
// }

// useVehicle(v1);
// useVehicle(v2);

// interface Bird {
//   type: "bird";
//   flyingSpeed: number;
// }

// interface Horse {
//   type: "horse";
//   runningSpeed: number;
// }

// type Animal = Bird | Horse;

// function moveAnimal(animal: Animal) {
//   let speed;
//   switch (animal.type) {
//     case "bird":
//       speed = animal.flyingSpeed;
//       break;
//     case "horse":
//       speed = animal.runningSpeed;
//   }
//   console.log("Moving with speed: " + speed);
// }

// moveAnimal({ type: "bird", flyingSpeed: 10 });

// // const userInput = <HTMLInputElement>document.getElementById("user-input")!;
// const userInput = document.getElementById("user-input")! as HTMLInputElement;

// userInput.value = "Hi there";

// const userInput2 = document.getElementById("user-input");

// if (userInput) (userInput as HTMLInputElement).value = "Hi there";

// interface ErrorContainer {
//   [prop: string]: string;
// }

// const errorBag: ErrorContainer = {
//   email: "Not A Valid Email",
//   username: "Username must start with capital character",
// };
