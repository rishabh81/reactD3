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
        
        this.xAxisGroup = this.svg.append('g')
        .attr('transform', `translate(0, ${height})`)
		const y = d3.scaleLinear()
			.domain([
                d3.min(data, d=> Number(d.points)),
                d3.max(data, d=> Number(d.points)),])
            .range([height, 0])
            // .attr('font-size', 20);

        const x = d3.scaleBand()
        .domain(data.map((e,i) => i+1))
        .range([0, width])

        const xAxisCall = d3.axisBottom(x)
        const yAxisCall = d3.axisLeft(y)
            .ticks(7)
            // .outerTickSize(0)
            .tickSize(-width)
            .tickPadding(10)

        this.yAxisGroup = this.svg.append('g')
                            .style("stroke-dasharray", "8 3")
                            .style("opacity", ".4")
        this.yAxisGroup.call(yAxisCall)

        // this.xAxisGroup.call(xAxisCall);

        // const circles = 

        const circles = this.svg.selectAll('circle').data(data, d => d.name)
        var lg = this.svg.append("defs").append("linearGradient")
        .attr("id", "mygrad")//id of the gradient
        .attr("x1", "0%")
        .attr("x2", "0%")
        .attr("y1", "0%")
        .attr("y2", "100%")//since its a vertical linear gradient 
        ;
        lg.append("stop")
        .attr("offset", "0%")
        .style("stop-color", "#56A7FF")//end in blue
        
        lg.append("stop")
        .attr("offset", "100%")
        .style("stop-color", "transparent")//start in transparent
        const lineGenerator = d3.area()
                .x(d=> x(d.attempt))
                .y0(height)
                .y1((d)=> y(d.points));
                       
        this.svg.append('path')
                .attr('stroke-width', 1)
                // .attr('opacity', .3)
                .attr('fill', 'url(#mygrad)')
                .attr('d', lineGenerator(data))
                .attr('stroke', 'url(#mygrad)');
        
        const tooltip = d3.select("body")
            .append("div")
            .style("position", "absolute")
            .style("z-index", "10")
            .style("visibility", "hidden")
            .style("background", "#fff")
            .text("a simple tooltip");

        circles.enter().append('circle')
            .attr('cy', d=> y(d.points))
            .attr('cx', (d)=> x(d.attempt))
            .attr('r', (.032*height))
            .attr("fill", "white")
            .attr('stroke', '#56A7FF')
                .attr('stroke-width', 2)
                .on("mouseover", (d) => { 
                    console.log('over the tooltip', d);
                    tooltip.text(d.points);
                    return tooltip.style("visibility", "visible");
                    })
                .on("mousemove", function(){return tooltip.style("top", (d3.event.pageY-10)+"px").style("left",(d3.event.pageX+10)+"px");})
                .on("mouseout", function(){return tooltip.style("visibility", "hidden");});
        Object.freeze(this);
        LineChart[ins] = this;
    }
}