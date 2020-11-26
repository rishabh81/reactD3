import * as d3 from 'd3';
const MARGIN = { TOP: 10, BOTTOM: 10, LEFT:50, RIGHT: 10};

export default class LineChart {
    constructor(element, ins, {width, height, margin, data}) {
        if(LineChart[ins] instanceof LineChart){
            return LineChart[ins];
        };
        this.svg = d3.select(element)
        .append('svg')
            .attr('width', width + margin.LEFT + margin.RIGHT)
            .attr('height', height + margin.TOP + margin.BOTTOM)
        .append('g')
            .attr('transform', `translate(${margin.LEFT}, ${margin.TOP})`);
        console.log('data', data);
        const points = 3.5;
        
        this.svg
            .append('text')
            .attr('x',-30)
            .attr('y', 10)
            .text(data.vector)
            .attr('style', 'font-family: roboto')
            .attr('style', 'font-wieght: 700')

        this.svg
            .append('rect')
            .attr('x', 30)
            .attr('y',0)
            .attr('width', 200)
            .attr('height', 10)
            .attr('rx', 5)
            .attr('fill', '#b7b7b7')
            .attr('opacity', .5);
        
            this.svg
            .append('rect')
            .attr('x', 130)
            .attr('y',-2)
            .attr('width', 3)
            .attr('height', 15)
            .attr('fill', 'black');

            for(let i=1;i<=5; i++){
                this.svg
                .append('rect')
                .attr('x', (130 + (20*i)))
                .attr('y',-2)
                .attr('width', 1)
                .attr('height', 15)
                .attr('fill', 'white');
            }

            for(let i=1;i<=5; i++){
                this.svg
                .append('rect')
                .attr('x', (130 - (20*i)))
                .attr('y',-2)
                .attr('width', 1)
                .attr('height', 15)
                .attr('fill', 'white');
            }


            var lg = this.svg.append("defs").append("linearGradient")
            .attr("id", "mygrad1")//id of the gradient
            .attr("x1", "0%")//since its a horizontal linear gradient 
            .attr("x2", "100%")
            .attr("y1", "0%")
            .attr("y2", "0%")
            ;
            lg.append("stop")
            .attr("offset", "0%")
            .style("stop-color", (data.points>0)?"#56A7FF": "#007AFF")
            
            lg.append("stop")
            .attr("offset", "100%")
            .style("stop-color", (data.points>0)?"#007AFF": "#56A7FF")

            this.svg
            .append('rect')
            .attr('x', (data.points>0)?132:(130 + data.points*20))
            .attr('y',0)
            .attr('width', (data.points>0)?data.points*20:-(data.points*20))
            .attr('height', 10)
            .attr('rx', 3)
            .attr('fill', 'url(#mygrad1)');

            this.svg
            .append('text')
            .attr('x',240)
            .attr('y', 10)
            .text(data.points)
            .attr('style', 'font-family: roboto')
            .attr('style', 'font-wieght: 700');
        
        Object.freeze(this);
        LineChart[ins] = this;
    }
}