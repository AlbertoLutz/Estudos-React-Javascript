import React from 'react';

import './Slider.css';

import imgFirst from '../../src/assets/img/slider02.png';
import imgSecond from '../../src/assets/img/slider03.png';

function sliderHome() {
    return (

     <div class="wrapper">
      <div class="prev-btn">
          <i class="fas fa-chevron-left" />
          </div>

      <div class="slides-container">
        <div class="slide-image">
          <img src={imgFirst} alt="" />
        </div>

        <div class="slide-image">
          <img src={imgFirst} alt="" />
        </div>

        <div class="slide-image">
          <img src={imgSecond} alt="" />
        </div>
      </div>

      <div class="next-btn">
          <i class="fas fa-chevron-right" />
     </div>

    

    <div class="navigation-dots"></div>

    </div>

    )
}

export default sliderHome;