function combine(
  input1: number | string,
  input2: number | string,
  resultConversion: "as-number" | "as-text"
) {
  let result;
  if (typeof input1 === "number" && typeof input2 === "number")
    result = input1 + input2;
  else result = input1.toString() + input2.toString();
  if (resultConversion === "as-number") result = +result;
  if (resultConversion === "as-text") result = result.toString();
  return result;
}

const combineAges = combine(30, 26, "as-number");
console.log(combineAges);

const combinedStringAges = combine("30", "35", "as-number");
console.log(combinedStringAges);

const combinedNames = combine("Max", "Anna", "as-text");
console.log(combinedNames);
