<template>
 <el-container>
  <el-header>
   <el-menu :default-active="activeIndex" class="el-menu-demo" mode="horizontal" @select="selectIndex">
    <el-menu-item index="app">app</el-menu-item>
    <el-menu-item index="app1">app1</el-menu-item>
   </el-menu>
  </el-header>
  <el-main>
   <App v-if="activeIndex==='app'"></App>
   <App1 v-if="activeIndex==='app1'"></App1>
  </el-main>
 </el-container>
</template>

<script>
//import Content from "@v2b/Content"
export default {
 components: {
  App: () => import('@v2b/App'),
  App1: () => import('@v2b1/App1'),
 },
 data() {
  return {
   activeIndex: "app",
  }
 },
 methods: {
  selectIndex(index) {
   this.activeIndex = index
  }
 }
}
</script>