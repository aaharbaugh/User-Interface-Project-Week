// JS goes here

let navBarButton = document.querySelectorAll('.navbar-img');
let topNavMenu = document.querySelector('.top-menu');
let navBarLinks = document.querySelector('.links');

navBarButton.forEach(img => img.addEventListener('mouseover', (event) => {
    img.style.cursor = 'pointer';
}))

navBarButton.forEach(img => img.addEventListener('click', (event) => {
    navBarLinks.classList.toggle('clicked');

    navBarButton.forEach(img => img.classList.toggle('clicked'));
    
    if(topNavMenu.style.height === '100%'){
        topNavMenu.style.height = '45px'
    } else {
        topNavMenu.style.height = '100%'
    
    }
}))