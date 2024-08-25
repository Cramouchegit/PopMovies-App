export interface Movie {
  imdbID: string;
  title: string;
  year: string;
  poster: string;
  imdbRating?: number;
  runtime?: number;
  userRating?: number;
}

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

export interface WatchedMovie {
  imdbID: string;
  title: string;
  year: string;
  poster: string;
  imdbRating: number;
  userRating: number;
  runtime: number;
}
