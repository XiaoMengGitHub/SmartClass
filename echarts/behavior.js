var myChat = echarts.init(document.getElementById('behavior'));
var data = [17, 20, 45, 56, 60, 64];
var xMax = 100;
option = {
    tooltip: {
        show: true,
        formatter: "{b} {c}"
    },
    grid: {
        left: '20%',
        top: '5%',
        bottom: '0',
        right: '0'
    },
    xAxis: [{
        max: xMax,
        type: 'value',
        axisTick: {
            show: false,
        },
        axisLine: {
            show: false,
        },
        axisLabel: {
            show: false
        },
        splitLine: {
            show: false
        }
    }],
    yAxis: [{
        type: 'category',
        data: ['步数', '图书馆', '篮球场', '寝室', '日新楼', '鼎新楼'],
        nameTextStyle: {
            color: '#b7ce9e',
            fontSize: '10px'
        },
        axisTick: {
            show: false,
        },
        axisLine: {
            show: false,
        }
    }],
    series: [{
        name: ' ',
        type: 'bar',
        barWidth: 16,
        silent: true,
        itemStyle: {
            normal: {
                color: '#f2f2f2'
            }
        },
        barGap: '-100%',
        barCategoryGap: '20%',
        data: data.map(function(d) {
            return xMax
        }),
    }, {
        name: ' ',
        type: 'bar',
        barWidth: 16,
        label: {
            normal: {
                show: true,
                position: 'right',
                formatter: '{c}%',
            }
        },
        data: [{
            value: 50,
            itemStyle: {
                normal: {
                    color: '#b7ce9e'
                }
            }
        }, {
            value: 20,
            itemStyle: {
                normal: {
                    color: '#acd680'
                }
            }
        }, {
            value: 45,
            itemStyle: {
                normal: {
                    color: '#88e186'
                }
            }
        }, {
            value: 56,
            itemStyle: {
                normal: {
                    color: '#81e7cf'
                }
            }
        }, {
            value: 60,
            itemStyle: {
                normal: {
                    color: '#82dae6'
                }
            }
        }, {
            value: 64,
            itemStyle: {
                normal: {
                    color: '#80cbc4'
                }
            }
        }],
        markLine: {
            label: {
                normal: {
                    show: true,
                    position: 'end',
                    formatter: '{b}{c}%'
                }
            },
            lineStyle: {
                normal: {
                    color: '#525d63'
                }
            },
            symbol: 'none',
            data: [{
                name: '平均值',
                xAxis: 30
            }]
        }
    }]
};
	myChat.setOption(option);
