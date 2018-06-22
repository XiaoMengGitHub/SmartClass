var myChart = echarts.init(document.getElementById('leida'));
option = {
    title: {
        text: ''
    },
        backgroundColor: 'rgba(255,255,255,0)',
    toolbox: {},
    tooltip: {},
    legend: {
        data: [ '他评','自评'],
        x:'center',
        y:'-1%',
        orient:'horizontal',
    },
    radar: {
        // shape: 'circle',
        //"开朗","外向","善于沟通","大胆","勇敢","积极","活跃"
        indicator: [
           { name: '开朗', max: 600},
           { name: '外向', max: 600},
           { name: '善于沟通', max: 600},
           { name: '大胆', max: 600},
           { name: '勇敢', max: 600},
           { name: '积极', max: 600},
           { name: '活跃', max: 600},
           { name: '细致', max: 600},
           { name: '敏感', max: 600},
           { name: '热情', max: 600},
           { name: '幽默', max: 600},
           { name: '易怒', max: 600},
        ]
    },
    series: [{
        name: '预算 vs 开销（Budget vs spending）',
        type: 'radar',
        // areaStyle: {normal: {}},
        itemStyle: {normal: {areaStyle: {type: 'default'}}},
        data : [
             
                {
                value : [289, 356, 312, 516, 423, 336,358,469,126,246,355,466],
                name : '自评'
            },
            {
                value : [280, 360, 199, 468, 232, 336,458,569,165,146,287,535],
                name : '他评'
            },
        ]
    }]
};

myChart.setOption(option);