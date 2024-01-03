/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import articleIcon from '../style/icons/article.jpg';
import backDark from '../style/icons/backDark.png';
import backLight from '../style/icons/backLight.png';

function Article({ lightMode }) {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }, 25);
  }, []);

  const article = {
    id: 0,
    img: articleIcon,
    title: `
      Lorem ipsum dolor sit amet,
      consectetur adipiscing elit,
      sed do eiusmod tempor incididunt
      ut labore et dolore magna aliqua.
    `,
    content: `
      Lorem ipsum dolor sit amet,
      consectetur adipiscing elit,
      sed do eiusmod tempor incididunt
      ut labore et dolore magna aliqua.
      Lorem ipsum dolor sit amet,
      consectetur adipiscing elit,
      sed do eiusmod tempor incididunt
      ut labore et dolore magna aliqua.
      Ut enim ad minim veniam, quis nostrud
      exercitation ullamco laboris nisi
      ut aliquip ex ea commodo consequat.
      Duis aute irure dolor in reprehenderit
      in voluptate velit esse cillum
      dolore eu fugiat nulla pariatur.
      Excepteur sint occaecat cupidatat
      non proident, sunt in culpa qui officia
      deserunt mollit anim id est laborum.
      ut aliquip ex ea commodo consequat.
      Duis aute irure dolor in reprehenderit
      in voluptate velit esse cillum
      dolore eu fugiat nulla pariatur.
      Excepteur sint occaecat cupidatat
      non proident, sunt in culpa qui officia
      deserunt mollit anim id est laborum.
      Excepteur sint occaecat cupidatat
      non proident, sunt in culpa qui officia
      deserunt mollit anim id est laborum.
      ut aliquip ex ea commodo consequat.
      Duis aute irure dolor in reprehenderit
      in voluptate velit esse cillum
      dolore eu fugiat nulla pariatur.
      Excepteur sint occaecat cupidatat
      non proident, sunt in culpa qui officia
      deserunt mollit anim id est laborum.
      Excepteur sint occaecat cupidatat
      non proident, sunt in culpa qui officia
      deserunt mollit anim id est laborum.
      ut aliquip ex ea commodo consequat.
      Duis aute irure dolor in reprehenderit
      in voluptate velit esse cillum
      dolore eu fugiat nulla pariatur.
      Excepteur sint occaecat cupidatat
      non proident, sunt in culpa qui officia
      deserunt mollit anim id est laborum.
    `,
    publishedAt: new Date(Date.now()).toLocaleString(),
  };
  return (
    <main id="article">
      <h1>{article.title}</h1>
      <div>{article.publishedAt}</div>
      <img
        alt="Article"
        src={article.img}
      />
      <p>{article.content}</p>
      <button
        type="button"
        onClick={() => navigate(-1)}
        className={`${lightMode === 'dark' ? 'light' : 'dark'}Accent`}
      >
        <img
          alt="Back"
          src={lightMode === 'dark' ? backDark : backLight}
        />
      </button>
    </main>
  );
}

export default Article;
