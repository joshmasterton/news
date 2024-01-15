/* eslint-disable arrow-body-style */
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
  const [loading, setLoading] = useState(true);
  const [news, setNews] = useState([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
    11, 12, 13, 14, 15, 16, 17, 17, 19,
    20, 21, 22, 23, 24, 25,
  ]);
  const [lightMode, setLightMode] = useState();
  const setActive = (e) => {
    e.target.className = `${lightMode}Accent active`;
    return setTimeout(() => {
      e.target.className = `${lightMode}Accent`;
    }, 100);
  };

  const getNews = async () => {
    // Get news from server
    const fetchNews = await fetch('https://zononews-api.fly.dev');
    const responseNews = await fetchNews.json();
    // Sort news by date latest first
    const sortedNews = responseNews.sort((a, b) => {
      const aDate = new Date(a.pubdate);
      const bDate = new Date(b.pubdate);
      return bDate - aDate;
    });
    // Check for repitition
    const uniqueNews = sortedNews.filter((obj, index, self) => {
      return index === self.findIndex((t) => t.article_id === obj.article_id);
    });
    // Is article image good enough to display
    const filterImageQualityTest = uniqueNews.filter((obj) => {
      const articleImg = new Image();
      articleImg.src = obj.image_url;
      return articleImg.naturalWidth > 800;
    });
    // Set to state
    setNews(filterImageQualityTest);
    setLoading(false);
  };

  useEffect(() => {
    document.documentElement.className = `${getLightMode(setLightMode)}Accent`;
    getNews();
  }, [loading]);

  useEffect(() => {
    // Get current light mode
    document.documentElement.className = `${getLightMode(setLightMode)}Accent`;
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
      loading={loading}
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
      loading={loading}
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
