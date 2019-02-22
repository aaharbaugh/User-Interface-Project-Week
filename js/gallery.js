const left = document.querySelector('.img-top-left')
const right = document.querySelector('.img-bot-right')
const shadow = document.querySelector('.image-container')

const imgArray = [
    "https://unsplash.it/600/360?image=1072",
    "https://unsplash.it/600/360?image=1067",
    "https://unsplash.it/600/360?image=1065",
    "https://unsplash.it/600/360?image=1048",
    "https://unsplash.it/600/360?image=534"
]

let counter = 0;

right.addEventListener('click', (event) => {

    TweenMax.to(shadow, 0.2, {
        opacity: 0,
        ease: 'Power2.easeIn'
      })
    TweenMax.to(right, 0.5, {
        x: 300,
        opacity: 0,
        ease: 'Power2.easeIn'
      })
      TweenMax.to(left, 0.5, {
        x: -300,
        opacity: 0,
        ease: 'Power2.easeIn',
        delay: 0.15
      })


      setTimeout(changeImgRight, 600)
      setTimeout(tweenInRight, 700)
})

left.addEventListener('click', (event) => {

    TweenMax.to(shadow, 0.2, {
        opacity: 0,
        ease: 'Power2.easeIn'
      })
    TweenMax.to(right, 0.5, {
        x: 400,
        opacity: 0,
        ease: 'Power2.easeIn',
        delay: 0.15
      })
      TweenMax.to(left, 0.5, {
        x: -400,
        opacity: 0,
        ease: 'Power2.easeIn'
      })

      //function to change image, and then do final tween In, after timeouts. 
      setTimeout(changeImgLeft, 600)
      setTimeout(tweenInLeft, 700)
})

//change image function via counter and array
const changeImgRight = function() {
    counter++
    if(counter === 5){
        counter = 0;
    }
    right.src = imgArray[counter];
    left.src = imgArray[counter];
}
const changeImgLeft = function() {
    counter--
    if(counter === -1){
        counter = 4;
    }
    right.src = imgArray[counter];
    left.src = imgArray[counter];
}

//if clicking right, comes in a bit later
const tweenInRight = function () {

    TweenMax.to(shadow, 0.5, {
        opacity: 1,
        ease: 'Power2.easeIn',
        delay: 0.15
      })
    TweenMax.to(right, 0.5, {
        x: 0,
        opacity: 1,
        ease: 'Power2.easeOut',
        delay: 0.15
      })
      TweenMax.to(left, 0.5, {
        x: 0,
        opacity: 1,
        ease: 'Power2.easeOut'
      })
}

//if clicking left, comes in a bit later
const tweenInLeft = function () {

    TweenMax.to(shadow, 0.5, {
        opacity: 1,
        ease: 'Power2.easeIn'
      })
    TweenMax.to(right, 0.5, {
        x: 0,
        opacity: 1,
        ease: 'Power2.easeOut'
      })
      TweenMax.to(left, 0.5, {
        x: 0,
        opacity: 1,
        ease: 'Power2.easeOut',
        delay: 0.15
      })
}