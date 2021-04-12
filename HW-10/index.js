const limit = 5;

function blocks() {
    const template = document.createElement('div');
    template.classList.add('template')
    for (let i = 0; i < limit; i++) {

        document.body.append(template)
        const row = document.createElement('div');
        row.classList.add('row');
        row.style.display = 'flex'
        template.appendChild(row);

        for (let j = 0; j < limit; j++) {
            const block = document.createElement("div");
            block.classList.add("block");

            row.appendChild(block);

            function getRandomColor() {
                return `#${(Math.random().toString(16) + '000000').substring(2,8).toUpperCase()}`;
            }
            block.style.backgroundColor = getRandomColor();
            block.style.height = "50px"
            block.style.width = "50px"
            block.style.margin = "1px"
            block.style.border = "2px solid #000"
        }

}
}

function newBlocks() {
    if (!document.querySelector('.template')) {
        blocks();
    }
    document.querySelector('.template').remove();
    blocks()
}

let abort = false

function dynamicBlocks() {

    abort = false
    setInterval(() => {
        if (abort == true) {
            return
        }
        if (!document.querySelector('.template')) {
            blocks();
        }
        document.querySelector('.template').remove();
        blocks()

    }, 1000)
}

function stopDynamicBlocks() {
    abort = true;
}