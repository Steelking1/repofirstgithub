function daysBetweenDates (firstdate, secondDate) {
    return (secondDate - firstdate) / (1000 * 3600 * 24);
}

var nbOfDays = daysBetweenDates(new Date(2022,9,14), new Date());


var intro = 'Il y\'a ';
var unités = ' jours';
// durée recente c-a-d inferieur à un jour
if (nbOfDays == 0) {
    nbOfDays = 'Récemment';
    intro = '';
    unités = '';
}

// durée inferieur à trente jours

if (nbOfDays < 30) {
    nbOfDays = Math.trunc(nbOfDays);
    
    if (nbOfDays == 1) {
        unités = ' jour'
    }
}

// durée en mois
if ( nbOfDays >= 30 && nbOfDays < 365) {
    nbOfDays = Math.trunc(nbOfDays / 30);
    unités = ' mois';
}

// durée en années
if (nbOfDays >= 365) {
    nbOfDays = Math.trunc(nbOfDays / 365);

    if ( nbOfDays == 1) {
        unités = ' an';
    } else {
        unités = ' ans';
    }
}

// ajouter la date au html
dateur = document.querySelector('.dateur');
dateur.textContent = intro + nbOfDays + unités;