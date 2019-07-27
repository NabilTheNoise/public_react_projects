import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { Card, CardHeader, CardMedia, CardContent, CardActions, CardActionArea } from '@material-ui/core';
import { Button } from '@material-ui/core';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';


export default class Player extends Component {
  render(){
    return(
      <Card>
       <CardActionArea>
         <CardMedia
           component="img"
           alt="Nabil"
           height="fit"
           image="nabil.jpg"
           title="Nabil"
         />
         <CardContent>
           <Typography gutterBottom variant="h5" component="h2">
             Nabil
           </Typography>
           <Typography variant="body2" color="textSecondary" component="p">
             I'm just a simple player. not a big deal!
           </Typography>
         </CardContent>
       </CardActionArea>
       <CardActions>
         <Button size="small" color="primary">
           Share
         </Button>
         <Button size="small" color="primary">
           Learn More
         </Button>
       </CardActions>
     </Card>
    );
  }

}
