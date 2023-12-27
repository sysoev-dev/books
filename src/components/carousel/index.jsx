/* eslint-disable react/prop-types */
import { useState } from 'react';
import './index.css';
import CarouselItem from '../carousel-item';

export default function Carousel() {
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
          <CarouselItem
            title='Лучшие люди города'
            author='Кожевина К.'
            rating={3}
            imagePath='https://ndc.book24.ru/resize/440x568/iblock/dff/dff53b30c63e1eb983dd28ea1ce1b646/8eb6562b644ee607a241b0dd62f51329.jpg'
          />
          <CarouselItem
            title='Изнанка'
            author='Волкова Л.'
            rating={2}
            imagePath='https://ndc.book24.ru/resize/440x568/iblock/ea6/ea6c8ee06183cdb463a8eb0bf8828cc2/161976164a6fef721491640843f4ea9e.jpg'
          />
          <CarouselItem
            title='Легкий способ бросить страдать'
            author='Гордон Е.'
            rating={5}
            imagePath='https://ndc.book24.ru/resize/440x568/iblock/baf/baf4577e0cfbe21aa8dd0bb057dcc009/1e8bdd494d3c478144254eb389928f61.jpg'
          />
          <CarouselItem
            title='Вечерняя звезда'
            author='Соловьева Е.'
            rating={4}
            imagePath='https://ndc.book24.ru/resize/440x568/iblock/3de/3de3ecc7a5fc6c76264445c3c8a99223/d198e3043fca56ff7bc4cf8e100a519c.jpg'
          />
          {/*  */}
          <CarouselItem
            title='Лучшие люди города'
            author='Кожевина К.'
            rating={3}
            imagePath='https://ndc.book24.ru/resize/440x568/iblock/dff/dff53b30c63e1eb983dd28ea1ce1b646/8eb6562b644ee607a241b0dd62f51329.jpg'
          />
          <CarouselItem
            title='Изнанка'
            author='Волкова Л.'
            rating={2}
            imagePath='https://ndc.book24.ru/resize/440x568/iblock/ea6/ea6c8ee06183cdb463a8eb0bf8828cc2/161976164a6fef721491640843f4ea9e.jpg'
          />
          <CarouselItem
            title='Легкий способ бросить страдать'
            author='Гордон Е.'
            rating={5}
            imagePath='https://ndc.book24.ru/resize/440x568/iblock/baf/baf4577e0cfbe21aa8dd0bb057dcc009/1e8bdd494d3c478144254eb389928f61.jpg'
          />
          <CarouselItem
            title='Вечерняя звезда'
            author='Соловьева Е.'
            rating={4}
            imagePath='https://ndc.book24.ru/resize/440x568/iblock/3de/3de3ecc7a5fc6c76264445c3c8a99223/d198e3043fca56ff7bc4cf8e100a519c.jpg'
          />
          <CarouselItem
            title='Лучшие люди города'
            author='Кожевина К.'
            rating={3}
            imagePath='https://ndc.book24.ru/resize/440x568/iblock/dff/dff53b30c63e1eb983dd28ea1ce1b646/8eb6562b644ee607a241b0dd62f51329.jpg'
          />
          <CarouselItem
            title='Изнанка'
            author='Волкова Л.'
            rating={2}
            imagePath='https://ndc.book24.ru/resize/440x568/iblock/ea6/ea6c8ee06183cdb463a8eb0bf8828cc2/161976164a6fef721491640843f4ea9e.jpg'
          />
          <CarouselItem
            title='Легкий способ бросить страдать'
            author='Гордон Е.'
            rating={5}
            imagePath='https://ndc.book24.ru/resize/440x568/iblock/baf/baf4577e0cfbe21aa8dd0bb057dcc009/1e8bdd494d3c478144254eb389928f61.jpg'
          />
          <CarouselItem
            title='Вечерняя звезда'
            author='Соловьева Е.'
            rating={4}
            imagePath='https://ndc.book24.ru/resize/440x568/iblock/3de/3de3ecc7a5fc6c76264445c3c8a99223/d198e3043fca56ff7bc4cf8e100a519c.jpg'
          />
          {/*  */}
          <CarouselItem
            title='Лучшие люди города'
            author='Кожевина К.'
            rating={3}
            imagePath='https://ndc.book24.ru/resize/440x568/iblock/dff/dff53b30c63e1eb983dd28ea1ce1b646/8eb6562b644ee607a241b0dd62f51329.jpg'
          />
          <CarouselItem
            title='Изнанка'
            author='Волкова Л.'
            rating={2}
            imagePath='https://ndc.book24.ru/resize/440x568/iblock/ea6/ea6c8ee06183cdb463a8eb0bf8828cc2/161976164a6fef721491640843f4ea9e.jpg'
          />
          <CarouselItem
            title='Легкий способ бросить страдать'
            author='Гордон Е.'
            rating={5}
            imagePath='https://ndc.book24.ru/resize/440x568/iblock/baf/baf4577e0cfbe21aa8dd0bb057dcc009/1e8bdd494d3c478144254eb389928f61.jpg'
          />
          <CarouselItem
            title='Вечерняя звезда'
            author='Соловьева Е.'
            rating={4}
            imagePath='https://ndc.book24.ru/resize/440x568/iblock/3de/3de3ecc7a5fc6c76264445c3c8a99223/d198e3043fca56ff7bc4cf8e100a519c.jpg'
          />
        </ul>
      </div>
      <button onClick={handleBtnClick} className='carousel__button-next'>
        next
      </button>
    </div>
  );
}
