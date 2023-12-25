

$(document).ready(function(){
	$("#hamburger").click(function(){
    
   
	$("header").toggleClass("active");
	$("body, html").toggleClass("active-body");
	
});
});






//  menu-sticky-floating-main

/* Get the menu element */
const headerMenu = document.querySelector('.header');

/* Set initial scroll position */
let prevScrollPos = window.pageYOffset;

/* Scroll detection function */
function detectScrollDirection() {
  const currentScrollPos = window.pageYOffset;

  if (prevScrollPos > currentScrollPos) {
    /* Scrolling up */
    headerMenu.classList.remove('hidden_nav');
  } else {
    /* Scrolling down */
    headerMenu.classList.add('hidden_nav');
  }

  /* Update previous scroll position */
  prevScrollPos = currentScrollPos;
}

/* Add event listener to window object for scroll detection */
window.addEventListener('scroll', detectScrollDirection);


var swiper = new Swiper(".top__swiper", {
  slidesPerView: 3,
  spaceBetween: 30,
  breakpoints:{
    968: {
      slidesPerView: 3,
    },
    600: {
      slidesPerView: 2,
    },
    500: {
      slidesPerView: 1,
    },
    200: {
      slidesPerView: 1,
    },
  },
});


// bottom-slider


/*=============== SWIPER JS ===============*/
let swiperCards = new Swiper(".card__content", {
  loop: true,
  spaceBetween: 32,
  grabCursor: true,

 

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints:{
    600: {
      slidesPerView: 2,
    },
    968: {
      slidesPerView: 3,
    },
  },
});



// svg sprite
$("img.img-svg").each(function () {
  var $img = $(this);
  var imgClass = $img.attr("class");
  var imgURL = $img.attr("src");
  $.get(imgURL, function (data) {
      var $svg = $(data).find("svg");
      if (typeof imgClass !== "undefined") {
          $svg = $svg.attr("class", imgClass + " replaced-svg");
      }
      $svg = $svg.removeAttr("xmlns:a");
      if (!$svg.attr("viewBox") && $svg.attr("height") && $svg.attr("width")) {
          $svg.attr("viewBox", "0 0 " + $svg.attr("height") + " " + $svg.attr("width"))
      }
      $img.replaceWith($svg);
  }, "xml");
});