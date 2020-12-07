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

const carouselSlide = document.querySelector('.carousel-slide');
const carouselImages = document.querySelectorAll('.carousel-slide img');

const prevBtn = document.querySelector('#prevBtn');
const nextBtn = document.querySelector('#nextBtn');

let counter = 1;
const size = carouselImages[0].clientWidth;

carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';

nextBtn.addEventListener('click', () => {
    if (counter >= carouselImages.length - 1) return;
    carouselSlide.style.transition = 'transform 0.4s ease-in-out';
    counter++;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

prevBtn.addEventListener('click', () => {
    if (counter <= 0) return;
    carouselSlide.style.transition = 'transform 0.4s ease-in-out';
    counter--;
    carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
});

carouselSlide.addEventListener('transitionend', () => {
    if (carouselImages[counter].id === 'lastClone') {
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - 2 ;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
    if (carouselImages[counter].id === 'firstClone') {
        carouselSlide.style.transition = "none";
        counter = carouselImages.length - counter;
        carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';
    }
});




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

                <div class="carousel-slide">
                    <img src={thirdImage} id="lastClone" />
                    <img src={firstImage} />
                    <img src={secondImagee} />
                    <img src={thirdImage} />
                    <img src={firstImage} id="firstClone" />
                </div>

            </div>

            <button id="prevBtn">
                <img src={leftArrow} />
            </button>
            <button id="nextBtn">
                <img src={rightArrow} />
            </button>


        </main>
    );
};

export default Home;

