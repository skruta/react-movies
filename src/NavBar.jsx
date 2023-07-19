import { SearchBar } from './SearchBar';
import { Logo } from './Logo';
import { MoviesResult } from './MoviesResult';

const NavBar = ({ movies }) => {
  return (
    <nav className="nav-bar">
      <Logo />
      <SearchBar />
      <MoviesResult />
    </nav>
  );
};

export { NavBar };
