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
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
</script>