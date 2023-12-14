import './index.css'
import bookIcon from '../../assets/book.svg';
import headphonesIcon from '../../assets/headphones.svg';
import favoriteIcon from '../../assets/favorite.svg';
import favoriteIconOutline from '../../assets/favorite-outline.svg';
import basketIcon from '../../assets/basket.svg';
import userIcon from '../../assets/user.svg';
import dotsIcon from '../../assets/dots.svg';

export default function Header() {
  return (
    <header className="header">
      <nav className="header__nav nav">
        <a className="nav__logo-link" href="/index.html">Books</a>
        <ul className="nav__list">
          <li className="nav__item">
            <a href="#" className="nav__link">
              <img src={bookIcon} alt="Иконка книги" />
              Книги
            </a>
          </li>
          <li className="nav__item">
            <a href="#" className="nav__link">
              <img src={headphonesIcon} alt="Иконка аудиокниги" />
              Аудиокниги
            </a>
          </li>
        </ul>
        <div className="nav__user-box">
          <button className='nav__user-btn nav__favorite-btn'>
            <img src={favoriteIconOutline} alt="Избранное" />
            Добавить в Избранное
          </button>
          <button className='nav__user-btn nav__favorite-btn'>
            <img src={basketIcon} alt="Корзина покупок" />
            Корзина
          </button>
          <button className='nav__user-btn nav__favorite-btn'>
            <img src={userIcon} alt="Иконка профиля" />
            Профиль
          </button>
          <button className='nav__user-btn nav__favorite-btn'>
            <img src={dotsIcon} alt="Настройки" />
            Настройки
          </button>
        </div>
      </nav>
    </header>
  )
}