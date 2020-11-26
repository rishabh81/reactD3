import React, {useEffect, useRef} from 'react';
// import D3Chart from './D3Chart';
import Pie from './Pie';
import Levelchart from './LevelChart';
import './styles/style.css';


export default ({configs, name})=> {
    let chart = useRef(null);
    let checkChart;
    useEffect(()=>{
        checkChart = new Levelchart(chart, name, configs);
    });
    return (
        <>
            <div  ref={(dom) => {chart = dom}} />
        </>
        );
}