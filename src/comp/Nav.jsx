/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  getLightMode,
  switchLightMode,
} from '../utilities/lightMode';
import { onScroll } from '../utilities/windowEvents';
import planet from '../style/icons/planet.png';

function Nav({ setActive, lightMode, setLightMode }) {
  const [isMenu, setIsMenu] = useState(false);

  useEffect(() => {
    document.documentElement.className = `${getLightMode(setLightMode)}Accent`;
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

  return (
    <>
      <nav className={`${lightMode}Accent ${lightMode}Shadow`}>
        <Link
          to="/"
          className={`${lightMode}Accent`}
        >
          <img
            alt=""
            src={planet}
          />
          <h1
            className={lightMode === 'dark' ? 'lightBorder' : 'darkBorder'}
          >
            NEWS
          </h1>
        </Link>
        <ul className={`${lightMode}Accent`}>
          <Link
            to="/"
            onClick={(e) => setActive(e)}
            className={`${lightMode}Accent`}
          >
            Home
          </Link>
          <button
            type="button"
            className={`${lightMode}Accent`}
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
          className={`${lightMode}Accent`}
        >
          {!isMenu ? (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M4 18h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1m0-5h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1s.45 1 1 1M3 7c0 .55.45 1 1 1h16c.55 0 1-.45 1-1s-.45-1-1-1H4c-.55 0-1 .45-1 1"
              />
            </svg>
          ) : (
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <path
                fill="currentColor"
                d="M18.3 5.71a.996.996 0 0 0-1.41 0L12 10.59L7.11 5.7A.996.996 0 1 0 5.7 7.11L10.59 12L5.7 16.89a.996.996 0 1 0 1.41 1.41L12 13.41l4.89 4.89a.996.996 0 1 0 1.41-1.41L13.41 12l4.89-4.89c.38-.38.38-1.02 0-1.4"
              />
            </svg>
          )}
        </button>
      </nav>
      <ul
        id={isMenu ? 'dropdown' : 'dropdownHidden'}
        className={`${lightMode}Accent ${lightMode}Shadow`}
      >
        <Link
          to="/"
          className={`${lightMode}Accent`}
          onClick={(e) => {
            setIsMenu(false);
            setActive(e);
          }}
        >
          Home
        </Link>
        <button
          type="button"
          className={`${lightMode}Accent`}
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
