import React from 'react';
import './Song.css'
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';

import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';



export default function RecipeReviewCard(props) {

  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    // <Card className="shadow-lg" className={classes.root}>
      
    //   <CardHeader
    //     avatar={
    //       <Avatar aria-label="recipe" className={classes.avatar} backgroundColor='black'>
    //         {props.id+1}
    //       </Avatar>
    //     }
    //     action={
    //       <IconButton aria-label="settings">
    //         <MoreVertIcon />
    //       </IconButton>
    //     }
    //     title={props.name}
    //     subheader={props.type}
    //   />
    //   <CardMedia
    //     className={classes.media}
    //     image={props.image}
    //     title={props.name}
    //   />
    //     {/* <IconButton
    //       className={clsx(classes.expand, {
    //         [classes.expandOpen]: expanded,
    //       })}
    //       onClick={handleExpandClick}
    //       aria-expanded={expanded}
    //       aria-label="show more"
    //     >
    //       <ExpandMoreIcon />
    //     </IconButton> */}
    //     <span className="expand-item" onClick={handleExpandClick}>More</span>
        
      
    //   <Collapse in={expanded} timeout="auto" unmountOnExit>
    //     <CardContent>
    //       <h3>Popularity: </h3> <p>{props.popularity}</p> 
    //       <hr/>
    //       <h3>Followers: </h3> <p> {props.followers}</p>
    
    //       <Typography paragraph>
    //         <hr/>
    //         <h3>Genres</h3>
    //         {
    //           props.genres.map((item,i) => {
    //             return(
    //               <>
    //                <hr/>
    //               <h5>{item}</h5>
    //               </>
    //             )
    //           })
    //         }
    //       </Typography>
         
    //     </CardContent>
    //   </Collapse>
    // </Card>
<a href={`https://open.spotify.com/artist/${props.name}`} target='_blank' className='no-underline hover:text-green-300'>
<div    className="bg-white-100 shadow-sm flex p-3 rounded w-15 max-w-sm border border-gray-700 hover:bg-gray-800 cursor-pointer ">
  <div className="w-screen">

    <img
      className="rounded-sm w-32 h-32 border-2"
      src={props.image}
      alt=""
    />
  </div>
  <div className="font-bold pl-5 w-screen text-md">
 <span className="text-2x1 text-green-300">{props.id+1}</span> <span className="text-2xl">{props.name}</span>
    <hr />

   <span className="text-sm block font-mediun"> {props.genres[0]}</span>
   <span className="text-sm block"> {props.genres[1]}</span>
   <span className="text-sm block"> {props.genres[2]}</span>
   <span className="text-sm block"> {props.genres[3]}</span>
  </div>
</div>
</a>
  );
}
