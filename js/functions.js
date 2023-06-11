
function isValid (checkedString, maxLength) {
  /*Функция для проверки длины строки*/
  return checkedString.length <= maxLength;
}

function isPalindrome (checkedString) {
  /*Функция для проверки, является ли строка палиндромом*/
  checkedString = checkedString.replaceAll(' ', '');
  checkedString = checkedString.toLowerCase();
  let reversedString = '';
  for (let i = checkedString.length - 1; i >= 0; i--) {
    reversedString += checkedString[i];
  }
  return checkedString === reversedString;
}

function parseNumbers (checkedInput) {
  /*Функция принимает строку, извлекает содержащиеся в ней цифры от 0 до 9
  и возвращает их в виде целого положительного числа.*/
  let formattedInput = '';
  if (typeof checkedInput === 'number') {
    checkedInput = checkedInput.toString();
  }
  for (let i = 0; i < checkedInput.length; i++) {
    if (!Number.isNaN(parseInt(checkedInput[i], 10))) {
      formattedInput += Math.abs(parseInt(checkedInput[i], 10));
    }
  }
  return parseInt(formattedInput, 10);
}

