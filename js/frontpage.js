//counters that will turn off the even after it runs 1x
var count = 0;
var count2 = 0;
var count3 = 0;
var count4 = 0;
var count5 = 0;

//selecting each content row
var headers = document.querySelectorAll('.content-row')
var subcontent = document.querySelectorAll('.content-column')
var subimages = document.querySelectorAll('.row-full-image')

//event listener on scroll. 
    window.addEventListener('scroll', (event) => {

        //check if header element is in viewport
        if (isInViewport(headers[1])) {

            //check if event has already run. 
            if(count === 0){
                //if event has not run, event is now runnng, so increment. 
                count += 1;
                //show element
                headers[1].style.visibility = 'visible'
                //greensock animation runs on element. 
                TweenMax.from(headers[1], 1, {
                    x: 400,
                    opacity: 0,
                    ease: 'Power2.easeOut'
                })
                
            }
        } else {
        console.log('Nope...');
    }
    //check if header element is in viewport
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
        //if element is not 100% in viewport, check again on next scroll event
        console.log('Nope...');
        }
    if (isInViewport(subimages[0])) {
        if(count3 === 0){
            count3 += 1;
            subcontent[0].style.visibility = 'visible'
            TweenMax.from(subcontent[0], 1, {
                x: 400,
                y: -200,
                opacity: 0,
                ease: 'Power2.easeOut'
            })
            
        }
    } else {
        //if element is not 100% in viewport, check again on next scroll event
        console.log('Nope...');
        }
    if (isInViewport(subimages[1])) {
        if(count4 === 0){
            count4 += 1;
            subcontent[1].style.visibility = 'visible'
            TweenMax.from(subcontent[1], 1, {
                x: -400,
                y: -200,
                opacity: 0,
                ease: 'Power2.easeOut'
            })
            
        }
    } else {
        //if element is not 100% in viewport, check again on next scroll event
        console.log('Nope...');
        }
    if (isInViewport(subimages[2])) {
        if(count5 === 0){
            count5 += 1;
            subcontent[2].style.visibility = 'visible'
            TweenMax.from(subcontent[2], 1, {
                x: 400,
                y: -200,
                opacity: 0,
                ease: 'Power2.easeOut'
            })
            
        }
    } else {
        //if element is not 100% in viewport, check again on next scroll event
        console.log('Nope...');
        }
    }, false);