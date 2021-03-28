const container = document.createElement('div');
container.className = 'container';
document.body.append(container);

const chordNames = ['Q', 'W', 'E', 'R', 'T', 'Y'];

function generateButtons() {
  let button;

  for (let i = 0; i < 6; i++) {
    button = document.createElement('button');
    button.className = chordNames[i];
    button.innerHTML = chordNames[i];
    container.appendChild(button);
  }
  return container;
}
generateButtons();

container.addEventListener('mousedown', function (event) {
  event.target.style = 'border-color: rgb(150, 35, 45);';
  new Audio(`./Sounds/${event.target.className}.mp3`).play();
});

container.addEventListener('mouseup', function (event) {
  event.target.style = 'border-color: rgb(0, 0, 0);';
});

document.addEventListener('keydown', function (event) {
  if (chordNames.includes(event.key.toUpperCase())) {
    var element = document.getElementsByClassName(event.key.toUpperCase())[0];
    element.style = 'border-color: rgb(150, 35, 45);';
    new Audio(`./Sounds/${event.key.toUpperCase()}.mp3`).play();
  }
});

document.addEventListener('keyup', function (event) {
  if (chordNames.includes(event.key.toUpperCase())) {
    var element = document.getElementsByClassName(event.key.toUpperCase())[0];
    element.style = 'border-color: rgb(0, 0, 0);';
  }
});
