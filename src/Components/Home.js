import React, { useContext } from 'react';
import { ListContext } from '../App';

const moment = require('moment');

function Home() {
  const context = useContext(ListContext);
  let youTube = context.youTube;

  let isLoading = context.isLoading;

  return (
    <div class='container'>
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

      {/* -- Add Video Section -- */}
      <div class='add_video_container '>
        <h1 class='homepg_main_text'>
          <span>Upload </span> your vehicle videos by categories!
        </h1>

        <div class='home_Text'>
          <h2>Add videos to your account</h2>
        </div>

        <button class='add_account_btn'>Add to Account</button>
        <img class='landing_Image' src='../images/gears_background.png' />
      </div>

      {/* -- End of Add Video Section -- */}

      {/* -- Upload to Favorites -- */}

      <div class='upload_playlist_container'>
        <div class='upload_text_1'>
          <h3>Upload to Playlist</h3>
          <button class='add_to_playlist_btn'>Add to Playlist</button>
        </div>

        <div class='upload_text_2'>
          <h3>Recently Added To Playlist</h3>
          <div class='recently_added_playlist_videos'>
            <div>
              <iframe
                src='https://www.youtube.com/embed/uArYXvoTi2E'
                title='YouTube video player'
                frameborder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowfullscreen
              ></iframe>
            </div>
            <iframe
              src='https://www.youtube.com/embed/N7frLe-nQog'
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowfullscreen
            ></iframe>
            <iframe
              src='https://www.youtube.com/embed/hhS8Xj_Rrsc'
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowfullscreen
            ></iframe>
            <div>
              <iframe
                src='https://www.youtube.com/embed/F6zvxp1RvWM'
                title='YouTube video player'
                frameborder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowfullscreen
              ></iframe>
            </div>
            <div>
              <iframe
                src='https://www.youtube.com/embed/In_0659-ckA'
                title='YouTube video player'
                frameborder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowfullscreen
              ></iframe>
            </div>
            <div>
              <iframe
                src='https://www.youtube.com/embed/53Y7tQFeesc'
                title='YouTube video player'
                frameborder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowfullscreen
              ></iframe>
            </div>
          </div>
        </div>
      </div>

      {/* -- End of Upload to Favorites -- */}

      {/* -- Display Some Favoites -- */}

      <div class='some_favorites_container'>
        <h2 class='fav_video_text'>Some Favorite Videos</h2>
        <ul>
          <li>
            Car Videos
            <br />
            <iframe
              src='https://www.youtube.com/embed/giXNP8h5zUg'
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowfullscreen
            ></iframe>
          </li>
          <li>
            Motorcycle Videos
            <br />
            <iframe
              src='https://www.youtube.com/embed/brNoSEy2Pt4'
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowfullscreen
            ></iframe>
          </li>
          <li>
            Plane Videos
            <br />
            <iframe
              src='https://www.youtube.com/embed/xFCHrSDrHps'
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowfullscreen
            ></iframe>
          </li>
          <li>
            Boat Videos
            <br />
            <iframe
              src='https://www.youtube.com/embed/0SWItmxfHn0'
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowfullscreen
            ></iframe>
          </li>
        </ul>
      </div>

      {/* -- End of Display Some Favoites -- */}

      {/* -- Want to Share Section -- */}

      <div class='share_container'>
        <h3>Want to share videos with your buddies?</h3>
        <button class='share_btn'>Share</button>
      </div>

      {/* -- End of Want to Share Section -- */}
    </div>
  );
}
