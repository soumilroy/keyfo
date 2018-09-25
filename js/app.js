"use strict";

function removeTransition(e) {
    e.target.classList.remove('active');
}

function getKeys(e) {
    const getKey = document.querySelector(`.key[data-key="${e.which}"]`);

    if(e.metaKey || !getKey ) {
        e.preventDefault();
        return;
    }
    
    getKey.classList.add('active');
    eventKey.innerHTML = `${e.key}`;
    eventWhich.innerHTML = charCode.innerHTML = `${e.which}`;
    eventCode.innerHTML = `${e.code}`;
}

const keyview = document.querySelector('.keyfo-view');
const eventKey = document.querySelector('.event-key');
const eventWhich = document.querySelector('.event-which');
const eventCode = document.querySelector('.event-code');
const charCode = document.querySelector('.charcode');

let keys = Array.from(document.querySelectorAll('.key'));
keys.forEach( key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', getKeys );

// const keys = document.querySelector('.key');