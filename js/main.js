'use strict'
let img = document.querySelector('img');
let body = document.querySelector('html');
let div = document.querySelector('.displayNone');
let p = document.querySelector('.textInDiv');
let input = document.createElement('textarea');
let span = document.createElement('span');
body.append(span);

img.addEventListener('click', display);
body.addEventListener('click', icon);
div.addEventListener('click', stop);
input.addEventListener('keyup', count)

body.addEventListener('keydown', function(event) {
    if(event.code === 'Escape') {
        img.classList.remove('display');
        div.classList.remove('find');
        div.classList.add('size');
        input.value = '';  
        span.innerHTML = '';
        input.remove();
    };
});

function display(event) {
    img.classList.add('display');
    div.classList.add('find');
    div.prepend(input);
    input.setAttribute('placeholder', 'Введите текст.');
    input.setAttribute('wrap', 'soft');
    input.setAttribute('maxlength', '30');
    input.classList.add('inputCss');
    span.classList.add('spanStyle');
    span.innerHTML = 'Осталось символов 30/30';
};

function icon(event) {
    img.classList.remove('display');
    div.classList.remove('find');
    div.classList.add('size');
    input.value = '';  
    span.innerHTML = '';
    input.remove();
};

function stop(event) {
    event.stopPropagation();
};

function count(event) {
    let keyUp = event.target.value.length;
    if(input.maxLength >= keyUp) {
        span.innerHTML = `Осталось символов ${input.maxLength - keyUp} / ${input.maxLength}`
    }; 
    
};

