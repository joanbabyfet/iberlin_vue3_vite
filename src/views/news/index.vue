<template>
    <div id="innerMainRegion" class="visualNews">
        <div id="pageBanner"><img src="@/assets/images/visual/news.jpg" width="489" height="489" /></div>
        <div id="bodyMain">
            <div id="innerBodyMain">
                <div class="mainTitle titleBrand"><img src="@/assets/images/visual/pageTitle/news.png" width="200" height="35" /></div>
                <div class="newsList">
                    <ul>
                        <li v-for="item in list" :key="item.id">
                            <router-link :to="`/news/${item.id}`">{{ item.title }}</router-link>
                        </li>
                    </ul>
                </div>
                    <el-pagination
                        v-model:current-page="currentPage"
                        v-model:page-size="pageSize"
                        :total="total"
                        :page-sizes="[10, 20, 30, 40]"
                        layout="total, sizes, prev, pager, next, jumper"
                        @current-change="handleCurrentChange"
                        @size-change="handleSizeChange"
                        >
                    </el-pagination>
            </div>
        </div>
        <div id="mainFooterSide"></div>
    </div>
</template>

<script setup>
import useNews from '@/composables/useNews'

const { list, total, currentPage, pageSize, handleCurrentChange, handleSizeChange } = useNews()
</script>