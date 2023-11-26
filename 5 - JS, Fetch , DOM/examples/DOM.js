// stranica da moze reagirat na radnje bez koristenja promptova
// stablo objekata
// trebamo moc dohvatit iz htmla da bi mogli manipulirati

// 1. METODA DOHVACANJA JE:  --------->     'document.getElementById('first')'
let firstDiv = document.getElementById('first');
console.log(firstDiv);


// minjanje sadrzaja dohvacenog elementa:   ---> 'innerHTML'
firstDiv.innerHTML = 'Im on top!';


// 2. METODA DOHVACANJE VISE elementa: ----->   'document.getElementsByClassName();' 
let blockDivs = document.getElementsByClassName('block');
console.log(blockDivs);

for(let div of blockDivs) {
    div.style.backgroundColor = 'yellow';
}


// document.querySelector('.block') 
// Dohvacamo samo prvi element!
// Koristimo ga kad trebamo napredniji selektor
blockDivs = document.querySelector('.block');

// document.querySelectorAll('.block')
// Dohvacamo sve elemente!
blockDivs = document.querySelectorAll('.block');

for(let div of blockDivs) {
    div.style.backgroundColor = 'white';
}

let middleDiv = document.querySelector('.block.middle');

// neradi se nikad ovako style nego preko klasa 
if (middleDiv) {
    middleDiv.style.height = '200px';
}

/*
middleDiv.classList.add;
middleDiv.classList.remove;
*/

console.log(document.title);
document.title = 'test';

console.log(document.body);

// Micanje elemementa iz html strukture
middleDiv.remove();

// visina i sirina elementa
console.log(firstDiv.scrollHeight);
console.log(firstDiv.scrollWidth);


// Cookies
console.log(document.cookie);

document.cookie = 'test1=helloo; SameSite=None; Secure';
console.log(document.cookie);

fetch('https://dummyapi.io/data/v1/user', {
    headers: {
        'app-id': '6414b71a3bb7f879fa89ec3a'
    }
} ).then(response => response.json())
.then(json => {
    let firstUser = json.data[0];

    document.body.innerHTML += 
    `
    <div class="user">
    <div class="first-name">${firstUser.firstName}</div>
    <div class="last-name">${firstUser.lastName}</div>
    <img src="${firstUser.picture}" alt="pic" class="image">
</div>
    `

});