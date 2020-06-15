<template>
    <div>
        <!-- <el-calendar class="main"></el-calendar> -->
        <div class="content">
            <p>
                您好，管理员，欢迎使用物流企业申报系统
            </p>
        </div>
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
.content {
    display: flex;
    font-size: 24px;
    font-weight: 700;
    justify-content: center;
    // align-items: center;
    height: 80vh;
}
</style>
