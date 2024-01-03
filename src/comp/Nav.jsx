/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  getLightMode,
  switchLightMode,
} from '../utilities/lightMode';
import { onScroll } from '../utilities/windowEvents';
import logoDark from '../style/icons/logoDark.png';
import logoLight from '../style/icons/logoLight.png';
import menuDark from '../style/icons/menuDark.png';
import menuLight from '../style/icons/menuLight.png';
import closeDark from '../style/icons/closeDark.png';
import closeLight from '../style/icons/closeLight.png';

function Nav({ setActive, lightMode, setLightMode }) {
  const [isMenu, setIsMenu] = useState(false);

  useEffect(() => {
    document.documentElement.className = getLightMode(setLightMode);
  }, [lightMode]);

  useEffect(() => {
    window.addEventListener('scroll', () => onScroll(setIsMenu));

    return () => {
      window.removeEventListener('scroll', () => onScroll(setIsMenu));
    };
  }, []);

  const onMenuClick = (e) => {
    setActive(e);
    if (isMenu) return setIsMenu(false);
    return setIsMenu(true);
  };

  const checkMenuIcon = () => {
    if (lightMode === 'dark') {
      if (isMenu) return closeLight;
      return menuLight;
    }
    if (isMenu) return closeDark;
    return menuDark;
  };

  return (
    <>
      <nav className={lightMode}>
        <h1>
          <img
            alt=""
            src={lightMode === 'dark' ? logoLight : logoDark}
          />
        </h1>
        <ul className={lightMode}>
          <Link
            to="/"
            onClick={(e) => setActive(e)}
            className={lightMode}
          >
            Home
          </Link>
          <button
            type="button"
            className={lightMode}
            onClick={(e) => {
              setActive(e);
              setTimeout(() => {
                switchLightMode(setLightMode);
              }, 100);
            }}
          >
            {lightMode === 'dark' ? 'Light' : 'Dark'}
          </button>
        </ul>
        <button
          type="button"
          onClick={(e) => onMenuClick(e)}
          className={lightMode}
        >
          <img
            alt=""
            src={checkMenuIcon()}
          />
        </button>
      </nav>
      <ul
        id={isMenu ? 'dropdown' : 'dropdownHidden'}
        className={lightMode}
      >
        <Link
          to="/"
          className={lightMode}
          onClick={(e) => {
            setIsMenu(false);
            setActive(e);
          }}
        >
          Home
        </Link>
        <button
          type="button"
          className={lightMode}
          onClick={(e) => {
            setActive(e);
            setTimeout(() => {
              switchLightMode(setLightMode);
            }, 100);
          }}
        >
          {lightMode === 'dark' ? 'Light' : 'Dark'}
        </button>
      </ul>
    </>

  );
}

export default Nav;
