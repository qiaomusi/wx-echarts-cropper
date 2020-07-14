// components/echarts/index.js
import * as echarts from '../../utils/echarts/echarts';
let piechartsComponnet;
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    options:{
      type:Object,
      observer:function( newVal , oldVal ) {
        this.init_pieCharts( newVal );
      }
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    ec: {
      lazyLoad: false // 延迟加载
    }, 
  },

  /**
   * 组件的方法列表
   */
  methods: {
    //初始化图表--饼图
    init_pieCharts: function(options) {
      this.selectComponent('#mychart-dom-bar').init((canvas, width, height) => {
        // 初始化图表
        const pieChart = echarts.init(canvas, null, {
          width: width,
          height: height
        });
        
        pieChart.setOption(options);
        // 注意这里一定要返回 chart 实例，否则会影响事件处理等
        return pieChart;
      });
    },
  },
  ready() {

  }
})
