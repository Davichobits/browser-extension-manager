import { useEffect, useState } from "react";

import Logo from "../assets/images/logo.svg";
import LogoDark from '../assets/images/logo-dark.svg'
import SunLogo from "../assets/images/icon-sun.svg";
import MoonLogo from "../assets/images/icon-moon.svg";

export const Header = () => {

  const [isDark, setIsDark] = useState(localStorage.getItem('theme') === 'dark');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const handleClick = () => {
    const html = document.documentElement;
    const isDarkChanged = html.classList.toggle('dark');
    setIsDark(isDarkChanged);
    localStorage.setItem('theme', isDarkChanged ? 'dark' : 'light');
  };

  return (
    <header className="bg-Neutral-0 dark:bg-Neutral-800 text-neutral-100 h-[66px] px-3 py-2 flex place-content-between items-center rounded-[10px] mb-10">
      <img src={isDark ? LogoDark : Logo } alt="Logo" />
      <button
        onClick={handleClick}
        className="bg-Neutral-100 hover:bg-Neutral-200 dark:hover:bg-Neutral-600 dark:bg-Neutral-700 size-[50px] rounded-lg grid place-content-center cursor-pointer transition-all"
      >
        
        <img src={isDark ? SunLogo: MoonLogo} alt="" />
      </button>
    </header>
  );
};
