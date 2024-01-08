/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import articleIcon from '../style/icons/noImage.png';

function Article({ news, lightMode }) {
  const navigate = useNavigate();
  const [article, setArticle] = useState({});
  const [content, setContent] = useState([]);

  useEffect(() => {
    const getArticle = async () => {
      const articleNews = news.filter(
        (obj) => obj.article_id === window.location.hash.slice(2),
      );
      setArticle(articleNews[0]);
    };
    getArticle();
  }, [news]);

  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }, 25);
  }, []);

  useEffect(() => {
    if (article?.content) {
      const split = article?.content.split('. ');
      setContent(split);
    }
  }, [article]);

  return (
    <main id="article">
      <h1>{article?.title}</h1>
      <div>{article?.category ? `Category - ${article?.category}` : ''}</div>
      <div>
        {article?.pubdate ? new Date(article?.pubdate).toLocaleString() : null}
      </div>
      <img
        alt=""
        src={article?.image_url || articleIcon}
        className={`${lightMode}Accent`}
      />
      <div>{article?.source_id ? `Source - ${article?.source_id}` : ''}</div>
      <div>{article?.country ? `Country - ${article?.country}` : ''}</div>
      <div id="content">
        {content?.map((obj) => (
          <div key={obj}>
            {`${obj}.`}
          </div>
        ))}
      </div>
      <button
        type="button"
        onClick={() => navigate(-1)}
        className={`${lightMode === 'dark' ? 'light' : 'dark'}Accent`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
        >
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="48"
            d="M328 112L184 256l144 144"
          />
        </svg>
      </button>
    </main>
  );
}

export default Article;
