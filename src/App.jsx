import './App.css';
import { useState } from 'react';
import Carousel from './components/carousel';
import Header from './components/header';
import Player from './components/player';
import SearchInput from './components/search-input';
import TopAuthor from './components/top-author';
import TopBook from './components/top-book';

import { account, ID } from './lib/appwrite';

function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  async function login(email, password) {
    await account.createEmailSession(email, password);
    setLoggedInUser(await account.get());
  }

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

        <div>
          <p>
            {loggedInUser
              ? `Logged in as ${loggedInUser.name}`
              : 'Not logged in'}
          </p>

          <form>
            <input
              type='email'
              placeholder='Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type='password'
              placeholder='Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type='text'
              placeholder='Name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <button type='button' onClick={() => login(email, password)}>
              Login
            </button>

            <button
              type='button'
              onClick={async () => {
                await account.create(ID.unique(), email, password, name);
                login(email, password);
              }}
            >
              Register
            </button>

            <button
              type='button'
              onClick={async () => {
                await account.deleteSession('current');
                setLoggedInUser(null);
              }}
            >
              Logout
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
