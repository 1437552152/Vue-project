<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
export default {
  name: "App"
};
</script>

<style>
@import "style/common.less";
@import "style/animate.less";
#app {
  width: 100%;
  height: 100%;
  text-align: center;
}
</style>
