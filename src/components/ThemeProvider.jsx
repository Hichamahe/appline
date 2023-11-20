import { createContext, useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Récupérer la valeur du thème à partir du localStorage ou utiliser une valeur par défaut
  const storedTheme = localStorage.getItem('theme');
  const [isDay, setIsDay] = useState(storedTheme === 'dark' ? false : true);

  const toggleTheme = () => {
    setIsDay((prevIsDay) => {
      const newIsDay = !prevIsDay;

      // Stocker le thème dans le localStorage
      localStorage.setItem('theme', newIsDay ? 'light' : 'dark');

      return newIsDay;
    });
  };

  useEffect(() => {
    // Modifier la classe du body en fonction du thème
    document.body.classList.remove(isDay ? 'bg-dark' : 'bg-light');
    document.body.classList.add(isDay ? 'bg-light' : 'bg-dark');
  }, [isDay]);

  return (
    <ThemeContext.Provider value={{ isDay, toggleTheme }}>
      <div
        className={`app ${
          isDay ? 'theme-light' : 'theme-dark'
        } transition-all duration-500 ease-in-out`}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useTheme = () => {
  return useContext(ThemeContext);
};
