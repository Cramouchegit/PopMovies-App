import { Movies } from "../types/types.js";
import MovieItem from "./MovieItem.jsx";

interface PropsMovieList {
  movies: Movies[] | undefined;
  onSelectMovieId: (id: string) => void;
}

// Menggunakan interface untuk tipe props
const MovieList: React.FC<PropsMovieList> = ({ movies, onSelectMovieId }) => {
  return (
    <ul className="list list-movies">
      {movies?.map((movie, index) => (
        <MovieItem
          key={index}
          movie={movie}
          onSelectMovieId={onSelectMovieId}
        />
      ))}
    </ul>
  );
};

export default MovieList;
