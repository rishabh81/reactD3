import React from 'react';
import LevelChartWrapper from '../../LevelChartWrapper';
const MARGIN = { TOP: 20, BOTTOM: 50, LEFT:30, RIGHT: 0};
const HEIGHT = 40 - MARGIN.TOP - MARGIN.BOTTOM;
const WIDTH = 300 - MARGIN.LEFT - MARGIN.RIGHT;
export default function LineGraphComp(props) {
  console.log(props)
  return (
    <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <LevelChartWrapper name={props.name} configs={{height:HEIGHT, width: WIDTH, margin: MARGIN, data: props.configs.data}}/>
  </div>
  )
}
