/*function isValid (checkedString, maxLength) {
  /!*Функция для проверки длины строки*!/
  return checkedString.length <= maxLength;
}

function isPalindrome (checkedString) {
  /!*Функция для проверки, является ли строка палиндромом*!/
  checkedString = checkedString.replaceAll(' ', '');
  checkedString = checkedString.toLowerCase();
  let reversedString = '';
  for (let i = checkedString.length - 1; i >= 0; i--) {
    reversedString += checkedString[i];
  }
  return checkedString === reversedString;
}

function parseNumbers (checkedInput) {
  /!*Функция принимает строку, извлекает содержащиеся в ней цифры от 0 до 9
  и возвращает их в виде целого положительного числа.*!/
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

isValid('Строка', 6);
isPalindrome('топот');
parseNumbers('ECMAScript 2022');*/
const getRandomInteger = (min, max) => {
  const lower = Math.ceil(Math.min(min, max));
  const upper = Math.floor(Math.max(min, max));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const createUniqueId = (min, max) => {
  const previousValues = [];

  return function () {
    let currentValue = getRandomInteger(min, max);
    if (previousValues.length >= (max - min + 1)) {
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
};

export {getRandomInteger, createUniqueId, getRandomArrayElement};
