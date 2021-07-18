<template>
    <div>
        <div class="category-header">
            <h2 class="category-title">Game</h2>
        </div>

        <ContentCard :articleList="articleList"></ContentCard>
    </div>
</template>

<script>
import ContentCard from '../components/ContentCard.vue'

export default {
    name: 'Game',
    components: { ContentCard },
    data() {
        return {
            articleList: []
        }
    },
    mounted() {
        this.axios
            .get('/api/article?category=game')
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
    background-color: #4169e1;
    display: flex;
    justify-content: center;
    height: 200px;
}

.category-title {
    color: #ffff;
    font-size: 75px;
}
</style>
