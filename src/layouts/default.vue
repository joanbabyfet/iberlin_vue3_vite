<template>
    <div id="container">
      <Header></Header>

      <div id="main">
        <div id="bannerSideIdx"></div>
        
        <div id="mainRegion">
          <router-view></router-view>
        </div>
      </div>

      <Footer></Footer>
    </div>
</template>

<script setup>
import Header from "@/components/Header.vue"
import Footer from "@/components/Footer.vue"
import { provide, getCurrentInstance } from 'vue'

//定义全局变量
provide('message', 'test')
//获取全局变量
const { proxy } = getCurrentInstance()
console.log(proxy.$baseUrl)
</script>