import React from 'react';
import ChartWrapper from '../../ChartWrapper';
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
export default function LineGraphComp() {
  return (
  <div >
    <ChartWrapper configs={{height:HEIGHT, width: WIDTH, margin: MARGIN, data}}/>
  </div>
  )
}
