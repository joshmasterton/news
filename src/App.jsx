import React from 'react';
import {
  createHashRouter,
  RouterProvider,
} from 'react-router-dom';
import Nav from './comp/Nav';
import Home from './comp/Home';
import './style/App.scss';
import Article from './comp/Article';

function App() {
  const setActive = (e) => {
    e.target.className = 'active';
    return setTimeout(() => {
      e.target.className = '';
    }, 100);
  };

  const router = createHashRouter([
    {
      path: '/',
      element:
  <>
    <Nav setActive={setActive} />
    <Home />
  </>,
    },
    {
      path: '/:id',
      element:
  <>
    <Nav setActive={setActive} />
    <Article />
  </>,
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
