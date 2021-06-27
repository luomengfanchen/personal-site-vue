<template>
    <div id="friend">
        <div class="friend-card" href="http://kirrisgu.top">
            <div class="friend-avator">
                <img src="../assets/logo.png" />
            </div>

            <div class="friend-descript">
                <a href="http://www.kirrisgu.top">樱花庄の小悠 - 你是我一生只会遇到一次的惊喜</a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Friend'
}
</script>

<style scoped>
#friend {
    margin: 0px auto;
    width: 700px;
    margin-top: 100px;
}

.friend-card {
    align-items: center;
    border-radius: 10px;
    box-shadow: 0px 0px 10px 0px #d3d3d3;
    display: flex;
    flex-direction: row;
    padding: 20px;
    margin-top: 10px;
}
.friend-card:hover {
    box-shadow: 0px 0px 20px 0px #d3d3d3;
    transition: all 0.2s ease-out 0s;
}

.friend-avator {
    border-right: #d3d3d3 solid 1px;
    padding-right: 10px;
    margin-right: 10px;
}
.friend-avator > img {
    height: 75px;
    margin: 30px;
    width: 75px;
}

.friend-descript {
    margin-left: 20px;
}
.friend-descript > a {
    color: gray;
    text-decoration: none;
}
</style>
