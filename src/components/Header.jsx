import React, { useContext } from 'react';
import {ThemeContext, themes} from '../context/ThemeContext';
import '../styles/Header.css'
const Header = () => {
  const {theme, setTheme} = useContext(ThemeContext);

  const handleClick = () => {
      (theme === 'bg-dark') ? setTheme('bg-light') : setTheme('bg-dark');
  }

  return (
    <div className="Header">
      <h1>ReactHooks</h1>
      <button type="button" onClick={handleClick}>{theme === 'bg-dark' ? 'Light Mode' : 'Dark Mode'}</button>
    </div>
  );
}

export default Header;