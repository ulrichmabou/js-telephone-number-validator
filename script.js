const numberInput = document.getElementById("user-input");
const resultsDiv = document.getElementById("results-div");
const checkButton = document.getElementById("check-btn");
const clearButton = document.getElementById("clear-btn");

// Regex to match valid US telephone numbers
const numberRegex = /^(1\s?)?(\(\d{3}\)|\d{3})([\s\-]?)\d{3}([\s\-]?)\d{4}$/;

// ^: Asserts the start of the string.

// (1\s?)?: Matches an optional "1" followed by an optional whitespace character.

// (\(\d{3}\)|\d{3}): Matches either an opening parenthesis followed by three digits and a closing parenthesis, or just three digits.

// ([\s\-]?): Matches an optional whitespace character or hyphen.

// \d{3}: Matches three digits.

// ([\s\-]?): Matches an optional whitespace character or hyphen.

// \d{4}: Matches four digits.

// $: Asserts the end of the string.

// Function to check if an input is a valid US telephone number
const isValid = (input) => numberRegex.test(input);

checkButton.addEventListener("click", () => {
  if (numberInput.value === "") {
    alert("Please provide a phone number");
    return;
  }

  resultsDiv.innerHTML += isValid(numberInput.value) ? '<br>' + 'Valid US number: ' + numberInput.value + '<br>' : '<br>' + 'Invalid US number: ' + numberInput.value + '<br>';

numberInput.value = "";

});

clearButton.addEventListener("click", () => {
  resultsDiv.innerHTML = "";
});