const OPACITY_STEP = 100;
FIRST_TIMEOUT = 1500;
SECOND_TIMEOUT = 4000;
  
let pages;

function TransitionPages(){
    for (let item of pages) {
        console.log(item.id);
    }
}



function init(){

    new fullpage('#fullpage', {
        //options here
        autoScrolling:true,
        scrollHorizontally: true
    });
    
    // let video = document.getElementById('video');
    // video.playbackRate =0.7;
    let firstLine = document.getElementById('hey');
    let secondLine = document.getElementById('navigation');

    pages = document.getElementsByClassName('page');


    TransitionPages();
    console.log(pages);



    firstLine.style.opacity = 0;
    secondLine.style.opacity = 0;

    Introduction();

    function Introduction(){
        fadeIn(firstLine, FIRST_TIMEOUT);
        fadeIn(secondLine, SECOND_TIMEOUT);
    }

}


async function fadeIn(element, timeout) {
    await new Promise(r => setTimeout(r, timeout));
    for (i=0; i< OPACITY_STEP; ++i){
        element.style.opacity = i/OPACITY_STEP;
        await new Promise(r => setTimeout(r, 1));
    }
    
}


