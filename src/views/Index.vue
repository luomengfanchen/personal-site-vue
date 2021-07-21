<template>
    <div>
        <ContentCard :articleList="articleList"></ContentCard>

        <footer class="index-footer">
            <p class="index-p">2021-2021 &copy; personal-site</p>
        </footer>
    </div>
    
</template>

<script>
import ContentCard from '../components/ContentCard.vue'

export default {
    name: 'Index',
    components: { ContentCard },
    data() {
        return {
            articleList: []
        }
    },
    mounted() {
        this.axios
            .get('/api/article')
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
.index-footer {
    background-color: #f6f9fa;
    margin-top: 50px;
    padding: 50px 20px;
    text-align: center;
}
.index-p {
    font-size: 15px;
    margin-bottom: 10px;
}
</style>
