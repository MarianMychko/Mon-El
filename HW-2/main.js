let userNNum;
do {
    userNNum = parseInt(prompt("Введи своє число N"));
} while (Number.isNaN(userNNum));


console.warn(`%c Твоє число N 👉 ${userNNum}  `, 'background: #221123; color: #fafa52');

let userMNum;
do {
    userMNum = parseInt(prompt("Введи своє число M"));
} while (Number.isNaN(userMNum));

console.warn(`%c Твоє число M 👉 ${userMNum}  `, 'background: #041123; color: #fafa52');

const askSkipEvenNum = confirm(`Пропускати парні числа?`);

console.error(askSkipEvenNum ? `Так пропускаєм` : `Ні не пропускаєм`);

const styleConsole = [
    "padding: 1rem;",
    "background: linear-gradient(to top left, purple, crimson, orangered, gold);",
    "text-shadow: 0 2px crimson;",
    "font: 1.3rem/3 Georgia;",
    "color: white;",
].join("");

let sumNtoM = 0;
for (let loopNtoM = userNNum; loopNtoM <= userMNum; loopNtoM++) {
    if (askSkipEvenNum === true) {
        if (loopNtoM % 2 === 0) {
            continue;
        }
        sumNtoM += loopNtoM;
    } else {
        sumNtoM += loopNtoM;
    }
}
console.log(
    "%c%s",
    styleConsole,
    `Сума чисел від ${userNNum} до ${userMNum} складе   ${sumNtoM}😱`
);

