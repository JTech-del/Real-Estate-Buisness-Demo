import { useEffect, useState } from 'react';
import './themeToggle.css';

const THEME_STORAGE_KEY = 'real-estate-theme';

function getStoredTheme() {
  return localStorage.getItem(THEME_STORAGE_KEY) === 'dark'
    ? 'dark'
    : 'light';
}

function ThemeToggle() {
  const [isDark, setIsDark] = useState(() => {
    return getStoredTheme() === 'dark';
  });

  useEffect(() => {
    const handleThemeChange = (event) => {
      if (event.key === THEME_STORAGE_KEY) {
        setIsDark(event.newValue === 'dark');
      }
    };

    window.addEventListener('storage', handleThemeChange);

    return () => {
      window.removeEventListener('storage', handleThemeChange);
    };
  }, []);

  useEffect(() => {
    const handleThemeChange = () => {
      setIsDark(getStoredTheme() === 'dark');
    };

    window.addEventListener('real-estate-theme-change', handleThemeChange);

    return () => {
      window.removeEventListener(
        'real-estate-theme-change',
        handleThemeChange,
      );
    };
  }, []);

  const toggleTheme = () => {
    const nextTheme = isDark ? 'light' : 'dark';

    document.documentElement.setAttribute('data-theme', nextTheme);
    localStorage.setItem(THEME_STORAGE_KEY, nextTheme);

    window.dispatchEvent(
      new CustomEvent('real-estate-theme-change', {
        detail: { theme: nextTheme },
      }),
    );
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