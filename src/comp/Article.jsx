import React from 'react';
import { useNavigate } from 'react-router-dom';
import articleIcon from '../style/icons/article.jpg';
import backIcon from '../style/icons/back.png';

function Article() {
  const navigate = useNavigate();
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
    `,
    publishedAt: new Date(Date.now()).toLocaleDateString(),
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
      >
        <img
          alt="Back"
          src={backIcon}
        />
      </button>
    </main>
  );
}

export default Article;
