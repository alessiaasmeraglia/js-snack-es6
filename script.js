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

for (let i = 1; i < biciDaCorsa.length; i++) {
    if (biciDaCorsa[i].peso < biciPiuLeggera.peso) {
        biciPiuLeggera = biciDaCorsa[i];
    }
}

console.log("La bici con peso minore è:", biciPiuLeggera);