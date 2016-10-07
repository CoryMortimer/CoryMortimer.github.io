'use strict';
var coryMortimer = (function() {
  var navbarContainer = document.getElementsByClassName('navbar-container')[0];
  var overlay = document.getElementsByClassName('overlay')[0];
  var overlayLinks = document.getElementsByClassName('overlay-content')[0].getElementsByTagName('a');
  function toggleMenu() {
    navbarContainer.classList.toggle('exit');
    toggleOverlay();
  }
  function toggleOverlay() {
    overlay.classList.toggle('hide-overlay');
    for (var i = 0; i < overlayLinks.length; ++i) {
      overlayLinks[i].classList.toggle('hide');
    }
  }
  return {
    toggleMenu: toggleMenu,
    toggleOverlay: toggleOverlay
  }
})()