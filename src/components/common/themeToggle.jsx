
import { useEffect, useState } from 'react';
import './themeToggle.css';

function ThemeToggle() {
  const [isDark, setIsDark] = useState(() => {
    return localStorage.getItem('real-estate-theme') === 'dark';
  });

  useEffect(() => {
    const theme = isDark ? 'dark' : 'light';

    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('real-estate-theme', theme);
  }, [isDark]);

  const toggleTheme = () => {
    setIsDark((previous) => !previous);
  };

  return (
    <button
      type="button"
      className={`theme-toggle ${isDark ? 'is-dark' : ''}`}
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      aria-pressed={isDark}
    >
      <span className="theme-toggle__track">
        <span className="theme-toggle__icon theme-toggle__icon--sun">
          ☼
        </span>

        <span className="theme-toggle__thumb">
          {isDark ? '☾' : '☼'}
        </span>

        <span className="theme-toggle__icon theme-toggle__icon--moon">
          ☾
        </span>
      </span>
    </button>
  );
}

export default ThemeToggle;

