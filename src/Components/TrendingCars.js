import React from 'react';
import '../CSS/trendingcars.css';
import SearchBar from './SearchBar';

function TrendingCars() {
  return (
    <div>
      <SearchBar />
      {/* -- Car Videos Section -- */}

      <div class='cars_uploads'>
        <h3>Car Videos</h3>
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
          <div>
            <iframe
              src='https://www.youtube.com/embed/TUs48KitW6M'
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowfullscreen
            ></iframe>
          </div>
          <div>
            <iframe
              src='https://www.youtube.com/embed/YCjy9cU-3NA'
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowfullscreen
            ></iframe>
          </div>
          <div>
            <iframe
              src='https://www.youtube.com/embed/N7frLe-nQog'
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowfullscreen
            ></iframe>
          </div>
          <div>
            <iframe
              src='https://www.youtube.com/embed/tbm-izZisbw'
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowfullscreen
            ></iframe>
          </div>
          <div>
            <iframe
              src='https://www.youtube.com/embed/DhE7TEhAfVQ'
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowfullscreen
            ></iframe>
          </div>
          <div>
            <iframe
              src='https://www.youtube.com/embed/mtKGgE_wO38'
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowfullscreen
            ></iframe>
          </div>
          <div>
            <iframe
              src='https://www.youtube.com/embed/yh9PRTMFWKk'
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
      {/* -- End of Car Videos section -- */}
    </div>
  );
}

export default TrendingCars;
