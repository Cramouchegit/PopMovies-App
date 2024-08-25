import { useEffect, useState } from "react";
import StarRating from "../StarRating";
import Loader from "./Loader";

import { WatchedMovie, Movies } from "../types/types";

const API_KEY = import.meta.env.VITE_API_KEY;

interface MovieDetailsProps {
  selectedId: string;
  onCloseMovie: () => void;
  onAddWatched: (movie: WatchedMovie) => void;
  watched: WatchedMovie[];
}

function MovieDetails({
  selectedId,
  onCloseMovie,
  onAddWatched,
  watched,
}: MovieDetailsProps) {
  const [movie, setMovie] = useState<Movies>({} as Movies);
  const [userRating, setUserRating] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const isWatched = watched.some((movie) => movie.imdbID === selectedId);
  const userRatingWatched = watched.find(
    (movie) => movie.imdbID === selectedId
  )?.userRating;

  const {
    Title: title,
    Year: year,
    Released: released,
    Poster: poster,
    imdbRating,
    Runtime: runtime,
    Plot: plot,
    Genre: genre,
    Actors: actors,
    Director: director,
  } = movie;

  //   console.log(title, year);

  function handleAddWatched() {
    if (!title || !imdbRating || !runtime) return;
    const newWatchedMovie: WatchedMovie = {
      imdbID: selectedId,
      title,
      year: year || "N/A",
      poster: poster || "N/A",
      imdbRating: Number(imdbRating),
      runtime: Number(runtime?.split(" ").slice(0, 1)[0]),
      userRating: Number(userRating),
    };
    onAddWatched(newWatchedMovie);
    onCloseMovie();
  }

  useEffect(() => {
    async function getMovieDetails() {
      setIsLoading(true);
      const res = await fetch(
        `https://www.omdbapi.com/?apikey=${API_KEY}&i=${selectedId}`
      );
      const data = await res.json();
      setMovie(data);
      setIsLoading(false);
    }
    getMovieDetails();
  }, [selectedId]);

  useEffect(() => {
    if (!title) return;
    document.title = `PopMov | ${title}`;

    return () => {
      document.title = "PopMovie";
      setUserRating(0);
    };
  }, [title]);

  return (
    <div className="details">
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <header>
            <button className="btn-back" onClick={onCloseMovie}>
              &#x2715;
            </button>
            <img src={poster} alt={`${title} poster`} />
            <div className="details-overview">
              <h2>{title}</h2>
              <p>
                <span>🗓️</span>
                <span>{released}</span>
              </p>
              <p>
                <span>⏳</span>
                <span>{runtime}</span>
              </p>

              <p>
                <span>🌟</span>
                <span>{imdbRating}</span>
              </p>
            </div>
          </header>
          <section>
            <p>
              <em>{plot}</em>
            </p>
            <p>Genre: {genre}</p>
            <p>Starring: {actors}</p>
            <p>Directed by: {director}</p>
            <div className="rating">
              {!isWatched ? (
                <>
                  <StarRating
                    max={10}
                    size={24}
                    color="#f1c40f"
                    onSetRating={setUserRating}
                  />
                  {userRating > 0 && (
                    <button className="btn-add" onClick={handleAddWatched}>
                      Add to Watched
                    </button>
                  )}
                </>
              ) : (
                <p>
                  You have watched this movie a with a rating of{" "}
                  {userRatingWatched} / 10
                </p>
              )}
            </div>
          </section>
        </>
      )}
    </div>
  );
}

export default MovieDetails;
