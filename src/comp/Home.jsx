/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import articleIcon from '../style/icons/noImage.png';

function Home({ news, lightMode }) {
  const newsOne = news.filter((obj, index) => index >= 0 && index <= 8);
  const newsTwo = news.filter((obj, index) => index >= 9 && index <= 12);
  const newsThree = news.filter((obj, index) => index >= 13 && index <= 16);
  const newsFour = news.filter((obj, index) => index >= 17 && index <= 20);
  const newsFive = news.filter((obj, index) => index >= 21 && index <= 24);
  const newsSix = news.filter((obj, index) => index >= 25 && index <= 28);
  const newsSeven = news.filter((obj, index) => index >= 29 && index <= 32);

  const mapNewsCon = (className, array, img) => (
    <div className={className}>
      {array.map((obj) => (
        <Link
          to={`/${obj.article_id || 0}`}
          key={obj.article_id || obj}
          className={`${lightMode}Accent`}
        >
          {img ? (
            <img
              alt=""
              src={obj.image_url ?? articleIcon}
            />
          ) : (null)}
          <div>
            <h2>
              {obj.title}
            </h2>
            <p>{obj.pubdate ? new Date(obj.pubdate).toLocaleTimeString() : null}</p>
          </div>
        </Link>
      ))}
    </div>
  );

  return (
    <main id="home">
      <h1>Main news</h1>
      {mapNewsCon('newsOne', newsOne, articleIcon)}
      <h1>Latest news</h1>
      {mapNewsCon('newsTwo', newsTwo, articleIcon)}
      <h1>More news</h1>
      {mapNewsCon('newsThree', newsThree, articleIcon)}
      <h1>More news</h1>
      {mapNewsCon('newsTwo', newsFour, articleIcon)}
      {mapNewsCon('newsTwo', newsFive, articleIcon)}
      <h1>More news</h1>
      {mapNewsCon('newsTwo', newsSix, articleIcon)}
      {mapNewsCon('newsTwo', newsSeven, articleIcon)}
    </main>
  );
}

export default Home;
