const cards = ["diamond", "spade", "heart", "club"];

let currentCard;

// Continue looping until 'spade' is drawn
while (currentCard !== "spade") {
  // Draw a random card from the array
  currentCard = cards[Math.floor(Math.random() * 4)];
  console.log(currentCard);
}

console.log("The loop has ended because the spade card was drawn.");
