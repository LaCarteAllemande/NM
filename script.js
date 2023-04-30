


const OPACITY_STEP = 100;
FIRST_TIMEOUT = 800;
SECOND_TIMEOUT = 4000;


function init(){

    
    new fullpage('#fullpage', {
        //options here
        autoScrolling:true,
        scrollHorizontally: true,
    });





}

async function fadeIn(element, timeout) {
    await new Promise(r => setTimeout(r, timeout));
    for (i=0; i< OPACITY_STEP; ++i){
        element.style.opacity = i/OPACITY_STEP;
        await new Promise(r => setTimeout(r, 1));
    }
    
}
