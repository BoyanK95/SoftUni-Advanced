function cardFactory(face, suit) {
  const faces = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A",
  ];
  const suits = {
    S: "♠",
    H: "♥",
    D: "♦",
    C: "♣",
  };
  if (!faces.includes(face)) {
    throw new Error("Error");
  }
  if (!suits[suit]) {
    throw new Error("Error");
  }

  if (face != face.toUpperCase()) {
    throw new Error("Error");
  }
  if (suit != suit.toUpperCase()) {
    throw new Error("Error");
  }
  let card = {
    face,
    suit,
    toString() {
      console.log(this.face + suits[this.suit]);
    },
  };
  return card;
}

let card = cardFactory("A", "H");
card.toString();
// let newcard1 = cardFactory('1', 'C')
// console.log(newcard1);
