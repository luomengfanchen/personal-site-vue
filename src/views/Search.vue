<template>
    <div class="search">
        <input
            type="text"
            class="search-bar"
            placeholder="输入关键字搜索文章······"
            v-model="searchVal"
            @keypress.enter="search"
        />

        <ContentCard :articleList="articleList"></ContentCard>
    </div>
</template>

<script>
import ContentCard from '../components/ContentCard.vue'

export default {
    name: 'Search',
    components: { ContentCard },
    data() {
        return {
            searchVal: '',
            articleList: []
        }
    },
    methods: {
        search: function() {
            this.axios
                .get('/api/search?title=' + this.searchVal)
                .then((response) => {
                    this.articleList = response.data.data
                })
                .catch(() => {
                    window.alert('数据获取失败')
                })
        }
    }
}
</script>

<style scoped>
/* 页面布局 */
.search {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-top: 50px;
}

/* 搜索栏样式 */
.search-bar {
    border: #ddd solid 1px;
    border-radius: 3%/50%;
    font-size: 20px;
    margin: 10px;
    outline: none;
    padding: 10px 30px;
    width: 700px;
}
.search-bar:focus {
    border: #4169e1 solid 1px;
    transition: all 0.2s ease 0s;
}
</style>
