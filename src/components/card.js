import React  from 'react';
import './index.css';
import { makeStyles, createStyles } from '@material-ui/core/styles';
import {
  Card,
  CardHeader,
  CardContent,
  Avatar,
  Grid,
  Divider,
  Typography,
  Select,
  MenuItem,
  InputLabel
} from '@material-ui/core';
import CustomSkeleton from './skeleton';
import QualityComponent from './detailcomponents/quality';
import HandicapComponent from './detailcomponents/handicap';
import SgtotalComponent from './detailcomponents/sgTotal';
import { LineGraphComp, LevelChartComp } from './charts';
import { ContactlessOutlined } from '@material-ui/icons';
const MARGIN = { TOP: 25, BOTTOM: 50, LEFT:30, RIGHT: 0};
const HEIGHT = 200 - MARGIN.TOP - MARGIN.BOTTOM;
const WIDTH = 300 - MARGIN.LEFT - MARGIN.RIGHT;
const data = [
    {"attempt":"1","points":"0","name":"Trijntje Keever"},
    {"attempt":"2","points":"-3","name":"Zeng Jinlian"},
    {"attempt":"3","points":"1","name":"Anna Bates"},
    {"attempt":"4","points":"2","name":"Jane Bunford"},
    {"attempt":"5","points":"-1","name":"Yao Defen"},
    {"attempt":"6","points":"0","name":"Sandy Allen"},
    {"attempt":"7","points":"0","name":"Trijntje Keever"},
    {"attempt":"8","points":"3","name":"Zeng Jinlian"},
    {"attempt":"9","points":"2","name":"Anna Bates"},
    {"attempt":"10","points":"1","name":"Jane Bunford"},
    {"attempt":"11","points":"4","name":"Yao Defen"},
    {"attempt":"12","points":"0","name":"Sandy Allen"}
];

const useStyles = makeStyles((theme) =>
createStyles({
  root: {
    maxWidth: 345,
    backgroundColor: 'white',
    minHeight: 450,
  },
  avatar: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    border: '4px solid rgba(210,210,210, 0.5)',
  },
  customTypo: {
    color: 'grey',
    fontFamily: 'Roboto',
  },
}),
);

export default function CardComponent(props) {
  const classes = useStyles();
  return (
    <div className="card-container">
      <Card className={classes.root} variant="outlined">
        <CardHeader
          className={classes.header}
          avatar={
            props.loader ? <CustomSkeleton  variant="circle" dimensions={[70, 70]} /> : <Avatar
              aria-label="emp-card"
              className={classes.avatar}
              src={props.data?.avatar}              
            />
          }
          title={props.loader ? <CustomSkeleton  variant="rect" dimensions={[150, 30, 0, 0, 6, 0]} /> : props.data?.name}
          titleTypographyProps={{
            variant: 'h6',
          }}
          subheader={props.loader ? <CustomSkeleton  variant="rect" dimensions={[180, 15]} /> : props.data?.address}
          subheaderTypographyProps={{
            variant: 'subtitle2'
          }}
        />
        <CardContent>
          <Grid
            container
            spacing={0}
            direction="row"
            justify="flex-end"
          >
            {props.loader ? <CustomSkeleton  variant="rect" dimensions={[90, 35, 0,6,6,6]} /> : <QualityComponent {...props} />}
              <Divider orientation="vertical" flexItem/>
            {props.loader ? <CustomSkeleton  variant="rect" dimensions={[90, 35, 0,6,6,6]} /> : <HandicapComponent {...props} />}
              <Divider orientation="vertical" flexItem/>
            {props.loader ? <CustomSkeleton  variant="rect" dimensions={[90, 35, 0,6,6,6]} /> : <SgtotalComponent {...props} />}
          </Grid>
          <Divider />
          <LevelChartComp name='sgo1' configs={{height:HEIGHT, width: WIDTH, margin: MARGIN, data:{vector: 'SG OTT', points: 2.5}}} />
          <LevelChartComp name='sgo2'configs={{height:HEIGHT, width: WIDTH, margin: MARGIN, data:{vector: 'SG APP', points: -4.4}}} />
          <LevelChartComp name='sgo3'configs={{height:HEIGHT, width: WIDTH, margin: MARGIN, data:{vector: 'SG ARG', points: 2.08}}} />
          <LevelChartComp name='sgo4' configs={{height:HEIGHT, width: WIDTH, margin: MARGIN, data:{vector: 'SG PUT', points: 1.08}}} />
            <Divider />
            {props.loader ?
               <CustomSkeleton  variant="rect" dimensions={[90, 35, 0,6,6,6]} /> :
               <Grid container spacing={2} padding={2}>
              <Grid item xs={4.1}>
                <Typography className={classes.customTypo} variant="subtitle2">Latest Activity :</Typography>
              </Grid>
              <Grid item xs={7}>
                <Typography className={classes.customTypo} variant="subtitle2">68 (-4), The Shire, UK</Typography>
              </Grid>
            </Grid>}
            <Divider />
          <LineGraphComp configs={{height:HEIGHT, width: WIDTH, margin: MARGIN, data}} />
        </CardContent>
      </Card>
    </div>
  );
}
