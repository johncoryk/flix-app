import React from 'react';

import './styles/search.scss';

const Search = ({ getMovie, movieTitle, setMovieTitle }) => {
  return (
    <form onSubmit={getMovie}>
      <input
        className="inputBox"
        onChange={(e) => setMovieTitle(e.target.value)}
        type="text"
        value={movieTitle || ''}
        placeholder="Movie Title..."
      />
      <button className="inputBtn" type="submit">
        Search
      </button>
    </form>
  );
};

export default Search;
