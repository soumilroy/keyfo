"use strict";

window.addEventListener('DOMContentLoaded', (evt) => { 
    
    const eventWhich = document.querySelector('.event-which');
    const eventCode = document.querySelector('.event-code');
    const charCode = document.querySelector('.charcode');
    let keys = Array.from(document.querySelectorAll('[data-key]'));
    
    keys.forEach( key => key.addEventListener('transitionend', removeTransition));
    window.addEventListener('keydown', getKeys );

    function removeTransition(e) {
        e.target.classList.remove('active');
    }

    function getKeys(e) {
        const getKey = document.querySelector(`[data-key="${e.which}"]`);

        if(e.metaKey || !getKey ) 
            return;
        
        getKey.classList.add('active');
        eventWhich.innerHTML = charCode.innerHTML = `${e.which}`;
        eventCode.innerHTML = `${e.code}`;
    }
});