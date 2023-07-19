import { MovieList } from './MovieList';
import { WatchedMovieList } from './WatchedMovieList';

const MainLayout = () => {
  return (
    <main className="main">
      <MovieList />
      <WatchedMovieList />
    </main>
  );
};

export { MainLayout };
