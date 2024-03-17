<template>
    <div id="homeVisual">
		<!-- loop可循环轮播，autoplay可自动播放 -->
        <swiper
			:modules="modules"
			:loop="true"
			:slides-per-view="1"
			:space-between="50"
			:autoplay="{ delay: 4000, disableOnInteraction: false }"
			navigation
			:pagination="{ clickable: true }"
			:scrollbar="{ draggable: true }"
		>
			<swiper-slide><img src="@/assets/images/banner01.jpg"></swiper-slide>
			<swiper-slide><img src="@/assets/images/banner02.jpg"></swiper-slide>
		</swiper>
    </div>
</template>

<script setup>
// 引入swiper组件
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css/bundle'
// 引入swiper核心和所需模块
import { Pagination, Autoplay } from 'swiper/modules'
// 在modules加入要使用的模块
const modules = [Pagination, Autoplay]
</script>