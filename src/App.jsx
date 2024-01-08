/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
import React, { useState, useEffect } from 'react';
import {
  createHashRouter,
  RouterProvider,
} from 'react-router-dom';
import { getLightMode } from './utilities/lightMode';
import Nav from './comp/Nav';
import Home from './comp/Home';
import Article from './comp/Article';
import Footer from './comp/Footer';
import './style/App.scss';

function App() {
  const [news, setNews] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    11, 12, 13, 14, 15, 16, 17, 17, 19,
    20, 21, 22, 23, 24, 25,
  ]);
  const [newsImages, setNewsImages] = useState([]);
  const [lightMode, setLightMode] = useState();
  const setActive = (e) => {
    e.target.className = `${lightMode} active`;
    return setTimeout(() => {
      e.target.className = lightMode;
    }, 100);
  };

  useEffect(() => {
    const getNews = async () => {
      const fetchNews = await fetch('https://zononews-api.fly.dev');
      const responseNews = await fetchNews.json();
      const sortNews = responseNews.sort((a, b) => {
        const aDate = new Date(a.pubdate);
        const bDate = new Date(b.pubdate);
        return bDate - aDate;
      });
      setNews(sortNews);
    };
    getNews();
    return () => getNews();
  }, []);

  useEffect(() => {
    document.documentElement.className = getLightMode(setLightMode);
  }, [lightMode]);

  const router = createHashRouter([
    {
      path: '/',
      element:
  <>
    <Nav
      setActive={setActive}
      lightMode={lightMode}
      setLightMode={setLightMode}
    />
    <Home
      news={news}
      lightMode={lightMode}
    />
    <Footer
      setActive={setActive}
      lightMode={lightMode}
      setLightMode={setLightMode}
    />
  </>,
    },
    {
      path: '/:id',
      element:
  <>
    <Nav
      setActive={setActive}
      lightMode={lightMode}
      setLightMode={setLightMode}
    />
    <Article
      news={news}
      lightMode={lightMode}
    />
    <Footer
      setActive={setActive}
      lightMode={lightMode}
      setLightMode={setLightMode}
    />
  </>,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
