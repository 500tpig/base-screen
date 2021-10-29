<!--  -->
<template>
  <div id="index" ref="appRef">
    <Map />
    <!-- <div id="myChart" class="chart"></div> -->
  </div>
</template>

<script>
import Map from '@/components/Map'
import drawMixin from '@/util/drawMixin'

export default {
  components: { Map },
  mixins: [drawMixin],
  props: {},
  data() {
    return {}
  },
  computed: {},
  watch: {},
  created() {
    this.getData()
  },
  mounted() {
    this.initialize()
  },
  updated() {}, // 生命周期 - 更新之后
  destroyed() {}, // 生命周期 - 销毁完成
  methods: {
    initialize() {},
    getData() {}
  }
}
</script>
<style lang="scss" scoped>
//@import url(); 引入公共css类
@import '@/styles/variables.scss';
</style>
