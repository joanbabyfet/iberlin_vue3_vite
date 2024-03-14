<template>
    <div class="newsA">
        <img src="@/assets/images/titleTxNews.jpg" width="273" height="37" style="margin-bottom:14px;" />
        <img src="@/assets/images/homeNewsTitle.jpg" width="201" height="19" />
        <ul>
            <li v-for="item in news" :key="item.id">
                <router-link :to="`/news/${item.id}`">{{ _.truncate(item.name, {length: 15}) }}</router-link>
            </li>
        </ul>
        <div class="more"><router-link to="/news"><img src="@/assets/images/iconNewsMore.gif" alt="more" width="34" height="10" border="0" /></router-link></div>
    </div>
</template>

<script setup>
import useNews from '@/composables/useNews'
import _ from 'lodash-es' //引入全部方法

const { news } = useNews({
    params: `{"page":1,"page_size":5}`
})
</script>