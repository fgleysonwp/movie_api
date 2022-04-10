import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { Container, MovieList, Movie } from "./styles";

function Home() {
  const key = "04bc98f0433fafe57db56b2b43959fbe";
  const [movies, setMovies] = useState([]);
  const img_path = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    // consumir a api...
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=${key}&language=en-US&page=1`
    )
      .then((response) => response.json())
      .then((data) => setMovies(data.results));
  }, []);

  return (
    <Container>
      <h1>Filmes</h1>

      <MovieList>
        {movies.map((movie) => {
          return (
            <Movie key={movie.id}>
              <Link to={`/details/${movie.id}`}>
                <img src={`${img_path}${movie.poster_path}`} alt="Spider Man" />
              </Link>

              <span>{movie.title}</span>
            </Movie>
          );
        })}
      </MovieList>
    </Container>
  );
}

export default Home;
