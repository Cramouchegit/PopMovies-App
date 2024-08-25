export interface Movies {
  Title: string;
  Year: string;
  Released?: string;
  Poster?: string;
  imdbRating?: string;
  Runtime?: string;
  Plot?: string;
  Genre?: string;
  Actors?: string;
  Director?: string;
  imdbID: string;
}

interface MovieItemProps {
  movie: Movies;
  onSelectMovieId: (id: string) => void;
}

const MovieItem: React.FC<MovieItemProps> = ({ movie, onSelectMovieId }) => {
  return (
    <li key={movie.imdbID} onClick={() => onSelectMovieId(movie.imdbID)}>
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>📅</span>
          <span>{movie.Year}</span>
        </p>
      </div>
    </li>
  );
};

export default MovieItem;
