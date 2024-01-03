/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import articleIcon from '../style/icons/article.jpg';

function Home({ lightMode }) {
  const newsArticle = [
    1, 2, 3, 4, 5, 6, 7, 8, 9,
    10, 11, 12, 13, 14, 15, 16, 17,
    18, 19, 20, 21, 22, 24, 25, 26,
  ];

  const newsOne = newsArticle.filter((obj, index) => index >= 0 && index <= 8);
  const newsTwo = newsArticle.filter((obj, index) => index >= 9 && index <= 12);
  const newsThree = newsArticle.filter((obj, index) => index >= 13 && index <= 16);
  const newsFour = newsArticle.filter((obj, index) => index >= 17 && index <= 20);
  const newsFive = newsArticle.filter((obj, index) => index >= 21 && index <= 24);

  const mapNewsCon = (className, array, img) => (
    <div className={className}>
      {array.map((obj) => (
        <Link
          to={`/${obj}`}
          key={obj}
          className={`${lightMode}Accent`}
        >
          {img ? (
            <img
              alt="Article"
              src={img}
            />
          ) : (null)}
          <div>
            <h2>
              Lorem ipsum dolor sit amet,
              consectetur adipiscing elit,
              sed do eiusmod tempor incididunt
            </h2>
            <p>Genre</p>
          </div>
        </Link>
      ))}
    </div>
  );

  return (
    <main id="home">
      <h1>Main stories</h1>
      {mapNewsCon('newsOne', newsOne, articleIcon)}
      <h1>Secondary stories</h1>
      {mapNewsCon('newsTwo', newsTwo, articleIcon)}
      <h1>Third stories</h1>
      {mapNewsCon('newsThree', newsThree, articleIcon)}
      <h1>Fourth stories</h1>
      {mapNewsCon('newsTwo', newsFour, articleIcon)}
      <h1>Fifth stories</h1>
      {mapNewsCon('newsTwo', newsFive, articleIcon)}
    </main>
  );
}

export default Home;
