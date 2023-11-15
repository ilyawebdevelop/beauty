import * as flsFunctions from "./modules/functions.js";
import "./modules/jquery-3.6.1.min.js";
import "./modules/bootstrap.bundle.min.js";
import "./modules/simpleParallax.min.js";
import "./modules/fslightbox.js";
import './components.js';

flsFunctions.isWebp();

// Import swiper
import Swiper, { Navigation, Pagination, Autoplay, Mousewheel, EffectFade, Thumbs, Scrollbar } from 'swiper';
Swiper.use([Navigation, Pagination, Autoplay, Mousewheel, EffectFade, Thumbs, Scrollbar]);


var paralaxImage = document.querySelector('.introImage');
new simpleParallax(paralaxImage, {
  scale: 1.1,
  customWrapper: '.intro',
});

// Инициализация слайдера expSlider
const expSlider = document.querySelector('.expSlider');
var mySwiperExp = new Swiper(expSlider, {
  slidesPerView: 1,
  spaceBetween: 0,
  loop: false,
  speed: 600,
  allowTouchMove: true,
  navigation: {
    nextEl: '.exp .navArrowNext',
    prevEl: '.exp .navArrowPrev',
  },
  breakpoints: {
    0: {
      spaceBetween: 20,
    },
    576: {
      spaceBetween: 0,
    },   
  },
});

// Инициализация слайдера newsSlider
document.querySelectorAll('.newsSliderW').forEach(n => {
  const newsSlider = new Swiper(n.querySelector('.newsSlider'), {
    slidesPerView: 3,
    spaceBetween: 20,
    speed: 800,
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      576: {
        slidesPerView: 2,
      },     
      992: {
        slidesPerView: 3,
      },
    },
  });
});

// Инициализация слайдера trainerSlider
const trainerSlider = document.querySelector('.trainerSlider');
var mySwiperTrainer = new Swiper(trainerSlider, {
  slidesPerView: 3,
  spaceBetween: 30,
  speed: 800,
  breakpoints: {
    0: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    576: {
      slidesPerView: 2,
    },
    768: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
  },
});


let headerCatalogBtn = document.querySelector('.headerMenuBtn');
let headerCatalog = document.querySelector('.headerCatalog');
let headerCatalogClose = document.querySelector('.headerCatalogClose');
let bodyEl = document.querySelector('body');

headerCatalogBtn.addEventListener('click', () => {
  headerCatalog.classList.add('active');
  bodyEl.classList.add('hidden');
});
headerCatalogClose.addEventListener('click', () => {
  headerCatalog.classList.remove('active');
  bodyEl.classList.remove('hidden');
});

// Menu show or hide
document.addEventListener('click', function (e) {
  const target = e.target;
  const its_headerCatalogBtn = target == headerCatalogBtn || headerCatalogBtn.contains(target);
  const its_CatalogContent = target == headerCatalog || headerCatalog.contains(target);

  if (!its_headerCatalogBtn && !its_CatalogContent) {
    headerCatalog.classList.remove('active');
    headerCatalogBtn.classList.remove('active');
    bodyEl.classList.remove('hidden');
  }
});

// close menu in Landing page
$(document).on("click", ".header__nav-list li a", function (e) {
  $('.headerCatalog').removeClass('active');
  $('body').removeClass('hidden');
 
});