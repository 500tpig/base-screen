<template>
  <div id="app">
    <main-screen />
  </div>
</template>

<script>
import mainScreen from '@/views/main-screen'
export default {
  name: 'App',
  components: { mainScreen }
}
</script>

<style lang="scss" scoped>
#app {
  width: 100vw;
  height: 100vh;
  background-color: #020308;
  overflow: hidden;
}
</style>
