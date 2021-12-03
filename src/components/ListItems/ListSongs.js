import React, { useState } from "react";
import Song from "../SongItem/Song";
import Grid from "@material-ui/core/Grid";
import {useDataLayerValue} from '../././../ContextApi/DataLayer';
function ListSongs() {
  const [{ topArtistsMedium,topArtistsLong }, dispatch] = useDataLayerValue();
  const [isLoaded, setLoader] = useState(false);

  //bregando aqui

  return (
    <Grid container spacing={3}>
      {topArtistsMedium?.items?.map((item, i) => {
        return (
          <Grid item xs={12} sm={4}>
            <Song name={item?.name} image={item?.images[0]?.url} type={item?.type} id={i} genres={item?.genres} followers={item?.followers?.total} popularity={item?.popularity}/>
          </Grid>
        );
      })}
    </Grid>
  );
}

export default ListSongs;
