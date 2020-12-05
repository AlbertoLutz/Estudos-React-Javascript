import React from 'react';
import './styles.css';

import truckImg from '../../assets/svg/truck.svg';
import homePerson from '../../assets/img/home-person.png';

import leftArrow from  '../../assets/svg/left-arrows.svg'
import rightArrow from '../../assets/svg/right-arrow.svg';

import NavBar from '../../components/Nav/Navbar';



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

            <div className="carousel-img">
                <img src={homePerson} alt="" />

                <span>
                    <button className="left-arrow">
                    <img src={leftArrow} alt="" />
                    </button>
                </span>

                <span>
                 <button className="right-arrow">
                <img src={rightArrow} alt="" />
                </button>
                </span>
            </div>

        </main>
    );
};

export default Home;

