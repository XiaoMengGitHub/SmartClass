var myChart = echarts.init(document.getElementById('sleep'));

var xAxisData = ['周一', '周二', '周三', '周四', '周五', '周六', '周日'];
var data1 = [-11.3, -11.0, -10.3, -11, -12.3, -12.0, -10.3];
var data2 = [7.3, 5.3, 7.0, 8.3, 9.0, 7.3, 8.0];


// for (var i = 0; i < 10; i++) {
//     xAxisData.push('Class' + i);
//     data1.push((Math.random() * 2).toFixed(2));
//     data2.push(-Math.random().toFixed(2));
//     data3.push((Math.random() * 5).toFixed(2));
//     data4.push((Math.random() + 0.3).toFixed(2));
// }
function dataFormatter(data){
    var obj = []
    for(var i = 0, l = data.length; i < l; i++) {
        obj[i] = {
            value: parseFloat(data[i]).toFixed(2),
            textStyle:{
                fontWeight: 'lighter',
                fontSize: 12,
            }
        }
    }
    return obj;
}

var itemStyle = {
    normal: {
    },
    emphasis: {
        barBorderWidth: 1,
        shadowBlur: 10,
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        shadowColor: 'rgba(0,0,0,0.5)'
    }
};

option = {
    // backgroundColor: 'tran',
    legend: {
        data: ['睡觉时间', '起床时间'],
        // align: 'right',
        left: 'center',
        textStyle:{
            color:'#000000'
        }
    },
    tooltip: {},
    xAxis: {
        data: xAxisData,
        // name: 'X Axis',
        silent: false,
        splitLine: {show: false},
        splitArea: {show: false},
        'axisLabel': {
                    margin:8,
                    'interval': 0,
                    rotate: 35,
                    textStyle: {
                      color: '#00ccfe',
                  }
                },
        axisLine:{
            onZero:true,
                    lineStyle:{
                        color: '#00ccfe',
                    }
                },
    },
    yAxis: {
        inverse: true,
        splitArea: {show: false},
        splitLine:false,
        axisLine:{
                    lineStyle:{
                        color: '#00ccfe',
                    }
                },
        axisLabel: {
                  show: false,
                  formatter: function(param) {
                        return param + '%';
                      },
                  textStyle: {
                      color: '#00ccfe',
                  }
                }
    },
    grid: {
        left: 5,
        right:15,
        top:30,
        bottom:30,
    },
    color:['#e97e61','#2bb4fc'],
    series: [
        {
            name: '睡觉时间',
            type: 'bar',
            barWidth:'70%',
            stack: 'one',
            itemStyle: itemStyle,
            data: dataFormatter(data1),
            label: {
                    normal: {
                        show: true,
                        position: 'top'
                    },
                    
                },
        },
        {
            name: '起床时间',
            type: 'bar',
            stack: 'one',
            itemStyle: itemStyle,
            data: dataFormatter(data2),
            label: {
                    normal: {
                        show: true,
                        position: 'bottom'
                    },
                    
                },
        }
    ]
};

myChart.setOption(option);