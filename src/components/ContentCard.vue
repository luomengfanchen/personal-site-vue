<template>
    <div class="content">
        <div
            class="content-card"
            v-for="article in articleList"
            :key="article.id"
        >
            <a class="content-link" :href="'/article/' + article.id">
                <h2 class="content-title">{{ article.title }}</h2>
            </a>

            <div class="content-descript">
                <span>阅读量：{{ article.reading }}</span>
                <span>作者：{{ article.author }}</span>
                <span>发布时间：{{ article.releaseDate }}</span>
                <span>分类：{{ article.category }}</span>
            </div>

            <p class="content-paragraph">{{ article.content }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ContentCard',
    props: ['articleList']
}
</script>

<style scoped>
/* 内容容器 */
.content {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

/* 内容 */
.content-card {
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0px 0px 10px 0px #d3d3d3;
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    padding: 50px;
    width: 900px;
}
.content-card:hover {
    box-shadow: 0px 0px 20px 0px #4169e1;
    transition: all 0.2s ease-out 0s;
}

/* 内容标题 */
.content-title {
    border-bottom: #000 solid 2px;
    color: #000;
    font-family: 'Source Han Serif';
    font-weight: bold;
    margin-bottom: 20px;
}
.content-title:hover {
    border-bottom: #4169e1 solid 2px;
    color: #4169e1;
    transition: all 0.2s ease-out 0s;
}
.content-link {
    text-decoration: none;
}

.content-descript {
    align-self: center;
    color: #555;
    font-family: 'Source Han Serif';
    margin-bottom: 20px;
}
.content-descript > span {
    background-color: #ffcc00;
    border-radius: 5px;
    color: #fff;
    padding: 2px 5px;
    margin: 10px;
}

/* 内容段落 */
.content-paragraph {
    color: #555;
    font-family: 'Source Han Serif';
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
</style>
