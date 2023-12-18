/* eslint-disable react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import articleIcon from '../style/icons/article.jpg';

function Home() {
  const newsArticle = [
    1, 2, 3, 4, 5, 6, 7,
    8, 9, 10, 11, 12, 13,
    14, 15, 16, 17, 18, 19,
    20, 21, 22, 23, 24, 25, 26,
    27, 28, 29,
  ];

  const newsOne = newsArticle.filter((obj, index) => index === 0);
  const newsTwo = newsArticle.filter((obj, index) => index >= 1 && index < 3);
  const newsThree = newsArticle.filter((obj, index) => index >= 3 && index < 6);
  const newsFour = newsArticle.filter((obj, index) => index >= 6 && index < 10);
  const newsFive = newsArticle.filter((obj, index) => index >= 11 && index < 15);
  const newsSix = newsArticle.filter((obj, index) => index === 15);
  const newsSeven = newsArticle.filter((obj, index) => index >= 16 && index < 19);
  const newsEight = newsArticle.filter((obj, index) => index === 19);
  const newsNine = newsArticle.filter((obj, index) => index >= 19 && index < 22);

  const mapNewsCon = (className, array, img) => (
    <div className={className}>
      {array.map((obj) => (
        <Link
          to={`/${obj}`}
          key={obj}
        >
          {img ? (
            <img
              alt="Article"
              src={img}
            />
          ) : (null)}
          <h1>
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
          </h1>
          <p>Genre</p>
        </Link>
      ))}
    </div>
  );

  return (
    <main id="home">
      {mapNewsCon('newsConOne', newsOne, articleIcon)}
      {mapNewsCon('newsConTwo', newsTwo, articleIcon)}
      {mapNewsCon('newsConThree', newsThree, articleIcon)}
      {mapNewsCon('newsConFour', newsFour, articleIcon)}
      {mapNewsCon('newsConFive', newsFive, articleIcon)}
      {mapNewsCon('newsConOne', newsSix, articleIcon)}
      {mapNewsCon('newsConThree', newsSeven, articleIcon)}
      {mapNewsCon('newsConOne', newsEight, articleIcon)}
      {mapNewsCon('newsConSix', newsNine, articleIcon)}
    </main>
  );
}

export default Home;
