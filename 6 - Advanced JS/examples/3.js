let number;
let choice;
 
do {   

    number = prompt('Unesite neki broj:\n');

    if (isNaN(number)) {
        console.log('Nije broj');
        number = prompt('Unesite neki broj:\n');
        if (number === null) {
            break;
        }
    }

    choice = prompt('Unesite na koji nacin zelite ispisati uneseni broj:');

    switch (choice) {

        case 'console log':
            console.log(number);
            break;

        case 'alert':
            alert(number);
            break;

        case 'izlaz':
            choice = 0;
        break;
    
        default:

        console.log('Unijeli ste krivu naredbu!');

            break;
    }

} while (choice !== 0 && number !== 0);
