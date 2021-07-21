<template>
    <div class="notfound-container">
        <div class="notfound-card">
            <span class="notfound-mark notfound-mark-red">4</span>
            <span class="notfound-mark notfound-mark-blue">0</span>
            <span class="notfound-mark notfound-mark-red">4</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'NotFound'
}
</script>

<style>
.notfound-container {
    align-items: center;
    display: flex;
    justify-content: center;
}

.notfound-card {
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 200px;
    width: 900px;
}

.notfound-mark {
    font-size: 200px;
    font-weight: bold;
}
.notfound-mark-red {
    color: red;
}
.notfound-mark-blue {
    color: royalblue;
}
</style>