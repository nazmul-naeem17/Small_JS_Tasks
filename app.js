// Calculator
function setOperator(operator) {
  document.getElementById("operator").value = operator;
}

function calculate() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const operator = document.getElementById("operator").value;
  let result;

  switch (operator) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      if (num2 !== 0) {
        result = num1 / num2;
      } else {
        result = "Cannot divide by zero";
      }
      break;
    default:
      result = "Invalid operator";
  }

  document.getElementById("result").innerText = `Result: ${result}`;
}

// BMI Calculator
function calculateBMI() {
  const weight = parseFloat(document.getElementById("weight").value);
  const height = parseFloat(document.getElementById("height").value);
  const bmi = weight / (height * height);
  document.getElementById("bmiResult").innerText = `BMI: ${bmi.toFixed(2)}`;
}

// KM to Miles Converter
function convertDistance() {
  const kmDistance = parseFloat(document.getElementById("kmDistance").value);
  const milesDistance = kmDistance * 0.621371; // Conversion factor
  document.getElementById(
    "milesResult"
  ).innerText = `Miles: ${milesDistance.toFixed(2)}`;
}
