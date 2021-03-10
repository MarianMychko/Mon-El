//1

const getRandomArray = (length, min, max) =>
  Array.from({ length }).map((number) =>
    Math.floor(Math.random() * (max - min + 1) + min)
  );

console.log(`Масив випадкових цілих чисел: `, getRandomArray(8, 3, 333));

//3

const getAverage = (...numbers) =>
  numbers.filter((el) => Number.isInteger(el)).reduce((acc, cur) => acc + cur) /
  numbers.length;

console.log(
  `Cереднє арифметичне всіх переданих в неї аргументів:`,
  getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)
);

//5

const filterEvenNumbers = (...numbers) =>
  numbers.filter((number) => number % 2 != 0);

console.log(`Фільтрує парні числа`, filterEvenNumbers(1, 2, 3, 4, 5, 6));

//6

const countPositiveNumbers = (...numbers) =>
  numbers.filter((number) => number > 0);

console.log(
  `Рахує кількість чисел більших 0`,
  countPositiveNumbers(0, 1, -2, 3, -4, -5, 6)
);

//7

const getDividedByFive = (...numbers) =>
  numbers.filter((number) => number % 5 === 0);

console.log(
  `Відфільтрує усі елементи в масиві та залишить тільки ті, які діляться на ціло на 5`,
  getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)
);

//8

const replaceBadWords = (string) => {
  const badWords = ['ass', 'bottom', 'damn', 'shit', 'fuck'];
  const replaceWords = new RegExp(badWords.join('|'), 'gi');
  return string
    .split(' ')
    .map((word) => word.replace(replaceWords, '*'.repeat(word.length)))
    .join(' ');
};

console.log(
  `Замінить погані слова на зірочки *:`,
  replaceBadWords('Holy shit!'),
  replaceBadWords("It's bullshit!")
);

//10

function generateCombinations(word) {
  const comb = function (active, rest, arr) {
    if (!active && !rest) return;
    if (!rest) {
      arr.push(active);
    } else {
      comb(active + rest[0], rest.slice(1), arr);
      comb(active, rest.slice(1), arr);
    }
    return arr;
  };
  return comb('', word, []);
}

console.log(
  `Видає всі можливі перестановки(унікальні, без повторень) букв в слові:`,
  generateCombinations(`cursor`)
);
