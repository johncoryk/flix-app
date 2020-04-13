import React, { useState } from 'react';

import Layout from './components/layout';
import Search from './components/search';
import Movie from './components/movie';

function App() {
  const [movieData, setMovieData] = useState([]);
  const [movieTitle, setMovieTitle] = useState();

  const KEY = process.env.REACT_APP_API_KEY;

  const getMovie = async (e) => {
    e.preventDefault();
    const movie = movieTitle;
    const apiCall = await fetch(
      `https://api.themoviedb.org/3/movie/${movie}?api_key=${KEY}`
    );
    const data = await apiCall.json();

    if (apiCall.ok) {
      setMovieData({
        data,
        posterImg: data.poster_path,
        title: data.title,
        tagline: data.tagline,
        releaseDate: data.release_date.slice(0, 4),
        genre: data.genres[0].name,
        overview: data.overview,
        backdrop: data.backdrop_path,
        error: '',
      });
    } else {
      setMovieData({
        data,
        posterImg: '',
        title: '',
        tagline: '',
        releaseDate: '',
        genre: '',
        overview: '',
        backdrop: '',
        error: 'Movie not found...',
      });
    }
    setMovieTitle('');
  };

  return (
    <>
      <Layout backdrop={movieData.backdrop}>
        <Search
          getMovie={getMovie}
          movieTitle={movieTitle}
          setMovieTitle={setMovieTitle}
        />
        <Movie
          posterImg={movieData.posterImg}
          title={movieData.title}
          tagline={movieData.tagline}
          releaseDate={movieData.releaseDate}
          genre={movieData.genre}
          overview={movieData.overview}
          error={movieData.error}
        />
      </Layout>
    </>
  );
}

export default App;
