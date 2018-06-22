var myChat = echarts.init(document.getElementById('class'));
option = {
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                   lineStyle:{
						color:'rgba(0,0,0,0)'
					}
				}
				
            },
            title: {
                text: '该班整体情况'
                
            },
            backgroundColor: '#EC886D',
            legend: {
                data:['学习热情','学习成绩','课堂表现']
            },
            xAxis: {
                type: 'category',
                axisLine: { 
                    lineStyle: { color: '#666' } 
                },
                boundaryGap: false,
                data: ['7/21','7/22','7/23','7/24','7/25','7/26','7/27']
            },
            yAxis: {
                type: 'value',
                axisLine: {
                    lineStyle: { color: '#666' }
                },
                boundaryGap: false,
                splitLine: { show: false }
            },
            series: [
                {
                    name: '学习热情',
                    type: 'line',
                    smooth:true,
                    symbol: 'none',
                    sampling: 'average',
                    itemStyle: {
                        normal: {
                            color: 'rgb(255, 70, 131)'
                        }
                    },
                    lineStyle:{
                        normal:{
                            width:1
                        }
                    },
                    areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgb(255, 70, 131)'
                            }, {
                                offset: 1,
                                color: 'rgb(255, 158, 68)'
                            }])
                        }
                    },
                    data: [35, 50, 66, 50, 48, 52, 50]       
                },
                {
                    name: '学习成绩',
                    type: 'line',
                    smooth:true,
                    symbol: 'none',
                    sampling: 'average',
                    itemStyle: {
                        normal: {
                            color: 'rgb(255, 70, 131)'
                        }
                    },
                    lineStyle:{
                        normal:{
                            width:1
                        }
                    },
                    areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgb(255, 158, 68)'
                            }, {
                                offset: 1,
                                color: 'rgb(255, 70, 131)'
                            }])
                        }
                    },
                    data: [15, 30, 46, 30, 28, 32, 30]       
                },
                {   
                    name: '课堂表现',
                    type: 'line',
                    smooth:true,
                    symbol: 'none',
                    sampling: 'average',
                    itemStyle: {
                        normal: {
                            color: 'rgb(9,109,203)'
                        }
                    },
                    lineStyle:{
                        normal:{
                            width:1
                        }
                    },
                    areaStyle: {
                        normal: {
                            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                                offset: 0,
                                color: 'rgb(9,109,203)'
                            }, {
                                offset: 1,
                                color: 'rgb(83,202,244)'
                            }])
                        }
                    },
                    data: [2, 15, 26, 7, 6, 12, 14]       
                }
            ]
        };
myChat.setOption(option);