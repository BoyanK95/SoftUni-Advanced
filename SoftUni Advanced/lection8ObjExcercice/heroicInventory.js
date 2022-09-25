function heroicInventory(inputArr) {
  let heroes = [];
  for (let line of inputArr) {
    let [name, level, items] = line.split(" / ");
    items = items ? items.split(", ") : [];
    let hero = {
      name,
      level: Number(level),
      items
    };
    
    heroes.push(hero);
  }
  let result = JSON.stringify(heroes);
  console.log(result);
}

heroicInventory([
  "Isacc / 25 / Apple, GravityGun",
  "Derek / 12 / BarrelVest, DestructionSword",
  "Hes / 1 / Desolator, Sentinel, Antara",
]);
