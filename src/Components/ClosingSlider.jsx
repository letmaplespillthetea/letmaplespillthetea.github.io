import React, { useState, useRef } from 'react';
import './ClosingSlider.css';

const textSlides = [
  "With an admiration for art that’s been with me since childhood, a light obsession with psychology and gaming, and a technical background, I'm taking my first steps into the game industry.",
  "I’m nervous, but youthful. I’ve waited for certainty, but now I’m led by curiosity. I don’t have all the answers, just a stubborn heart, a love for creating, and the hope that something meaningful will come.",
  "“Without any intentional, fancy way of adjusting yourself, to express yourself as you are is the most important thing.”\n — Shunryu Suzuki, Zen Mind, Beginner’s Mind (1970)"
];

const ClosingSlider = () => {
  const [index, setIndex] = useState(0);
  const sliderRef = useRef(null);

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? textSlides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev === textSlides.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="closing-slider" ref={sliderRef}>
        <div className="slide-wrapper">
            <p className="closing-text">
                {textSlides[index].split('\n').map((line, i) => (
                    <React.Fragment key={i}>
                    {line}
                    <br />
                    </React.Fragment>
                ))}
            </p>
        </div>
        <div className="nav-controls">
            <button className="arrow left" onClick={prevSlide}>&lt;</button>
            <div className="dots">
            {textSlides.map((_, i) => (
                <button
                key={i}
                className={`dot ${i === index ? 'active' : ''}`}
                onClick={() => setIndex(i)}
                ></button>
            ))}
            </div>
            <button className="arrow right" onClick={nextSlide}>&gt;</button>
        </div>
        </div>
  );
};

export default ClosingSlider;
