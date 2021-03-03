//#1

const getMaxDigit = (number) =>
  Math.max(...Array.from(String(number)).map((item) => parseInt(item)));

//#2

function numberStage(num, stage) {
  if (stage > 0) {
    let result = num;
    for (let i = 1; i < stage; i++) {
      result = num * result;
    }
    return result;
  } else {
    return 'Sorry mistake)';
  }
}

//#3

function getCorrectName(name) {
  const YourName = String(name);
  return YourName.charAt(0).toUpperCase() + YourName.slice(1).toLowerCase();
}

//#4

function getTaxSalary(salary) {
  const tax = 18 + 1.5;
  const fission100 = 100;
  return salary - (salary * tax) / fission100;
}

//#5

let getRandomNumber = (numN, numM) => Math.floor(Math.random() * numM) + numN;

//#6

function countLetter(letter, word) {
  let count = 0;
  for (let i = 0; i < word.length; i++) {
    if (word[i] === letter) count++;
  }
  return count;
}

//#9

const deleteLetters = (userLetter, delLetters) =>
  delLetters.replaceAll(userLetter, '');

//#11

function uniqueLetters(str) {
  let string = str.split('');
  let res = string.filter(function (val, i, string) {
    return string.lastIndexOf(val) === string.indexOf(val);
  });
  return res;
}

document.writeln(`Функція №1: ${getMaxDigit(25788485635876853)} <br>`);
document.writeln(`Функція №2: ${numberStage(4, 4)}<br>`);
document.writeln(`Функція №3: ${getCorrectName('mArIaN')} <br>`);
document.writeln(`Функція №4: ${getTaxSalary(1000)} <br>`);
document.writeln(`Функція №5: ${getRandomNumber(15, 53)} <br>`);
document.writeln(`Функція №6: ${countLetter('r', 'cursor family')} <br>`);
document.writeln(`Функція №9: ${deleteLetters('m', 'bimbimbim')} <br>`);
document.writeln(
  `Функція №11: ${uniqueLetters('Бісквіт був дуже ніжним')} <br>`
);
