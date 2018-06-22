var myChart = echarts.init(document.getElementById('canvas2'));
    var timeData = ['0:00', '0:30',
      '1:00', '1:30',
      '2:00', '2:30',
      '3:00', '3:30',
      '4:00', '4:30',
      '5:00', '5:30',
      '6:00', '6:30',
      '7:00', '7:30',
      '8:00', '8:30',
      '9:00', '9:30',
      '10:00', '10:30',
      '11:00', '11:30',
      '12:00', '12:30',
      '13:00', '13:30',
      '14:00', '14:30',
      '15:00', '15:30',
      '16:00', '16:30',
      '17:00', '17:30',
      '18:00', '18:30',
      '19:00', '19:30',
      '20:00', '20:30',
      '21:00', '21:30',
      '22:00', '22:30',
      '23:00', '23:30'
  ];

  option = {
      title: {
          text: '',
          x: 'left',
      },
      tooltip: {
          trigger: 'axis',

          axisPointer: {
              animation: false
          }
      },
      legend:{

        orient:'horizontal',
        y:'35',
        data:[
            '积极互动','正常听课','溜号发呆'
            
        ]
    },
      axisPointer: {
          link: {
              xAxisIndex: 'all'
          }
      },
      dataZoom: [{
          show: false,
          realtime: true,
          start: 30,
          end: 70,

          xAxisIndex: [0, 1]
      }, {
          type: 'inside',
          realtime: true,
          start: 30,
          end: 70,
          xAxisIndex: [0, 1]
      }],
      grid: [{
          left: 30,
          right: 40,
      }, {
          left: 40,
          right: 40,
      }],
      xAxis: [{


          type: 'category',
          boundaryGap: false,
          axisLine: {
              onZero: true
          },
          data: timeData
      }, {
          gridIndex: 1
      }],

      yAxis: [{

          type: 'value',
          max: 450,
          name: '',
          min: 50,
          interval: 50,


      }, {
          gridIndex: 1
      }],
      series: [{
              name: '积极互动',
              type: 'line',
              symbolSize: 0,
              showSymbol: false,
              lineStyle: {
                  normal: {
                      width: 1
                  }
              },
              areaStyle: {
                  normal: {
                      color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                          offset: 0,
                          color: 'rgba(0,153,153, 0.6)'
                      }, {
                          offset: 0.8,
                          color: 'rgba(0,153,153, 0)'
                      }], false),
                      shadowColor: 'rgba(0, 0, 0, 0.1)',
                      shadowBlur: 10
                  }
              },
              itemStyle: {
                  normal: {
                      color: 'rgb(0,153,153)',
                      borderColor: 'rgba(0,153,153,0.27)',
                      borderWidth: 12

                  }
              },
              data: [400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, 400, ]
          }, {
              name: '正常听课',
              type: 'line',
              smooth: true,
              symbol: 'circle',
              symbolSize: 0,
              showSymbol: false,
              lineStyle: {
                  normal: {
                      width: 1
                  }
              },
              areaStyle: {
                  normal: {
                      color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                          offset: 0,
                          color: 'rgba(153,204,51, 0.6)'
                      }, {
                          offset: 0.8,
                          color: 'rgba(153,204,51, 0)'
                      }], false),
                      shadowColor: 'rgba(0, 0, 0, 0.1)',
                      shadowBlur: 10
                  }
              },
              itemStyle: {
                  normal: {
                      color: 'rgb(153,204,51)',
                      borderColor: 'rgba(153,204,51,0.2)',
                      borderWidth: 12

                  }
              },
              data: [300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300, 300]
          }, {
              name: '溜号发呆',
              type: 'line',
              smooth: true,
              symbol: 'circle',
              symbolSize: 0,
              showSymbol: false,
              lineStyle: {
                  normal: {
                      width: 1
                  }
              },
              areaStyle: {
                  normal: {
                      color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                          offset: 0,
                          color: 'rgba(250, 250, 51, 0.6)'
                      }, {
                          offset: 0.8,
                          color: 'rgba(250, 250, 51, 0)'
                      }], false),
                      shadowColor: 'rgba(250, 250,250, 0.6)',
                      shadowBlur: 10
                  }
              },
              itemStyle: {
                  normal: {
                      color: 'rgb(250,250,51)',
                      borderColor: 'rgba(250,250,51,0.2)',
                      borderWidth: 12
                  }
              },
              data: [200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200, 200]
          },

          {
              name: '数值',
              type: 'line',
              smooth: true,
              symbol: 'circle',
              symbolSize: 9,
              showSymbol: false,
              lineStyle: {
                  normal: {
                      width: 1
                  }
              },
              markPoint: {
                  data: [{
                      type: 'max',
                      name: '最大值'
                  }, {
                      type: 'min',
                      name: '最小值'
                  }]
              },
              data: [113, 132, 123, 122, 132, 132, 123, 225, 223, 232, 223, 222, 223, 312, 223, 222, 223, 222, 232, 262, 232, 232, 223, 222, 223, 332, 223, 232, 223, 322, 123, 222, 231, 322, 233, 122, 223, 232, 232, 222, 223, 232, 232, 222, 232, 132, 123, 212]

          }
      ]
  };
  myChart.setOption(option);