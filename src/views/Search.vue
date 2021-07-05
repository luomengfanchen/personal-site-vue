<template>
    <div class="search">
        <input
            type="text"
            class="search-bar"
            placeholder="输入关键字搜索文章······"
        />

        <!-- search result -->
        <div class="search-result">
            <div class="result-card">
                <a class="result-link" href="#">
                    <h2 class="result-title">什么是HTML?</h2>
                </a>

                <div class="result-descript">
                    <span>阅读量：100</span>
                    <span>发布时间：2020-10-10</span>
                </div>
                <p class="result-paragraph">
                    HTML 是用来描述网页的一种语言。 HTML 指的是超文本标记语言:
                    HyperText Markup Language HTML
                    不是一种编程语言，而是一种标记语言 标记语言是一套标记标签
                    (markup tag) HTML 使用标记标签来描述网页 HTML 文档包含了HTML
                    标签及文本内容 HTML文档也叫做 web 页面
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Search'
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
    border-radius: 5%/50%;
    font-size: 20px;
    margin: 10px;
    outline: none;
    padding: 10px 30px;
    width: 500px;
}
.search-bar:focus {
    border: #4169e1 solid 1px;
    transition: all 0.2s ease 0s;
}

/* 内容容器 */
.search-result {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
}
/* 内容 */
.result-card {
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0px 1px 10px 0px #d3d3d3;
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    padding: 50px;
    width: 700px;
}
.result-card:hover {
    box-shadow: 0px 1px 20px 0px #d3d3d3;
    transition: all 0.2s ease-out 0s;
}

/* 内容标题 */
.result-title {
    border-bottom: #000 solid 2px;
    color: #000;
    font-family: 'Source Han Serif';
    font-weight: bold;
    margin-bottom: 20px;
}
.result-title:hover {
    border-bottom: #4169e1 solid 2px;
    color: #4169e1;
    transition: all 0.2s ease-out 0s;
}
.result-link {
    text-decoration: none;
}

.result-descript {
    align-self: center;
    color: #555;
    font-family: 'Source Han Serif';
    margin-bottom: 20px;
}

/* 内容段落 */
.result-paragraph {
    color: #555;
    font-family: 'Source Han Serif';
    text-indent: 2em;
}
</style>
