/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';

function Loading({ lightMode }) {
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    }, 25);
  }, []);

  return (
    <div id="loading" className={lightMode}>
      <div
        id="loadingBar"
        className={`
          ${lightMode === 'dark' ? 'light' : 'dark'}Border
        `}
      >
        <div />
        <div />
        <div />
      </div>
    </div>
  );
}

export default Loading;
