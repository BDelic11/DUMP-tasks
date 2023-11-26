alert("Dobar dan! Welcome ti Chance Winnner. Imate 200kn pocetnog uloga");
let credit = 200;


function Rand(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function StartSmallGame() {

}

function CreateBet() {

    bet = parseInt(prompt('credit: ' + credit + ' kn \nUnesite bet sa kojim zelite igrati! '));

    while (bet > credit) {
        alert(' Imate ' + credit + ' credita. Nemate dovoljno! Upisite neki drugi bet');
        bet = parseInt(prompt("Unesite bet sa kojim zelite igrati! "));

    }

    while (bet <= 0) {
        alert('Bet mora biti veci od nula');
        bet = parseInt(prompt("Unesite bet sa kojim zelite igrati! "));
    }

    while (bet === NaN) {
        alert('Bet mora biti broj');
        bet = parseInt(prompt("Unesite bet sa kojim zelite igrati! "));
    }

    return bet;
}


function MyAndRandNum(credit, chanceNum) {

    let number = 0;

    number = parseInt(prompt("Unesite broj od 1 do " + chanceNum));

    alert('Vas broj je: ' + number);

    randomNumber = Rand(1, chanceNum);

    alert('Random izgenerirani broj je: ' + randomNumber);

    credit = CheckWin(randomNumber, number, credit, win);

    return credit;
}

function CheckWin(randomNumber, number, credit, win) {

    if (number === randomNumber) {
        credit = credit + win;
        alert('Cestitamooo osvojili ste: ' + win + ' kn!!!\nVas credit sada iznosi: ' + credit + 'kn');

        if (confirm('Zelite li udvostruciti dobitak? ')) {

            bet = 0;
            chanceNum = 0;
            number = 0;
            randomNumber = 0;
            StartSmallGame();

        }

        return credit;

    } else {

        alert('Nazalost niste uspijesno pogodili broj :(... Pokusajte ponovo! \n Ostalo vam je:  ' + credit + ' kn');
        return credit;

    }
}

function CatchChanceNum() {

    chanceNum = parseInt(prompt('credit: ' + credit + ' kn \nUnesite broj koji nam govori od koliko brojeva zelite pogoditi!'));

    while (chanceNum < 1) {
        alert('Pokusajte ponovo, izaberite broj veci od 1!');
    }

    return chanceNum;
}

//main part


do {

    let bet = 0;
    let chanceNum = 0;
    let number = 0;
    let randomNumber = 0;



    if (confirm('Zelite li zapoceti igru ili nastaviti igrati? ')) {

        bet = CreateBet();

        credit = credit - bet;

        chanceNum = CatchChanceNum();

        win = chanceNum * 0.8 * bet;

        credit = MyAndRandNum(credit, chanceNum);


        if (credit === 0) {
            alert('Nemate vise kredita!!!!')
        }

    } else credit = 0;

} while (credit !== 0);


alert('Game over!');