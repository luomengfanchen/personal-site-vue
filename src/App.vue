<template>
    <div id="app">
        <Header></Header>
        <router-view />
    </div>
</template>

<script>
import Header from './components/Header.vue'

export default {
    name: 'App',
    components: { Header },
}
</script>

<style>
/* 预处理 */
* {
    padding: 0px;
    margin: 0px;
}

/* vue 动画 */
.v-enter {
    opacity: 0;
    transform: translateX(200px);
}
.v-enter-active {
    transition: opacity 0.6s linear;
    transition: transform 0.6s linear;
}
.v-enter-to {
    opacity: 1;
    transform: translateX(0px);
}
</style>
