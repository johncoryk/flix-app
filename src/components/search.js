import React from 'react';

const Search = ({ getMovie, movieTitle, setMovieTitle }) => {
  return (
    <form onSubmit={getMovie}>
      <input
        onChange={(e) => setMovieTitle(e.target.value)}
        type="text"
        value={movieTitle || ''}
        placeholder="Movie Title..."
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default Search;
