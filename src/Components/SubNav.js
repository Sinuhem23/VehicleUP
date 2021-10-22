import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/subnav.css';

export default function SubNav() {
  return (
    <div>
      <div class='all_Navbar_Container'>
        {/* -- Sub-Navbar -- */}
        {/* -- The navigation menu -- */}
        <div class='sub_navbar'>
          <a href='./likedvideos'>Liked Videos</a>
          <div class='subnav'>
            <button class='subnavbtn'>
              Playlist <i class='fa fa-caret-down'></i>
            </button>
            <div class='subnav-content'>
              <a href='./entireplaylist'>All</a>

              <a href='./favoriteplaylist'>Favorite List</a>
            </div>
          </div>
          <div class='subnav'>
            <button class='subnavbtn'>
              Account <i class='fa fa-caret-down'></i>
            </button>
            <div class='subnav-content'>
              <a href='./myvideos'>My videos</a>

              <a href='./users'>My information</a>
            </div>
          </div>
          <div class='subnav'>
            <button class='subnavbtn'>
              Trending <i class='fa fa-caret-down'></i>
            </button>
            <div class='subnav-content'>
              <a href='./trendingboats'>Boats</a>
              <a href='./trendingcars'>Cars</a>
              <a href='./trendingmotorcycles'>Motorcycles</a>
              <a href='./trendingairplanes'>Airplanes</a>
              <a href='./'>All</a>
            </div>
          </div>
          <a href='./history'>History</a>
        </div>
        {/* -- End of Sub-Navbar -- */}
      </div>
      {/* -- End of All Navbar Container -- */}
    </div>
  );
}
