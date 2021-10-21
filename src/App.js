import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React, { useState, useEffect, createContext } from 'react';

import Nav from './Components/Nav';
import SubNav from './Components/SubNav';
import Footer from './Components/Footer';
import MyVideos from './Components/MyVideos';
import EntirePlayList from './Components/EntirePlayList';
import FavoritePlayList from './Components/FavoritePlayList';
import History from './Components/History';
import Home from './Components/Home';
import TrendingAirPlane from './Components/TrendingAirPlane';
import TrendingBoats from './Components/TrendingBoats';
import TrendingCars from './Components/TrendingCars';
import TrendingMotorcycles from './Components/TrendingMotorcycles';
import LikedVideos from './Components/LikedVideos';
import Account from './Components/Account';

export const ListContext = createContext();

function App() {
  const [youTube, setYouTube] = useState([]);
  const [term, setTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  // YOUTUBE API SECTION ////////////
  const YT_API = `https://www.googleapis.com/youtube/v3/search?&part=snippet&maxResults=25&q=${term}+models&key=AIzaSyB8DNHJ17xT7yTNc01rzHwVG7OFVT7AIfg`;

  useEffect(() => {
    console.log('useEffect runs: API fetch');
    fetch(YT_API)
      .then((resp) => resp.json())
      .then((res) => setYouTube(res.items || []));
    setIsLoading(false);
  }, [term, isLoading, YT_API]);
  console.log(youTube);

  // END OF YOUTUBE API SECTION //////////

  return (
    <Router>
      <div className='App'>
        <ListContext.Provider
          value={{
            youTube,
            isLoading,
            term,
            setTerm,
          }}
        >
          <div className='all_Navbar_Container'>
            <Nav />
            <SubNav />
          </div>
          <Switch>
            <Route exact path='/'>
              {' '}
              <Home />{' '}
            </Route>
            <Route exact path='/entireplaylist'>
              {' '}
              <EntirePlayList />
            </Route>
            <Route exact path='/favoriteplaylist'>
              {' '}
              <FavoritePlayList />
            </Route>
            <Route exact path='/history'>
              {' '}
              <History />
            </Route>
            <Route exact path='/myvideos'>
              {' '}
              <MyVideos />
            </Route>
            <Route exact path='/myinformation'>
              {' '}
              <Account />
            </Route>
            <Route exact path='/trendingairplanes'>
              <TrendingAirPlane />
            </Route>
            <Route exact path='/trendingboats'>
              <TrendingBoats />
            </Route>
            <Route exact path='/trendingcars'>
              <TrendingCars />
            </Route>
            <Route exact path='/trendingmotorcycles'>
              <TrendingMotorcycles />
            </Route>
            <Route exact path='/likedvideos'>
              <LikedVideos />
            </Route>
          </Switch>
        </ListContext.Provider>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
