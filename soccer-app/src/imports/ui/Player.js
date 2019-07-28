import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Card, CardMedia, CardContent, CardActions, CardActionArea } from '@material-ui/core';
import { Button, Typography, Avatar, Chip } from '@material-ui/core';

import { blue } from '@material-ui/core/colors';

const classes = {
  chip: {
    margin: 4,
  },
  wrapper: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  button: {
    margin:  12,
  },
};



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

         </CardContent>
       </CardActionArea>
       <CardActions>
         <Chip
          avatar={<Avatar>2</Avatar>}
          label="Passing"
          className={classes.chip}
          color="primary"
          clickable
        />
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
