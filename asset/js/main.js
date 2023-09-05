/*
Sfruttiamo le timing functions per fare il conto alla rovescia per la correzione di domani!
Ogni secondo il nostro countdown dovrà scalare fino alle 9:30 di domani mattina!
*/
const dataAttuale = new Date();
console.log('la data attuale è: ' + dataAttuale);

const dataConsegna = new Date(2023, 08, 06, 09, 30);
console.log('la data di consegna è: ' + dataConsegna);

console.log('è iniziato il countdown!!!');

let second = Math.round((dataConsegna - dataAttuale) / 1000);

const clock = setInterval(function(){
    if (second == 0) {
        clearInterval(clock);
        alert('è il momento di consegnare!!!')
    } else {
        document.querySelector('h3').innerHTML = 'Mancano esattamente: ' + second + ' secondi';
        second--
    }
}, 1000)