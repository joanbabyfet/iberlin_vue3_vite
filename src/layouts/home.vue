<template>
    <div id="containerIdx">
        <Header></Header>
        
        <div id="bannerSideIdx"></div>
        
        <div id="mainIdx">
            <div id="idxMain">
                <router-view></router-view>
            </div>
            <div id="mainFooterSideIdx"></div>
        </div>
        
        <Footer></Footer>
    </div>
</template>

<script setup>
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
</script>