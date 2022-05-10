import { useContext } from 'react';
import '../styles/App.css';
import Navbar from "./Navbar";
import { Switch, Route } from "react-router-dom";
import Home from "./Home";
import Explore from "./Explore";
import Profile from "./Profile";
import PlaylistPage from "./PlaylistPage";
import ArtistPage from './ArtistPage';
import React from "react";
import Player from "./Player";
import { PlayerContext } from "../contexts/PlayerContext";
import ProtectedRoute from '../auth/protected-route';
import ExporeSpecificGenre from './ExploreSpecificGenre';

function App() {
  const pla = useContext(PlayerContext);

  return (
    <>
      <Navbar />
      <div className="wrapper">
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/explore" component={Explore} />
          <ProtectedRoute path="/profile" component={Profile} />
          <Route path={`/playlist/:playlistId`}>
            <PlaylistPage />
          </Route>
          <Route path={`/artist/:artist`}>
            <ArtistPage />
          </Route>
          <Route path={`/specific/:genre`}>
            <ExporeSpecificGenre />
          </Route>
        </Switch>
      </div>
      {pla.song === '' ? null : <Player url={pla.song} />}
    </>
  );
}

export default App;
