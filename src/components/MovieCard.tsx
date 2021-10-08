import { Star, Clock } from 'react-feather';

import '../styles/movie-card.scss';

interface MovieCardProps {
  movie: {
    title: string;
    poster: string;
    rating: string;
    runtime: string;
  }
}

export function MovieCard(props: MovieCardProps) {
  return (
    <div className="movie-card">
      <img
        src={props.movie.poster}
        alt={props.movie.title}
      />

      <div>
        <div className="movie-info">
          <span>{props.movie.title}</span>
          <div className="meta">
            <div>
              <Star /> {props.movie.rating}
            </div>

            <div>
              <Clock /> {props.movie.runtime}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}