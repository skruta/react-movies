import { WatchedMovie } from './WatchedMovie';

const WatchedMovies = ({ watched }) => {
  return (
    <ul className="list">
      {watched.map((movie) => (
        <WatchedMovie movie={movie} key={movie.imdbID} />
      ))}
    </ul>
  );
};

export { WatchedMovies };
