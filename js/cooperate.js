// 基于准备好的dom，初始化echarts实例
var myChart = echarts.init(document.getElementById('main'));
// 指定图表的配置项和数据								
option = {
	title : {
		text: '德国队效力联盟',
		x:'right',
		y:'bottom'
	},
	tooltip : {
		trigger: 'item',
		formatter: function (params) {
			if (params.indicator2) {    // is edge
				return params.indicator2 + ' ' + params.name + ' ' + params.indicator;
			} else {    // is node
				return params.name
			}
		}
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
			name: '德国队效力联盟',
			type:'chord',
			sort : 'ascending',
			sortSub : 'descending',
			ribbonType: false,
			radius: '60%',
			itemStyle : {
				normal : {
					label : {
						rotate : true
					}
				}
			},
			minRadius: 7,
			maxRadius: 20,
			// 使用 nodes links 表达和弦图
			nodes: [
				{name:'A大学'},
				{name:'B大学'},
				{name:'C大学'},
				{name:'D大学'},
				{name:'E大学'},
				{name:'A研究所'},
				{name:'F研究所'},
				{name:'G研究所'},
				{name:'B研究所', symbol: 'star'},
				{name:'H大学'},
				{name:'I大学'},
				{name:'C研究所'},
				{name:'J大学'},
				{name:'K大学'},
				{name:'L大学'},
				{name:'D研究所'},
				{name:'M大学'}
			],
			links: [
				{source: 'L大学', target: 'A大学', weight: 1, name: '效力'},
				{source: 'L大学', target: 'B大学', weight: 1, name: '效力'},
				{source: 'L大学', target: 'C大学', weight: 1, name: '效力'},
				{source: 'D研究所', target: 'D大学', weight: 1, name: '效力'},
				{source: 'D研究所', target: 'E大学', weight: 1, name: '效力'},
				{source: 'D研究所', target: 'A研究所', weight: 1, name: '效力'},
				{source: 'D研究所', target: 'F研究所', weight: 1, name: '效力'},
				{source: 'D研究所', target: 'G研究所', weight: 1, name: '效力'},
				{source: 'D研究所', target: 'B研究所', weight: 1, name: '效力'},
				{source: 'D研究所', target: 'H大学', weight: 1, name: '效力'},
				{source: 'M大学', target: 'I大学', weight: 1, name: '效力'},
				{source: 'M大学', target: 'C研究所', weight: 1, name: '效力'},
				{source: 'M大学', target: 'J大学', weight: 1, name: '效力'},
				{source: 'M大学', target: 'K大学', weight: 1, name: '效力'}
			]
		}
	]
};
// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);
window.onresize = myChart.resize;//图表自适应窗口大小