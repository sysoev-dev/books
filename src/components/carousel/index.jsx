/* eslint-disable react/prop-types */
import { useState } from 'react';
import './index.css';

export default function Carousel({ children }) {
  const [carouselPosition, setCarouselPosition] = useState(0);

  function handleBtnClick() {
    // Magic number ;(
    if (carouselPosition <= -3479) {
      return;
    }
    setCarouselPosition((value) => value - 290);
  }

  return (
    <div className='carousel'>
      <h3 className='carousel__title'>Бестселлеры 2023 года</h3>
      <div className='carousel__wrapper'>
        <ul
          style={{ marginLeft: `${carouselPosition}px` }}
          className='carousel__list'
        >
          {children}
        </ul>
      </div>
      <button onClick={handleBtnClick} className='carousel__button-next'>
        next
      </button>
    </div>
  );
}
