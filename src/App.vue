<template>
  <component :is="$route.meta.layout || layout">
    <router-view></router-view>
  </component>
</template>

<script setup>
//按需引入, 不建议全局引入
import md5 from 'js-md5'
//:is 态显示需要的组件
const layout = 'layout_default'
//打印当前环境
console.log(import.meta.env.VITE_NODE_ENV)
console.log(md5('123456'))
</script>