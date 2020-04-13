import React from 'react';

const Genre = ({ genre }) => {
  return <>{genre && <h3>Genre: {genre}</h3>}</>;
};

export default Genre;
