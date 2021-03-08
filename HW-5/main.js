//1

function getRandomArray(length, min, max) {
  let result = Array.from({
    length,
  });

  return result.map((number) =>
    Math.floor(Math.random() * (max - min + 1) + min)
  );
}

console.log(`Масив випадкових цілих чисел: `, getRandomArray(8, 3, 333));

//3

function getAverage(...numbers) {
  const integerArr = numbers.filter((number) => Number.isInteger(number));
  const sum = integerArr.reduce((sum, number) => {
    return sum + number;
  }, 0);

  return sum / integerArr.length;
}

console.log(
  `Cереднє арифметичне всіх переданих в неї аргументів:`,
  getAverage(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)
);

//5

function filterEvenNumbers(...numbers) {
  const result = numbers.filter((number) => {
    return number % 2;
  });

  return result;
}

console.log(`Фільтрує парні числа`, filterEvenNumbers(1, 2, 3, 4, 5, 6));

//6

function countPositiveNumbers(...numbers) {
  const result = numbers.filter((number) => {
    return number > 0;
  });

  return result;
}

console.log(
  `Рахує кількість чисел більших 0`,
  countPositiveNumbers(0, 1, -2, 3, -4, -5, 6)
);

//7

function getDividedByFive(...numbers) {
  const result = numbers.filter((number) => {
    return number % 5 === 0;
  });

  return result;
}

console.log(
  `Відфільтрує усі елементи в масиві та залишить тільки ті, які діляться на ціло на 5`,
  getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2)
);

//8

let allBadWords = ['fuck', 'shit'];

function replaceBadWords(string, ...badWords) {
  if (badWords) {
    allBadWords = allBadWords.concat(badWords);
  }

  const wordsArray = string.split(' ');

  const censoredArray = wordsArray.map((word) => {
    const currentWord = word.toLowerCase();
    let censoredWord = '';

    allBadWords.forEach((badWord) => {
      if (currentWord.includes(badWord)) {
        const hide = '*'.repeat(badWord.length);
        censoredWord = currentWord.replaceAll(badWord, hide);
      }
    });

    return censoredWord || word;
  });

  return censoredArray.join(' ');
}

console.log(`Замінить погані слова на зірочки *:`,replaceBadWords("Holy shit!"), replaceBadWords("It's bullshit!"));


//10

function generateCombinations(word) {
  const comb = function(active, rest, arr) {
      if (!active && !rest)
          return;
      if (!rest) {
          arr.push(active);
      } else {
          comb(active + rest[0], rest.slice(1), arr);
          comb(active, rest.slice(1), arr);
      }
      return arr;
  }
  return comb("", word, []);
}


console.log(`Видає всі можливі перестановки(унікальні, без повторень) букв в слові:`,generateCombinations(`cursor`));
