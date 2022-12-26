
    const onglets = Array.from(document.querySelectorAll(".list li a"));
    const contenu = Array.from(document.querySelectorAll(".board"));

    onglets.forEach(onglet => {
      onglet.addEventListener("click", tabsAnimation)
    })
    
    let index = 0;
    
    function tabsAnimation(e){

        const el = e.target;
        if(contenu[index] == undefined) {
            erreur = document.querySelector('.erreur-board');
            onglets[index].classList.remove("active");
            erreur.classList.add("fade");
            erreur.offsetWidth;
            erreur.classList.toggle('active');
            erreur.classList.add("in");        
        } else { 
            onglets[index].classList.remove("active");
            contenu[index].classList.remove("active");
            contenu[index].classList.remove("fade");
            contenu[index].classList.remove("in");
        
        }

        index = onglets.indexOf(el);
        
        if (contenu[index] == undefined) {
            erreur = document.querySelector('.erreur-board');
            onglets[index].classList.add("active");
            erreur.classList.add("fade");
            erreur.offsetWidth;
            erreur.classList.add("in");
            erreur.classList.toggle('active');
        } else { 
            onglets[index].classList.add("active")
            contenu[index].classList.add("active");
            contenu[index].classList.add("fade");
            contenu[index].offsetWidth
            contenu[index].classList.add("in");
        }
        

    }