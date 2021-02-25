//#1

function getMaxDigit(number) {
  const digits = String(number);
  return Math.max.apply(Math, digits.split(''));
}

//#2

function numberStage(num, stage) {
  let result = num;
  if (stage === 1) {
    result = num;
  } else {
    for (let i = 1; i < stage; i++) {
      result = num * result;
    }
  }
  return result;
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

function getRandomNumber(numN, numM) {
  return Math.floor(Math.random() * numM) + numN;
}

//#6

function countLetter(letter, word) {
  let count = 0;
  for (let i = 0; i < word.length; i++) {
    if (word[i] === letter) count++;
  }
  return count;
}


//#7



document.writeln(`Функція №1: ${getMaxDigit(25788485635876853)} <br>`);
document.writeln(`Функція №2: ${numberStage(4, 3)}<br>`);
document.writeln(`Функція №3: ${getCorrectName('mArIaN')} <br>`);
document.writeln(`Функція №4: ${getTaxSalary(1000)} <br>`);
document.writeln(`Функція №5: ${getRandomNumber(15, 53)} <br>`);
document.writeln(`Функція №6: ${countLetter('r', 'cursor family')} <br>`);
