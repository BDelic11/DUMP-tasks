let jsonPerson = '{"firstName":"Ivan", "lastName":"Lukic", "age": 30}';

let person =JSON.parse(jsonPerson);

console.log(person);
console.log(jsonPerson);

console.log(JSON.stringify(person));

// imamo JSON.stringify (objekt u string) i JSON.parse (string u objekt)

person.children = [

    {
        firstName: 'Stipe',
        age: 10
    },

    {
        firstName: 'Ana',
        age: 20
    }

];

console.log(JSON.stringify(person));

// local storage imamo .getItem (uzimamo iz) i .setItem (ako nema nista sa ovim ga stavljamo tamo) -> NE SPREMAMO GA KA 
// OBICNI OBJEKT NEGO SA stringify!
// ako ga hocemo opet koristit u kodu ka objekt trebamo ga raspakirat sa JSON.parse 

let personFromStorage = localStorage.getItem('person');

if (!personFromStorage) {
    
    localStorage.setItem('person', JSON.stringify(person));
}

console.log(JSON.parse(personFromStorage));

// funkcije removeItem i clear
localStorage.removeItem('person');
localStorage.clear();