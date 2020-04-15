import React from 'react';

import Poster from './poster';
import MovieTitle from './movieTitle';
import MovieTagline from './movieTagline';
import Date from './date';
import Genre from './genre';
import Overview from './overview';
import './styles/movie.scss';

const Movie = ({
  posterImg,
  title,
  tagline,
  releaseDate,
  genre,
  overview,
  error,
}) => {
  return (
    <>
      <div className="movieContainer">
        <Poster posterImg={posterImg} title={title} />
        <div className="movieInfo">
          <MovieTitle title={title} />
          <MovieTagline tagline={tagline} />
          <Date releaseDate={releaseDate} />
          <Genre genre={genre} />
          {title && <div className="rule"></div>}
          <Overview overview={overview} />
        </div>
      </div>
      {error && error}
    </>
  );
};

export default Movie;
