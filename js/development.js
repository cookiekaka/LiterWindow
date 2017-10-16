//main1
var myChart = echarts.init(document.getElementById('main1'));
// 指定图表的配置项和数据
option = {
toolbox: {
	show : true,
	padding : 10,
	feature : {
		mark : {show: true},
		dataView : {show: true, readOnly: false},
		saveAsImage : {show: true}
	}
},
tooltip: {},
series: [{
	type: 'wordCloud',
	gridSize: 20,
	sizeRange: [12, 50],
	rotationRange: [0, 0],
	shape: 'circle',
	textStyle: {
		normal: {
			color: function() {
				return 'rgb(' + [
					Math.round(Math.random() * 160),
					Math.round(Math.random() * 160),
					Math.round(Math.random() * 160)
				].join(',') + ')';
			}
		},
		emphasis: {
			shadowBlur: 10,
			shadowColor: '#333'
		}
	},
	data: [{
		name: '统计图表',
		value: 10000,
		textStyle: {
			normal: {
				color: 'black'
			},
			emphasis: {
				color: 'red'
			}
		}
	}, {
		name: '领域',
		value: 6181
	}, {
		name: '大量',
		value: 4386
	}, {
		name: '组织代码',
		value: 4055
	}, {
		name: '认证',
		value: 2467
	}, {
		name: '研究所',
		value: 2244
	}, {
		name: '教学设计',
		value: 1898
	}, {
		name: '文章',
		value: 1484
	}, {
		name: '错别字',
		value: 1112
	}, {
		name: '高效',
		value: 965
	}, {
		name: '学者',
		value: 847
	}, {
		name: '大学',
		value: 582
	}, {
		name: '统一格式',
		value: 555
	}, {
		name: '完成率',
		value: 550
	}, {
		name: '频率',
		value: 462
	}, {
		name: '科学',
		value: 366
	}, {
		name: '分析',
		value: 360
	}, {
		name: '挖掘',
		value: 282
	}, {
		name: '数据收集',
		value: 273
	}, {
		name: '图像显示',
		value: 265
	}]
}]
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
			saveAsImage : {show: true}
		}
	},
	tooltip: {},
	series: [{
		type: 'wordCloud',
		gridSize: 20,
		sizeRange: [12, 50],
		rotationRange: [0, 0],
		shape: 'circle',
		textStyle: {
			normal: {
				color: function() {
					return 'rgb(' + [
						Math.round(Math.random() * 160),
						Math.round(Math.random() * 160),
						Math.round(Math.random() * 160)
					].join(',') + ')';
				}
			},
			emphasis: {
				shadowBlur: 10,
				shadowColor: '#333'
			}
		},
		data: [{
			name: '文献视窗',
			value: 10000,
			textStyle: {
				normal: {
					color: 'black'
				},
				emphasis: {
					color: 'red'
				}
			}
		}, {
			name: '课程',
			value: 6181
		}, {
			name: '影响因子',
			value: 4386
		}, {
			name: '文献',
			value: 4055
		}, {
			name: '教授',
			value: 2467
		}, {
			name: '研究领域',
			value: 2244
		}, {
			name: '组织教学',
			value: 1898
		}, {
			name: '文献综述',
			value: 1484
		}, {
			name: '中心度',
			value: 1112
		}, {
			name: '完成',
			value: 965
		}, {
			name: '论文',
			value: 847
		}, {
			name: '写作',
			value: 582
		}, {
			name: '表格',
			value: 555
		}, {
			name: '图像',
			value: 550
		}, {
			name: '搞笑',
			value: 462
		}, {
			name: '科研',
			value: 366
		}, {
			name: '研究所',
			value: 360
		}, {
			name: '企业',
			value: 282
		}, {
			name: '统计',
			value: 273
		}, {
			name: '显示',
			value: 265
		}]
	}]
};
// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);
window.onresize = myChart.resize;//图表自适应窗口大小
//main
var myChart = echarts.init(document.getElementById('main'));
// 指定图表的配置项和数据								
var legendName = [];
for (var i = 0, i = eventRiver2Data.length; i < l; i++) {
	legendName.push(eventRiver2Data[i].name);
	eventRiver2Data[i].itemStyle = {
		normal: {
			label: {
				show:false
			}
		},
		emphasis: {
			label: {
				show:false
			}
		}
	}
}
option = {
	tooltip : {
		trigger: 'item',
		enterable: true
	},
	toolbox: {
		show : true,
		feature : {
			mark : {show: true},
			restore : {show: true},
			saveAsImage : {show: true}
		}
	},
	xAxis : [
		{
			type : 'time',
			boundaryGap: [0.05,0.1]
		}
	],
	series : eventRiver2Data
};
// 使用刚指定的配置项和数据显示图表。
myChart.setOption(option);
window.onresize = myChart.resize;//图表自适应窗口大小