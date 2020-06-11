<template>
    <div>
        <!-- <el-calendar class="main"></el-calendar> -->
        该写点什么好呢
    </div>
</template>

<script>
export default {
    data() {
        return {}
    }
}
</script>

<style lang="less" scoped>
.main {
    width: 300px;
    height: 100px;
    /deep/ .el-calendar-day {
        height: auto;
    }
}
.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
}
</style>
