function headerScript() {     
    var deroulant = document.querySelector('.sub-btn');
    var list_deroulant = document.querySelector('.sub-menu');

    deroulant.addEventListener('click', ()=> {
        list_deroulant.classList.toggle('active')
    });

    // javascript pour une nav responsive 

    var menu = document.querySelector('.menu');
    var menuBtn = document.querySelector('.menu-btn');

    menuBtn.addEventListener('click', ()=> {
        menu.classList.toggle('show-nav');
        menuBtn.classList.toggle('active');
    });

    //enlever le menu lors du click

    var navLink = document.querySelectorAll('.link');

    navLink.forEach(link =>{ 
        link.addEventListener('click', function(event) {
            if (!event.target.matches('.menu-btn') && menu.classList.contains('show-nav')) {
                    menu.classList.toggle('show-nav');
                    menuBtn.classList.toggle('active');

                }
            }
        )
    })

    //bloquer le scroll
    window.addEventListener('scroll', ()=> {
        if ( menu.className === 'menu show-nav' ) {
            window.scrollTo(0,0)
        }
    })

    //searchbar

    const icon = document.querySelector('.icon');
    const search = document.querySelector('.search');

        icon.onclick = function() { 
            search.classList.toggle('active');
        }
}
headerScript();

function MenuCollant() { 
    const body = document.body;
    let lastScroll = 0;

    window.addEventListener('scroll', ()=>{
        const currentScroll = window.pageYOffset;
        if (currentScroll <= 0) {
            body.classList.remove('scroll-up');
            return;
        }

        if (currentScroll > lastScroll && !body.classList.contains('scroll-down')) {
            body.classList.remove('scroll-up');
            body.classList.add('scroll-down');
        } else if (currentScroll < lastScroll && body.classList.contains('scroll-down')) {
            body.classList.remove('scroll-down');
            body.classList.add('scroll-up');
        }
        lastScroll = currentScroll;
    })
}
MenuCollant();

function dateurPublications() {

    function daysBetweenDates (firstdate, secondDate) {
        l = Math.trunc((secondDate - firstdate) / (1000 * 3600 * 24));
        
            // durée recente c-a-d inferieur à un jour
            if (l == 0) {
                return l = 'Récemment';
            }
            
            // durée inferieur à trente jours

            if (l < 30) {
                if (l == 1) {
                    return l = 'Il y\'a ' + Math.trunc(l) + ' jour';
                }
                return l = 'Il y\'a ' + Math.trunc(l) + ' jours';
                
            } 

            // durée en mois
            if ( l >= 30 && l < 365) {
                return l = 'Il y\'a ' + Math.trunc(l / 30) + ' mois';
            }

            // durée en années
            if (l >= 365) {
                if (l == 1) {
                    return l = 'Il y\'a ' + Math.trunc(l / 365) + ' an';
                }
                return l = 'Il y\'a ' + Math.trunc(l / 365) + ' ans';
            }

    }

    // ajouter la date au html
    dateur = document.querySelectorAll('.dateur');

        var a = daysBetweenDates(new Date(2022,9,15), new Date());
        var b = daysBetweenDates(new Date(2022,7,14), new Date());
        var c = daysBetweenDates(new Date(2022,9,4), new Date());
        var d = daysBetweenDates(new Date(2022,8,14), new Date());
        var e = daysBetweenDates(new Date(2022,3,25), new Date());
        var f = daysBetweenDates(new Date(2022,5,4), new Date());
        var g = daysBetweenDates(new Date(2022,7,5), new Date());
        var h = daysBetweenDates(new Date(2022,9,1), new Date());
        var i = daysBetweenDates(new Date(2022,8,5), new Date());
        var j = daysBetweenDates(new Date(2022,9,7), new Date());
        var k = daysBetweenDates(new Date(2022,9,12), new Date());
        var l = daysBetweenDates(new Date(2022,9,2), new Date());
        var m = daysBetweenDates(new Date(2022,9,17), new Date());
        var n = daysBetweenDates(new Date(2022,9,10), new Date());

        var nbOfDaysT = [a, b, c, d, e, f, g, h, i, j, k, l, m, n];

        for (let i = 0; i < nbOfDaysT.length; i++) {        
        //
        dateur.forEach(dt => {
            dt.textContent = nbOfDaysT[i++];   
        });
    }
}
dateurPublications();

function carousel() { 
    $(document).ready(function() {
        $('.owl-carousel').owlCarousel({
        item: 1,
        autoplay: true,
        autoplayTimeout: 3500,
        loop: true,
        margin: 2,
        responsiveClass: true,
        responsive: {
            0: {
            items: 1,
            nav: false
            },
            700: {
            items: 3,
            nav: false
            },
            1000: {
            items: 5,
            autoplay: false,
            nav: true,
            loop: false,
            margin: 20
            }
        }
        });
        $('.owl-carousel-art').owlCarousel({
            item: 1,
            autoplay: true,
            autoplayTimeout: 400000,
            margin: 2,
            loop: true,
            responsiveClass: true,
            responsive: {
                0: {
                items: 1,
                nav: true
                },
                750: {
                items: 2,
                margin: 5
                },
                850: {
                items: 2,
                autoplay: false,
                margin: 10,
                nav: false
                },
                1000: {
                items: 2,
                autoplay: false,
                margin: 10,
                nav: false
                },
                1100: {
                items: 3,
                autoplay: false,
                nav: false,
                margin: 20
                }
            }
        });
    })
}
carousel();