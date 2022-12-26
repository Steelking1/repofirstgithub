function LoginModals() {
    var btnLogModals = document.querySelectorAll('.toggle-modal')
    var Modals = document.querySelector('.modals-container')
    btnLogModals.forEach(btn => btn.addEventListener('click', () => {
        Modals.classList.toggle('active')
        window.addEventListener('scroll', ()=>{
            if (Modals.className === 'modals-container active') {
                window.scrollTo(0,0);
            }
        });
        const audio = new Audio();
        audio.src = '../audio/zapsplat_multimedia_button_click_004_78081.mp3'
        audio.play();
    }))
}
LoginModals();

function changeTheme() {
    var btnTheme = document.querySelector('.toggle-theme > input');
    var theme = document.querySelector('.light-mode')

    btnTheme.addEventListener('click', ()=> {
        theme.classList.toggle('dark-mode');
    });

}
changeTheme();

function navResponsive() {

    // javascript pour une nav responsive 

    var menu = document.querySelector('.menu');
    var menuBtn = document.querySelector('.menu-btn');

    menuBtn.addEventListener('click', ()=> {
        menu.classList.toggle('show-nav');
        menuBtn.classList.toggle('active');
    });

    //enlever le menu lors du click

    var board = document.querySelectorAll('.list > li');

    board.forEach(link =>{ 
        link.addEventListener('click', function(event) {
            if (!event.target.matches('.menu-btn') && menu.classList.contains('show-nav')) {
                    menu.classList.toggle('show-nav');
                    menuBtn.classList.toggle('active');

                }
            }
        )
    });

    //bloquer le scroll
    window.addEventListener('scroll', ()=> {
        if ( menu.className === 'side-bar menu show-nav' ) {
            window.scrollTo(0,0)
        }
    })

}
navResponsive();
