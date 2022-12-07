function shareBtn() { 
    /* bouton share social */

    const btnShare = document.querySelector('.btn-share-a');
    const iconShare = document.querySelector('.share-a');

    btnShare.addEventListener('click', ()=> {
        iconShare.classList.toggle('active');
    });

}
shareBtn();


function upSiteBtn() { 

    var btni = document.querySelector('.haut-page');

    window.addEventListener('scroll', ()=> {
        if (window.scrollY > 500) {
            btni.classList.add('active');
        } else {
            btni.classList.remove('active');
        }
    })

}
upSiteBtn();