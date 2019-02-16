// JS goes here

//nav top menu drop down code
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

//code for tabs on service page.

class TabLink {
    constructor(tabElement){
        this.tabElement = tabElement;
        this.tabData = this.tabElement.dataset.tab;

    this.card = document.querySelectorAll(`div[data-tab="${this.tabData}"]`);

    this.card = Array.from(this.card).map(card => new TabCard(card));

    this.tabElement.addEventListener('click', (event) => {
        this.selectTab();
    });

    }

    selectTab(){

        const tabs = document.querySelectorAll('.tab-button');

        tabs.forEach(tab => tab.classList.remove('selected'))

        this.tabElement.classList.add('selected');

        const tabRow = document.querySelectorAll('.tab-row');

            tabRow.forEach(row => row.style.display = 'none');

        this.card.forEach(card => {
            console.log(card)
            card.selectCard()
        });

    }
}

class TabCard{
    constructor(tabElement){
        this.tabElement = tabElement;
        console.log('yo')
    }
    selectCard(){
        console.log('yo')
        this.tabElement.style.display = "flex";
    }
}

let tabs = document.querySelectorAll('.tab-button').forEach(tab => new TabLink(tab));