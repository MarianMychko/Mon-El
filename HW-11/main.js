const classKey = document.querySelector('.key');
const classSounds = document.querySelector('.sounds');
document.addEventListener('keydown', function clickKey(event) {
    const key = '.' + event.code
    if (classKey.querySelector(key) === null)
    return;
    classKey.querySelector(key).classList.add('style');
    classSounds.querySelector(key).play();
})
document.addEventListener('keyup', function clickKey(event) {
    const key = '.' + event.code;
    if (classKey.querySelector(key) === null)
    return;
    classKey.querySelector(key).classList.remove('style');
})
document.addEventListener('click', function clickMouse(event) {
    const key = '.' + event.target.className;
    if (classKey.querySelector(key) === null)
    return;
    classSounds.querySelector(key).play();
})