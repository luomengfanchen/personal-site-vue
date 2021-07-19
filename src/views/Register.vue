<template>
    <div class="register-container">
        <div class="register-card">
            <h2 class="register-title">欢迎注册</h2>

            <form>
                <div class="register-input">
                    <label for="account">邮箱</label>
                    <input type="text" v-model="email" />
                </div>

                <div class="register-input">
                    <label for="nickname">昵称</label>
                    <input type="text" v-model="nickname" />
                </div>

                <div class="register-input">
                    <label for="password">密码</label>
                    <input type="password" v-model="password" />
                </div>

                <div class="register-button">
                    <input type="button" value="注册" @click="register" />
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Register',
    data() {
        return {
            nickname: '',
            email: '',
            password: ''
        }
    },
    methods: {
        register: function() {
            // 发送注册请求
            this.axios
                .post('/api/register', {
                    email: this.email,
                    name: this.nickname,
                    password: this.password
                })
                .then(() => {
                    alert('注册成功，将跳转到登录界面')
                    this.$router.push('/login')
                })
                .catch(() => {
                    alert('注册失败!')
                })
        }
    }
}
</script>

<style>
/* 注册界面容器 */
.register-container {
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: center;
}

/* 注册卡片 */
.register-card {
    align-items: center;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: 0px 0px 5px 0px #4169e1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 100px;
    margin-top: 100px;
}

/* 注册标题 */
.register-title {
    font-family: 'Source Han Serif';
    font-size: 40px;
    font-weight: bold;
    margin-bottom: 20px;
}

/* 注册输入容器 */
.register-input {
    display: flex;
    flex-direction: column;
    font-family: 'Source Han Serif';
    margin-bottom: 20px;
}
.register-input > input {
    border: #ddd solid 1px;
    border-radius: 5px;
    color: #868686;
    font-size: 20px;
    outline: none;
    padding: 10px;
}
.register-input > input:focus {
    border: #4169e1 solid 1px;
    transition: all 0.2s ease 0s;
}

/* 注册按钮 */
.register-button > input {
    background-color: #d3d3d3;
    border: #ddd solid 1px;
    border-radius: 5px;
    color: #fff;
    font-family: 'Source Han Serif';
    font-size: 20px;
    font-weight: bold;
    padding: 5px;
    width: 100%;
}
.register-button > input:hover {
    background-color: #708de6;
    transition: all 0.2s ease 0s;
}
</style>
