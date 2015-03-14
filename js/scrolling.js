var controller = new ScrollMagic.Controller();

var fade_in_me = TweenMax.from("#aboutMe", 1, {opacity: 0, marginTop:"500px"});
var fade_in_projects = TweenMax.from("#projects", 1, {opacity: 0, marginTop:"500px"});
var fade_in_short_films = TweenMax.from("#shortFilms", 1, {opacity: 0, marginTop:"500px"});
var fade_in_connect = TweenMax.from("#connect", 1, {opacity: 0, marginTop:"500px"});

new ScrollMagic.Scene({
    triggerElement: '#aboutMeTrigger',
    reverse:false
})
.setTween(fade_in_me)
.addTo(controller);



new ScrollMagic.Scene({
    triggerElement: '#projectsTrigger',
    reverse:false
})
.setTween(fade_in_projects)
.addTo(controller);

new ScrollMagic.Scene({
    triggerElement: '#shortFilmsTrigger',
    reverse:false
})
.setTween(fade_in_short_films)
.addTo(controller);

new ScrollMagic.Scene({
    triggerElement: '#connectTrigger',
    reverse:false
})
.setTween(fade_in_connect)
.addTo(controller);