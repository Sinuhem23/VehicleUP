import React, { useContext } from 'react';
import { ListContext } from '../App';
import { Link } from 'react-router-dom';
import '../CSS/myvideos.css';
import landingImage from '../images/gears_background.png';

const moment = require('moment');

function MyVideos() {
  const context = useContext(ListContext);
  let youTube = context.youTube;

  let isLoading = context.isLoading;

  return (
    <div class='container'>
      {/* -- Add Video Section -- */}
      <div class='add_video_container '>
        <h1 class='homepg_main_text'>
          <span>Upload </span> your vehicle videos by categories!
        </h1>

        <div class='home_Text'>
          <h2>Add videos to your account</h2>
        </div>

        <button class='add_account_btn'>Add to Account</button>
        <img class='landing_Image' src={landingImage} />
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
export default MyVideos;
