// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**

// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
console.log(new Date());

const displayDate = () => {
  const currentDate = new Date();

  document.getElementById("display-element").innerHTML = currentDate;
};

// Write a JavaScript program to convert a number to a string.
const numToStr = (numInput) => String(numInput);

// Write a JavaScript program to convert a string to the number.
const stringToNum = (stringInput) => Number(stringInput);

// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
// * Boolean
// * Null
// * Undefined
// * Number
// * NaN
// * String
const unknownData = (dataInput) => typeof dataInput;

// Write a JavaScript program that adds 2 numbers together.
const sum = (numA, numB) => Number(numA) + Number(numB);

// Write a JavaScript program that runs only when 2 things are true.
const bothAndValue = (valueA, valueB) => valueA && valueB;

// Write a JavaScript program that runs when 1 of 2 things are true.
const orValue = (valueA, valueB) => valueA || valueB;

// Write a JavaScript program that runs when both things are not true.
const notValue = (valueA, valueB) => !valueA && !valueB;

// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey,
// 2. reload VS Code,
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html`
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.

// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24

// Number To String Part 2:
const numberToStringForm = document.getElementById("numberToString");
numberToStringForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const userInput = document.getElementById("numSTGInput").value;
  let numInput = Number(userInput);
  console.log(numInput);
  console.log(numToStr(numInput));
  document.getElementById(
    "numToStringDisplay"
  ).innerHTML = `${numInput} was converted into a String! Check the DOM.`;
});

// String to Number Part 2:
const stringToNumberForm = document.getElementById("stringToNumber");
stringToNumberForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const stringInput = document.getElementById("stringNumInput").value;
  console.log(stringInput);
  console.log(stringToNum(stringInput));

  if (isNaN(stringToNum(stringInput)) === false) {
    document.getElementById(
      "stringtoNumDisplay"
    ).innerHTML = `"${stringInput}" was converted into a Number! Check the DOM.`;
  } else {
    document.getElementById(
      "stringtoNumDisplay"
    ).innerHTML = `"${stringInput}" is not a number`;
  }
});

//Unknown Data Type Part 2:
const dataTypesForm = document.getElementById("dataTypes");
dataTypesForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const dataInput = document.getElementById("dataTypeInput").value;
  console.log(unknownData(dataInput));
  let unknownDataType1 = String(unknownData(dataInput));
  let unknownDataType2 = Number(dataInput);
  let unknownDataType3 = Boolean(unknownData(dataInput));
  let unknownDataType4 = null;
  let unknownDataType5;

  console.log(
    unknownDataType1,
    unknownDataType2,
    unknownDataType3,
    unknownDataType4,
    unknownDataType5
  );
  document.getElementById(
    "dataTypeDisplay"
  ).innerHTML = `The Input: ${dataInput} is a ${unknownData(dataInput)}`;
});

// Add 2 Numbers Part 2:
const additionForm = document.getElementById("addition");
additionForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let numA = document.getElementById("numAInput").value;
  let numB = document.getElementById("numBInput").value;

  numA = Number(numA);
  numB = Number(numB);
  console.log(numA, numB);

  const totalSum = sum(numA, numB);
  console.log(totalSum);

  document.getElementById("sum").innerHTML = `${numA} + ${numB} = ${totalSum}`;
});

// Logical Operators Part 2:
const logicalOperatorForm = document.getElementById("trueOrFalseValue");
logicalOperatorForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let valueA = document.querySelector("#yesReady").checked;
  let valueB = document.querySelector("#yesHomework").checked;
  console.log(valueA, valueB);

  if (bothAndValue(valueA, valueB)) {
    document.getElementById(
      "logicalOperators"
    ).innerHTML = `You are ready for JS211!`;
    console.log(`You are ready for JS211!`);
  } else if (orValue(valueA, valueB)) {
    document.getElementById(
      "logicalOperators"
    ).innerHTML = `You Can Do it! You Need To Study Though!`;
    console.log(`You Can Do it! You Need To Study Though!`);
  } else if (notValue(valueA, valueB)) {
    document.getElementById(
      "logicalOperators"
    ).innerHTML = `You Need To Really Study! Don't Give Up!`;
    console.log(`You Need To Really Study! Don't Give Up!`);
  }
});
