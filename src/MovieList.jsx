import { useState } from 'react';
import { List } from './List';

const MovieList = () => {
  const [isOpen1, setIsOpen1] = useState(true);

  return (
    <div className="box">
      <button
        className="btn-toggle"
        onClick={() => setIsOpen1((open) => !open)}
      >
        {isOpen1 ? '–' : '+'}
      </button>
      {isOpen1 && <List />}
    </div>
  );
};

export { MovieList };
