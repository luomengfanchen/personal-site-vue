<template>
    <div class="create">
        <div class="create-view">
            <div class="title-div">
                <input
                    type="text"
                    class="title"
                    placeholder="请输入文章标题…………"
                    v-model="title"
                />
                <select class="title" v-model="category">
                    <option value="program">编程</option>
                    <option value="anime">动漫</option>
                    <option value="game">游戏</option>
                </select>
            </div>

            <textarea class="content" cols="60" rows="40" v-model="content"></textarea>

            <input
                type="button"
                class="create-button"
                value="发布"
                @click="createNew"
            />
        </div>
    </div>
</template>

<script>
import instance from '../plugins/axios.js'

export default {
    name: 'Create',
    data() {
        return {
            title: '',
            category: '',
            content: ''
        }
    },
    methods: {
        createNew: function() {
            instance.post('/create', {
                title: this.title,
                category: this.category,
                content: this.content
            })
            .then(() => {
                alert('发布成功');
                this.$router.push('/')
            })
            .catch(() => {
                alert('发布失败');
            })
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
    box-shadow: 0px 0px 20px 0px #d3d3d3;
    align-items: center;
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    padding-top: 20px;
    width: 700px;
}

.title-div {
    margin: 10px;
}
.title {
    border: #000 solid 1px;
    border-radius: 5px;
    font-family: 'Source Han Serif';
    font-size: 20px;
    font-weight: bold;
    outline: none;
    padding: 10px;
    margin: 10px;
}
.title:focus {
    border: #4169e1 solid 1px;
    transition: all 0.2s ease 0s;
}

.content {
    border: #000 solid 1px;
    border-radius: 5px;
    font-family: 'Source Han Mono';
    font-size: 15px;
    overflow: auto;
    outline: none;
    padding: 10px;
    resize: none;
}
.content:focus {
    border: #4169e1 solid 1px;
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
