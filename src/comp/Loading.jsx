/* eslint-disable react/prop-types */
import React from 'react';

function Loading({ lightMode }) {
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
