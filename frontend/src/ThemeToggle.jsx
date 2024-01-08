import { useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';


function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  function handleThemeToggle() {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark');
  }

  return (
    <div className="flex items-center">
      <FaMoon className="toggle-icon" />
      <label htmlFor="theme-toggle" className="switch">
        <input type="checkbox" id="theme-toggle" onChange={handleThemeToggle} />
        <span className="slider"></span>
      </label>
      <FaSun className="toggle-icon" />
    </div>
  );
}

export default ThemeToggle;