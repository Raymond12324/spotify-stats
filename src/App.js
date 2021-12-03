import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Body from './components/Body/Body'
import "./components/Navbar/Navbar.css";
import SpotifyWebApi from "spotify-web-api-js";
import { loginUrl, getTokenFromUrl } from "./Api/spotify";
import { useDataLayerValue } from "./ContextApi/DataLayer";


const spotify = new SpotifyWebApi();

function App() {
  const [{ user, token,topTracksLong,topArtistsLong,topTracksMedium,topArtistsMedium }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
        
      });

      
     window.sessionStorage.setItem("MyToken",_token);
      console.log(sessionStorage.getItem("Mytoken"));

      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });

      //ALL time Top
      spotify.getMyTopTracks({time_range:'long_term'}).then((topTracksLong) =>{
        dispatch({
          type:"SET_TOPT_LONG",
          topTracksLong:topTracksLong
        })
      });

      spotify.getMyTopArtists({limit:5}).then((topArtistsLong) =>{
        dispatch({
          type:"SET_TOPA_LONG",
          topArtistsLong:topArtistsLong
        })
      });

      //medium term top
      spotify.getMyTopTracks().then((topTracksMedium) =>{
        dispatch({
          type:"SET_TOPTRACKS",
          topTracksMedium:topTracksMedium
        })
      });

      spotify.getMyTopArtists().then((topArtistsMedium) =>{
        dispatch({
          type:"SET_TOPARTIST",
          topArtistsMedium:topArtistsMedium
        });
      })

     

      
    }
  });

  console.log(topTracksLong);
 



  return (
    <div className="App">
      
      {token ? (
        <div className="body__app">
          <Body/>
          {/* <Navbar /> */}
         
       
          </div>
      ) : (
        <a class="button-main" href={loginUrl}>Entrar</a>
      )}
      
    </div>
  );
}

export default App;
