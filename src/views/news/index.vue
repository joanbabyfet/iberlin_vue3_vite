<template>
    <div id="innerMainRegion" class="visualNews">
        <div id="pageBanner"><img src="@/assets/images/visual/news.jpg" width="489" height="489" /></div>
        <div id="bodyMain">
            <div id="innerBodyMain">
                <div class="mainTitle titleBrand"><img src="@/assets/images/visual/pageTitle/news.png" width="200" height="35" /></div>
                <div class="newsList">
                    <ul>
                        <li v-for="item in news" :key="item.id">
                            <router-link :to="`/news/${item.id}`">{{ item.name }}</router-link>
                        </li>
                    </ul>
                </div>
                    <el-pagination
      v-model:currentPage="currentPage4"
      :page-sizes="[100, 200, 300, 400]"
      :page-size="100"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    >
    </el-pagination>
            </div>
        </div>
        <div id="mainFooterSide"></div>
    </div>
</template>

<script setup>
import useNews from '@/composables/useNews'

const { news } = useNews({
    params: `{"page":1,"page_size":10}`
})

const handleSizeChange = (val) => {
  console.log(`${val} items per page`)
}
const handleCurrentChange = (val) => {
  console.log(`current page: ${val}`)
}
</script>