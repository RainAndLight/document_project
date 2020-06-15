<template>
    <div>
        <el-card>
            <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
                <el-breadcrumb-item :to="{ path: '/home/todoCenter' }">待办</el-breadcrumb-item>
                <el-breadcrumb-item>物流企业经营状况表申报</el-breadcrumb-item>
                <!-- <template slot="title">待办</template> -->
            </el-breadcrumb>
            <declarationQuarter v-if="selectType === 'month'"></declarationQuarter>
            <declarationYear v-if="selectType === 'year'"></declarationYear>
            <div class="footerBtn">
                <el-button type="success">暂存</el-button>
                <el-button type="primary">提交</el-button>
            </div>
        </el-card>
    </div>
</template>

<script>
import declarationQuarter from './declaration-quarter'
import declarationYear from './declaration-year'
export default {
    name: 'declaration',
    props: {},
    data() {
        return {
            selectType: this.$route.query.declarationType
        }
    },
    computed: {},
    activated() {},
    created() {},
    mounted() {
        console.log(this.$route.query.declarationType, '$route')
    },
    watch: {},
    methods: {
        selectChange(value) {
            this.flag = value
        }
    },
    components: {
        declarationQuarter,
        declarationYear
    }
}
</script>

<style scoped lang="less">
.footerBtn {
    margin-top: 20px;
    width: 100%;
    display: flex;
    justify-content: flex-end;
}
</style>
