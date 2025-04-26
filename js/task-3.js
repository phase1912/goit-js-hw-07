const nameInput = document.getElementById('name-input');
const nameOutput = document.getElementById('name-output');

if (nameInput) {
    nameInput.addEventListener('input', function (event) {
        if (event.target.value) {
            const valueWithoutSpaces = event.target.value.replace(/\s+/g, '');

            nameOutput.textContent = valueWithoutSpaces || 'Anonymous';
        } else {
            nameOutput.textContent = 'Anonymous';
        }
    });
}
