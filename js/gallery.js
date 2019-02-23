const left = document.querySelector('.img-top-left')
const right = document.querySelector('.img-bot-right')
const background = document.querySelector('.img-behind')

const imgArray = [
    "https://unsplash.it/800/460?image=1072",
    "https://unsplash.it/800/460?image=1067",
    "https://unsplash.it/800/460?image=1065",
    "https://unsplash.it/800/460?image=1048"
]

//image preloader
images = [];
function preload() {
    for (var i = 0; i < arguments.length; i++) {
        images[i] = new Image();
        images[i].src = preload.arguments[i];
    }
}
preload(imgArray)

let counter = 0;

right.addEventListener('click', (event) => {

    counter++
    if(counter === 4){
        counter = 0;
    }

    background.src = imgArray[counter];

    TweenMax.to(right, 1, {
        x: 900, 
        opacity: 1,
        ease: 'Expo.easeIn'
      })
      TweenMax.to(left, 1, {
        x: -900,
        opacity: 1,
        ease: 'Expo.easeIn'
      })


      setTimeout(changeImg, 1000)
      setTimeout(tweenInRight, 1010)
})

left.addEventListener('click', (event) => {

    counter--
    if(counter === -1){
        counter = 3;
    }

    background.src = imgArray[counter];

    TweenMax.to(right, 0.8, {
        x: 900,
        opacity: 1,
        ease: 'Expo.easeIn'
      })
      TweenMax.to(left, 0.8, {
        x: -900,
        opacity: 1,
        ease: 'Expo.easeIn'
      })

      //function to change image, and then do final tween In, after timeouts. 
      setTimeout(changeImg, 1000)
      setTimeout(tweenInLeft, 1010)
})

//change image function via counter and array
const changeImg = function() {

    right.src = imgArray[counter];
    left.src = imgArray[counter];

}
//if clicking right, comes in a bit later
const tweenInRight = function () {

    TweenMax.to(right, 0, {
        x: 0
      })
      TweenMax.to(left, 0, {
        x: 0
      })
}

//if clicking left, comes in a bit later
const tweenInLeft = function () {

    TweenMax.to(right, 0, {
        x: 0
      })
      TweenMax.to(left, 0, {
        x: 0
      })
}