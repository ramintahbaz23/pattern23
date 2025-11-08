import React from 'react';
import { Link } from 'react-router-dom';
// import { useTheme } from '../../context/ThemeContext';   // <-- remove if unused
// import sunIcon from '../../assets/images/sun.svg';       // <-- remove
// import moonIcon from '../../assets/images/moon.svg';     // <-- remove

const Navbar = () => {
  // const { isDarkMode, toggleDarkMode } = useTheme();     // <-- remove if unused

  return (
    <nav>
      <div className="flex justify-between items-center">
        <Link
          to="/"
          className="text-[16px] md:text-[16pt] dark:text-white text-black"
        >
          Pattern 23
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
