function daysBetweenDates (firstdate, secondDate) {
    return (secondDate - firstdate) / (1000 * 3600 * 24);
}

// ajouter la date au html
dateur = document.querySelectorAll('.dateur');

    var a = daysBetweenDates(new Date(2022,9,14), new Date());
    var b = daysBetweenDates(new Date(2022,7,14), new Date());
    var c = daysBetweenDates(new Date(2021,9,14), new Date());
    var d = daysBetweenDates(new Date(2022,8,14), new Date());

    var nbOfDaysT = [a, b, c, d];

    for (let i = 0; i < nbOfDaysT.length; i++) {
        
        console.log(nbOfDaysT[i])

        var intro = 'Il y\'a ';
        var unités = ' jours';
        // durée recente c-a-d inferieur à un jour
        if (nbOfDaysT[i] == 0) {
            nbOfDaysT[i] = 'Récemment';
            intro = '';
            unités = '';
        }

        
        // durée inferieur à trente jours

        if (nbOfDaysT[i] < 30) {
            nbOfDaysT[i] = Math.trunc(nbOfDaysT[i]);
            
            if (nbOfDaysT[i] == 1) {
                unités = ' jour'
            }
        }

        // durée en mois
        if ( nbOfDaysT[i] >= 30 && nbOfDaysT[i] < 365) {
            nbOfDaysT[i] = Math.trunc(nbOfDaysT[i] / 30);
            unités = ' mois';
        }

        // durée en années
        if (nbOfDaysT[i] >= 365) {
            nbOfDaysT[i] = Math.trunc(nbOfDaysT[i] / 365);

            if ( nbOfDaysT[i] == 1) {
                unités = ' an';
            } else {
                unités = ' ans';
            }
        }

    //
    dateur.forEach(dt => {
        dt.textContent = intro + nbOfDaysT[i++] + unités;   
    });
}
