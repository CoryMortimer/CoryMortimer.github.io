var controller = new ScrollMagic.Controller();

var fade_in_me = TweenMax.from("#aboutMe", 1, {opacity: 0, marginLeft:"500px"});
var fade_in_projects = TweenMax.from("#projects", 1, {opacity: 0, marginLeft:"500px"});
var fade_in_short_films = TweenMax.from("#shortFilms", 1, {opacity: 0, marginLeft:"500px"});
var fade_in_connect = TweenMax.from("#connect", 1, {opacity: 0, marginLeft:"500px"});

new ScrollMagic.Scene({
    triggerElement: '#aboutMe',
    reverse:false
})
.setTween(fade_in_me)
.addTo(controller);



new ScrollMagic.Scene({
    triggerElement: '#projects',
    reverse:false
})
.setTween(fade_in_projects)
.addTo(controller);

new ScrollMagic.Scene({
    triggerElement: '#shortFilms',
    reverse:false
})
.setTween(fade_in_short_films)
.addTo(controller);

new ScrollMagic.Scene({
    triggerElement: '#connect',
    reverse:false
})
.setTween(fade_in_connect)
.addTo(controller);