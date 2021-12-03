import React, { useState } from "react";
import Song from "../SongItem/Song";
import Grid from "@material-ui/core/Grid";
import {useDataLayerValue} from '../././../ContextApi/DataLayer';
function ListSongs() {
  const [{ topArtistsMedium,topArtistsLong }, dispatch] = useDataLayerValue();
  const [isLoaded, setLoader] = useState(false);

  //bregando aqui

  return (
    <div class="grid grid-cols-3 gap-4">
      {topArtistsMedium?.items?.map((item, i) => {
        return (
          <div>
            <Song name={item?.name} image={item?.images[0]?.url} type={item?.type} id={i} genres={item?.genres} followers={item?.followers?.total} popularity={item?.popularity}/>
          </div>
        );
      })}
    </div>
  );
}

export default ListSongs;
