// JS goes here

let navBarButton = document.querySelector('.navbar-img');
let topNavMenu = document.querySelector('.top-menu');
let navBarLinks = document.querySelector('.links');

navBarButton.addEventListener('mouseover', (event) => {
    navBarButton.style.cursor = 'pointer';
})

navBarButton.addEventListener('click', (event) => {
    navBarLinks.style.display = 'flex'
})