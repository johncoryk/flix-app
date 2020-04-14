import React from 'react';

import './styles/poster.scss';

const Poster = ({ posterImg, title }) => {
  return (
    <div className="posterContainer">
      {posterImg && (
        <img
          className="img"
          src={`https://image.tmdb.org/t/p/original/${posterImg}`}
          alt={`${title}`}
        />
      )}
    </div>
  );
};

export default Poster;
