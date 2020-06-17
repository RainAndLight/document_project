<template>
    <div>
        <el-card>
            <bread-crumb slot="header">
                <template slot="title">账号审核</template>
            </bread-crumb>
            <div style="height:calc(80vh - 50px);overflow:auto">
                <el-table
                    :data="tableData.list"
                    border
                    height="calc(89vh - 111px)"
                    highlight-current-row
                    oncontextmenu="return false;"
                    ref="table"
                    size="mini"
                    sortable="custom"
                    style="width: 100%"
                >
                    <el-table-column type="selection" width="40" fixed></el-table-column>
                    <el-table-column align="center" type="index" width="40" label="#" fixed> </el-table-column>
                    <el-table-column
                        v-for="item in tableData.columnList"
                        :align="item.align || 'center'"
                        :key="item.prop"
                        :label="item.title"
                        :prop="item.prop"
                        :width="item.width || '200'"
                    >
                    </el-table-column>
                    <el-table-column label="操作" align="center">
                        <template slot-scope="scope">
                            <el-button type="success" size="small" @click="confirm(scope.row)">同意</el-button>
                            <el-button type="danger" size="small" @click="del(scope.row)">拒绝</el-button>
                        </template>
                    </el-table-column>
                </el-table>
            </div>
        </el-card>
    </div>
</template>

<script>
export default {
    name: 'userAudit',
    props: {},
    data() {
        return {
            tableData: {
                columnList: [
                    {
                        title: '公司全称',
                        prop: 'company'
                    },
                    {
                        title: '用户申请账号',
                        prop: 'user'
                    },
                    {
                        title: '用户申请密码',
                        prop: 'password'
                    },
                    {
                        title: '申请时间',
                        prop: 'applyTime',
                        width: '200'
                    }
                ],
                list: [
                    {
                        company: '中创物流股份有限公司',
                        user: 'admin',
                        password: '123456',
                        applyTime: '2020-6-17 15:42:05 '
                    }
                ]
            }
        }
    },
    computed: {},
    created() {},
    mounted() {},
    watch: {},
    methods: {
        confirm() {},
        del() {}
    },
    components: {}
}
</script>

<style scoped lang="less"></style>
