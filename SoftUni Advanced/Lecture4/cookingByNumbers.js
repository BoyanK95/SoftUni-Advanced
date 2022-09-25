function cooking(num, ...operations) {
  number = Number(num);
  let result = number;
  for (let operation of operations) {
    if (operation === "chop") {
      result = result / 2;
      console.log(result);
    } else if (operation === "dice") {
      result = Math.sqrt(result);
      console.log(result);
    } else if (operation === "spice") {
      result = result + 1;
      console.log(result);
    } else if (operation === "bake") {
      result = result * 3;
      console.log(result);
    } else if (operation === "fillet") {
      result -= 0.2 * result;
      console.log(result);
    }
  }
}

cooking("32", "chop", "chop", "chop", "chop", "chop");
cooking(
  "9",
  "dice",
  "spice",
  "chop",
  "bake",

  "fillet"
);


