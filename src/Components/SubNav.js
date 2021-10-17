import React from 'react';
import { Link } from 'react-router-dom';

export default function SubNav() {
  return (
    <div>
      <div class='all_Navbar_Container'>
        {/* -- Sub-Navbar -- */}
        {/* -- The navigation menu -- */}
        <div class='sub_navbar'>
          <a href='./liked_videos.html'>Liked Videos</a>
          <div class='subnav'>
            <button class='subnavbtn'>
              Playlist <i class='fa fa-caret-down'></i>
            </button>
            <div class='subnav-content'>
              <a href='./entire_playlist.html'>All</a>

              <a href='./playlist_Favorite_List.html'>Favorite List</a>
            </div>
          </div>
          <div class='subnav'>
            <button class='subnavbtn'>
              Account <i class='fa fa-caret-down'></i>
            </button>
            <div class='subnav-content'>
              <a href='#'>My favorites</a>
              <a href='#'>My videos</a>
              <a href='#'>My playlist</a>
              <a href='#'>My information</a>
            </div>
          </div>
          <div class='subnav'>
            <button class='subnavbtn'>
              Trending <i class='fa fa-caret-down'></i>
            </button>
            <div class='subnav-content'>
              <a href='./trending_boats.html'>Boats</a>
              <a href='./trending_cars.html'>Cars</a>
              <a href='./trending_motorcycle.html'>Motorcycles</a>
              <a href='./trending_airplane.html'>Airplanes</a>
              <a href='./actual_Landing_Page.html'>All</a>
            </div>
          </div>
          <a href='./history_page.html'>History</a>
        </div>
        {/* -- End of Sub-Navbar -- */}
      </div>
      {/* -- End of All Navbar Container -- */}
    </div>
  );
}
