const osoba1 = {
    Ime: 'Ivan',
    Prezime: 'Ivanic',
    Spol: 'M',
    GodRod: 1969,
    GodSmrti: 0,
    Otac: ' ',
    Majka: ' '

}
const osoba2 = {
    Ime: 'Marica',
    Prezime: 'Ivanic',
    Spol: 'Ž',
    GodRod: 1970,
    GodSmrti: 0,
    DjevPrezime: 'Lukic',
    Otac: ' ',
    Majka: ' '

}
const osoba3 = {
    Ime: 'Luka',
    Prezime: 'Ivanic',
    Spol: 'M',
    GodRod: 1990,
    GodSmrti: 0,
    Otac: osoba1,
    Majka: osoba2

}

const osoba4 = {
    Ime: 'Marko',
    Prezime: 'Ivanic',
    Spol: 'M',
    GodRod: 1992,
    GodSmrti: 0,
    Supruznik: ' ',
    Otac: osoba1,
    Majka: osoba2

}

const osoba5 = {
    Ime: 'Ana',
    Prezime: 'Rodic',
    Spol: 'Ž',
    GodRod: 1994,
    GodSmrti: 0,
    DjevPrezime: osoba1.Prezime,
    Otac: osoba1,
    Majka: osoba2

}

const osoba6 = {
    Ime: 'Daniel',
    Prezime: 'Rodic',
    Spol: 'M',
    GodRod: 1989,
    GodSmrti: 0,
    Supruznik: osoba5,
    Otac: ' ',
    Majka: ' '

}

const osoba7 = {
    Ime: 'Gorana',
    Prezime: osoba3.Prezime,
    Spol: 'Ž',
    GodRod: 1997,
    GodSmrti: 0,
    Supruznik: osoba3,
    DjevPrezime: 'Katic',
    Otac: osoba1,
    Majka: osoba2

}

osoba1.Supruznik = osoba2;
osoba2.Supruznik = osoba1;
osoba3.Supruznik = osoba7;

const FamilyTree = [osoba1, osoba2, osoba3, osoba4, osoba5];

function Print(FamilyTree) {

    console.log('Clanovi obitelji su:\n');
    for (let property in FamilyTree) {
        console.log(FamilyTree[property].Ime + ' ' + FamilyTree[property].Prezime);
    }
}

function PrintConsole(FamilyTree) {
    console.log('Clanovi obitelji su:\n');
    for (let property in FamilyTree) {
        console.log(FamilyTree[property]);
    }
}

function UnosNovogClana() {
    /* Ime: 'Marko',
        Prezime: 'Ivanic',
        Spol: 'M',
        GodRod: 1992,
        GodSmrti: 0,
        Supruznik: ' ',
        Otac: osoba1,
        Majka: osoba2*/
    newSpol = prompt('Unesite spol novog clana obitelji:');
    newGodRod = parseInt(prompt('Unesite godinu rodenja novog clana obitelji:'));
    newIme = prompt('Unesite ime novog clana obitelji:');

    let newPerson = {
        Ime: newIme,
        Spol: newSpol,
        GodRod: newGodRod,
        GodSmrti: 0
    }
    return newPerson;
}

function findFather(FamilyTree, newMember) {

    let index = 0;
    let findFatherIme = prompt('Unesite ime oca:');
    index = FamilyTree.findIndex(FamilyTree => FamilyTree.Ime === findFatherIme);

    if (index === -1) {
        console.log('Ne postoji takva osoba u obitelji!');
    } else {
        newMember.Otac = FamilyTree[index];
    }

}

function MemberInfo(FamilyTree) {
    /*Ime: 'Gorana',
    Prezime: osoba3.Prezime,
    Spol: 'Ž',
    GodRod: 1997,*/


    let index = 0;
    let findMemberIme = ' ';
    findMemberIme = prompt('Unesite o kojem clanu zelite vise informacija:');
    index = FamilyTree.findIndex(FamilyTree => FamilyTree.Ime === findMemberIme);
    console.log(index);
    console.log(FamilyTree.findIndex(FamilyTree => FamilyTree.Ime === findMemberIme));

    if (index === -1) {
        console.log('Ne postoji takvo ime osobe u obitelji!');
    } else {
        console.log('Ime: ' + FamilyTree[index].Ime + '\nPrezime: ' + FamilyTree[index].Prezime + '\nSpol: ' + FamilyTree[index].Spol + '\nGodina rodenja: ' + FamilyTree[index].GodRod + '\nOtac: ' + FamilyTree[index].Otac.Ime + '\nMajka: ' + FamilyTree[index].Majka.Ime);

    }

}


function findDeath() {
    let index = 0;
    let findMemberIme = prompt('Unesite ime umrlog clana: ');
    index = FamilyTree.findIndex(FamilyTree => FamilyTree.Ime === findMemberIme);

    if (index === -1) {
        console.log('Ne postoji takvo ime osobe u obitelji!');
    } else {

        delete FamilyTree[index];

    }
}

function SortByName(FamilyTree) {

    FamilyTree.sort((osoba1, osoba2) => {

        return osoba1.Ime < osoba2.Ime ? -1 : 1;

    })



}

function Menu() {

    do {


        choice = parseInt(prompt('Welcome to our menu. Chose one of options what you want to do next!\n 1. Add new member of the family.\n 2. Add new death of a member. \n 3. More info about a member.\n 4. Print Family \n 5. Sort Family by Ime \n 0. Leave the menu'));

        switch (choice) {
            case 1:

                let newMember = UnosNovogClana();


                findFather(FamilyTree, newMember);

                newMember.Prezime = newMember.Otac.Prezime;
                newMember.Majka = newMember.Otac.Supruznik;
                FamilyTree.push(newMember);


                break;
            case 2:

                findDeath();


                break;
            case 3:

                MemberInfo(FamilyTree);

                break;
            case 4:

                Print(FamilyTree);
                PrintConsole(FamilyTree);


                break;

            case 5:

                SortByName(FamilyTree);

                Print(FamilyTree);

                break;

            default:
                alert('Unijeli ste krivi broj!');
                break;
        }

    } while (choice !== 0);

}

Menu();