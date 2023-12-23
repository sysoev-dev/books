import './index.css';

export default function TopAuthor() {
  return (
    <div className='top-author'>
      <h3 className='top-author__name'>Стивен Кинг</h3>
      <p className='top-author__books'>78 книг</p>
      <img
        className='top-author__photo'
        src='./stephen-king.png'
        width='150px'
        alt='Фото Стивена Кинга'
      />
    </div>
  );
}
