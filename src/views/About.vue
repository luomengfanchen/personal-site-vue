<template>
    <div id="about">
        <div class="intro">
            <h2 class="intro-title">落梦繁尘</h2>
            <p class="intro-p">一个兴趣使然的程序猿</p>
        </div>

        <div class="skill">
            <h3 class="skill-title">自我介绍</h3>
            <p class="skill-p">
                可以较为熟练的使用golang，vue创建前后端分离项目。
                可较为熟练的使用Python写一些小工具。
                可较为熟练的使用OpenCV(C++)做一些机器视觉。
            </p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'About'
}
</script>

<style  scoped>
#about {
    background-color: #fff;
    border-radius: 10px;
    box-shadow: 0px 0px 10px 0px #d3d3d3;
    display: flex;
    flex-direction: column;
    padding: 20px;
    margin: 0px auto;
    margin-top: 100px;
    width: 700px;
}
#about:hover {
    box-shadow: 0px 0px 20px 0px #d3d3d3;
    transition: all 0.2s ease-out 0s;
}

.intro {
    align-items: flex-end;
    border-bottom: #d3d3d3 solid 1px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    padding-bottom: 10px;
}
.intro-title {
    font-family: 'Source Han Serif';
    font-weight: bold;
}
.intro-p {
    font-family: 'Source Han Serif';
}

.skill {
    align-items: center;
    display: flex;
    flex-direction: column;
    margin-top: 10px;
}
.skill-title {
    border-bottom: #d3d3d3 solid 1px;
    font-family: 'Source Han Serif';
    margin-bottom: 10px;
    margin-top: 20px;
}
.skill-p {
    font-family: 'Source Han Serif';
    text-indent: 2em;
}
</style>
