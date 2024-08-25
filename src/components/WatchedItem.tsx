import { Movie } from "../types/types";

// Definisikan interface untuk props yang diterima oleh WatchedItem
interface WatchedItemProps {
  movie: Movie;
  onDeleteWatched: (imdbID: string) => void;
}

// Komponen WatchedItem dengan tipe yang ditentukan
const WatchedItem: React.FC<WatchedItemProps> = ({
  movie,
  onDeleteWatched,
}) => {
  return (
    <li key={movie.imdbID}>
      <img src={movie.poster} alt={`${movie.title} poster`} />
      <h3>{movie.title}</h3>
      <div>
        <p>
          <span>🎬</span>
          <span>{movie.imdbRating}</span>
        </p>
        <p>
          <span>🌟</span>
          <span>{movie.userRating}</span>
        </p>
        <p>
          <span>⏳</span>
          <span>{movie.runtime} min</span>
        </p>
        <button
          className="btn-delete"
          onClick={() => onDeleteWatched(movie.imdbID)}
        >
          X
        </button>
      </div>
    </li>
  );
};

export default WatchedItem;
