function solve(arr) {
    let town = {}
    for (let line of arr) {
         let [name, population] = line.split(' <-> ');
         population = Number(population);
        if (town[name] != undefined) {
            population += town[name];
        }
         town[name] = population;
    }
    let entries = Object.entries(town)
    entries.forEach(element => {
        console.log(`${element[0]} : ${element[1]}`);
    });
}

solve([
  "Sofia <-> 1200000",
  "Montana <-> 20000",
  "New York <-> 10000000",
  "Washington <-> 2345000",
  "Las Vegas <-> 1000000",
]);
