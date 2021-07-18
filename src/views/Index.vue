<template>
    <ContentCard :articleList="articleList"></ContentCard>
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
