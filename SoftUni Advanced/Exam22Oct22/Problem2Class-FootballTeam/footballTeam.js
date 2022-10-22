class footballTeam {
  constructor(clubName, country) {
    this.clubName = clubName;
    this.country = country;
    this.invitedPlayers = [];
  }

  newAdditions(footballPlayers) {
    let result = `You successfully invite `;
    footballPlayers.forEach((player) => {
      let [name, age, value] = player.split("/");
      age = Number(age);
      value = Number(value);

      let currentPlayer = this.invitedPlayers.find((x) => x.name === name);
      if (currentPlayer) {
        if (currentPlayer.value < value) {
          currentPlayer.value = value;
        }
      } else {
        this.invitedPlayers.push({ name, age, value });
        result += `${name}, `
      }

    });

   result =  result.substring(0, result.length - 2)
    return `${result}.`
  }

  signContract(selectedPlayer){
    let [name, offer] = selectedPlayer.split('/');
    offer = Number(offer)

      let currentPlayer = this.invitedPlayers.find((x) => x.name === name);

      if (!currentPlayer) {
        throw new Error(`${name} is not invited to the selection list!`)
      }
      if (offer < Number(currentPlayer.value)) {
        let difference =  Number(currentPlayer.value) - offer
        throw new Error(`The manager's offer is not enough to sign a contract with ${name}, ${difference} million more are needed to sign the contract!`)
      }
      currentPlayer.value = 'Bought'
      return `Congratulations! You sign a contract with ${name} for ${offer} million dollars.`
  }

  ageLimit(name, age){
    let currentPlayer = this.invitedPlayers.find((x) => x.name === name);
    age = Number(age)

    if (!currentPlayer) {
        throw new Error(`${name} is not invited to the selection list!"`)
    }
    if (Number(currentPlayer.age) < age) {
        let ageDiff = age - Number(currentPlayer.age)
        if (ageDiff < 5) {
            return `${name} will sign a contract for ${ageDiff} years with ${this.clubName} in ${this.country}!`
        }
        if (currentPlayer.age >= age) {
            return `${name} is above age limit!`
        }
        if (ageDiff >= 5){
            return `${name} will sign a full 5 years contract for ${this.clubName} in ${this.country}!`
        }
    }
  }

  transferWindowResult(){
    let res = ['Player list:']

    this.invitedPlayers.sort((a, b)=> a.name.localeCompare(b.name))
    .forEach(p => res.push(`Player ${p.name}-${p.value}`))

    return res.join('\n')
  }
}

let fTeam = new footballTeam("Barcelona", "Spain");
console.log(fTeam.newAdditions(["Kylian Mbappé/23/160", "Lionel Messi/35/50", "Pau Torres/25/52"]));
console.log(fTeam.signContract("Kylian Mbappé/240"));
console.log(fTeam.ageLimit("Kylian Mbappé", 30));
console.log(fTeam.transferWindowResult());



