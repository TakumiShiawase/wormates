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
import Reader from './pages/reader/Reader.js';

import './App.css';

const App = () => {
  return (
    <Router>
      <Routes>
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
      </Routes>
    </Router>
  );
};

export default App;
