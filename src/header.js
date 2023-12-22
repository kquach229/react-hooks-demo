import { useContext } from 'react';
import ContextFile from './context/ContextFile';

const Header = () => {
  const { darkMode, setDarkMode } = useContext(ContextFile);
  return (
    <div
      style={{
        backgroundColor: darkMode ? 'black' : 'white',
        color: darkMode ? 'white' : 'black',
      }}>
      I am the header
      <button onClick={() => setDarkMode((prevState) => !prevState)}>
        Toggle dark mode
      </button>
    </div>
  );
};

export default Header;
