
import { useEffect, useState } from 'react';
import './App.css';
import Login from './Login';
import { getTokenFromUrl } from './Spotify';
import SpotifyWebApi from 'spotify-web-api-js';
import Player from './Player';
import { useDataLayerValue } from './DataLayer';
import { type } from '@testing-library/user-event/dist/type';

const spotify = new SpotifyWebApi();

function App() {
// 1:23:07

  const [token,setToken] = useState (null);
  const [{ user },dispatch] = useDataLayerValue();

useEffect  (() =>{
  const hash = getTokenFromUrl();
  window.location.hash = "";
  const _token = hash.access_token;

  if(_token){
      setToken(_token);
      dispatch({
        type : 'SET_USER',
        token: _token,
      });
      spotify.setAccessToken(_token)
      spotify.getMe().then(user => {
        dispatch({
          type: 'SET_USER',
          user: user
        });
      });
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type : "SET_PLAYLISTS",
          playlists : playlists,
        })
      })
      spotify.getPlaylist('37i9dQZEVXcQ9COmYvdajy').then(responce => {
        dispatch({
          type : "SET_DISCOVER_WEEKLY",
          discover_weekly : responce,
        })
      })
  }
}, []);
  return (
    <div className="App">
      {
        token ? (
          <Player spotify = {spotify} />
        ) : (
          <Login />
        )
      }

      
    </div>
  );
}

export default App;
