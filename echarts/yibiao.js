var myChart = echarts.init(document.getElementById('yibiao2'));
option = {
    "toolbox": {
        "show": false,
        "feature": {
            "mark": {
                "show": true
            },
            "restore": {
                "show": true
            },
            "saveAsImage": {
                "show": true
            }
        }
    },
    
    "series": [{
        "name": "指标",
        "type": "gauge",
        "startAngle": 180, //总的360，设置180就是半圆
        "endAngle": 0,
        "center": ["50%", "100%"], //整体的位置设置
        "radius": 70,
        "axisLine": {
            "lineStyle": {
                "width": 15, //半圆柱子的宽度
                "color": [[0.298, "#006c54"], [1, "#ffffff"]] //0.298是百分比的比例值（小数），还有对应两个颜色值
            }
        },
        "axisTick": {
            "show": false
        },
        "axisLabel": {
            "show": false
        },
        "splitLine": {
            "show": false
        },
        "pointer": {
            "width": 4, //指针的宽度
            "length": "80%", //指针长度，按照半圆半径的百分比
            "color": "#2d99e2"
        },
        "title": {
            "show": false,
            "offsetCenter": [10, "25%"], //标题位置设置
            "textStyle": { //标题样式设置
                "color": "#ffffff",
                "fontSize": 15,
                
            }
        },
        "detail": {
            "show": false
        },
        "data": [{ //显示数据
            "value": 29.8,
            "name": "你要的比例 29.8%"
        }]
    }]
};
  myChart.setOption(option);



var myChart = echarts.init(document.getElementById('yibiao1'));
option1 = {
    "toolbox": {
        "show": false,
        "feature": {
            "mark": {
                "show": true
            },
            "restore": {
                "show": true
            },
            "saveAsImage": {
                "show": true
            }
        }
    },
    
    "series": [{
        "name": "指标",
        "type": "gauge",
        "startAngle": 180, //总的360，设置180就是半圆
        "endAngle": 0,
        "center": ["50%", "100%"], //整体的位置设置
        "radius": 80,
        "axisLine": {
            "lineStyle": {
                "width": 15, //半圆柱子的宽度
                "color": [[0.9, "#228fbd"], [1, "#ffffff"]] //0.298是百分比的比例值（小数），还有对应两个颜色值
            }
        },
        "axisTick": {
            "show": false
        },
        "axisLabel": {
            "show": false
        },
        "splitLine": {
            "show": false
        },
        "pointer": {
            "width": 4, //指针的宽度
            "length": "80%", //指针长度，按照半圆半径的百分比
            "color": "#2d99e2"
        },
        "title": {
            "show": false,
            "offsetCenter": [10, "25%"], //标题位置设置
            "textStyle": { //标题样式设置
                "color": "#ffffff",
                "fontSize": 15,
                
            }
        },
        "detail": {
            "show": false
        },
        "data": [{ //显示数据
            "value": 90,
            "name": "你要的比例 29.8%"
        }]
    }]
};
  myChart.setOption(option1);



var myChart = echarts.init(document.getElementById('yibiao3'));
option2 = {
    "toolbox": {
        "show": false,
        "feature": {
            "mark": {
                "show": true
            },
            "restore": {
                "show": true
            },
            "saveAsImage": {
                "show": true
            }
        }
    },
    
    "series": [{
        "name": "指标",
        "type": "gauge",
        "startAngle": 180, //总的360，设置180就是半圆
        "endAngle": 0,
        "center": ["50%", "100%"], //整体的位置设置
        "radius": 80,
        "axisLine": {
            "lineStyle": {
                "width": 15, //半圆柱子的宽度
                "color": [[0.8, "#FCD200"], [1, "#ffffff"]] //0.298是百分比的比例值（小数），还有对应两个颜色值
            }
        },
        "axisTick": {
            "show": false
        },
        "axisLabel": {
            "show": false
        },
        "splitLine": {
            "show": false
        },
        "pointer": {
            "width": 4, //指针的宽度
            "length": "80%", //指针长度，按照半圆半径的百分比
            "color": "#2d99e2"
        },
        "title": {
            "show": false,
            "offsetCenter": [10, "25%"], //标题位置设置
            "textStyle": { //标题样式设置
                "color": "#ffffff",
                "fontSize": 15,
                
            }
        },
        "detail": {
            "show": false
        },
        "data": [{ //显示数据
            "value": 80,
            "name": "你要的比例 29.8%"
        }]
    }]
};
  myChart.setOption(option2);




var myChart = echarts.init(document.getElementById('yibiao4'));
option3 = {
    "toolbox": {
        "show": false,
        "feature": {
            "mark": {
                "show": true
            },
            "restore": {
                "show": true
            },
            "saveAsImage": {
                "show": true
            }
        }
    },
    
    "series": [{
        "name": "指标",
        "type": "gauge",
        "startAngle": 180, //总的360，设置180就是半圆
        "endAngle": 0,
        "center": ["50%", "100%"], //整体的位置设置
        "radius": 80,
        "axisLine": {
            "lineStyle": {
                "width": 15, //半圆柱子的宽度
                "color": [[0.65, "#FE4C40"], [1, "#ffffff"]] //0.298是百分比的比例值（小数），还有对应两个颜色值
            }
        },
        "axisTick": {
            "show": false
        },
        "axisLabel": {
            "show": false
        },
        "splitLine": {
            "show": false
        },
        "pointer": {
            "width": 4, //指针的宽度
            "length": "80%", //指针长度，按照半圆半径的百分比
            "color": "#2d99e2"
        },
        "title": {
            "show": false,
            "offsetCenter": [10, "25%"], //标题位置设置
            "textStyle": { //标题样式设置
                "color": "#ffffff",
                "fontSize": 15,
                
            }
        },
        "detail": {
            "show": false
        },
        "data": [{ //显示数据
            "value": 65,
            "name": "你要的比例 29.8%"
        }]
    }]
};
  myChart.setOption(option3);





