import "../style/style.scss";
import * as bootstrap from 'bootstrap';
import * as fontello from '../icons/fontello-d81d4521/css/fontello.css';
import * as functions from "./functions.js";
import * as slick from "slick-carousel"
import $ from 'jquery';;
functions.burgerClick();

$(".one-time").slick({
    dots: false,
    infinite: true,
    slidesToShow: 1,
    arrows:false,
    autoplay:true,
  });

  document.querySelector('.main_section__right').style.maxWidth = document.querySelector('.slick-current img').width + 'px';