import React, {useEffect, useRef} from 'react';
import D3Chart from './D3Chart';


export default ({gender})=> {
    let chart = useRef(null);
    let checkChart;
    useEffect(()=>{
        checkChart = new D3Chart(chart, 'chart1');
        checkChart.update((gender === 'men' ? true: false));
    });

    return (
        <>
            <div  ref={(dom) => {chart = dom}} />
        </>
        );
}