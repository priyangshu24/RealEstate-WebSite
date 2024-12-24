/* eslint-disable no-unused-vars */
import React from 'react';
import './Hero.css';
import { IoLocationSharp } from 'react-icons/io5';
import CountUp from 'react-countup';

const Hero = () => {
    return (
        <section className="hero-wrapper">
            <div className="padding innerWidth flexCenter hero-container">
                {/* Left Section */}
                <div className="flexColStart hero-left">
                    {/* Title Section */}
                    <div className="hero-title">
                        <div className="orange-circle" />
                        <h1>
                            Discover <br />
                            Your Perfect <br />
                            Property
                        </h1>
                    </div>

                    {/* Description Section */}
                    <div className="flexColStart hero-des">
                        <span className='secondaryText' >Find your dream home in the heart of the city

                        </span>
                        <span>
                            Eliminate the challenges of finding the perfect residence for you.
                        </span>
                    </div>

                    {/* Search Bar */}
                    <div className="search-bar">
                        <IoLocationSharp color="#2563eb" size={20} />
                        <input 
                            type="text" 
                            placeholder="Search location" 
                            aria-label="Search for a property location" 
                        />
                        <button className="button" aria-label="Search">
                            Search
                        </button>
                    </div>

                    {/* Stats Section */}
                    <div className="flexCenter stats">
                        <div className="flexColCenter stat">
                            <span className="stat-number">
                                <CountUp start={78000} end={95700} duration={4} />
                                <span>+</span>
                            </span>
                            <span className="stat-label">Premium Properties</span>
                        </div>
                        <div className="flexColCenter stat">
                            <span className="stat-number">
                                <CountUp start={1000} end={5000} duration={3} />
                                <span>+</span>
                            </span>
                            <span className="stat-label">Happy Clients</span>
                        </div>
                        <div className="flexColCenter stat">
                            <span className="stat-number">
                                <CountUp start={50} end={100} duration={2.5} />
                                <span className='plus'>+</span>
                            </span>
                            <span className="stat-label">Cities Covered</span>
                        </div>
                    </div>
                </div>

                {/* Right Section */}
                <div className="flexCenter hero-right">
                    <div className="image-container">
                        <img 
                            src="./img/hero-image.png" 
                            alt="Illustration of finding properties" 
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
