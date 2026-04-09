/* Snack 1
Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
Stampare a schermo la bici con peso minore.

Snack2
Creare un array di oggetti di squadre di calcio.
Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”.
Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console. */

// Snack 1
// creo l'array di oggetti con nome e peso
const biciDaCorsa = [
    {
        nome: 'bici1',
        peso: 7.8
    },
    {
        nome: 'bici2',
        peso: 7.1
    },
    {
        nome: 'bici3',
        peso: 6.9
    },
    {
        nome: 'bici4',
        peso: 7.5
    }
]

// creo una variabile per tenere traccia della bici più leggera, inizialmente è la prima del array
let biciPiuLeggera = biciDaCorsa[0];

// ciclo for per confrontare il peso di ogni bici con la bici più leggera finora trovata
for (const bici of biciDaCorsa) {
    if (bici.peso < biciPiuLeggera.peso) {
        biciPiuLeggera = bici;
    }
}

// stampo a schermo la bici con peso minore
console.log("La bici con peso minore è:", biciPiuLeggera);


// Snack 2
// creo l'array di squadre con nome, punti e falli subiti
const squadre = [
    { 
        nome: 'Juventus',
        punti: 0,
        falliSubiti: 0 
    },
    { 
        nome: 'Milan',
        punti: 0,
        falliSubiti: 0
    },
    { 
        nome: 'Inter',
        punti: 0,
        falliSubiti: 0
    },
    { 
        nome: 'Roma',
        punti: 0,
        falliSubiti: 0 
    }
];

// funzione per generare un numero random tra min e max
function numeroRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// aggiorno i valori random
// ciclo for per assegnare numeri random a punti e falli subiti di ogni squadra
for (const squadra of squadre) {
    squadra.punti = numeroRandom(1, 100);
    squadra.falliSubiti = numeroRandom(1, 50);
}

// creo il nuovo array con solo nome e falli subiti
// inizializzo un nuovo array vuoto
const nuovoArray = [];
// ciclo for per popolare il nuovo array con oggetti che contengono solo nome e falli subiti
for (const squadra of squadre) {
    nuovoArray.push(
        {
            nome: squadra.nome,
            falliSubiti: squadra.falliSubiti
        }
    );
}

// stampo in console l'array completo delle squadre e il nuovo array con nome e falli subiti
console.log("Array completo squadre:", squadre);
console.log("Array con nome e falli subiti:", nuovoArray);