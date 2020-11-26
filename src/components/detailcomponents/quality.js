import React from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Grid, Typography, CircularProgress } from '@material-ui/core';
import {ArrowDropUpSharp as ArrowDropUpSharpIcon} from '@material-ui/icons';

const useStyles = makeStyles((theme) =>
createStyles({
  customTypo: {
    color: 'grey',
    fontFamily: 'Roboto',

  },
  progress: {
    color: 'red',
  }
}),
);

export default function QualityComponent(props) {
  const classes = useStyles();
  return (<>
    <Grid item xs={3}>
      <Grid item xs>
        <Typography className={classes.customTypo} variant="subtitle2">Quality</Typography>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={2}>
          {props.data?.details.quality}
        </Grid>
        <Grid item xs={3}>
          <ArrowDropUpSharpIcon />
        </Grid>
        <Grid item xs ={3}>
          <CircularProgress className={classes.progress} size={25} variant="static" value={props.data?.details.quality} />
        </Grid>
      </Grid>
    </Grid>
  </>);
}
