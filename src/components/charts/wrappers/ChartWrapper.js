import React, {useEffect, useRef} from 'react';
// import D3Chart from './D3Chart';
import Pie from './Pie';
import LineChart from './LineChart';
import './styles/style.css';


export default ({configs})=> {
    let chart = useRef(null);
    let checkChart;
    useEffect(()=>{
        checkChart = new LineChart(chart, 'LineChart1', configs);
    });
    return (
        <>
            <div  ref={(dom) => {chart = dom}} />
        </>
        );
}