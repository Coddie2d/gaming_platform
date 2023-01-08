import "../style/style.scss";
import * as bootstrap from 'bootstrap';
import * as fontello from '../icons/fontello-d81d4521/css/fontello.css';
import * as functions from "./functions.js";
import * as slick from "slick-carousel"
import $ from 'jquery';

functions.burgerClick();


$(".reviews_slider").slick({
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow:$('.slider_navigation__arrow_left'),
    nextArrow:$('.slider_navigation__arrow_right'),
    appendDots:$('.slider_navigation__dots'),
    dotsClass: 'slick-dots',
  });