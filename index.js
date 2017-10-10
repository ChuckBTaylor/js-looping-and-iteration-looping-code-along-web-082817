// Code your solutions in this file
function printBadges(array) {
  array.forEach((el, i) =>
    console.log(`Welcome ${el}! You are employee #${i + 1}.`)
  );
  return array;
}

function tailsNeverFails() {
  let counter = 0;
  let flip = flipCoin();
  console.log(flip, "Math.random() first");
  while (flip >= 0.5) {
    counter++;
    flip = flipCoin();
    console.log(flip, "Math.random() value");
    console.log(counter, "times flipped");
    if (counter === 100) return counter;
  }
  return `You got ${counter} tails in a row!`;
}

function flipCoin() {
  return Math.random();
}
