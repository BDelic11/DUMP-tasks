// window glavni globalni objekt -> console log, alert, prompt sve je od tu

// history taba u aplikaciji

console.log(history);

// back vraca stranicu na kojoj si bia prije
history.back();

history.pushState({page:1}, 'title 1' ,'?page=!');

console.log(location.href);
// location.href = '..';

console.log(innerHeight);
console.log(innerWidth);

console.log(scrollX);
console.log(scrollY);

let middleDiv = document.querySelector('.inputButtonContainer');
middleDiv.style.height = '1000px';

window.addEventListener('scroll', function(e){
    console.log(scrollY);
});

//otvaranje novih tabova window.open

window.open('https://dump.hr');
window.open('https://dump.hr', null, 'popup');