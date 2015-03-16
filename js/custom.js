var toggle = "shakedown";

function changeFilm(s) {
    if ( $(window).width() > 768) { 
    var video = document.getElementById("youtubeFilms");
    if (s === "Agent Buffpants") {
        if (video.getAttribute("src") !== "https://www.youtube.com/embed/XFFerwMcF20"){
            video.setAttribute("src","https://www.youtube.com/embed/XFFerwMcF20");
        }
    }
    else if (s === "LeftRightWrong") {
        if (video.getAttribute("src") !== "https://www.youtube.com/embed/F6PsCwd-4RY"){
            video.setAttribute("src","https://www.youtube.com/embed/F6PsCwd-4RY");
        }
    }
    else if (s === "Stuck") {
        if (video.getAttribute("src") !== "https://www.youtube.com/embed/m5VGhTl2eaA"){
            video.setAttribute("src","https://www.youtube.com/embed/m5VGhTl2eaA");
        }
    }
    else if (s === "Distant Love") {
        if (video.getAttribute("src") !== "https://www.youtube.com/embed/lnjxKQlcd9I"){
            video.setAttribute("src","https://www.youtube.com/embed/lnjxKQlcd9I");
        }
    }
    }
}

function changeProject(s){
    if ( $(window).width() > 768) { 
    var media = document.getElementById("projectMedia");
    if (s === "shakedown"){
        if (toggle !== "shakedown"){
            media.innerHTML = '<a href="https://shakedown.me" target="_blank"><img src="img/shakedown.png" class="img-responsive"/></a>';
            toggle = "shakedown";
        }
    }
    else if (s === "batterUp") {
        if (toggle !== "batterUp") {
            media.innerHTML = "<div class='embed-responsive embed-responsive-4by3'><iframe class='embed-responsive-item' src='https://www.youtube.com/embed/nrwOnyOdhxk'></iframe></div>";
            toggle = "batterUp";
        }
    }
    }
}
