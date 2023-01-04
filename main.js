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
const numberToStringForm = document.getElementById("numberToString");
numberToStringForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const numInput = document.getElementById("numSTGInput").value;
  const numToString = String(numInput);
  console.log(numToString);
  document.getElementById(
    "numToStringDisplay"
  ).innerHTML = `${numInput} was converted into a String! Check the DOM.`;
});

// Write a JavaScript program to convert a string to the number.
const stringToNumberForm = document.getElementById("stringToNumber");
stringToNumberForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const stringInput = document.getElementById("stringNumInput").value;
  const stringToNum = Number(stringInput);
  console.log(stringToNum);
  // must double check
  if (stringToNum > 0) {
    document.getElementById(
      "stringtoNumDisplay"
    ).innerHTML = `"${stringInput}" was converted into a Number! Check the DOM.`;
  } else {
    document.getElementById(
      "stringtoNumDisplay"
    ).innerHTML = `"${stringInput}" is not a number`;
  }
});
// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
// * Boolean
// * Null
// * Undefined
// * Number
// * NaN
// * String
const dataTypesForm = document.getElementById("dataTypes");
dataTypesForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const unknownDataType = document.getElementById("dataTypeInput").value;
  let unknownDataType2 = Number(unknownDataType);
  let unknownDataType3 = Boolean(unknownDataType);
  let unknownDataType4 = null;
  let unknownDataType5;
  console.log(
    typeof unknownDataType,
    unknownDataType2,
    unknownDataType3,
    unknownDataType4,
    unknownDataType5
  );
});

// Write a JavaScript program that adds 2 numbers together.
const additionForm = document.getElementById("addition");
additionForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const numA = document.getElementById("numAInput").value;
  const numB = document.getElementById("numBInput").value;
  const sum = Number(numA) + Number(numB);
  console.log(sum);
  document.getElementById("sum").innerHTML = `${numA} + ${numB} = ${sum}`;
});
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

const logicalOperatorForm = document.getElementById("trueOrFalseValue");
logicalOperatorForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let valueA = document.querySelector("#yesReady").checked;
  let valueB = document.querySelector("#yesHomework").checked;
  console.log(valueA, valueB);

  if (valueA && valueB === true) {
    document.getElementById(
      "logicalOperators"
    ).innerHTML = `You are ready for JS211!`;
    console.log(`You are ready for JS211!`);
  } else if (valueA || valueB === true) {
    document.getElementById(
      "logicalOperators"
    ).innerHTML = `You Can Do it! You Need To Study Though!`;
    console.log(`You Can Do it! You Need To Study Though!`);
  } else if (!valueA && !valueB) {
    document.getElementById(
      "logicalOperators"
    ).innerHTML = `You Need To Really Study! Don't Give Up!`;
    console.log(`You Need To Really Study! Don't Give Up!`);
  }
});
