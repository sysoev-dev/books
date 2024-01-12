import './App.css';
import Carousel from './components/carousel';
import Header from './components/header';
import Player from './components/player';
import SearchInput from './components/search-input';
import TopAuthor from './components/top-author';
import TopBook from './components/top-book';
import { UserProvider } from './lib/context/user';
import { CardContext, CardDispatchContext } from './lib/context/card';
import { useReducer } from 'react';

let nextId = 0;

function App() {
  const [card, dispatch] = useReducer(cardReduser, initialCard);
  return (
    <UserProvider>
      <CardContext.Provider value={card}>
        <CardDispatchContext.Provider value={dispatch}>
          <div className='container'>
            <h1 className='visually-hidden'>
              Books - Книжный интернет-магазин
            </h1>
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
        </CardDispatchContext.Provider>
      </CardContext.Provider>
    </UserProvider>
  );
}

function cardReduser(card, action) {
  switch (action.type) {
    case 'add':
      return [
        ...card,
        {
          id: nextId++,
          title: action.title,
          imagePath: action.imagePath,
        },
      ];
    case 'delete': {
      return card.filter((t) => t.id !== action.id);
    }
    default:
      console.log('Error reduser');
  }
}

const initialCard = [
  // {
  //   id: nextId++,
  //   title: 'Лучшие люди города',
  //   imagePath:
  //     'https://ndc.book24.ru/resize/440x568/iblock/dff/dff53b30c63e1eb983dd28ea1ce1b646/8eb6562b644ee607a241b0dd62f51329.jpg',
  // },
  // {
  //   id: nextId++,
  //   title: 'Лучшие люди города 2',
  //   imagePath:
  //     'https://ndc.book24.ru/resize/440x568/iblock/dff/dff53b30c63e1eb983dd28ea1ce1b646/8eb6562b644ee607a241b0dd62f51329.jpg',
  // },
];

export default App;
