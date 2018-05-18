<template>
  <div id="app">
    <div class="kcHeader"></div>
    <div class="kcBody">
      <div class="kcSideBar"></div>
      <el-main>Main</el-main>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="stylus" scoped>
#app
  height 100%
  .kcHeader
    height 40px
    background #ff2200
  .kcBody
    display flex
    height calc(100% - 40px)
    .kcSideBar
      width 200px
      height 100%
      background #006699
    .el-main
      padding 10px
</style>
