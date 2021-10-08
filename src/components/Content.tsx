import { MovieCard } from "./MovieCard";
import { useState, useEffect } from "react";
import '../styles/movie-card.scss'

interface Movie {
  title: string;
  poster: string;
  rating: string;
  runtime: string;
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
        {movie.map(film => {
          return <MovieCard key={film.title} movie={film} />
        })}
      </ul>
    </section>
  );
}