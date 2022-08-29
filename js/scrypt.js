function start() {
  var buttonSum = document.querySelector('#botao-soma');
  var buttonSub = document.querySelector('#botao-sub');
  buttonSum.addEventListener('click', handleButtonClickSum);
  buttonSub.addEventListener('click', handleButtonClickSub);
  handleButtonClickSum();
  handleButtonClickSub();
}

function handleButtonClickSum(num1, num2) {
  var result = 0;
  var resultText = '';
  var inputValue1 = document.querySelector('#input-value1');
  var num1 = Number(inputValue1.value);
  var inputValue2 = document.querySelector('#input-value2');
  var num2 = Number(inputValue2.value);
  var resultSum = document.querySelector('#result-text');
  result = num1 + num2;
  resultText = result;
  resultSum.textContent = resultText;
}
function handleButtonClickSub(num1, num2) {
  var result = 0;
  var resultText = '';
  var inputValue1 = document.querySelector('#input-value1');
  var num1 = Number(inputValue1.value);
  var inputValue2 = document.querySelector('#input-value2');
  var num2 = Number(inputValue2.value);
  var resultSum = document.querySelector('#result-text');
  result = num1 - num2;
  resultText = result;
  resultSum.textContent = resultText;
}

start();
