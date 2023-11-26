// 1. nacin je sa ovim 'onclick="changetext(e)"' unutar htmla

function changeText(e) {
    console.log(e);
    e.target.innerHTML = 'Changed text!';
}

// 2. NACIN koji se uvijek koristi je eventlistener
// funkcija koja slusa i kad se ispune uvjeti callback se odvija

// biramo div
let middleDiv = document.querySelector('.block.middle');

// dajemo mi listener
middleDiv.addEventListener('click', function(e){
    this.innerHTML = 'ch ch changes!';
    console.log(e);
});

// nemoramo ovako mozemo i ovo priko eventlistenera
let textInput = document.getElementById('text-input');
textInput.onchange = function(e) {
    console.log(e);
    console.log(this.value);
}

// ovako je bolje
textInput.addEventListener('change', function(e) {
    console.log(e);
    console.log(this.value);
});

// dodavanje scrolla
middleDiv.innerHTML = 'first line <br/><br/><br/><br/><br/> last line';
middleDiv.style.height = '100px';
middleDiv.style.overflowY = 'scroll';


// scroll 
middleDiv.addEventListener('scroll', function(e) {
    console.log('scroll');
})

// keypress i ispisivanje istih
document.addEventListener('keypress', logKey);
function logKey(e) {
    console.log(e.code);
}

// focus input
textInput.addEventListener('focus', function(e) {
    this.style.background = 'pink';
});

textInput.addEventListener('blur', function(e) {
    this.style.background = '';
});

// validacije text inputa 
// funkcija za bilo koji event minja znacenje te radnje npr klik na link bi sprjecia vodenje na taj link
textInput.addEventListener('keypress', checkName, false);

function checkName(e) {
    let charCode = e.charCode;
    if (charCode != 0) {
        if (charCode < 97 || charCode > 122) {
            e.preventDefault();
            alert('please use lowercase letters. charcode: ' + charCode);
        }
    }
}

// bubbling and capturing (eventovi u jsu funkc na ova dva principa)
// skoro svi eventovi imaju bubble