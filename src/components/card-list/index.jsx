import { booksList } from './data.js';
import './index.css';

const isListEmpty = true;

export default function CardList() {
  const listItems = booksList.map((item) => (
    <li className='card-list__item' key={item.id}>
      <img className='card-list__image' src={item.imagePath} alt={item.name} />
      <p>{item.name}</p>
    </li>
  ));

  if (isListEmpty) {
    return <ul className='card-list'>{listItems}</ul>;
  } else {
    return <p>Пока пусто</p>;
  }
}
