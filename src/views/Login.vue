<template>
    <div class="login">
        <div class="login-card">
            <h2 class="login-title">欢迎登陆</h2>

            <form id="form">
                <div class="login-input">
                    <label for="account">邮箱</label>
                    <input type="text" v-model="email" />
                </div>

                <div class="login-input">
                    <label for="password">密码</label>
                    <input type="password" v-model="password" />
                </div>

                <div class="login-button">
                    <input type="button" value="登陆" @click="login" />
                </div>
            </form>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Login',
    data() {
        return {
            email: '',
            password: ''
        }
    },
    methods: {
        login: function() {
            this.axios
                .post('/api/login', {
                    email: this.email,
                    password: this.password
                })
                .then((response) => {
                    sessionStorage.setItem('token', response.data.token)
                    this.$store.dispatch(
                        'asyncLoginStatus',
                        response.data.token
                    )
                    this.$router.push('/')
                })
                .catch(() => {
                    alert('账号密码输入错误')
                })
        }
    }
}
</script>

<style scoped>
/* 登陆容器 */
.login {
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: center;
}

/* 登陆卡片 */
.login-card {
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

/* 登陆标题 */
.login-title {
    font-family: 'Source Han Serif';
    font-size: 40px;
    font-weight: bold;
    margin-bottom: 20px;
}

/* 登陆输入容器 */
.login-input {
    display: flex;
    flex-direction: column;
    font-family: 'Source Han Serif';
    margin-bottom: 20px;
}
.login-input > input {
    border: #ddd solid 1px;
    border-radius: 5px;
    color: #868686;
    font-size: 20px;
    outline: none;
    padding: 10px;
}
.login-input > input:focus {
    border: #4169e1 solid 1px;
    transition: all 0.2s ease 0s;
}

/* 登陆按钮 */
.login-button > input {
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
.login-button > input:hover {
    background-color: #708de6;
    transition: all 0.2s ease 0s;
}
</style>
