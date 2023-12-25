// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css';
import Carousel from './components/carousel';
import CarouselItem from './components/carousel-item';
import Header from './components/header';
import Player from './components/player';
import SearchInput from './components/search-input';
import TopAuthor from './components/top-author';
import TopBook from './components/top-book';

function App() {
  return (
    <>
      <div className='container'>
        <h1 className='visually-hidden'>Books - Книжный интернет-магазин</h1>
        <Header />
        <main className='main'>
          <div className='main__shelf shelf'>
            <div className='shelf__left'>
              <h2 className='shelf__left-title'>Новое и популярное</h2>
              <p className='shelf__left-text'>
                Найдите любую книгу, автора или жанр
              </p>
              <SearchInput />
            </div>
            <div className='shelf__right'>
              <TopBook />
              <TopAuthor />
              <Player />
            </div>
            <div className='shelf-item'></div>
          </div>
          <Carousel>
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
          </Carousel>
        </main>
      </div>
    </>
  );
}

export default App;
