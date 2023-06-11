import React, { useEffect, useState } from 'react';

const useSwitchTheme = () => {

  const selectDarkQuery = "(prefer-color-scheme: dark)";
 
  const [mode, setMode] = useState("");

  useEffect(() => {

    const mediaQuery = window.matchMedia(selectDarkQuery);
    const userPreference = window.localStorage.getItem("theme");

    const handleChange = () => {
      if (userPreference) {
        let checkTheme = userPreference === 'dark' ? 'dark' : 'light';
        setMode(checkTheme);

        if (checkTheme === 'dark') {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }

      } else {
        let checkTheme = mediaQuery.matches ? 'dark' : 'light';
        setMode(checkTheme);
        window.localStorage.setItem(
          'theme',
          checkTheme
        );

        if (checkTheme === 'dark') {
          document.documentElement.classList.add('dark');
        } else {
          document.documentElement.classList.remove('dark');
        }
      }
    }

    handleChange();

    mediaQuery.addEventListener("change", handleChange)

    return () => mediaQuery.removeEventListener("change", handleChange);
    
  }, []);

  useEffect(() => {

    if (mode === 'dark') {
      window.localStorage.setItem('theme', 'dark');
      document.documentElement.classList.add('dark');
    } 
    
    if (mode === 'light') {
      window.localStorage.setItem('theme', 'light');
      document.documentElement.classList.remove('dark');
    }
    
  }, [mode]);

  return [mode, setMode];
};

export default useSwitchTheme;