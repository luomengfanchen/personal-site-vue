<template>
    <section class="content">
        <div class="content-div">
            <h2 class="content-title">{{ artlcle.title }}</h2>
            <div class="content-descript">
                <span>阅读量：{{ artlcle.reading }}</span>
                <span>发布时间：{{ artlcle.releaseDate }}</span>
            </div>

            <div class="content-content" v-html="parsed"></div>
        </div>
    </section>
</template>

<script>
import markdownParse from '../plugins/markdown.js'

export default {
    name: 'Article',
    data() {
        return {
            artlcle: {},
            parsed: ''
        }
    },
    mounted() {
        this.axios
            .get('/api/article?id=' + this.$route.params.id)
            .then((response) => {
                this.artlcle = response.data.data
                this.parsed = markdownParse(this.artlcle.content)
            })
            .catch(() => {
                window.alert('获取数据失败')
            })
    }
}
</script>

<style>
/* 内容容器 */
.content {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

/* 内容 */
.content-div {
    background-color: #fff;
    border-radius: 5px;
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    padding: 50px;
    width: 700px;
}

/* 内容标题 */
.content-title {
    border-bottom: #000 solid 2px;
    font-family: 'Source Han Serif';
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 20px;
}

/* 次级标题 */
.content-title2 {
    border-left: #4169e1 solid 6px;
    font-family: 'Source Han Serif';
    font-size: 25px;
    font-weight: bold;
    padding-left: 20px;
    margin-bottom: 20px;
}

.content-descript {
    align-self: center;
    color: #555;
    font-family: 'Source Han Serif';
    margin-bottom: 20px;
}

/* 内容->内容 */
.content-content {
    display: flex;
    flex-direction: column;
}

/* 内容->代码 */
.content-code {
    background-color: #eee;
    border-radius: 10px;
    font-family: 'Source Han Mono';
    font-size: 10px;
    padding: 20px;
    margin-bottom: 20px;
}

/* 内容段落 */
.content-paragraph {
    font-family: 'Source Han Serif';
    font-size: 20px;
    text-indent: 2em;
    margin-bottom: 20px;
}
</style>
