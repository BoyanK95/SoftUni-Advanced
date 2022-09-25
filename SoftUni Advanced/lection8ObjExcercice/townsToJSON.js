function townsToJSON(inputArr) {
  let result = [];
  for (let i = 1; i < inputArr.length; i++) {
    let tokens = inputArr[i].split("|");
    let Town = tokens[1].trim();
    let latitude = Number(tokens[2]).toFixed(2);
    let longitude = Number(tokens[3].trim()).toFixed(2);

    let obj = {
      Town,
      Latitude: Number(latitude),
      Longitude: Number(longitude),
    };
    
    result.push(obj)
  }
  console.log(JSON.stringify(result));
}

townsToJSON([
  "| Town | Latitude | Longitude |",
  "| Sofia | 42.696552 | 23.32601 |",
  "| Beijing | 39.913818 | 116.363625 |",
]);
