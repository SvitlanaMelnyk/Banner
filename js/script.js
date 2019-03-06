'use strict';

let closeBox = document.querySelector('.close');

closeBox.addEventListener('click', closeExpandableBox);


function closeExpandableBox() {
    let expandableBox = document.querySelector('.expandableBox');
    let overlay = document.querySelector('.overlay');

    expandableBox.style.display = 'none';
    overlay.style.display = 'none';

    if (window.getComputedStyle(expandableBox).display === "none"
        && window.getComputedStyle(overlay).display === "none") {
        expandableBox.style.display = "block";
        overlay.style.display = 'block';
    }
}