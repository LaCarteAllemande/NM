


const OPACITY_STEP = 100;
FIRST_TIMEOUT = 800;
SECOND_TIMEOUT = 4000;





function init(){

    
    new fullpage('#fullpage', {
        //options here
        autoScrolling:true,
        scrollHorizontally: true
    });

    Introduction();


}

async function Introduction(){
    let firstLine = document.getElementById('introduction');
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
