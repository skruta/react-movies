import { SearchBar } from './SearchBar';
import { Logo } from './Logo';
import { MoviesResult } from './MoviesResult';

const NavBar = ({ children }) => {
  return <nav className="nav-bar">{children}</nav>;
};

export { NavBar };
