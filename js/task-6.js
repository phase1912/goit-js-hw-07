function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

const inputEl = document.querySelector('#controls input');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxesContainer = document.getElementById('boxes');

createBtn.addEventListener('click', () => {
    const amount = Number(inputEl.value);

    if (amount < 1 || amount > 100) {
        inputEl.value = '';
        return;
    }

    destroyBoxes();
    createBoxes(amount);
    inputEl.value = '';
});

destroyBtn.addEventListener('click', destroyBoxes);

function createBoxes(amount) {
    const elements = [];
    let size = 30;

    for (let i = 0; i < amount; i++) {
        const div = document.createElement('div');
        div.style.width = `${size}px`;
        div.style.height = `${size}px`;
        div.style.backgroundColor = getRandomHexColor();
        div.style.margin = '5px';
        elements.push(div);
        size += 10;
    }

    boxesContainer.append(...elements);
}

function destroyBoxes() {
    boxesContainer.innerHTML = '';
}
