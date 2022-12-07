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