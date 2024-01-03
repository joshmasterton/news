/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import twitterIcon from '../style/icons/twitter.png';
import youtubeIcon from '../style/icons/youtube.png';

function Footer({ lightMode }) {
  return (
    <footer>
      <div>
        <button
          type="button"
          className={`${lightMode}Accent`}
        >
          <img
            alt="Twitter"
            src={twitterIcon}
          />
        </button>
        <button
          type="button"
          className={`${lightMode}Accent`}
        >
          <img
            alt="Twitter"
            src={youtubeIcon}
          />
        </button>
      </div>
      <div>
        <Link to="/" className={lightMode}>
          Home
        </Link>
        <Link to="/" className={lightMode}>
          About
        </Link>
        <Link to="/" className={lightMode}>
          Menu
        </Link>
      </div>
      <p>
        Copyright @ 2024 Zonomaly
      </p>
    </footer>
  );
}

export default Footer;
