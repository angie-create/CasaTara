const buttonElement1 = document.getElementById('estilo1');
const pElement1 = document.getElementById('info-estilo1');

const buttonElement2 = document.getElementById('estilo2');
const pElement2 = document.getElementById('info-estilo2');

const buttonElement3 = document.getElementById('estilo3');
const pElement3 = document.getElementById('info-estilo3');

const buttonElement4 = document.getElementById('estilo4');
const pElement4 = document.getElementById('info-estilo4');

const buttonElement5 = document.getElementById('estilo5');
const pElement5 = document.getElementById('info-estilo5');

const buttonElement6 = document.getElementById('estilo6');
const pElement6 = document.getElementById('info-estilo6');

const toggleHiddenElement = (domElement) => {
    if (domElement.style.display == 'none') {
        domElement.style.display = 'block';
    } else {
        domElement.style.display = 'none';
    }
}

buttonElement1.addEventListener('click', () => {
    toggleHiddenElement(pElement1);
});

buttonElement2.addEventListener('click', () => {
    toggleHiddenElement(pElement2);
});

buttonElement3.addEventListener('click', () => {
    toggleHiddenElement(pElement3);
});

buttonElement4.addEventListener('click', () => {
    toggleHiddenElement(pElement4);
});

buttonElement5.addEventListener('click', () => {
    toggleHiddenElement(pElement5);
});

buttonElement6.addEventListener('click', () => {
    toggleHiddenElement(pElement6);
});