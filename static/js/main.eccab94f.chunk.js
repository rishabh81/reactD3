(this.webpackJsonpstaticd3chart=this.webpackJsonpstaticd3chart||[]).push([[0],{52:function(t,e,n){t.exports=n(63)},57:function(t,e,n){},63:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),i=n(22),c=n.n(i),o=(n(57),n(42)),s=n(31),u=n(41),l=n(29),d=n(30),h=n(28),m=n.n(h),g=n(36),f=n(37),p=n(8),x=10,v=50,w=50,E=10,b=500-x-v,y=800-w-E,j=function(){function t(e,n){if(Object(g.a)(this,t),t[n]instanceof t)return t[n];this.svg=p.h(e).append("svg").attr("width",y+w+E).attr("height",b+x+v).append("g").attr("transform","translate(".concat(w,", ").concat(x,")")),this.xAxisCaption=this.svg.append("text").attr("x",y/2).attr("y",b+40).attr("text-anchor","middle").text("Tallest Men"),this.svg.append("text").attr("y",-30).attr("x",-b/2).attr("text-anchor","middle").text("Height in cm").attr("transform","rotate(-90)"),this.xAxisGroup=this.svg.append("g").attr("transform","translate(0, ".concat(b,")")),this.yAxisGroup=this.svg.append("g"),Object.freeze(this),t[n]=this}return Object(f.a)(t,[{key:"update",value:function(t){var e,n,a,r,i,c,o,s;return m.a.async((function(u){for(;;)switch(u.prev=u.next){case 0:return e=this,n=t?"Tallest Men":"Tallest women",u.next=4,m.a.awrap(p.c(t?"https://udemy-react-d3.firebaseio.com/tallest_men.json":"https://udemy-react-d3.firebaseio.com/tallest_women.json"));case 4:a=u.sent,e.xAxisCaption.text(n),r=p.g().domain([.95*p.e(a,(function(t){return t.height})),p.d(a,(function(t){return t.height}))]).range([b,0]),i=p.f().domain(a.map((function(t){return t.name}))).range([0,y]).padding(.4),c=p.a(i),e.xAxisGroup.transition().duration(500).call(c),o=p.b(r),e.yAxisGroup.transition().duration(500).call(o),(s=e.svg.selectAll("rect").data(a)).exit().transition().duration(500).attr("height",(function(t){return 0})).attr("y",(function(t){return b})).remove(),s.transition().duration(500).attr("x",(function(t){return i(t.name)})).attr("y",(function(t){return r(t.height)})).attr("width",i.bandwidth).attr("height",(function(t){return b-r(t.height)})),s.enter().append("rect").attr("x",(function(t){return i(t.name)})).attr("width",i.bandwidth).attr("fill","grey").attr("y",b).transition().duration(500).attr("height",(function(t){return b-r(t.height)})).attr("y",(function(t){return r(t.height)}));case 16:case"end":return u.stop()}}),null,this)}}]),t}(),A=function(t){var e=t.gender,n=Object(a.useRef)(null);return Object(a.useEffect)((function(){new j(n,"chart1").update("men"===e)})),r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{ref:function(t){n=t}}))},O=n(15),S=function(t){var e=t.genderSelected;return r.a.createElement(O.a,null,r.a.createElement(O.a.Toggle,{variant:"primary",id:"dropdown-basic"},"Please Select gender"),r.a.createElement(O.a.Menu,null,r.a.createElement(O.a.Item,{onSelect:function(){return e("men")}},"Men"),r.a.createElement(O.a.Item,{onSelect:function(){return e("women")}},"Women")))};var k=function(){var t=Object(a.useState)({gender:"men"}),e=Object(o.a)(t,2),n=e[0],i=e[1];return r.a.createElement("div",{className:"App"},r.a.createElement(s.a,{bg:"light"},r.a.createElement(s.a.Brand,null,"Bar chart")),r.a.createElement(u.a,null,r.a.createElement(l.a,null,r.a.createElement(d.a,{xs:12},r.a.createElement(S,{genderSelected:function(t){i({gender:t})}}))),r.a.createElement(l.a,null,r.a.createElement(d.a,{xs:12},r.a.createElement(A,{gender:n.gender})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[52,1,2]]]);
//# sourceMappingURL=main.eccab94f.chunk.js.map