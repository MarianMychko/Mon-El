let userNNum;
do {
  userNNum = parseInt(prompt("Введи своє число N"));
} while (Number.isNaN(userNNum));

let userMNum;
do {
  userMNum = parseInt(prompt("Введи своє число M"));
} while (Number.isNaN(userMNum));

if (userNNum < userMNum) {
  console.warn(
    `%c Число N 👉 ${userNNum}, Число M 👉 ${userMNum}`,
    "background: #041123; color: #fafa52"
  );
} else {
  let reverseMtoN = userNNum;
  userNNum = userMNum;
  userMNum = reverseMtoN;
  console.warn(`міняєм числа місцями N 👉 ${userNNum}, M 👉 ${userMNum}`);
}

const askSkipEvenNum = confirm(`Пропускати парні числа?`);

console.error(askSkipEvenNum ? `Так пропускаєм` : `Ні не пропускаєм`);

let sumNtoM = 0;
for (let loopNtoM = userNNum; loopNtoM <= userMNum; loopNtoM++) {
  {if (askSkipEvenNum && loopNtoM % 2 ===0) {
      continue;
    }
    sumNtoM += loopNtoM;
  }
}

const styleConsole = [
  "padding: 1rem;",
  "background: linear-gradient(to top left, purple, crimson, orangered, gold);",
  "text-shadow: 0 2px crimson;",
  "font: 1.3rem/3 Georgia;",
  "color: white;",
].join("");

console.log(
  "%c%s",
  styleConsole,
  `Сума чисел від ${userNNum} до ${userMNum} складе   ${sumNtoM}😱`
);

