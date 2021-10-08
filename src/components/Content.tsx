import { MovieCard } from "./MovieCard";
import { useState, useEffect } from "react";
import '../styles/movie-card.scss'

interface Movie {
  imdbID: string;
  Title: string;
  Poster: string;
  Ratings: Array<{
    Source: string;
    Value: string;
  }>;
  Runtime: string;
}

export function Content() {
  // Complete aqui
  const [movie, setMovie] = useState<Movie[]>([]);
  useEffect(() => {
    fetch('http://localhost:3333/movies')
      .then(response => response.json())
      .then(data => setMovie(data))
  }, []);

  return (
    <section className="content">
      <h1>Categoria</h1>
      <ul>
        {movie.map(movie => {
          return <MovieCard key={movie.imdbID} />
        })}
      </ul>
    </section>
  );
}