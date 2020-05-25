import React from 'react';
import '../../Pages/Main.css';
import Logo from './Logo';
import Search from './Search';

function Header() {
  return (
    <header className="Header Clearfix">
      <Logo />
      <Search />
      <div className="About">about</div>
    </header>
  );
}

export default Header;
