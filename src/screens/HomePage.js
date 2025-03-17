import React, { useState, useEffect } from 'react';
import '../css/HomePage.css';
import codeChunk from '../assets/images/code-chunk.png';  // Correct import

const images = [
  codeChunk,
  codeChunk,
  codeChunk,
  codeChunk,
  codeChunk,
];

const typingTexts = ["Full-Stack Dev", "Problem Solver", "Tech Nerd"];

const HomePage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0); // To keep track of which word we're typing
  const [displayedText, setDisplayedText] = useState(""); // The currently displayed text
  const [isErasing, setIsErasing] = useState(false); // Whether we're erasing the text or typing
  const typingSpeed = 100; // Typing speed
  const erasingSpeed = 50; // Erasing speed
  const delayBetweenWords = 1000; // Delay between words

  // Typing and erasing effect
useEffect(() => {
  let timeout;
  if (!isErasing && displayedText === typingTexts[textIndex]) {
    timeout = setTimeout(() => setIsErasing(true), delayBetweenWords); // Delay before erasing starts
  } else if (isErasing && displayedText === "") {
    setIsErasing(false);
    setTextIndex((prevIndex) => (prevIndex + 1) % typingTexts.length); // Move to the next word
  }

  const typingInterval = setInterval(() => {
    if (!isErasing) {
      setDisplayedText((prev) => typingTexts[textIndex].slice(0, prev.length + 1));
    } else {
      setDisplayedText((prev) => prev.slice(0, -1));
    }
  }, isErasing ? erasingSpeed : typingSpeed);

  return () => {
    clearInterval(typingInterval);
    clearTimeout(timeout); // Clear timeout when component unmounts or re-renders
  };
}, [displayedText, isErasing, textIndex]);

  // Image carousel logic
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  const getClassName = (index) => {
    if (index === activeIndex) return 'carousel-item active';
    if (index === (activeIndex + 1) % images.length) return 'carousel-item next';
    if (index === (activeIndex - 1 + images.length) % images.length) return 'carousel-item prev';
    return 'carousel-item';
  };

  return (
    <div className='outer-div'>
      <div className='left'>
        <div className='left-up'>
          <p className="text-[18px] text-[#E5E9F0] mb-[50px] leading-[0px]">Hi all. I am</p>
          <p className="text-[64px] text-[#E5E9F0] mb-0 leading-[64px]">Radu Taica</p>
          <p className="text-[40px] text-[#4D5BCE] leading-[2]">
            {displayedText}<span className="cursor">|</span>
          </p>
        </div>

        <div className='left-down'>
          <p className="text-[18px] text-[#607B96] leading-[0px] mb-[20px]">// feel free to scroll through my projects</p>
          <p className="text-[18px] text-[#607B96] leading-[0px] mb-[20px]">// you can also see them on my Github page</p>
          <div>
            <span className="text-[#4D5BCE]">const </span>
            <span className="text-[#43D9AD]">githubLink </span>
            <span className="text-white">= </span>
            <a 
              href="https://github.com/radutaica" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="underline decoration-[#E99287]"
            >
              <span className="text-[#E99287]">https://github.com/radutaica</span>
            </a>
          </div>
        </div>
      </div>

      <div className='right'>
        <div className="carousel">
          {images.map((image, index) => (
            <div key={index} className={getClassName(index)}>
              <img src={image} alt={`Carousel ${index}`} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
