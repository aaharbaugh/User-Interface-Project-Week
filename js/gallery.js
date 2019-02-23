const left = document.querySelector('.img-top-left')
const right = document.querySelector('.img-bot-right')
const background = document.querySelector('.img-behind')
const caption = document.querySelector('.caption')



const imgArray = [
    "https://unsplash.it/855/460?image=1076",
    "https://unsplash.it/855/460?image=1058",
    "https://unsplash.it/855/460?image=1033",
    "https://unsplash.it/855/460?image=1031",
    "https://unsplash.it/855/460?image=979",
    "https://unsplash.it/855/460?image=945",
    "https://unsplash.it/855/460?image=1048"
]
const captionArray = [
    "Froogle HQ",
    "Estadio Monumental",
    "South East Terminal",
    "John Wilkes Building",
    "Palacio Coronado",
    "Block C",
    "North Street Mall"
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
    if(counter === 7){
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
      TweenMax.to(caption, 0.4, {
        x: 900,
        opacity: 1,
        ease: 'Expo.easeIn'
      })
      changeCaptionRight()
      setTimeout(changeImg, 1000)
      setTimeout(tweenInRight, 1010)
})

left.addEventListener('click', (event) => {

    counter--
    if(counter === -1){
        counter = 6;
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
      TweenMax.to(caption, 0.4, {
        x: -900,
        opacity: 1,
        ease: 'Expo.easeIn'
      })
      changeCaptionLeft()
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

const changeCaptionLeft = function () {
  TweenMax.to(caption, 0, {
    x: 1000,
    delay: 0.45
  })

  setTimeout(setNewCaption, 450)
  
  TweenMax.to(caption, 0.4, {
    x: 0,
    delay: 0.47
  })
}

const changeCaptionRight = function () {
  TweenMax.to(caption, 0, {
    x: -1000,
    delay: 0.45
  })
  
  setTimeout(setNewCaption, 450)

  TweenMax.to(caption, 0.4, {
    x: 0,
    delay: 0.47
  })
}

const setNewCaption = function () {
  caption.textContent = captionArray[counter];
}

//lightbulb experiment
const lightbulb = document.querySelector('.lightbulb')
const body = document.querySelector('body')
const footer = document.querySelector('.footer')
const shadowBox = document.querySelector('.image-container')




lightbulb.addEventListener('click', (event) => {

  if(body.style.backgroundColor === 'rgb(0, 0, 0)'){
    TweenMax.to(body, 1, {
      backgroundColor: 'white'
    })
    TweenMax.to(footer, 1, {
      backgroundColor: '#828282'
    })
    TweenMax.to(shadowBox, 0.5, {
      boxShadow: '5px 5px 10px rgb(161, 161, 161)'
    })
  } else {
    
    TweenMax.to(body, 1, {
      backgroundColor: 'black'
    })
    TweenMax.to(footer, 1, {
      backgroundColor: 'black'
    })
    TweenMax.to(shadowBox, 0.5, {
      boxShadow: ''
    })

  }

})