function* createIdGenerator() {
    for(let i = 1; i < Infinity; i++) {
        yield i;
    };
};
const idGenerator = createIdGenerator();
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);
console.log(idGenerator.next().value);


const body = document.querySelector('body');
body.style.fontSize = `18px`;
body.insertAdjacentHTML('beforeend', `<p id="CurrentFontSize">Current font size: ${body.style.fontSize}</p>`)

function* newFontGenerator(value) {
    currentSize = body.style.fontSize.substr(0, 2);
    while(currentSize) {
        if(value === "up") {
            currentSize++;
            yield currentSize
        } else if(value === "down") {
            currentSize--;
            yield currentSize
        };
    };
};

const buttonDown = document.getElementById('ButtonDown');
const buttonUp = document.getElementById('ButtonUp');
const fontUp = newFontGenerator("up");
const fontDown = newFontGenerator("down");

buttonDown.addEventListener("click", () => {
    body.style.fontSize = `${fontDown.next().value}px`;
    document.getElementById('CurrentFontSize').remove();
    body.insertAdjacentHTML('beforeend', `<p id="CurrentFontSize">Current font size: ${body.style.fontSize}</p>`);
});
buttonUp.addEventListener("click", () => {
    body.style.fontSize = `${fontUp.next().value}px`;
    document.getElementById('CurrentFontSize').remove();
    body.insertAdjacentHTML('beforeend', `<p id="CurrentFontSize">Current font size: ${body.style.fontSize}</p>`);
});