import React from 'react';

import './styles/tagline.scss';

const MovieTagline = ({ tagline }) => {
  return <h2 className="tagline">{tagline}</h2>;
};

export default MovieTagline;
