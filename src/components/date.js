import React from 'react';

import './styles/date.scss';

const Date = ({ releaseDate }) => {
  return (
    <>
      {releaseDate && (
        <h3 className="releaseYear">Year Released: {releaseDate}</h3>
      )}
    </>
  );
};

export default Date;
