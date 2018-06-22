var myChart = echarts.init(document.getElementById('studytime'));
dataMap = {};
function dataFormatter(obj) {
    var pList = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'];
    var temp;
    for (var month = 1; month <= 12; month++) {
        
        temp = obj[month.toString()];
        obj[month + 'sum'] = temp[0];
        for (var i = 1, len = temp.length; i < len; i++) {
            obj[month.toString()][i] = {
                name : pList[i],
                value : temp[i]
            }
        }
        obj[month.toString()].shift()
        
    }
    return obj;
}

dataMap.dataMonth = dataFormatter({
    //max : 60000,
    '1': [1020, 5, 2, 5, 4, 8, 6, 10, 3, 5, 4, 7, 2, 3, 8, 6, 8, 7, 8, 6, 4, 8, 5, 7, 10, 9, 10, 13, 5, 1, 0, 8], '2': [928, 9, 2, 5, 4, 11, 5, 8, 4, 6, 8, 7, 6, 8, 7, 3, 4, 8, 3, 8, 8, 7, 6, 8, 5, 4, 3, 8, 11, 2, 0, 0], '3': [1024, 5, 2, 5, 4, 8, 6, 10, 3, 5, 4, 7, 2, 3, 8, 6, 8, 7, 8, 6, 4, 8, 5, 7, 10, 9, 10, 13, 5, 1, 0, 8], '4': [878, 9, 2, 5, 4, 11, 5, 8, 4, 6, 8, 7, 6, 8, 7, 3, 4, 8, 3, 8, 8, 7, 6, 8, 5, 4, 3, 8, 11, 2, 0, 0], '5': [902, 5, 2, 5, 4, 8, 6, 10, 3, 5, 4, 7, 2, 3, 8, 6, 8, 7, 8, 6, 4, 8, 5, 7, 10, 9, 10, 13, 5, 1, 0, 8], '6': [914,9, 2, 5, 4, 11, 5, 8, 4, 6, 8, 7, 6, 8, 7, 3, 4, 8, 3, 8, 8, 7, 6, 8, 5, 4, 3, 8, 11, 2, 0, 0], '7': [1070, 5, 2, 5, 4, 8, 6, 10, 3, 5, 4, 7, 2, 3, 8, 6, 8, 7, 8, 6, 4, 8, 5, 7, 10, 9, 10, 13, 5, 1, 0, 8], '8': [1342,9, 2, 5, 4, 11, 5, 8, 4, 6, 8, 7, 6, 8, 7, 3, 4, 8, 3, 8, 8, 7, 6, 8, 5, 4, 3, 8, 11, 2, 0, 0], '9': [1157,5, 2, 5, 4, 8, 6, 10, 3, 5, 4, 7, 2, 3, 8, 6, 8, 7, 8, 6, 4, 8, 5, 7, 10, 9, 10, 13, 5, 1, 0, 8], '10': [1185, 9, 2, 5, 4, 11, 5, 8, 4, 6, 8, 7, 6, 8, 7, 3, 4, 8, 3, 8, 8, 7, 6, 8, 5, 4, 3, 8, 11, 2, 0, 0], '11': [1116, 5, 2, 5, 4, 8, 6, 10, 3, 5, 4, 7, 2, 3, 8, 6, 8, 7, 8, 6, 4, 8, 5, 7, 10, 9, 10, 13, 5, 1, 0, 8], '12': [1026,9, 2, 5, 4, 11, 5, 8, 4, 6, 8, 7, 6, 8, 7, 3, 4, 8, 3, 8, 8, 7, 6, 8, 5, 4, 3, 8, 11, 2, 0, 0]}
);




option = {
    baseOption: {
        backgroundColor: new echarts.graphic.RadialGradient(0, 0, 0, [{
        offset: 0,
        color: '#ffffff'
    }, {
        offset: 1,
        color: '#ffffff'
    }]),
        timeline: {
            // y: 0,
            axisType: 'category',
            // realtime: false,
            // loop: false,
            autoPlay: true,
            // currentIndex: 2,
            playInterval: 1500,
            // controlStyle: {
            //     position: 'left'
            // },
            data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
            label: {
                formatter : function(s) {
                    return s + "月"
                }
            }
        },
        title: {
            text: ''
        },
        tooltip: {},
        
        calculable : false,
        grid: {
            top: 30,
            bottom: 100,
            left:30
        },
        xAxis: [
            {
                name : "天",
                'type':'category',
                'axisLabel':{'interval':0},
                'data':['1', '\n2', '3', '\n4', '5', '\n6', '7', '\n8', '9', '\n10', '11', '\n12', '13', '\n14', '15', '\n16', '17', '\n18', '19', '\n20', '21', '\n22', '23', '\n24', '25', '\n26', '27', '\n28', '29', '\n30', '31'],
                splitLine: {show: false}
            }
        ],
        yAxis: [
            {
                type: 'value',
                name: '时间',
                // max: 53500
                max : 14
            }
        ],
        series: [
            {name: 'days', type: 'bar'},
            {
                name: '每月生日人数占比',
                type: 'pie',
                color: ['#A5DEE4', '#81C7D4', '#24936E', '#5DAC81','#A8D8B9',"#F596AA","#E87A90","#F4A7B9","#DB8E71","#FB9966","#E9A368","#58B2DC"],
                center: ['75%', '20%'],
                radius: [20, '28%'],
                roseType: 'area',
                data:[{name: "1月",value : dataMap.dataMonth["1sum"]},
                    {name: "2月",value : dataMap.dataMonth["2sum"]},
                    {name: "3月",value : dataMap.dataMonth["3sum"]},
                    {name: "4月",value : dataMap.dataMonth["4sum"]},
                    {name: "5月",value : dataMap.dataMonth["5sum"]},
                    {name: "6月",value : dataMap.dataMonth["6sum"]},
                    {name: "7月",value : dataMap.dataMonth["7sum"]},
                    {name: "8月",value : dataMap.dataMonth["8sum"]},
                    {name: "9月",value : dataMap.dataMonth["9sum"]},
                    {name: "10月",value : dataMap.dataMonth["10sum"]},
                    {name: "11月",value : dataMap.dataMonth["11sum"]},
                    {name: "12月",value : dataMap.dataMonth["12sum"]},
                    ]
            }
            
        ]
    },
    options: [
        {


            title: {subtext: ''},
            series: [
                {data: dataMap.dataMonth['1'],itemStyle:{
                    normal:{
                        color: "#A5DEE4"
                    }
                },},
                
            ]
        },
        {
            
            title : {subtext: ''},
            series : [{data: dataMap.dataMonth['2'],itemStyle:{
                    normal:{
                        color: "#81C7D4"
                    }
                },},]
        },
        {
            title : {subtext: ''},
            series : [{data: dataMap.dataMonth['3'],itemStyle:{
                    normal:{
                        color: "#24936E"
                    }
                },},]
        },
        {
            title : {subtext: ''},
            series : [{data: dataMap.dataMonth['4'],itemStyle:{
                    normal:{
                        color: "#5DAC81"
                    }
                },},]
        },
        {
            title : {subtext: ''},
            series : [{data: dataMap.dataMonth['5'],itemStyle:{
                    normal:{
                        color: "#A8D8B9"
                    }
                },},]
        },
        {
            title : {subtext: ''},
            series : [{data: dataMap.dataMonth['6'],itemStyle:{
                    normal:{
                        color: "#F596AA"
                    }
                },},]
        },
        {
            title : {subtext: ''},
            series : [{data: dataMap.dataMonth['7'],itemStyle:{
                    normal:{
                        color: "#E87A90"
                    }
                },},]
        },
        {
            title : {subtext: ''},
            series : [{data: dataMap.dataMonth['8'],itemStyle:{
                    normal:{
                        color: "#F4A7B9"
                    }
                },},]
        },
        {
            title : {subtext: ''},
            series : [{data: dataMap.dataMonth['9'],itemStyle:{
                    normal:{
                        color: "#DB8E71"
                    }
                },},]
        },
        {
            title : {subtext: ''},
            series : [{data: dataMap.dataMonth['10'],itemStyle:{
                    normal:{
                        color: "#FB9966"
                    }
                },},]
        },
        {
            title : {subtext: ''},
            series : [{data: dataMap.dataMonth['11'],itemStyle:{
                    normal:{
                        color: "#E9A368"
                    }
                },},]
        },
        {
            title : {subtext: ''},
            series : [{data: dataMap.dataMonth['12'],itemStyle:{
                    normal:{
                        color: "#58B2DC"
                    }
                },},]
        },
        
    ]
};
myChart.setOption(option);