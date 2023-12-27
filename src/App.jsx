import './App.css';
import Carousel from './components/carousel';
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
          <Carousel />
        </main>
      </div>
    </>
  );
}

export default App;
