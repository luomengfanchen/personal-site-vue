<template>
    <section class="content">
        <div class="content-card">
            <a class="content-link" href="#">
                <h2 class="content-title">什么是HTML?</h2>
            </a>

            <div class="content-descript">
                <span>阅读量：100</span>
                <span>发布时间：2020-10-10</span>
            </div>
            <p class="content-paragraph">
                HTML 是用来描述网页的一种语言。 HTML 指的是超文本标记语言:
                HyperText Markup Language HTML
                不是一种编程语言，而是一种标记语言 标记语言是一套标记标签
                (markup tag) HTML 使用标记标签来描述网页 HTML 文档包含了HTML
                标签及文本内容 HTML文档也叫做 web 页面
            </p>
        </div>

        <div class="content-card">
            <h2 class="content-title">什么是 CSS?</h2>
            <div class="content-descript">
                <span>阅读量：100</span>
                <span>发布时间：2020-10-10</span>
            </div>
            <p class="content-paragraph">
                CSS 指层叠样式表 (Cascading Style Sheets) 样式定义如何显示 HTML
                元素 样式通常存储在样式表中 把样式添加到 HTML 4.0
                中，是为了解决内容与表现分离的问题
                外部样式表可以极大提高工作效率 外部样式表通常存储在 CSS 文件中
                多个样式定义可层叠为一个
            </p>
        </div>

        <div class="content-card">
            <h2 class="content-title">为什么学习 JavaScript?</h2>
            <div class="content-descript">
                <span>阅读量：100</span>
                <span>发布时间：2020-10-10</span>
            </div>
            <p class="content-paragraph">
                JavaScript 是 web 开发人员必须学习的 3 门语言中的一门： HTML
                定义了网页的内容 CSS 描述了网页的布局 JavaScript
                控制了网页的行为 本教程是关于 JavaScript 及介绍 JavaScript
                如何与 HTML 和 CSS 一起工作。
            </p>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Index'
}
</script>

<style scoped>
/* 预处理 */
* {
    padding: 0px;
    margin: 0px;
}

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
    box-shadow: 0px 1px 3px 0px #d3d3d3;
    display: flex;
    flex-direction: column;
    margin-top: 50px;
    padding: 50px;
    width: 700px;
}
.content-card:hover {
    box-shadow: 0px 1px 5px 0px #d3d3d3;
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

/* 内容段落 */
.content-paragraph {
    color: #555;
    font-family: 'Source Han Serif';
    text-indent: 2em;
}
</style>
