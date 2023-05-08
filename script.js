const OPACITY_STEP = 100;
FIRST_TIMEOUT = 800;
SECOND_TIMEOUT = 4000;


function init() {


    new fullpage('#fullpage', {
        autoScrolling: true,
        scrollHorizontally: true,
    });

    projectsUrls = getProjectsUrl()
    
    for (var projectUrl in projectsUrls){
        updateGithubDiv(generateLangageUrl(projectsUrls[projectUrl]), projectUrl)
    }


}


function generateLangageUrl(projectUrl){
    return projectUrl.replace("github.com", "api.github.com/repos") + "/languages"
}
function getProjectsUrl(){
    const elements = document.querySelectorAll('.github-link');
    const links =[]

    elements.forEach(element => {
        links.push(element.href)
      });
    return links

}
function updateGithubDiv(projectsUrl, indexOfPage){
    var xhr = new XMLHttpRequest();
    console.log(projectsUrl)
    xhr.open("GET", projectsUrl);
    xhr.setRequestHeader("Accept", "application/vnd.github.v3+json");

    xhr.onload = function () {
        var languagesStats = JSON.parse(xhr.responseText);

        totalSize = sizeOfProject(languagesStats)

        var stats = {};
        for (var langage in languagesStats) {
            var bytes = languagesStats[langage];
            var percentage = ((bytes / totalSize) * 100).toFixed(1);
            stats[langage] = percentage
        }
        showLangageStats(stats, indexOfPage)
        
    }
    xhr.send();
}
function sizeOfProject(languagesStats){
    
    var totalSize = 0;
    for (var langage in languagesStats) {
        totalSize += languagesStats[langage];
    }
    return totalSize
}

function showLangageStats(stats, indexOfPage){
    section = getLangageSection(indexOfPage)
    console.log(section)
    for (var langage in stats){
        section.appendChild(generateLangageDiv(langage, stats[langage]));
    }
}

function getLangageSection(indexOfPage){
    langSections =  document.querySelectorAll('.lang-section')
    return langSections[indexOfPage]
}
function generateLangageDiv(langage, percentage){
    const div = document.createElement("div");
    div.classList.add("bg-blue-900", "bg-opacity-50" ,"text-center" ,"text-normal" , "leading-lg", "text-primary-100");
    div.style = "width:"+ percentage + "%";
    const span = document.createElement("span");
    span.classList.add("uppercase" );
    span.textContent = langage + " : "+ percentage + "%";
    div.appendChild(span);
    return div
}

async function fadeIn(element, timeout) {
    await new Promise(r => setTimeout(r, timeout));
    for (i = 0; i < OPACITY_STEP; ++i) {
        element.style.opacity = i / OPACITY_STEP;
        await new Promise(r => setTimeout(r, 1));
    }

}
