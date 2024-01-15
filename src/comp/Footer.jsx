/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import { switchLightMode } from '../utilities/lightMode';
import twitterIcon from '../style/icons/twitter.png';
import youtubeIcon from '../style/icons/youtube.png';

function Footer({
  lightMode,
  setLightMode,
  setActive,
}) {
  return (
    <footer
      className={lightMode}
    >
      <div>
        <button
          type="button"
          className={lightMode}
        >
          <img
            alt="Twitter"
            src={twitterIcon}
          />
        </button>
        <button
          type="button"
          className={lightMode}
        >
          <img
            alt="Youtube"
            src={youtubeIcon}
          />
        </button>
      </div>
      <div>
        <Link to="/" className={lightMode}>
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
      </div>
      <p>
        Copyright @ 2024 Zonomaly
      </p>
    </footer>
  );
}

export default Footer;
