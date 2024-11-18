/*
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

*/

document.addEventListener('DOMContentLoaded', () => {
    const openBtn = document.querySelector('#estilo1');
    const closeBtn = document.querySelector('#cerrar-overlay1');
    const overlay = document.querySelector('#info-estilo1');

    openBtn.addEventListener('click', () => {
        overlay.style.display = 'block';
    })

    closeBtn.addEventListener('click', () => {
        overlay.style.display = 'none';
    })   
});

document.addEventListener('DOMContentLoaded', () => {
    const openBtn = document.querySelector('#estilo2');
    const closeBtn = document.querySelector('#cerrar-overlay2');
    const overlay = document.querySelector('#info-estilo2');

    openBtn.addEventListener('click', () => {
        overlay.style.display = 'block';
    })

    closeBtn.addEventListener('click', () => {
        overlay.style.display = 'none';
    })   
});

document.addEventListener('DOMContentLoaded', () => {
    const openBtn = document.querySelector('#estilo3');
    const closeBtn = document.querySelector('#cerrar-overlay3');
    const overlay = document.querySelector('#info-estilo3');

    openBtn.addEventListener('click', () => {
        overlay.style.display = 'block';
    })

    closeBtn.addEventListener('click', () => {
        overlay.style.display = 'none';
    })   
});

document.addEventListener('DOMContentLoaded', () => {
    const openBtn = document.querySelector('#estilo4');
    const closeBtn = document.querySelector('#cerrar-overlay4');
    const overlay = document.querySelector('#info-estilo4');

    openBtn.addEventListener('click', () => {
        overlay.style.display = 'block';
    })

    closeBtn.addEventListener('click', () => {
        overlay.style.display = 'none';
    })   
});

document.addEventListener('DOMContentLoaded', () => {
    const openBtn = document.querySelector('#estilo5');
    const closeBtn = document.querySelector('#cerrar-overlay5');
    const overlay = document.querySelector('#info-estilo5');

    openBtn.addEventListener('click', () => {
        overlay.style.display = 'block';
    })

    closeBtn.addEventListener('click', () => {
        overlay.style.display = 'none';
    })   
});

document.addEventListener('DOMContentLoaded', () => {
    const openBtn = document.querySelector('#estilo6');
    const closeBtn = document.querySelector('#cerrar-overlay6');
    const overlay = document.querySelector('#info-estilo6');

    openBtn.addEventListener('click', () => {
        overlay.style.display = 'block';
    })

    closeBtn.addEventListener('click', () => {
        overlay.style.display = 'none';
    })   
});

/* 

var theVideo = document.getElementById('video-estudio'), theTxt = document.querySelector('.overlap-2');

function vidPlay(){
    theVideo.play();
    theVideo.setAttribute('controls', 'controls');
    theTxt.style.opacity = "0";
    theTxt.style.transition = "all .5s";
    theTxt.style.display = "none";
}

theVideo.onended = function(){
    theTxt.style.opacity = "1";
    theTxt.style.transition = "all .5s";
    theTxt.style.display = "block";
    theVideo.load();
    theVideo.controls = false;
}



thevideo -> video 
txt-cont -> overlap-2
txt-video -> txt-video

*/