<template>
    <header class="header">
        <!-- 导航栏 -->
        <nav class="nav">
            <a href="/">
                <img class="nav-img" src="../assets/logo.png" />
            </a>
            <a class="nav-item" href="/program">编程</a>
            <a class="nav-item" href="/Anime">动漫</a>
            <a class="nav-item" href="/Game">游戏</a>
            <a class="nav-item" href="/friend">友链</a>
            <a class="nav-item" href="/about">关于我</a>
        </nav>

        <!-- 用户操作 -->
        <div class="nav-btn-group">
            <a href="/search" class="nav-btn-primary">搜索</a>
            <a
                href="/create"
                class="nav-btn"
                v-if="$store.getters.getLoginStatus != undefined"
                >新建</a
            >
            <a href="/login" class="nav-btn" v-else>登录</a>
        </div>
    </header>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style scoped>
/* 头部样式 */
.header {
    align-items: center;
    background-color: #fff;
    box-shadow: 0px 0px 10px 0px #d3d3d3;
    display: flex;
    flex-direction: row;
    height: 75px;
    justify-content: space-between;
}

/* 导航栏样式 */
.nav {
    align-items: center;
    display: flex;
    justify-content: center;
    margin-left: 20px;
}
.nav-img {
    height: 75px;
    width: 75px;
}
.nav-item {
    color: #222;
    font-family: 'Source Han Serif';
    font-weight: bold;
    font-size: 20px;
    height: 70px;
    line-height: 75px;
    margin-left: 20px;
    margin-right: 20px;
    text-decoration: none;
}
.nav-item:hover {
    border-bottom: #4169e1 solid 5px;
    color: #4169e1;
    transition: border 0.2s ease-out 0s;
}

/* 导航栏按钮样式 */
.nav-btn-group {
    display: flex;
    margin-right: 20px;
}
.nav-btn {
    border: #000 solid 2px;
    border-radius: 5px;
    color: #000;
    font-family: 'Source Han Serif';
    font-weight: bold;
    font-size: 20px;
    margin-right: 20px;
    padding: 5px 20px;
    text-decoration: none;
}
.nav-btn:hover {
    border: #4169e1 solid 2px;
    background-color: #4169e1;
    color: #fff;
    transition: all 0.2s ease-out 0s;
}

.nav-btn-primary {
    background-color: #4169e1;
    border: #4169e1 solid 2px;
    border-radius: 5px;
    color: #fff;
    font-family: 'Source Han Serif';
    font-weight: bold;
    font-size: 20px;
    margin-right: 20px;
    padding: 5px 20px;
    text-decoration: none;
}
.nav-btn-primary:hover {
    background-color: #5e7edd;
    border: #5e7edd solid 2px;
    transition: all 0.2s ease-out 0s;
}
</style>
