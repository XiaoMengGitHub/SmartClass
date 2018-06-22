var myChart = echarts.init(document.getElementById('canvas3'));
option = {
    title : {
        text: '',
        subtext: '',
        x:'center'
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        orient:'vertical',
        x : 'right',
        y : '10',
        data:['回答问题','摇一摇','玩手机','出教室','弹幕','提问','闲聊','举手']
    },
    toolbox: {},
    calculable : true,
    series : [
        {
            name:'课堂表现',
            type:'pie',
            radius : [20, 110],
            center : ['40%', '50%'],
            roseType : 'radius',
            label: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: true
                }
            },
            lableLine: {
                normal: {
                    show: false
                },
                emphasis: {
                    show: true
                }
            },
            data:[
                {value:10, name:'出教室'},
                {value:5, name:'玩手机'},
                {value:15, name:'举手'},
                {value:25, name:'闲聊'},
                {value:20, name:'回答问题'},
                {value:35, name:'提问'},
                {value:30, name:'弹幕'},
                {value:40, name:'摇一摇'}
            ]
        },
       
    ]
};
  myChart.setOption(option);