<!--  -->
<template>
  <div id="index" ref="appRef">ss</div>
</template>

<script>
import drawMixin from '@/util/drawMixin'

export default {
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
<style lang="scss" scoped></style>
