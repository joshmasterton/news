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
  const [lightMode, setLightMode] = useState();
  const setActive = (e) => {
    e.target.className = `${lightMode} active`;
    return setTimeout(() => {
      e.target.className = lightMode;
    }, 100);
  };

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
      lightMode={lightMode}
      setLightMode={setLightMode}
    />
    <Footer lightMode={lightMode} />
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
    <Article lightMode={lightMode} />
    <Footer lightMode={lightMode} />
  </>,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
