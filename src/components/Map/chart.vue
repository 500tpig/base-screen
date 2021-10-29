<template>
  <div>
    <div class="chart-container" :style="{ backgroundImage: `url(${shaXianImg})` }">
      <BaseChart :options="options" height="100%" width="100%" class="chart" />
    </div>
  </div>
</template>

<script>
// 引入封装组件
import BaseChart from '@/common/echart'
import '@/assets/js/china'
export default {
  // 声明组件
  components: { BaseChart },
  // 接收数据
  props: {
    cdata: {
      type: Array,
      default: () => []
    }
  },
  // 定义配置数据
  data() {
    // eslint-disable-next-line object-curly-spacing
    return { options: {}, shaXianImg: require('@/assets/沙县地图1.png') }
  }, // 进行监听，也可以使用 computed 计算属性实现此功能
  watch: {
    cdata: {
      handler(newData) {
        this.options = {
          backgroundColor: 'transparent',
          series: [
            {
              map: 'shaXian',
              type: 'map',
              aspectScale: 1,
              zoom: 1,
              selectedMode: 'single', // 选择类型,
              hoverable: false, // 鼠标经过高亮
              roam: true, // 鼠标滚轮缩放
              itemStyle: {
                borderWidth: 1,
                borderColor: '#000', // 区域边框色
                areaColor: 'rgba(0,0,0,0)', // 区域背景色
                label: {
                  show: false,
                  textStyle: {
                    color: '#6495ED', // 文字颜色
                    fontSize: 18 // 文字大小
                  }
                }
              },
              emphasis: {
                itemStyle: {
                  // 选中样式
                  borderWidth: 1,
                  borderColor: '#00ffff',
                  color: '#ffffff',
                  label: {
                    show: true,
                    textStyle: {
                      color: 'rgba(0,0,0,1)'
                    }
                  }
                }
              }
            }
          ]
        }
      },
      // 立即监听
      immediate: true,
      // 深度监听
      deep: true
    }
  },
  created() {},
  mounted() {
    // const myChart = this.$echarts.init(document.getElementById('myChart'))
    // this.option = {
    //   series: [
    //     {
    //       map: 'shaXian',
    //       type: 'map',
    //       aspectScale: 1.0,
    //       selectedMode: 'single', // 选择类型,
    //       hoverable: false, // 鼠标经过高亮
    //       roam: true, // 鼠标滚轮缩放
    //       itemStyle: {
    //         normal: {
    //           borderWidth: 1,
    //           borderColor: '#ffffff', // 区域边框色
    //           areaColor: '#FFDAB9', // 区域背景色
    //           label: {
    //             show: true,
    //             textStyle: {
    //               color: '#6495ED', // 文字颜色
    //               fontSize: 18 // 文字大小
    //             }
    //           }
    //         },
    //         emphasis: {
    //           // 选中样式
    //           borderWidth: 1,
    //           borderColor: '#00ffff',
    //           color: '#ffffff',
    //           label: {
    //             show: true,
    //             textStyle: {
    //               color: '#ff0000'
    //             }
    //           }
    //         }
    //       }
    //     }
    //   ]
    // }
    // myChart.setOption(this.option)
  }
}
</script>
<style lang="scss" scoped>
.chart-container {
  width: 500px;
  height: 500px;
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
}
.chart {
  transform: rotateX(41deg);
}
</style>
