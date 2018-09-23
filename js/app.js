"use strict";

function removeTransition(e) {
    if( e.propertyName !== 'transform' ) return;

    e.target.classList.remove('active');
}


function getKeys(e) {
    const getKey = document.querySelector(`.key[data-key="${e.which}"]`);

    if(e.metaKey || !getKey ) {
        e.preventDefault();
        return;
    }
    
       console.log(e);
    getKey.classList.add('active');
    keyview.innerHTML += `${e.key}`;
    
}

const keyview = document.querySelector('.keyfo-view');
let keys = Array.from(document.querySelectorAll('.key'));
keys.forEach( key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown', getKeys );

// const keys = document.querySelector('.key');