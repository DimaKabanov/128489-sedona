//Menu
(function () {
  var nojs = document.querySelector(".no-js");
  var burger = document.querySelector('.main-nav__toggle');
  var close = document.querySelector('.main-nav__close');
  var menu = document.querySelector('.main-nav');

  document.addEventListener("DOMContentLoaded", function (event) {
    nojs.classList.remove("no-js");
  });

  burger.addEventListener('click', function() {
    event.preventDefault();
    menu.classList.toggle('main-nav--open');
    burger.classList.toggle('main-nav__toggle--opened')
  });

  close.addEventListener('click', function() {
    event.preventDefault();
    menu.classList.remove('main-nav--open');
    burger.classList.remove('main-nav__toggle--opened')
  })
})();


//Map
function initialize() {
  var mapOptions = {
    scrollwheel: false,
    zoom: 7,
    center: new google.maps.LatLng(34.7,-111.5977212)
  }
  var map = new google.maps.Map(document.getElementById('map-canvas'),
    mapOptions);
  var image = 'img/icon-map-marker.svg';
  var myLatLng = new google.maps.LatLng(34.9,-111.5977212);
  var beachMarker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    icon: image
  });
}
google.maps.event.addDomListener(window, 'load', initialize);
