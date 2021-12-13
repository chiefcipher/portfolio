

//LOADING EFFECT 
let loader = document.querySelector('.loader') ; 

window.addEventListener("load" , ()=>{ 
    setTimeout(()=> { 
        loader.parentElement.removeChild(loader) ;
        document.querySelector('body').style.overflowY = "auto"
    }, 1000)
    
})





//DESIGN NAV FUNCTIONALITY 
let navIcon = document.querySelector(".navigation__icon");
let itemsContainer = document.querySelector(".navigation__items");
let navStatus = "closed";

function navFunction(click, status) {
    if (click && status == 'closed') {
        itemsContainer.style.height = "100%";
        itemsContainer.style.transform = "scaleY(1)"
        navStatus = 'open' ; 
    } else if (click && status == "open") {
        itemsContainer.style.height = '0';
        itemsContainer.style.transform = "scaleY(0)";
        navStatus = 'closed'
    }


}

window.addEventListener('load', () => {
    if (window.innerWidth > 768) {
        navFunction(1, 'closed')
    }
})
window.addEventListener("resize", () => {
    if ((window.innerWidth > 768)) {
        navFunction(1, 'closed')
    } else {
        navFunction(1, 'open')
    }
})


navIcon.addEventListener('click', () => {
    navFunction(1, navStatus)
});




//NAV MENU BTN CONTROLLER 
const btnMenu = document.querySelector('.navigation__icon');
let menuOpen = false;
btnMenu.addEventListener('click', () => {
    if (!menuOpen) {
        btnMenu.classList.add('open');
        menuOpen = true;

    } else {
        btnMenu.classList.remove('open');
        menuOpen = false;
    }
})


window.addEventListener('resize' ,  ()=> { 

    if (window.innerWidth < 768 ) { 

        //CLOSE NAV AFTER I CLICK NAV ELEMENT 
        const navItems = document.querySelectorAll(".item") ; 
        
        for (let element of navItems)  { 
           
            element.addEventListener('click', ()=> { 
                navFunction(1,'open')
                btnMenu.classList.remove('open');
                menuOpen = false ; 
        
            })
        
        
        } 
        }
        
})

