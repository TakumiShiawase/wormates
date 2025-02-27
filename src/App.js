import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Mainpage from './pages/mainpage/Mainpage.js';
import Login from './pages/auth/Login.js';
import Register from './pages/register/Register.js';
import BookDetail from './pages/book_detail/BooksDetail.js';
import Profile from './components/content/profile/Profile.js';
import News from './components/content/news/News.js';
import History from './components/content/history/History.js';
import Home from './components/content/home/Home.js';
import HomeMobile from './components/mobile/home/HomeMobile.js';
import Reader from './pages/reader/Reader.js';
import MainpageMobile from './pages/mobile/mainpage/MainpageMobile.js';
import BookDetailMobile from './pages/mobile/book_detail/BookDetailMobile.js';
import StudioHome from './pages/studio/studio_page/home/StudioHome.jsx';
import Studio from './pages/studio/Studio.jsx';
import StudioBook from './pages/studio/studio_page/studio_book/StudioBook.jsx';
import { isMobile } from 'react-device-detect';

import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/test" element={<MainpageMobile />}>
          <Route path="/test" element={<HomeMobile />} />
          <Route path="/test/:book_id" element={<BookDetailMobile />} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/book/:book_id/chapter/" element={<Reader />} />
        <Route path="/" element={<Mainpage />}>
          <Route path="/" element={<Home />} />
          <Route path="/library" element={<Profile />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/news" element={<News />} />
          <Route path="/history" element={<History />} />
          <Route path="/book/:book_id" element={<BookDetail />} />
        </Route>
        <Route path="/studio" element={<Studio />}>
          <Route path="/studio" element={<StudioHome />} />
          <Route path="/studio/books" element={<StudioBook />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
