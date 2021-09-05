<template>
    <div class="create">
        <transition appear>
            <div class="create-view">
                <div class="title-div">
                    <input
                        type="text"
                        class="title"
                        placeholder="请输入文章标题······"
                        v-model="title"
                    />
                    <select class="title" v-model="category">
                        <option value="program">编程</option>
                        <option value="anime">动漫</option>
                        <option value="game">游戏</option>
                    </select>
                </div>

                <textarea class="content" v-model="content"></textarea>

                <input
                    type="button"
                    class="create-button"
                    value="修改"
                    @click="Modify"
                />
            </div>
        </transition>
    </div>
</template>

<script>
import instance from '../../plugins/axios.js'

export default {
    name: 'Create',
    data() {
        return {
            title: '',
            category: '',
            content: ''
        }
    },
    mounted() {
        this.axios
            .get('/api/article?id=' + this.$route.params.id)
            .then((response) => {
                let article = response.data.data
                this.title = article.title
                this.category = article.category
                this.content = article.content
            })
            .catch(() => {
                window.alert('获取数据失败')
            })
    },
    methods: {
        Modify: function() {
            if (this.title == '') {
                alert('标题不能为空')
            } else if (this.category == '') {
                alert('请选择分类')
            } else if (this.content == '') {
                alert('内容不能为空')
            } else {
                instance
                    .patch('/article/' + this.$route.params.id, {
                        title: this.title,
                        category: this.category,
                        content: this.content
                    })
                    .then(() => {
                        alert('修改成功')
                        this.$router.push('/user/manager')
                    })
                    .catch(() => {
                        alert('修改失败')
                    })
            }
        }
    }
}
</script>

<style scoped>
.create {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.create-view {
    border-radius: 5px;
    box-shadow: 0px 0px 20px 0px #d3d3d3;
    align-items: center;
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    padding-top: 20px;
    width: 900px;
}

.title-div {
    margin: 10px;
}
.title {
    border: #000 solid 2px;
    border-radius: 5px;
    font-family: 'Source Han Serif';
    font-size: 20px;
    font-weight: bold;
    outline: none;
    padding: 10px;
    margin: 10px;
}
.title:focus {
    border: #4169e1 solid 2px;
    transition: all 0.2s ease 0s;
}

.content {
    border: #000 solid 2px;
    border-radius: 5px;
    font-family: 'Source Han Mono';
    font-size: 15px;
    height: 850px;
    width: 850px;
    overflow: auto;
    outline: none;
    padding: 10px;
    resize: none;
    white-space: nowrap;
}
.content:focus {
    border: #4169e1 solid 2px;
    transition: all 0.2s ease 0s;
}

.create-button {
    background-color: #5171d1;
    border: none;
    border-radius: 5px;
    color: #fff;
    font-family: 'Source Han Serif';
    font-weight: bold;
    font-size: 20px;
    margin: 20px;
    padding: 5px 50px;
}
.create-button:hover {
    background-color: #4169e1;
    transition: all 0.2s ease 0s;
}
</style>
