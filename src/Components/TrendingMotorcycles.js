import React from 'react';
import '../CSS/trendingmotorcycles.css';
import SearchBar from './SearchBar';

function TrendingMotorcycles() {
  return (
    <div>
      <SearchBar />
      {/* -- Motorcycle Videos Section -- */}

      <div class='motorcycle_uploads'>
        <h3>Motorcycle Videos</h3>
        <div class='recently_added_playlist_videos'>
          <div>
            <iframe
              src='https://www.youtube.com/embed/Q9ojN6WSuSA'
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowfullscreen
            ></iframe>
          </div>
          <div>
            <iframe
              src='https://www.youtube.com/embed/nbQ8in-Gnmg'
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowfullscreen
            ></iframe>
          </div>
          <div>
            <iframe
              src='https://www.youtube.com/embed/wwCLwNW2qlU'
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowfullscreen
            ></iframe>
          </div>
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
              src='https://www.youtube.com/embed/Ln4h4rscBB4'
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
          <div>
            <iframe
              src='https://www.youtube.com/embed/bKEovEgodaA'
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowfullscreen
            ></iframe>
          </div>
          <div>
            <iframe
              src='https://www.youtube.com/embed/XPpoI9Bufnc'
              title='YouTube video player'
              frameborder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
      {/* -- End of Motorcycle Videos section -- */}
    </div>
  );
}

export default TrendingMotorcycles;
