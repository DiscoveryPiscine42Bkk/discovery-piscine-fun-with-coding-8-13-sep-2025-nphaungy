setInterval(function() {
  alert("Please, use me...");
}, 30000);

document.getElementById('calcForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const leftValue = document.getElementById('leftOperand').value.trim();
  const operator = document.getElementById('operator').value;
  const rightValue = document.getElementById('rightOperand').value.trim();
  const leftNum = parseFloat(leftValue);
  const rightNum = parseFloat(rightValue);

  if (!isValidPositiveInteger(leftValue) || !isValidPositiveInteger(rightValue)) {
    alert("Error :(");
    console.log("Error: Invalid input - inputs must be positive integers >= 0");
    return;
  }

  let result;
  switch(operator) {
    case '+': result = leftNum + rightNum; break;
    case '-': result = leftNum - rightNum; break;
    case '*': result = leftNum * rightNum; break;
    case '/':
      if (rightNum === 0) { alert("It's over 9000!"); console.log("It's over 9000!"); return; }
      result = leftNum / rightNum; break;
    case '%':
      if (rightNum === 0) { alert("It's over 9000!"); console.log("It's over 9000!"); return; }
      result = leftNum % rightNum; break;
  }
  alert(result);
  console.log(result);
});

function isValidPositiveInteger(value) {
  if (value === '') return false;
  const num = parseFloat(value);
  return !isNaN(num) && num >= 0 && Number.isInteger(num) && value.match(/^\d+$/);
}
