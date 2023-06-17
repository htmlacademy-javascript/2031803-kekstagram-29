import * as assert from 'assert';

const isValid = (checkedString, maxLength) => checkedString.length <= maxLength;

assert.equal(isValid('Проверяемая строка', 20), true);
assert.equal(isValid('Проверяемая строка', 18), true);
assert.equal(isValid('Длинная проверяемая строка', 10), false);

const isPalindrome = (checkedString) => {
  /*Функция для проверки, является ли строка палиндромом*/
  checkedString = checkedString.replaceAll(' ', '').toLowerCase();
  let reversedString = '';
  for (let i = checkedString.length - 1; i >= 0; i--) {
    reversedString += checkedString[i];
  }
  return checkedString === reversedString;
};

assert.equal(isPalindrome('топот'), true);
assert.equal(isPalindrome('ДовОд'), true);
assert.equal(isPalindrome('Кекс'), false);

const extractNumbers = (checkedInput) => {
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
};

assert.equal(extractNumbers('2023 год'), 2023);
assert.equal(extractNumbers('ECMAScript 2022'), 2022);
assert.equal(extractNumbers('1 кефир, 0.5 батона'), 105);
assert.equal(extractNumbers('агент 007'), 7);


function isMeetingAvailable (beginningOfWorkday, endOfWorkday, beginningOfMeeting, meetingDuration) {
  for (let i = 0; i < 3; i++) {
    arguments[i] = parseFloat(arguments[i].replace(':', '.'));
    arguments[i] = Math.trunc(arguments[i]) * 60 + arguments[i] % 1 * 100;
  }
  return (arguments[2] >= arguments[0] && arguments[2] + meetingDuration <= arguments[1]);
};

assert.equal(isMeetingAvailable('08:00', '17:30', '14:00', 90), true);
assert.equal(isMeetingAvailable('8:0', '10:0', '8:0', 120), true);
assert.equal(isMeetingAvailable('08:00', '14:30', '14:00', 90), false);
assert.equal(isMeetingAvailable('14:00', '17:30', '08:0', 90), false);
assert.equal(isMeetingAvailable('8:00', '17:30', '08:00', 900), false);
