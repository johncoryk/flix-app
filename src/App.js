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
    const apiCallOne = await fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=${KEY}&query=${movie}`
    );
    const preData = await apiCallOne.json();

    if (apiCallOne.ok) {
      try {
        const apiCallTwo = await fetch(
          `https://api.themoviedb.org/3/movie/${preData.results[0].id}?api_key=${KEY}`
        );

        const data = await apiCallTwo.json();

        if (apiCallTwo.ok) {
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
        }
      } catch {
        setMovieData({
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
