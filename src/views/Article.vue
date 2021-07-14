<template>
    <section class="content">
        <div class="content-div">
            <h2 class="content-title">{{ article.title }}</h2>
            <div class="content-descript">
                <span>阅读量：{{ article.reading }}</span>
                <span>作者：{{ article.author }}</span>
                <span>发布时间：{{ article.releaseDate }}</span>
                <span>分类：{{ article.category }}</span>
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
            article: {},
            parsed: ''
        }
    },
    mounted() {
        this.axios
            .get('/api/article?id=' + this.$route.params.id)
            .then((response) => {
                this.article = response.data.data
                this.parsed = markdownParse(this.article.content)
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
    width: 900px;
}

/* 内容标题 */
.content-title {
    border-bottom: #000 solid 2px;
    font-family: 'Source Han Serif';
    font-size: 40px;
    font-weight: bold;
    margin-bottom: 20px;
}

/* 内容描述 */
.content-descript {
    align-self: center;
    color: #555;
    font-family: 'Source Han Serif';
    margin-bottom: 20px;
}

.content-descript > span {
    background-color: #4169e1;
    border-radius: 5px;
    color: #fff;
    padding: 2px 5px;
    margin: 10px;
}

/* 内容->内容 */
.content-content {
    display: flex;
    flex-direction: column;
}

/* 二级级标题 */
.content-title2 {
    border-left: #4169e1 solid 14px;
    font-family: 'Source Han Serif';
    font-size: 35px;
    font-weight: bold;
    padding-left: 20px;
    margin-bottom: 20px;
}

/* 三级级级标题 */
.content-title3 {
    border-left: #4169e1 solid 10px;
    font-family: 'Source Han Serif';
    font-size: 30px;
    font-weight: bold;
    padding-left: 20px;
    margin-bottom: 20px;
}

/* 四级级标题 */
.content-title4 {
    border-left: #4169e1 solid 6px;
    font-family: 'Source Han Serif';
    font-size: 25px;
    font-weight: bold;
    padding-left: 20px;
    margin-bottom: 20px;
}

/* 列表项 */
.content-list {
    font-family: 'Source Han Serif';
    font-size: 20px;
    margin-left: 20px;
    margin-bottom: 20px;
}

/* 引用 */
.content-quote {
    background-color: #d3d3d3;
    border-left: #4169e1 solid 6px;
    font-family: 'Source Han Serif';
    font-size: 20px;
    font-style: italic;
    font-weight: bold;
    padding: 10px;
    margin-bottom: 20px;
}

.content-img {
    border-radius: 5px;
    margin-bottom: 20px;
}

/* 内容->代码 */
.content-code {
    background-color: #263238;
    color: #b2ccd6;
    border-radius: 5px;
    font-family: 'Source Han Mono';
    font-size: 15px;
    font-weight: bold;
    overflow: auto;
    padding: 20px;
    margin-bottom: 20px;
    white-space: nowrap;
}

/* 内容段落 */
.content-paragraph {
    font-family: 'Source Han Serif';
    font-size: 20px;
    text-indent: 2em;
    margin-bottom: 20px;
}
</style>
