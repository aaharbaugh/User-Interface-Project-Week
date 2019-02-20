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
    this.cards = Array.from(this.card).map(card => new TabCard(card));

    this.tabElement.addEventListener('click', (event) => {
        this.selectTab();

        TweenMax.from(this.card[1], 1, {
            y: 200,
            opacity: 0,
            ease: 'Power2.easeOut'
          })

          this.card[1].classList.add('shown')
    });

    }

    selectTab(){
        const tabs = document.querySelectorAll('.tab-button');

        tabs.forEach(tab => tab.classList.remove('selected'))

        this.tabElement.classList.add('selected');

        const tabRow = document.querySelectorAll('.tab-row');

        tabRow.forEach(row => {
                row.classList.remove('shown')
                row.style.display = 'none'
            });

        this.cards.forEach(card => {
            card.selectCard()
        });

    }
}

class TabCard{
    constructor(tabElement){
        this.tabElement = tabElement;
    }
    selectCard(){

        this.tabElement.style.display = "flex";

    }
}

let tabs = document.querySelectorAll('.tab-button').forEach(tab => new TabLink(tab));


//animation attempts. 

const headline = document.querySelectorAll('.top-headlines div')
let delayTime = 0.2;

headline.forEach(line => {
    document.addEventListener('DOMContentLoaded', (event) => {
    TweenMax.from(line, 0.5, {
        x: 200,
        delay: delayTime,
        opacity: 0,
        ease: 'Power2.easeOut'
      })
      delayTime += 0.4;
})
})

//fadeins

//function that checks if element is out of viewport. 
var isInViewport = function (elem) {
    var bounding = elem.getBoundingClientRect();
    return (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
};
var count = 0;
var count2 = 0;
var headers = document.querySelectorAll('.content-row')

window.addEventListener('scroll', function (event) {
	if (isInViewport(headers[1])) {
		if(count === 0){
            count += 1;
            headers[1].style.visibility = 'visible'
            TweenMax.from(headers[1], 1, {
                x: 400,
                opacity: 0,
                ease: 'Power2.easeOut'
              })
            
        }
	} else {
    console.log('Nope...');
  }
  if (isInViewport(headers[0])) {
    if(count2 === 0){
        count2 += 1;
        headers[0].style.visibility = 'visible'
        TweenMax.from(headers[0], 1, {
            x: -400,
            opacity: 0,
            ease: 'Power2.easeOut'
          })
        
    }
} else {
console.log('Nope...');
}
}, false);