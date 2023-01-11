import "../style/style.scss";
import * as bootstrap from 'bootstrap';
import * as fontello from '../icons/fontello-d81d4521/css/fontello.css';
import * as functions from "./functions.js";
import $ from 'jquery';
functions.burgerClick();

let allMarkers = document.querySelectorAll('.map__round');
let marker = document.querySelector('.map__round');
if(marker){
    allMarkers.forEach(element => element.addEventListener('click',function(e){
        for(let i = 1; i <= allMarkers.length; i++){
            if(this.classList.contains(`position${i}`)) {
                document.querySelector(`.marker${i}`).classList.toggle('hidden');
            }
        }

    })
)}