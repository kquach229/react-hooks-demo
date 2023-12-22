import { useState } from 'react';
import ContextFile from './ContextFile';

const ContextProvider = ({ children }) => {
  // create state
  const [darkMode, setDarkMode] = useState(false);

  // create provider HOC and provide values
  return (
    <ContextFile.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </ContextFile.Provider>
  );
};

export default ContextProvider;
