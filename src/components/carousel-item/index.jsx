/* eslint-disable react/prop-types */
import './index.css';
import Rating from '@mui/material/Rating';
import { CardDispatchContext } from '../../lib/context/card';
import { useContext } from 'react';

export default function CarouselItem({ title, author, rating, imagePath }) {
  const dispatch = useContext(CardDispatchContext);

  function handleClick() {
    dispatch({
      type: 'add',
      title,
      imagePath,
    });
  }

  return (
    <li className='carousel-item'>
      <img className='carousel-item__img' src={imagePath} alt='Book' />
      <div className='carousel-item__description'>
        <Rating name='read-only' value={rating} readOnly size='small' />
        <h3 className='carousel-item__title'>{title}</h3>
        <p className='carousel-item__author'>{author}</p>

        <a onClick={handleClick} className='carousel-item__link' href='#'>
          Купить
        </a>
      </div>
    </li>
  );
}
