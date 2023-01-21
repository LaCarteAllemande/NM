const OPACITY_STEP = 100;
FIRST_TIMEOUT = 1500;
SECOND_TIMEOUT = 4000;

function init(){



    Introduction();

    new fullpage('#fullpage', {
        //options here
        autoScrolling:true,
        scrollHorizontally: true
    });




}

function Introduction(){
    let firstLine = document.getElementById('hey');
    // let secondLine = document.getElementById('navigation');

    firstLine.style.opacity = 0;
    // secondLine.style.opacity = 0;
    fadeIn(firstLine, FIRST_TIMEOUT);
    // fadeIn(secondLine, SECOND_TIMEOUT);
}
async function fadeIn(element, timeout) {
    await new Promise(r => setTimeout(r, timeout));
    for (i=0; i< OPACITY_STEP; ++i){
        element.style.opacity = i/OPACITY_STEP;
        await new Promise(r => setTimeout(r, 1));
    }
    
}


