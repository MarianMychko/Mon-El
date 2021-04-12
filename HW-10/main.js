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
            const squere = document.createElement("div");
            squere.classList.add("squere");

            row.appendChild(squere);

            function getRandomColor() {
                return `#${(Math.random().toString(16) + '000000').substring(2,8).toUpperCase()}`;
            }
            squere.style.backgroundColor = getRandomColor();
            squere.style.height = "50px"
            squere.style.width = "50px"
            squere.style.margin = "1px"
            squere.style.border = "2px solid #000"
        }

    }
}


function newSqueres() {
    if (!document.querySelector('.template')) {
        blocks();
    }
    document.querySelector('.template').remove();
    blocks()
}

let abort = false

function dynamicSqures() {

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

function stopDynamicSqures() {
    abort = true
}