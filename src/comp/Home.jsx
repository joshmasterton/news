/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import Loading from './Loading';
import noImage from '../style/icons/noImage.png';

function Home({ news, loading, lightMode }) {
  const newsOne = news.filter((obj, index) => index >= 0 && index <= 8);
  const newsTwo = news.filter((obj, index) => index >= 9 && index <= 12);
  const newsThree = news.filter((obj, index) => index >= 13 && index <= 16);
  const newsFour = news.filter((obj, index) => index >= 17 && index <= 20);
  const newsFive = news.filter((obj, index) => index >= 21 && index <= 24);
  const newsSix = news.filter((obj, index) => index >= 25 && index <= 28);
  const newsSeven = news.filter((obj, index) => index >= 29 && index <= 32);

  const mapNewsCon = (className, array) => (
    <div className={className}>
      {array.map((obj) => (
        <Link
          to={`/${obj.article_id || 0}`}
          key={obj.article_id || obj}
          className={`
            ${lightMode}Accent
          `}
        >
          <img
            alt=""
            src={obj.image_url ?? noImage}
          />
          <div>
            <h2>
              {obj.title}
            </h2>
            <p>{obj.pubdate ? new Date(obj.pubdate).toLocaleDateString() : null}</p>
          </div>
        </Link>
      ))}
    </div>
  );

  const renderHome = () => {
    if (newsOne[0]?.title) {
      return (
        <main id="home" className={lightMode}>
          <h1>Top News</h1>
          {mapNewsCon('newsOne', newsOne)}
          <h1>Recent News</h1>
          {mapNewsCon('newsTwo', newsTwo)}
          <h1>More News</h1>
          {mapNewsCon('newsThree', newsThree)}
          <h1>More News</h1>
          {mapNewsCon('newsTwo', newsFour)}
          {mapNewsCon('newsTwo', newsFive)}
          <h1>More News</h1>
          {mapNewsCon('newsTwo', newsSix)}
          {mapNewsCon('newsTwo', newsSeven)}
        </main>
      );
    }
    return null;
  };

  if (loading) return <Loading lightMode={lightMode} />;
  return renderHome();
}

export default Home;
