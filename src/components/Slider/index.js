import React, { useState } from 'react';
import './index.css';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa'; // Import arrow icons

// Sample testimonial data
const testimonials = [
  {
    image: '/images/pot1.png',
    review: 'Lorem ipsum dolor sit amet.',
  },
  {
    image: '/images/pot2.png',
    review: 'Aut ipsam illum et nostrum.',
  },
  {
    image: '/images/pot1.png',
    review: 'Duis aute irure dolor.',
  },
  {
    image: '/images/pot4.png',
    review: 'Excepteur sint occaecat cupidatat.',
  },
  {
    image: '/images/pot5.png',
    review: 'Sed ut perspiciatis unde omnis.',
  },
  {
    image: '/images/pot2.png',
    review: 'Nemo enim ipsam voluptatem.',
  },
  {
    image: '/images/pot1.png',
    review: 'Temporibus autem quibusdam et aut.',
  },
  {
    image: '/images/pot2.png',
    review: 'Nemo enim ipsam voluptatem.',
  },
  {
    image: '/images/pot1.png',
    review: 'Temporibus autem quibusdam et aut.',
  },
  {
    image: '/images/pot2.png',
    review: 'Nemo enim ipsam voluptatem.',
  },
  {
    image: '/images/pot1.png',
    review: 'Temporibus autem quibusdam et aut.',
  },
];

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="slider">
      <div className="slider-content">
        {testimonials.slice(currentIndex, currentIndex + 6).map((testimonial, index) => (
          <div key={index} className="testimonial">
            <img src={testimonial.image} alt="Testimonial" className="testimonial-image" />
            <p className="testimonial-review">{testimonial.review}</p>
          </div>
        ))}
      </div>
      <button className="arrow left" onClick={prev}>
        <FaArrowCircleLeft />
      </button>
      <button className="arrow right" onClick={next}>
        <FaArrowCircleRight />
      </button>
    </div>
  );
};

export default Slider;
