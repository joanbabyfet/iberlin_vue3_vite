<template>
    <div id="innerMainRegion" class="visualNews">
        <div id="pageBanner"><img src="@/assets/images/visual/news.jpg" width="489" height="489" /></div>
        <div id="bodyMain">
            <div id="innerBodyMain">
                <div class="mainTitle titleBrand"><img src="@/assets/images/visual/pageTitle/news.png" width="200" height="35" /></div>
                <div id="mainContents">
                    <h2>{{ info.name }}</h2>
                    <p>{{ info.content }}</p>
                    <div class="files">
                        <ul>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <div id="mainFooterSide"></div>
    </div>
</template>

<script setup>
import useNewsDetail from '@/composables/useNewsDetail'
import { useRoute } from 'vue-router'

const route = useRoute()
const { info } = useNewsDetail({
    params: `{"id": ${route.params.id}}`
})
</script>