import WatchedItem from "./WatchedItem.jsx";
import { Movie } from "../types/types";

interface WatchedListProps {
  watched: Movie[];
  onDeleteWatched: (imdbID: string) => void;
}

const WatchedList: React.FC<WatchedListProps> = ({
  watched,
  onDeleteWatched,
}) => {
  return (
    <ul className="list">
      {watched.map((movie, index) => (
        <WatchedItem
          key={index}
          movie={movie}
          onDeleteWatched={onDeleteWatched}
        />
      ))}
    </ul>
  );
};

export default WatchedList;
