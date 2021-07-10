<template>
    <section class="content">
        <div class="content-div">
            <h2 class="content-title">什么是 CSS?</h2>
            <div class="content-descript">
                <span>阅读量：100</span>
                <span>发布时间：2020-10-10</span>
            </div>

            <h3 class="content-title2">次级标题</h3>
            <p class="content-paragraph">
                CSS 指层叠样式表 (Cascading Style Sheets) 样式定义如何显示 HTML
                元素 样式通常存储在样式表中 把样式添加到 HTML 4.0
                中，是为了解决内容与表现分离的问题
                外部样式表可以极大提高工作效率 外部样式表通常存储在 CSS 文件中
                多个样式定义可层叠为一个
            </p>
            <p class="content-paragraph">
                CSS 指层叠样式表 (Cascading Style Sheets) 样式定义如何显示 HTML
                元素 样式通常存储在样式表中 把样式添加到 HTML 4.0
                中，是为了解决内容与表现分离的问题
                外部样式表可以极大提高工作效率 外部样式表通常存储在 CSS 文件中
                多个样式定义可层叠为一个
            </p>

            <h3 class="content-title2">次级标题</h3>
            <p class="content-paragraph">
                CSS 指层叠样式表 (Cascading Style Sheets) 样式定义如何显示 HTML
                元素 样式通常存储在样式表中 把样式添加到 HTML 4.0
                中，是为了解决内容与表现分离的问题
                外部样式表可以极大提高工作效率 外部样式表通常存储在 CSS 文件中
                多个样式定义可层叠为一个
            </p>
            <p class="content-paragraph">
                CSS 指层叠样式表 (Cascading Style Sheets) 样式定义如何显示 HTML
                元素 样式通常存储在样式表中 把样式添加到 HTML 4.0
                中，是为了解决内容与表现分离的问题
                外部样式表可以极大提高工作效率 外部样式表通常存储在 CSS 文件中
                多个样式定义可层叠为一个
            </p>

            <h3 class="content-title2">次级标题</h3>
            <code class="content-code">
                package main<br />

                import (<br />
                &nbsp;&nbsp;&nbsp;&nbsp;"fmt"<br />
                &nbsp;&nbsp;&nbsp;&nbsp;"im/utils"<br />
                &nbsp;&nbsp;&nbsp;&nbsp;"net/http"<br />
                )<br />

                func init() {<br />
                &nbsp;&nbsp;&nbsp;&nbsp;// 加载json配置<br />
                &nbsp;&nbsp;&nbsp;&nbsp;utils.LoadConfig("config.json")<br />

                &nbsp;&nbsp;&nbsp;&nbsp;// 服务启动输出<br />
                &nbsp;&nbsp;&nbsp;&nbsp;fmt.Println("im server syestem
                start.")<br />
                &nbsp;&nbsp;&nbsp;&nbsp;fmt.Println("at: http://",
                utils.Config.Address)<br />
                }<br />

                func main() {<br />
                &nbsp;&nbsp;&nbsp;&nbsp;// 创建多路复用器<br />
                &nbsp;&nbsp;&nbsp;&nbsp;mux := http.NewServeMux()<br />

                &nbsp;&nbsp;&nbsp;&nbsp;// 静态文件服务<br />
                &nbsp;&nbsp;&nbsp;&nbsp;file := http.Dir(utils.Config.Static)<br />
                &nbsp;&nbsp;&nbsp;&nbsp;mux.Handle("/",
                http.FileServer(file))<br />

                &nbsp;&nbsp;&nbsp;&nbsp;// 配置http服务<br />
                &nbsp;&nbsp;&nbsp;&nbsp;server := &http.Server{<br />
                &nbsp;&nbsp;&nbsp;&nbsp;Addr: utils.Config.Address,<br />
                &nbsp;&nbsp;&nbsp;&nbsp;Handler: mux,<br />
                }<br />

                // 开启监听服务<br />
                server.ListenAndServe()<br />
                }
            </code>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Article'
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

/* 内容->代码 */
.content-code {
    background-color: #eee;
    border-radius: 10px;
    font-family: 'Source Han Mono';
    font-size: 20px;
    padding: 10px;
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
