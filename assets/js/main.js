$(document).ready(function () {
  $("#companys-active").mixItUp();

  $("#carousel-slider").owlCarousel({
    paginationSpeed: 500,
    singleItem: true,
    autoPlay: 3000,
  });

  let lis = $('.navbar-nav li'); // 得到的 lis 是 object
  let pathname = window.location.pathname;
  for (let key in Object.keys(lis)) {
    let item = lis[key];
    if (item && item.getAttribute) {
      let nav = item.getAttribute('data-nav');

      if (nav === pathname || (pathname.startsWith(nav+'/'))) {
        $(item).addClass('active');
      } else {
        $(item).removeClass('active');
      }
    }
  }

  // $("#clients-logo").owlCarousel({
  //   autoPlay: 3000,
  //   items: 5,
  //   itemsDesktop: [1199, 5],
  //   itemsDesktopSmall: [979, 5],
  // });

  // $("#works-logo").owlCarousel({
  //   autoPlay: 3000,
  //   items: 5,
  //   itemsDesktop: [1199, 5],
  //   itemsDesktopSmall: [979, 5],
  // });

  // google map
  // var map;
  // function initMap() {
  //   map = new google.maps.Map(document.getElementById('map'), {
  //     center: { lat: -34.397, lng: 150.644 },
  //     zoom: 8
  //   });
  // }

  // Counter
  $('.counter').counterUp({
    delay: 10,
    time: 1000
  });

});




