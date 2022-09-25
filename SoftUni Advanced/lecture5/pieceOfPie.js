function pieceOfPie(arr, startFlav, endFlav) {
  let start = arr.indexOf(startFlav);
  let end = arr.indexOf(endFlav);

  let result = arr.slice(start, end + 1);

  return result
}

pieceOfPie(
  [
    "Pumpkin Pie",

    "Key Lime Pie",

    "Cherry Pie",

    "Lemon Meringue Pie",

    "Sugar Cream Pie",
  ],

  "Key Lime Pie",

  "Lemon Meringue Pie"
);
