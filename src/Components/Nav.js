import React from 'react';

export default function Nav() {
  return (
    <div>
      {/* --Navbar   -- */}
      <nav class='nav'>
        <div>
          <a href='./home_page.html'>
            <img class='icon-1' src='../images/gears.png' />
          </a>
        </div>
        <h1 class='website_name'>
          <span>V</span>ehicle <span>U</span>ploads
        </h1>
        <div class='search'>
          <input type='search' placeholder='Search' />
        </div>
        <div class='icon-2'>
          <h3>
            <a href='./home_page.html'>Home</a>
          </h3>
        </div>
        <div class='icon-3'>
          <h3>
            <a href='#'>Login</a>
          </h3>
        </div>
      </nav>
      {/* -- End of Navbar -- */}
    </div>
  );
}
