
function daysBetweenDates (firstdate, secondDate) {
    return (secondDate - firstdate) / (1000 * 3600 * 24);
}

var nbOfDays1 = {
    pub1: daysBetweenDates(new Date(2022,9,14), new Date()),
    pub2: daysBetweenDates(new Date(2022,9,12), new Date()),
}
//

var intro = 'Il y\'a ';
var unités = ' jours';
// durée recente c-a-d inferieur à un jour
if (nbOfDays1.pub1 == 0 || nbOfDays1.pub2 == 0) {
    nbOfDays1.pub1 = 'Récemment';
    nbOfDays1.pub2 = 'Récemment';
    intro = '';
    unités = '';
}

// durée inferieur à trente jours

if (nbOfDays1.pub1 < 30 || nbOfDays1.pub2 < 30) {
    nbOfDays1.pub1 = Math.trunc(nbOfDays1.pub1);
    nbOfDays1.pub2 = Math.trunc(nbOfDays1.pub2);
    
    if (nbOfDays1.pub1 == 1 || nbOfDays1.pub2 == 1) {
        unités = ' jour'
    }
}

// durée en mois
if ( (nbOfDays1.pub1 >= 30 && nbOfDays1.pub1 < 365) || (nbOfDays1.pub2 >= 30 && nbOfDays1.pub2 < 365)) {
    nbOfDays1.pub1 = Math.trunc(nbOfDays1.pub1 / 30);
    nbOfDays1.pub2 = Math.trunc(nbOfDays1.pub2 / 30);
    unités = ' mois';
}

// durée en années
if (nbOfDays1.pub1 >= 365 || nbOfDays1.pub2 >= 365) {
    nbOfDays1.pub1 = Math.trunc(nbOfDays1.pub1 / 365);
    nbOfDays1.pub2 = Math.trunc(nbOfDays1.pub2 / 365);

    if ( nbOfDays1.pub1 == 1 || nbOfDays1.pub2 == 1) {
        unités = ' an';
    } else {
        unités = ' ans';
    }
}

// ajouter la date au html
dateur = document.querySelectorAll('.dateur');
for (let i = 0; i < dateur.length; i++) {
    dateur[0].textContent = intro + nbOfDays1.pub1 + unités;
    dateur[1].textContent = intro + nbOfDays1.pub2 + unités;
    dateur[2].textContent = intro + nbOfDays1.pub2 + unités;
    dateur[i++].textContent = intro + nbOfDays1.pub2 + unités;
    
}

//dateur.textContent = intro + nbOfDays1.pub1 + unités;
