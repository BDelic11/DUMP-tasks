const firstPerson = {
    ime: 'Ivani',
    prezime: 'Ivic',
    visina: 189
};

const secondPerson = {
    ime: 'Ana',
    prezime: 'Ran',
    visina: 179
};

const thirdPerson = {
    ime: 'Ani',
    prezime: 'Pos',
    visina: 169
};

const forthPerson = {
    ime: 'Kos',
    prezime: 'Pos',
    visina: 240
};

const fifthPerson = {
    ime: 'Lik',
    prezime: 'Avtem',
    visina: 220
};

let people = [firstPerson, secondPerson, thirdPerson, forthPerson];
console.log(people);

people.push(fifthPerson);

function FindFirst(people) {
    let firstK = null;
    firstK = people.find(people => people.ime[0] === 'J');
    if (!firstK) console.log('nema takvog imena');
    else console.log(firstK);
}

///sort people by surname then name
people.sort((firstPerson, secondPerson) => {
    if (firstPerson.prezime < secondPerson.prezime) {
        return -1;
    } else if (secondPerson.prezime < firstPerson.prezime) {
        return 1;
    } else return firstPerson.ime < secondPerson.ime ? -1 : 1;
})

console.log(people);

FindFirst(people);

////find tall people
let TallPeople = null;
TallPeople = people.filter(people => people.visina > 200)
if (TallPeople.length !== 0)
    console.log('Postoje ljuddu i veci od 200 i to su:\n ', TallPeople)
else
    console.log('Nema takvih');

///start/end with vowel
let vowelPeople = null;
/*vowelPeople = people.filter(people => (people.ime[0].includes('I') || people.ime[0].includes('E') || people.ime[0].includes('A') || people.ime[0].includes('O')) && (
    people.ime[people.length - 1].includes('I') || people.ime[people.length - 1].includes('E') || people.ime[people.].includes('A') || people.ime[people.length - 1].includes('O')));
*/

let name = 'Ivo';
console.log(name);
console.log(name.toUpperCase());
vowelPeople = people.filter(people => ((people.ime[0].toUpperCase().includes('I') || people.ime[0].toUpperCase().includes('A')) && (people.ime[people.ime.length - 1].toUpperCase().includes('I') ||
    people.ime[people.ime.length - 1].toUpperCase().includes('A'))));

if (vowelPeople.length !== 0)
    console.log('Postoje ljudi kojima ime pocinje i zavrsava sa samoglasnikom i to su:\n', vowelPeople);
else
    console.log('Nema takvih');


for (let i = 0; i < people.length; i++) {
    console.log(people[i].ime, people[i].prezime, people[i].visina);
}

let osobaIspis = prompt('Upisite ime osobe cije podatke zelite vidjeti?\n Pogledajte u console ispis ljudi');
let index = people.findIndex(people => people.ime.toUpperCase() === osobaIspis.toUpperCase())
if (index === -1)
    alert('Nema imena');
else console.log(index)
alert(alert(`${ people[index].ime }\t ${people[index].prezime }\t ${ people[index].visina }\n`));


/*for (let i = 0; i < people.length - 1; i++) {
    if (osobaIspis.toUpperCase() === people[i].ime.toUpperCase()) {
        osobaIspis[i] = people[i];
    }
}

if (osobaIspis) {
    alert(`${ osobaIspis.ime }\t ${osobaIspis.prezime }\t ${ osobaIspis.visina }\n`);

} else if (osobaIspis === undefined) alert('Nema takve osobe');
*/

/* (people.ime[i] !== osobaIspis) {
    if (osobaIspis === people[i].ime) {
        osobaIspis = people[i];
        alert(`${ osobaIspis.ime }\t ${osobaIspis.prezime }\t ${ osobaIspis.visina }\n`);

    } else alert('Nema takve osobe')
    i++;
}*/

/*if (people.filter(people => people.ime === osobaIspis)) {
    osobaIspis = people[i];
    alert(`${ osobaIspis.ime }\t ${osobaIspis.prezime }\t ${ osobaIspis.visina }\n`);
} else alert('Nema takve osobe')
*/
//console.log(people.find(people.ime === 'Lik'))