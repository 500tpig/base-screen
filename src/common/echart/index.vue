<template>
  <div :id="id" :class="className" :style="{ height: height, width: width }"></div>
</template>

<script>
// import tdTheme from './theme.json' // 引入默认主题
import { debounce } from '@/util/index'
const resizeChartMethod = '$__resizeChartMethod'

export default {
  name: 'Echart',
  props: {
    className: {
      type: String,
      default: 'chart'
    },
    id: {
      type: String,
      default: 'chart'
    },
    width: {
      type: String,
      default: '100%'
    },
    height: {
      type: String,
      default: '2.5rem'
    },
    options: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      chart: null
    }
  },
  watch: {
    options: {
      handler(options) {
        // 设置true清空echart缓存
        this.chart.setOption(options, true)
      },
      deep: true
    }
  },
  created() {
    window.addEventListener('resize', this[resizeChartMethod], false)
  },
  activated() {
    // 防止 keep-alive 之后图表变形
    if (this.chart) {
      this.chart.resize()
    }
  },
  beforeDestroy() {
    window.removeEventListener('reisze', this[resizeChartMethod])
  },
  mounted() {
    // this.$echarts.registerTheme('tdTheme', tdTheme) // 覆盖默认主题
    this.initChart()
  },
  methods: {
    [resizeChartMethod]: debounce(function () {
      if (this.chart) {
        this.chart.resize()
      }
    }, 300),
    initChart() {
      // 初始化echart
      this.chart = this.$echarts.init(this.$el)
      this.chart.setOption(this.options, true)
    }
  }
}
</script>

<style></style>
