import "../style/style.scss";
import * as bootstrap from 'bootstrap';
import * as fontello from '../icons/fontello-d81d4521/css/fontello.css';
import * as functions from "./functions.js";
import $ from 'jquery';

functions.burgerClick();
if(innerWidth <= 768){
    document.querySelector('.text_side .notification_through_email__inner_form_title').classList.add('d-none');

} else {
    document.querySelector('.notification_through_email__inner_form .notification_through_email__inner_form_title').classList.add('d-none');
}

// document.querySelector('.footer__logo_column__subtitle').style.maxWidth = document.querySelector('.footer__logo_column ').clientWidth+'px';
// document.querySelector('.footer__contact_us_column__subtitle').style.maxWidth = document.querySelector('.footer__contact_us_column').clientWidth+'px';
