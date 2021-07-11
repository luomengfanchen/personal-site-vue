<template>
    <div>
        <div class="category-header">
            <h2 class="category-title">Anime</h2>
        </div>

        <ContentCard :articleList="articleList"></ContentCard>
    </div>
</template>

<script>
import ContentCard from '../components/ContentCard.vue'

export default {
    name: 'Anime',
    components: { ContentCard },
    data() {
        return {
            articleList: []
        }
    },
    mounted() {
        this.axios
            .get('/api/articleyycategory?category=anime')
            .then((response) => {
                this.articleList = response.data.data
            })
            .catch(() => {
                window.alert('数据获取失败')
            })
    }
}
</script>

<style scoped>
.category-header {
    align-items: center;
    background-color: #dba3ad;
    display: flex;
    justify-content: center;
    height: 200px;
}

.category-title {
    color: #ffff;
    font-size: 75px;
}
</style>
