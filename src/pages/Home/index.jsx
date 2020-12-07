/* eslint-disable jsx-a11y/alt-text */
import React from 'react';
import './styles.css';

import truckImg from '../../assets/svg/truck.svg';
import firstImage from '../../assets/img/home-person.png';
import secondImagee from '../../assets/img/slider02.png';
import thirdImage from '../../assets/img/slider03.png';


import leftArrow from '../../assets/svg/left-arrows.svg'
import rightArrow from '../../assets/svg/right-arrow.svg';

import NavBar from '../../components/Nav/Navbar';

window.onload=function() {



let slidePosition = 0;
const slides = document.getElementsByClassName('carousel__item');
const totalSlides = slides.length;


document.
  getElementById('nextBtn')
  .addEventListener("click", function() {
    moveToNextSlide();
  });
document.
  getElementById('prevBtn')
  .addEventListener("click", function() {
    moveToPrevSlide();
  });



function updateSlidePosition() {
  for (let slide of slides) {
    slide.classList.remove('carousel__item--visible');
    slide.classList.add('carousel__item--hidden');
  }

  slides[slidePosition].classList.add('carousel__item--visible');
}

function moveToNextSlide() {
  if (slidePosition === totalSlides - 1) {
    slidePosition = 0;
  } else {
    slidePosition++;
  }

  updateSlidePosition();
}



function moveToPrevSlide() {
  if (slidePosition === 0) {
    slidePosition = totalSlides - 1;
  } else {
    slidePosition--;
  }

  updateSlidePosition();

}

}

function Home() {
    return (

        <main className="container">


            <header>
                <h1>LOGO</h1>

                <NavBar />


            </header>

            <section>
                <h2>Lorem ipsum dolor sit amet, consectetur</h2>

                <spam></spam>

                <hr></hr>

            </section>

            <div className="carousel">


                <img src={truckImg} alt="" />

                <h3>Carousel 1</h3>

                <p>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                    Vero consequuntur, nulla obcaecati a recusandae amet,
                    impedit molestiae odit nisi necessitatibus id? Accusantium
                    architecto dicta delectus.
                    </p>
            </div>



            <div class="carousel-container">

                <div class="carousel-slider">
                    <div class="carousel__item carousel__item--visible">
                        <img src={firstImage} />
                    </div>
                    <div class="carousel__item">
                        <img src={secondImagee} />
                    </div>
                    <div class="carousel__item">
                        <img src={thirdImage} />
                    </div>

                   
                </div>
                 <div class="carousel__actions">
                        <button id="prevBtn" aria-label="Previous slide">
                            <img src={leftArrow} />
                        </button>
                        <button id="nextBtn" aria-label="Next slide">
                            <img src={rightArrow} />
                        </button>
                      </div>
                  </div>

        </main>
    );
};

export default Home;

