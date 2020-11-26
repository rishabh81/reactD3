import React from 'react'
import { makeStyles, createStyles } from '@material-ui/core/styles';
import { Grid, Typography } from '@material-ui/core';
import {ArrowDropUpSharp as ArrowDropUpSharpIcon} from '@material-ui/icons';

const useStyles = makeStyles((theme) =>
createStyles({
  customTypo: {
    color: 'grey',
    fontFamily: 'Roboto',
  }
}),
);

export default function SgtotalComponent(props) {
  const classes = useStyles();
  return (<>
    <Grid item xs={1}/>
    <Grid item xs={3}>
      <Grid item xs>
        <Typography className={classes.customTypo} variant="subtitle2">SG Total</Typography>
      </Grid>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          {props.data?.details.sgTotal}
        </Grid>
        <Grid item xs>
          <ArrowDropUpSharpIcon />
        </Grid>
      </Grid>
    </Grid>
  </>);
}
