<template>
    <div class="manager-container">
        <div class="manager-title">
            <div class="manager-title-content">分类</div>
            <div class="manager-title-content">标题</div>
            <div class="manager-title-content">操作</div>
        </div>

        <div
            class="manager-card"
            v-for="article in articleList"
            :key="article.id"
        >
            <div
                class="manager-content-category manager-content-category-program"
                v-if="article.category === 'program'"
            >
                {{ article.category }}
            </div>
            <div
                class="manager-content-category manager-content-category-game"
                v-else-if="article.category === 'game'"
            >
                {{ article.category }}
            </div>
            <div
                class="manager-content-category manager-content-category-anime"
                v-if="article.category === 'anime'"
            >
                {{ article.category }}
            </div>

            <div class="manager-content-title">{{ article.title }}</div>

            <div class="manager-content-operator">
                <button
                    class="manager-content-button"
                    @click="viewArticle(article.id)"
                >
                    查看
                </button>
                <button
                    class="manager-content-button "
                    @click="ModifyArticle(article.id)"
                >
                    修改
                </button>
                <button
                    class="manager-content-button"
                    @click="DeleteArticle(article.id)"
                >
                    删除
                </button>
            </div>
        </div>
    </div>
</template>

<script>
import instance from '../../plugins/axios.js'

export default {
    name: 'Manager',
    data() {
        return {
            articleList: []
        }
    },
    mounted() {
        instance
            .get('/article')
            .then((response) => {
                this.articleList = response.data.data
            })
            .catch(() => {
                alert('数据获取失败')
            })
    },
    methods: {
        viewArticle: function(id) {
            this.$router.push('/article/' + id)
        },
        ModifyArticle: function(id) {
            this.$router.push('/user/modify/' + id)
        },
        DeleteArticle: function(id) {
            console.log(id)
            instance
                .delete('/article/' + id)
                .then(() => {
                    location.reload()
                    alert('删除成功')
                })
                .catch(() => {
                    alert('删除失败')
                })
        }
    }
}
</script>

<style>
/* 管理界面界面容器 */
.manager-container {
    align-items: center;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
}

/* 标题样式 */
.manager-title {
    border-bottom: 2px solid lightgray;
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 50px;
    padding-bottom: 10px;
    width: 900px;
}
.manager-title-content {
    color: gray;
    font-size: 20px;
}

/* 内容卡片 */
.manager-card {
    align-items: center;
    border-bottom: 1px solid lightgray;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin: 10px;
    padding: 1px;
    width: 850px;
}

.manager-content-category {
    background-color: royalblue;
    border-radius: 5px;
    color: #fff;
    font-size: 20px;
    margin-left: 10px;
    padding: 5px;
}
.manager-content-category-program {
    background-color: #263238;
}
.manager-content-category-game {
    background-color: #4169e1;
}
.manager-content-category-anime {
    background-color: #dba3ad;
}
.manager-content-title {
    font-size: 20px;
}
.manager-content-button {
    background-color: #fff;
    border: 1px solid lightgray;
    border-radius: 5px;
    color: gray;
    font-size: 20px;
    padding: 5px 10px;
    margin: 10px;
}
.manager-content-button:hover {
    border: 1px solid royalblue;
    color: royalblue;
}
</style>
