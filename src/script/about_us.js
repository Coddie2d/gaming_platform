import "../style/style.scss";
import * as bootstrap from 'bootstrap';
import * as fontello from '../icons/fontello-d81d4521/css/fontello.css';
import * as functions from "./functions.js";
import * as slick from "slick-carousel"
import $ from 'jquery';
functions.burgerClick();

$(".one-time").slick({
    dots: false,
    infinite: true,
    slidesToShow: 1,
    arrows:false,
    autoplay:true,
  });


if(innerWidth <= 768){
    document.querySelector('.text_side .notification_through_email__inner_form_title').classList.add('d-none');

} else {
    document.querySelector('.notification_through_email__inner_form .notification_through_email__inner_form_title').classList.add('d-none');
}