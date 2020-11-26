import React from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) =>
createStyles({
  customTypo: {
    color: 'grey',
    fontFamily: 'Roboto',
  }
}),
);

export default function HandicapComponent(props) {
  const classes = useStyles();
  return (<>
    <Grid item xs={1}/>
    <Grid item xs={3}>
      <Grid item xs>
        <Typography className={classes.customTypo} variant="subtitle2">Handicap</Typography>
      </Grid>
        <Grid item xs>
          {props.data?.details.handicap}
        </Grid>
    </Grid>
  </>);
}
