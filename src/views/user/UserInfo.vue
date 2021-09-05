<template>
    <div class="info-container">
        <transition appear>
            <div class="info-card">
                <div class="info-horizonal-box">
                    <div class="info-vertional-box">
                        <h2 class="info-title">个人信息</h2>
                        <div class="info-box">
                            <label for="email" class="info-label">邮箱</label>
                            <input
                                type="text"
                                class="info-input-box"
                                readonly
                                v-model="email"
                            />
                        </div>

                        <div class="info-box">
                            <label for="name" class="info-label">昵称</label>
                            <input
                                type="text"
                                class="info-input-box"
                                readonly
                                v-model="name"
                            />
                        </div>
                    </div>

                    <div class="info-img-box"></div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import instance from '../../plugins/axios.js'

export default {
    name: 'UserInfo',
    data() {
        return {
            email: '',
            name: ''
        }
    },
    mounted() {
        instance
            .get('user')
            .then((response) => {
                let data = response.data.data
                this.email = data.email
                this.name = data.name
            })
            .catch(() => {
                alert('数据获取失败')
            })
    }
}
</script>

<style>
.info-container {
    align-items: center;
    display: flex;
    justify-content: center;
}

.info-card {
    align-items: center;
    box-shadow: 0px 0px 50px 0px #d3d3d3;
    border-radius: 5px;
    display: flex;
    width: 900px;
    height: 600px;
    justify-content: center;
    margin-top: 100px;
}

.info-title {
    font-size: 40px;
    font-family: 'Source Han Serif';
}

.info-box {
    display: flex;
    flex-direction: column;
    margin: 20px 0px;
}

.info-label {
    font-size: 20px;
    font-family: 'Source Han Serif';
}

.info-horizonal-box {
    align-items: center;
    display: flex;
    flex-direction: row;
}

.info-vertional-box {
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    margin-right: 100px;
}

.info-input-box {
    border: lightgray solid 1px;
    border-radius: 5px;
    height: 30px;
    font-family: 'Source Han Serif';
    font-size: 20px;
    margin-top: 10px;
    outline: none;
    padding: 5px 10px;
    width: 300px;
}

.info-img-box {
    background-color: #ebebeb;
    border: lightgray solid 1px;
    height: 400px;
    width: 300px;
}
</style>
