import './index.css';
import bookIcon from '../../assets/book.svg';
import headphonesIcon from '../../assets/headphones.svg';

import IconButton from '@mui/material/IconButton';
import ShoppingCart from '@mui/icons-material/ShoppingCart';
import Book from '@mui/icons-material/Book';
import MoreVert from '@mui/icons-material/MoreVert';
import BasicModal from '../modal';

export default function Header() {
  return (
    <header className='header'>
      <nav className='header__nav nav'>
        <a className='nav__logo-link' href='/index.html'>
          Books
        </a>
        <ul className='nav__list'>
          <li className='nav__item'>
            <a href='#' className='nav__link'>
              <img src={bookIcon} alt='Иконка книги' />
              Книги
            </a>
          </li>
          <li className='nav__item'>
            <a href='#' className='nav__link'>
              <img src={headphonesIcon} alt='Иконка аудиокниги' />
              Аудиокниги
            </a>
          </li>
        </ul>
        <div className='nav__user-box'>
          <IconButton aria-label='Favorites book'>
            <Book />
          </IconButton>
          <IconButton aria-label='Shoping card'>
            <ShoppingCart />
          </IconButton>
          <BasicModal />
          <IconButton aria-label='Other buttone'>
            <MoreVert />
          </IconButton>
        </div>
      </nav>
    </header>
  );
}
