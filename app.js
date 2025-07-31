
// how to create prompt message referred back to Stats workshop
const userInputString = prompt(
  "Please submit your froyo flavors:",
  "vanilla, strawberry, coffee"
);

// how to split() string input into array
const flavorsArray = userInputString.split(" ");


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

// creating a function code for counting logic
function countFlavors(flavors) {

// creating an object inside the function to fill with flavor count
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
return frequencyCounter;
}
// looping through an array ^

// get the count object
const result = countFlavors (flavorsArray);

// output the result in the console:
console.log("Froyo flavor counts:", result);

// view output via console.table
console.table(result);

