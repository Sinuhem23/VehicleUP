import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import '../CSS/nav.css';
import Logo from '../images/gears.png';
import { ListContext } from '../App';

export default function Nav() {
  const [text, setText] = useState('');
  const context = useContext(ListContext);
  let term = context.term;

  //  const handleSubmit = (e) => {
  //     e.preventDefault();
  //     let setTerm = context.setTerm;
  //     setTerm(text);
  //      console.log('im HERE ' + text);
  //   };

  return (
    <div>
      {/* --Navbar   -- */}
      <nav class='nav'>
        <div>
          <a href='/'>
            <img class='icon-1' src={Logo}></img>
          </a>
        </div>
        <h1 class='website_name'>
          <span>V</span>ehicle <span>U</span>ploads
        </h1>
        {/* <div class='search'>
        <form className='main_input' onSubmit={handleSubmit}>
          <input type='search' 
          onChange={(e) => setText(e.target.value)}
          required
          placeholder='Search' />
           <button type='submit'
           className='searchBtn' >
          Search
        </button>
        </form>
        </div> */}
        <div class='icon-2'>
          <h3>
            <a href='/'>Home</a>
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
