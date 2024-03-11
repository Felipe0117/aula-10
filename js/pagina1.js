function menuShow() {    
    let menuMobile = document.querySelector('.menuMobile');
    if (menuMobile.classList.contains('open')){
        menuMobile.classList.remove('open');
        document.getElementById("mobile").style.display = 'grid';
    }else{
        menuMobile.classList.add('open');
        document.getElementById("mobile").style.display = 'none';

    }
}