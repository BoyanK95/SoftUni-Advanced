function printDeckOfCard(cards) {
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
  for (let card of cards) {
    if (!card.includes("10")) {
      
    }
  }
  for (let card of cards) {
    if (card.includes("10")) {
      const face = "10";
      const suit = card[2];
      createCard(face, suit);
    } else {
      const [face, suit] = card.split("");
      createCard(face, suit);
    }
  }
  function createCard(face, suit) {
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
    // if (face != face.toUpperCase()) {
    //   throw new Error("Error");
    // }
    // if (suit != suit.toUpperCase()) {
    //   throw new Error("Error");
    // }
    let card = {
      face,
      suit,
      toString() {
        console.log(this.face + suits[this.suit]);
      },
    };
    return card;
  }
}

printDeckOfCard(["AS", "10D", "KH", "2C"]);

printDeckOfCard(["5S", "3D", "QD", "1C"]);
