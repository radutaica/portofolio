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

const HomePage = () => {
  const [activeIndex, setActiveIndex] = useState(0);

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
          <p style={{ fontSize: '18px', color: '#E5E9F0', marginBottom: 0, lineHeight: '0'}}>Hi all. I am</p>
          <p style={{ fontSize: '64px', color: '#E5E9F0', marginBottom: 0, lineHeight: '0'}}>Radu Taica</p>
          <p style={{ fontSize: '30px', color: '#4D5BCE', lineHeight: '2' }}>> Full-stack developer</p>
        </div>

        <div className='left-down'>
          <p style={{ fontSize: '18px', color: '#607B96', lineHeight: '0' }}>// feel free to scroll through my projects</p>
          <p style={{ fontSize: '18px', color: '#607B96', lineHeight: '0' }}>// you can also see them on my Github page</p>
          <div>
            <span style={{ color: '#4D5BCE' }}>const </span>
            <span style={{ color: '#43D9AD' }}>githubLink </span>
            <span style={{ color: 'white' }}>= </span>
            <a href="https://github.com/radutaica" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline', textDecorationColor: '#E99287' }}>
              <span style={{ color: '#E99287' }}>https://github.com/radutaica</span>
            </a>
          </div>
        </div>
      </div>

      <div className='right'>
        <div className="carousel" style={{ transform: `translateY(-${activeIndex * 100}%)` }}>
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
