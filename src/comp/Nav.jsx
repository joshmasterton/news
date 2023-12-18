/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/control-has-associated-label */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../style/icons/logo.png';
import menuIcon from '../style/icons/menu.png';

function Nav({ setActive }) {
  const [isMenu, setIsMenu] = useState(false);

  const onMenuClick = (e) => {
    setActive(e);
    if (isMenu) return setIsMenu(false);
    return setIsMenu(true);
  };

  return (
    <nav>
      <h1>
        <img
          alt=""
          src={logo}
        />
      </h1>
      <ul>
        <Link to="/" onClick={(e) => setActive(e)}>
          Home
        </Link>
        <Link to="/" onClick={(e) => setActive(e)}>
          Hot
        </Link>
        <Link to="/" onClick={(e) => setActive(e)}>
          About
        </Link>
      </ul>
      <ul id={isMenu ? 'dropdown' : 'dropdownHidden'}>
        <Link to="/" onClick={(e) => setActive(e)}>
          Home
        </Link>
        <Link to="/" onClick={(e) => setActive(e)}>
          Hot
        </Link>
        <Link to="/" onClick={(e) => setActive(e)}>
          About
        </Link>
      </ul>
      <button
        type="button"
        onClick={(e) => onMenuClick(e)}
      >
        <img
          alt=""
          src={menuIcon}
        />
      </button>
    </nav>
  );
}

export default Nav;
