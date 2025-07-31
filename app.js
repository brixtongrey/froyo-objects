// creating an object to fill with color count

const flavors = [
  "vanilla",
  "vanilla",
  "vanilla",
  "strawberry",
  "coffee",
  "coffee",
];
// vanilla: 3, strawberry: 1, coffee: 2

// creating an object to fill with flavor count
const frequencyCounter = {};
for (let i = 0; i < flavors.length; i++) {
  const flavor = flavors[i];
  console.log("flavor", flavor);

  console.log(frequencyCounter);

  if (flavor in frequencyCounter) {
    frequencyCounter[flavor] += 1;
  } else {
    frequencyCounter[flavor] = 1;
  }
}

console.log("flavor", frequencyCounter);

// how to create prompt message from Stats workshop
const userInputString = prompt(
  "Please submit your froyo flavor.",
  "vanilla, strawberry, coffee"
);
