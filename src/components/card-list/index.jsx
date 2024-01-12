import './index.css';
import { CardContext, CardDispatchContext } from '../../lib/context/card.js';
import { useContext } from 'react';
import Button from '@mui/material/Button';

export default function CardList() {
  const card = useContext(CardContext);
  const dispatch = useContext(CardDispatchContext);
  const listItems = card.map((item) => (
    <li className='card-list__item' key={item.id}>
      <img className='card-list__image' src={item.imagePath} alt={item.title} />
      <p>{item.title}</p>
      <button
        className='card-list__btn-delete'
        onClick={() =>
          dispatch({
            type: 'delete',
            id: item.id,
          })
        }
      >
        X
      </button>
    </li>
  ));

  if (card.length) {
    return (
      <>
        <ul className='card-list'>{listItems}</ul>
        <Button variant='contained'>Оформить заказ</Button>
      </>
    );
  } else {
    return <p>Пока пусто</p>;
  }
}
