//main1
var myChart = echarts.init(document.getElementById('main1'));
// 指定图表的配置项和数据
option = {
	toolbox: {
		show : true,
		padding : [2,10,2,2],
		feature : {
			mark : {show: true},
			dataView : {show: true, readOnly: false},
			dataZoom : {show : true,title : {dataZoom : '区域缩放',dataZoomReset : '区域缩放后退'}},
			restore : {show: true},
			saveAsImage : {show: true}
		}
	},
	grid: {
		left: '3%',
		right: '4%',
		bottom: '13%',
		top: '30%',
		containLabel: true
	},
	dataZoom : {
		show : true,
		realtime : true,
		//orient: 'vertical',   // 'horizontal'
		//x: 0,
		//y: 100,
		//width: 400,
		height: 20,
		//backgroundColor: 'rgba(221,160,221,0.5)',
		//dataBackgroundColor: 'rgba(138,43,226,0.5)',
		//fillerColor: 'rgba(38,143,26,0.6)',
		//handleColor: 'rgba(128,43,16,0.8)',
		//xAxisIndex:[],
		//yAxisIndex:[],
		start: 0,
		end: 100,
},
	tooltip: {
		trigger: 'axis',
		axisPointer: {
			type: 'cross',
			crossStyle: {
				color: '#999'
			}
		}
	},

	legend: {
		padding : 50,
		data:['影响因子','中心度','被引量']
	},
	xAxis: [
		{
			type: 'category',
			data: ['作者一','作者二','作者三','作者四','作者五','作者五','作者六','作者七','作者八','作者九','作者十','作者十一'],
			axisPointer: {
				type: 'shadow'
			}
		}
	],
	yAxis: [
		{
			type: 'value',
			name: '影响因子',
			min: 0,
			max: 250,
			interval: 50,
			axisLabel: {
				formatter: '{value} '
			}
		},
		{
			type: 'value',
			name: '中心度',
			min: 0,
			max: 25,
			interval: 5,
			axisLabel: {
				formatter: '{value} '
			}
		}
	],
	series: [
		{
			name:'影响因子',
			type:'bar',
			data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
		},
		{
			name:'中心度',
			type:'bar',
			data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
		},
		{
			name:'被引量',
			type:'line',
			yAxisIndex: 1,
			data:[2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2]
		}
	]
};
// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);
window.onresize = myChart.resize;//图表自适应窗口大小
//main2
var myChart = echarts.init(document.getElementById('main2'));
// 指定图表的配置项和数据
option = {
	toolbox: {
		show : true,
		padding : [2,10,2,2],
		feature : {
			mark : {show: true},
			dataView : {show: true, readOnly: false},
			dataZoom : {show : true,title : {dataZoom : '区域缩放',dataZoomReset : '区域缩放后退'}},
			restore : {show: true},
			saveAsImage : {show: true}
		}
	},
	grid: {
		left: '3%',
		right: '4%',
		bottom: '13%',
		top: '30%',
		containLabel: true
	},
	dataZoom : {
		show : true,
		realtime : true,
		//orient: 'vertical',   // 'horizontal'
		//x: 0,
		//y: 100,
		//width: 400,
		height: 20,
		//backgroundColor: 'rgba(221,160,221,0.5)',
		//dataBackgroundColor: 'rgba(138,43,226,0.5)',
		//fillerColor: 'rgba(38,143,26,0.6)',
		//handleColor: 'rgba(128,43,16,0.8)',
		//xAxisIndex:[],
		//yAxisIndex:[],
		start: 0,
		end: 100,
	},
	tooltip: {
		trigger: 'axis',
		axisPointer: {
			type: 'cross',
			crossStyle: {
				color: '#999'
			}
		}
	},

	legend: {
		padding : 50,
		data:['影响因子','中心度','被引量']
	},
	xAxis: [
		{
			type: 'category',
			data: ['机构一','机构二','机构三','机构四','机构五','机构五','机构六','机构七','机构八','机构九','机构十','机构十一'],
			axisPointer: {
				type: 'shadow'
			}
		}
	],
	yAxis: [
		{
			type: 'value',
			name: '影响因子',
			min: 0,
			max: 250,
			interval: 50,
			axisLabel: {
				formatter: '{value} '
			}
		},
		{
			type: 'value',
			name: '中心度',
			min: 0,
			max: 25,
			interval: 5,
			axisLabel: {
				formatter: '{value} '
			}
		}
	],
	series: [
		{
			name:'影响因子',
			type:'bar',
			data:[2.0, 5.9, 17.0, 15.2, 2.6, 76.7, 100.6, 200.2, 50.6, 20.0, 60.4, 3.3]
		},
		{
			name:'中心度',
			type:'bar',
			data:[2.6, 5.9, 25.0, 26.4, 8.7, 90.7, 105.6, 182.2, 48.7, 18.8, 40.0, 2.3]
		},
		{
			name:'被引量',
			type:'line',
			yAxisIndex: 1,
			data:[2.0, 2.2, 5.3, 4.5, 6.3, 8.2, 15.3, 16.4, 19.0, 16.5, 12.0, 6.2]
		}
	]
};
// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);
window.onresize = myChart.resize;//图表自适应窗口大小
//main3
var myChart = echarts.init(document.getElementById('main3'));
// 指定图表的配置项和数据
option = {
	toolbox: {
		show : true,
		padding : [2,10,2,2],
		feature : {
			mark : {show: true},
			dataView : {show: true, readOnly: false},
			dataZoom : {show : true,title : {dataZoom : '区域缩放',dataZoomReset : '区域缩放后退'}},
			restore : {show: true},
			saveAsImage : {show: true}
		}
	},
	grid: {
		left: '3%',
		right: '4%',
		bottom: '13%',
		top: '30%',
		containLabel: true
	},
	dataZoom : {
		show : true,
		realtime : true,
		height: 20,
		start: 0,
		end: 100,
	},
	tooltip: {
		trigger: 'axis',
		axisPointer: {
			type: 'cross',
			crossStyle: {
				color: '#999'
			}
		}
	},
	legend: {
		padding : 50,
		data:['影响因子','中心度','被引量']
	},
	xAxis: [
		{
			type: 'category',
			data: ['期刊一','期刊二','期刊三','期刊四','期刊五','期刊五','期刊六','期刊七','期刊八','期刊九','期刊十','期刊十一'],
			axisPointer: {
				type: 'shadow'
			}
		}
	],
	yAxis: [
		{
			type: 'value',
			name: '影响因子',
			min: 0,
			max: 250,
			interval: 50,
			axisLabel: {
				formatter: '{value} '
			}
		},
		{
			type: 'value',
			name: '中心度',
			min: 0,
			max: 25,
			interval: 5,
			axisLabel: {
				formatter: '{value} '
			}
		}
	],
	series: [
		{
			name:'影响因子',
			type:'bar',
			data:[2.0, 4.9, 7.0, 23.2, 50.6, 76.7, 135.6, 100.2, 32.6, 20.0, 6.4, 3.3]
		},
		{
			name:'中心度',
			type:'bar',
			data:[3.6, 5.9, 9.0, 26.4, 50.7, 70.7, 175.6, 102.2, 48.7, 18.8, 6.0, 2.3]
		},
		{
			name:'被引量',
			type:'line',
			yAxisIndex: 1,
			data:[5.0, 2.2, 3.3, 4.5, 6.0, 10.2, 20.3, 23.4, 10.0, 16.5, 12.0, 6.2]
		}
	]
};
// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);
window.onresize = myChart.resize;//图表自适应窗口大小
//main4
var myChart = echarts.init(document.getElementById('main'));
// 指定图表的配置项和数据								
var nodes = [];
var links = [];
var constMaxDepth = 2;
var constMaxChildren = 7;
var constMinChildren = 4;
var constMaxRadius = 6;
var constMinRadius = 2;
function rangeRandom(min, max) {
	return Math.random() * (max - min) + min;
}
function createRandomNode(depth) {
	var node = {
		name : 'NODE_' + nodes.length,
		value : rangeRandom(constMinRadius, constMaxRadius),
		// Custom properties
		id : nodes.length,
		depth : depth,
		category : depth === constMaxDepth ? 0 : 1
	}
	nodes.push(node);

	return node;
}
function forceMockThreeData() {
	var depth = 0;
	var rootNode = {
		name : 'ROOT',
		value : rangeRandom(constMinRadius, constMaxRadius),
		// Custom properties
		id : 0,
		depth : 0,
		category : 2
	}
	nodes.push(rootNode);
	function mock(parentNode, depth) {
		var nChildren = Math.round(rangeRandom(constMinChildren, constMaxChildren));
		
		for (var i = 0; i < nChildren; i++) {
			var childNode = createRandomNode(depth);
			links.push({
				source : parentNode.id,
				target : childNode.id,
				weight : 1 
			});
			if (depth < constMaxDepth) {
				mock(childNode, depth + 1);
			}
		}
	}
	mock(rootNode, 0);
}
forceMockThreeData();
option = {
	title : {
		text: 'Force',
		subtext: 'Force-directed tree',
		x:'right',
		y:'bottom'
	},
	tooltip : {
		trigger: 'item',
		formatter: '{a} : {b}'
	},
	toolbox: {
		show : true,
		feature : {
			restore : {show: true},
			magicType: {show: true, type: ['force', 'chord']},
			saveAsImage : {show: true}
		}
	},
	series : [
		{
			type:'force',
			name : "Force tree",
			ribbonType: false,
			categories : [
				{
					name: '叶子节点'
				},
				{
					name: '非叶子节点'
				},
				{
					name: '根节点'
				}
			],
			itemStyle: {
				normal: {
					label: {
						show: false
					},
					nodeStyle : {
						brushType : 'both',
						borderColor : 'rgba(255,215,0,0.6)',
						borderWidth : 1
					}
				}
			},
			minRadius : constMinRadius,
			maxRadius : constMaxRadius,
			coolDown: 0.995,
			steps: 5,
			nodes : nodes,
			links : links,
			steps: 1
		}
	]
};