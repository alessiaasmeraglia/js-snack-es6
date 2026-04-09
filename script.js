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

let biciPiuLeggera = biciDaCorsa[0];

for (const bici of biciDaCorsa) {
    if (bici.peso < biciPiuLeggera.peso) {
        biciPiuLeggera = bici;
    }
}


console.log("La bici con peso minore è:", biciPiuLeggera);


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

function numeroRandom(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// aggiorno i valori random
for (const squadra of squadre) {
    squadra.punti = numeroRandom(1, 100);
    squadra.falliSubiti = numeroRandom(1, 50);
}

// creo il nuovo array con solo nome e falli subiti
const nuovoArray = [];

for (const squadra of squadre) {
    nuovoArray.push(
        {
            nome: squadra.nome,
            falliSubiti: squadra.falliSubiti
        }
    );
}

console.log("Array completo squadre:", squadre);
console.log("Array con nome e falli subiti:", nuovoArray);