/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { sliderSettings } from '../utils/common';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
// Import Swiper modules
import { Navigation, Pagination } from 'swiper/modules';
// Import data and CSS
import data from '../utils/slider.json';
import './Residencies.css';

const Residencies = () => {
  // Mouse tracking effect
  useEffect(() => {
    const cards = document.querySelectorAll('.r-card');

    const handleMouseMove = (e, card) => {
      const rect = card.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / card.clientWidth) * 100;
      const y = ((e.clientY - rect.top) / card.clientHeight) * 100;

      card.style.setProperty('--mouse-x', `${x}%`);
      card.style.setProperty('--mouse-y', `${y}%`);
    };

    cards.forEach((card) => {
      card.addEventListener('mousemove', (e) => handleMouseMove(e, card));
    });

    // Cleanup event listeners
    return () => {
      cards.forEach((card) => {
        card.removeEventListener('mousemove', (e) => handleMouseMove(e, card));
      });
    };
  }, []); // Empty dependency array means this effect runs once on mount

  return (
    <section className="r-wrapper">
      <div className="paddings innerWidth r-container">
        {/* Header Section */}
        <div className="r-head flexColStart">
          <span className="orangeText">Luxury Properties</span>
          <span className="primaryText">Popular Residencies</span>
        </div>

        {/* Swiper Section */}
        <Swiper
          {...sliderSettings}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            480: { slidesPerView: 1 },
            600: { slidesPerView: 2 },
            750:{ slidesPerView: 3 },
            1100: { slidesPerView: 4 },
          }}
          modules={[Navigation, Pagination]} // Add the necessary modules
          navigation // Enable navigation arrows
          pagination={{ clickable: true }} // Enable pagination dots
          loop // Enable infinite loop
        >
          {data.map((card, i) => (
            <SwiperSlide key={i}>
              {/* Card with inner glow effect */}
              <div className="r-card">
                {/* Image container */}
                <img src={card.image} alt={card.name} className="r-image" />
                {/* Card details */}
                <div className="r-details">
                  <span className="primaryText r-title">{card.name}</span>
                  <span className="secondaryText r-detail">{card.detail}</span>
                  <span className="secondaryText r-price">
                    Starting at ${card.price}/month
                  </span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Residencies;
