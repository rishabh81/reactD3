import * as d3 from 'd3';
const MARGIN = { TOP: 10, BOTTOM: 50, LEFT:50, RIGHT: 10};
const HEIGHT = 500 - MARGIN.TOP - MARGIN.BOTTOM;
const WIDTH = 800 - MARGIN.LEFT - MARGIN.RIGHT;

const url = 'https://udemy-react-d3.firebaseio.com/tallest_men.json';
export default class D3Chart {
    constructor(element, ins) {
        console.log('initialized', ins);
        if(D3Chart[ins] instanceof D3Chart){
            return D3Chart[ins];
        };
        this.svg = d3.select(element)
        .append('svg')
            .attr('width', WIDTH + MARGIN.LEFT + MARGIN.RIGHT)
            .attr('height', HEIGHT + MARGIN.TOP + MARGIN.BOTTOM)
        .append('g')
            .attr('transform', `translate(${MARGIN.LEFT}, ${MARGIN.TOP})`)

        this.xAxisCaption = this.svg.append('text')
        .attr('x', WIDTH/2)
        .attr('y', HEIGHT+40)
        .attr('text-anchor', 'middle')
        .text('Tallest Men');

        this.svg.append('text')
            .attr('y', -30)
            .attr('x', - HEIGHT/2)
            .attr('text-anchor', 'middle')
            .text('Height in cm')
            .attr('transform', `rotate(-90)`)
        
        this.xAxisGroup = this.svg.append('g')
        .attr('transform', `translate(0, ${HEIGHT})`)

        this.yAxisGroup = this.svg.append('g');
        Object.freeze(this);
        D3Chart[ins] = this;

    }

    async update(flag) { 
      const vis = this;
      const caption = flag ? 'Tallest Men': 'Tallest women';
      
      const data = await d3.json( flag ? url: 'https://udemy-react-d3.firebaseio.com/tallest_women.json');
      vis.xAxisCaption.text(caption);
		const y = d3.scaleLinear()
			.domain([
				d3.min(data, d => d.height) * 0.95, 
				d3.max(data, d =>  d.height)
			])
			.range([HEIGHT, 0])

		const x = d3.scaleBand()
			.domain(data.map(d => d.name))
			.range([0, WIDTH])
			.padding(0.4)

		const xAxisCall = d3.axisBottom(x)
		vis.xAxisGroup.transition().duration(500).call(xAxisCall)

		const yAxisCall = d3.axisLeft(y)
		vis.yAxisGroup.transition().duration(500).call(yAxisCall)

		// DATA JOIN
		const rects = vis.svg.selectAll("rect")
			.data(data)

		// EXIT
        rects.exit()
        .transition().duration(500)
        .attr("height", d => 0)
		.attr("y", d => HEIGHT)
        .remove()

		// UPDATE
		rects.transition().duration(500)
			.attr("x", d => x(d.name))
			.attr("y", d => y(d.height))
			.attr("width", x.bandwidth)
			.attr("height", d => HEIGHT - y(d.height))

		// ENTER
		rects.enter().append("rect")
			.attr("x", d => x(d.name))
			.attr("width", x.bandwidth)
            .attr("fill", "grey")
            .attr('y', HEIGHT)
            .transition().duration(500)
                .attr("height", d => HEIGHT - y(d.height))
                .attr("y", d => y(d.height))
        }
}