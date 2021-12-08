import React, { useState,useEffect } from "react";
import Song from "../SongItem/Song";
import Grid from "@material-ui/core/Grid";
import SpotifyWebApi from "spotify-web-api-js";
import { useDataLayerValue } from '../././../ContextApi/DataLayer';
import { Fragment } from "react";
function ListSongs() {

  const [{ topArtistsMedium, topTracksLong, topArtistsLong }, dispatch] = useDataLayerValue();
  const [isLoaded, setLoader] = useState(false);
  const [itemContainer, setItemContainer] = useState([]);
  const spotify = new SpotifyWebApi();
  //bregando aqui
 

  useEffect(() => {
   
    setItemContainer(topArtistsLong)

  },[topArtistsLong,topArtistsMedium])

//  var setList = function(value){
//   setItemContainer(value)
//  }
  //allTIme
  //   var getMyTopTracks = function(){
  //   spotify.getMyTopTracks({time_range:'long_term'}).then((topTracksLong) =>{
  //     dispatch({
  //       type:"SET_TOPT_LONG",
  //       topTracksLong:topTracksLong
  //     })
  //   });
  // }


  return (

    <Fragment>
     
      <div className=' justify-around p-1  grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2'>

        <div className='p-10 bg-white shadow-sm flex roundedborder border '>

     
      
          <div className="w-full">
            <label className="block uppercase tracking-wide text-xs font-bold mb-2" for="grid-state">
              Song or artist
            </label>
            <div className="relative">
              <select disabled className="block appearance-none bg-gray-200 font-bold w-full border border-gray-200 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white " id="grid-state">
              
                <option>Songs</option>
                <option>Artist</option>

              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 ">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
              </div>
            </div>
          </div>

        </div>
        <div className='p-10 bg-white shadow-sm flex rounded border hover:bg-green-300 '>
          <div className="w-full">
            <label className="block uppercase tracking-wide  text-xs font-bold mb-2" for="grid-state">
              Time
            </label>
            <div className="relative">
              
              <select onChange={(val) => "topArtistsMedium" !== val.target.value? setItemContainer(topArtistsLong) : setItemContainer(topArtistsMedium)  }  className="block appearance-none border font-bold w-full  border-gray-200  py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white" id="grid-state">
              <option value="topArtistsLong">All Time</option>
              <option value="topArtistsMedium">6 Month</option>
             
                
               
                
                

              </select>
              <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 ">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4   lg:grid-cols-3 lg:p-10 md:grid-cols-2 md:p-1">

        {itemContainer?.items?.map((item, i) => {
          return (
            <div>

              <Song name={item?.name} image={item?.images[0]?.url} type={item?.type} id={i} genres={item?.genres} followers={item?.followers?.total} popularity={item?.popularity} />
            </div>
          );
        })}
        {

        }
      </div>


    </Fragment>


  );
}




export default ListSongs;
