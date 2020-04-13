import React from 'react';

const Date = ({ releaseDate }) => {
  return <>{releaseDate && <h3>Year Released: {releaseDate}</h3>}</>;
};

export default Date;
