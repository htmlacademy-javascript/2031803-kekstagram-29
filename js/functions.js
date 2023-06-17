const isValid = (checkedString, maxLength) => checkedString.length <= maxLength;

const isPalindrome = (checkedString) => {
  /*Функция для проверки, является ли строка палиндромом*/
  checkedString = checkedString.replaceAll(' ', '').toLowerCase();
  let reversedString = '';
  for (let i = checkedString.length - 1; i >= 0; i--) {
    reversedString += checkedString[i];
  }
  return checkedString === reversedString;
};

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

isValid('Строка', 6);
isPalindrome('топот');
extractNumbers('ECMAScript 2022');


function isMeetingAvailable (beginningOfWorkday, endOfWorkday, beginningOfMeeting, meetingDuration) {
  for (let i = 0; i < 3; i++) {
    arguments[i] = parseFloat(arguments[i].replace(':', '.'));
    arguments[i] = Math.trunc(arguments[i]) * 60 + arguments[i] % 1 * 100;
  }
  console.log(beginningOfWorkday);
  return (arguments[2] >= arguments[0] && arguments[2] + meetingDuration <= arguments[1]);
};


console.log(isMeetingAvailable('8:0', '10:0', '8:0', 120)); // true
