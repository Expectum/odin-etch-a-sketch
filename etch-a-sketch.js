const container = document.querySelector('#container');
for (let i = 1; i <= 256; i++) {
    const div = document.createElement('div');
    container.appendChild(div);
}
if (div.matches(':hover')) {
div.classlist.toggle('green');
}