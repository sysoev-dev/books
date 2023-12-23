import './index.css';
import searchIcon from '../../assets/search.svg';

export default function SearchInput() {
  return (
    <form action='#' className='search-form'>
      <input
        className='search-form__input'
        type='search'
        name='#'
        placeholder='Название книги, автор или жанр'
      />
      <button className='search-form__button' type='submit'>
        <img src={searchIcon} alt='Search' />
      </button>
    </form>
  );
}
