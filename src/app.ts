import "reflect-metadata";
import { plainToClass } from "class-transformer";
import { Product } from "./product.model";

const products = [
  { title: "A Carpet", price: 29 },
  { title: "A book", price: 10 },
];

//const p1 = new Product("A book", 12.99);

const loadedProucts = plainToClass(Product, products);

console.log(p1.getInformation());
