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
                    height="calc(89vh - 150px)"
                    highlight-current-row
                    oncontextmenu="return false;"
                    ref="table"
                    size="mini"
                    sortable="custom"
                    style="width: 100%"
                >
                    <!-- <el-table-column type="selection" width="40" fixed></el-table-column> -->
                    <el-table-column align="center" type="index" width="50" label="序号" fixed> </el-table-column>
                    <el-table-column
                        v-for="item in tableData.columnList"
                        :align="item.align || 'center'"
                        :key="item.prop"
                        :label="item.title"
                        :prop="item.prop"
                        :width="item.width || '200'"
                    >
                        <template slot-scope="scope">
                            <!-- <template v-if="item.prop === 'declartionStatus'"></template> -->
                            <template>{{ $util.tableRowFormat(scope.row, item) }}</template>
                        </template>
                    </el-table-column>
                    <el-table-column label="操作" align="center">
                        <template slot-scope="scope">
                            <el-button type="success" size="small" @click="confirm(scope.row)">同意</el-button>
                            <el-button type="danger" size="small" @click="del(scope.row)">拒绝</el-button>
                        </template>
                    </el-table-column>
                </el-table>
                <el-pagination
                    style="position: relative;bottom: 5px;marginTop:10px"
                    @size-change="handleSizeChange"
                    :page-sizes="[10, 20, 50]"
                    layout="total, sizes, prev, pager, next, jumper"
                    :current-page="page.currentPage"
                    :page-size="page.pageSize"
                    :total="page.total"
                    @current-change="changePage"
                >
                </el-pagination>
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
            page: {
                currentPage: 1, // 默认请求页码
                pageSize: 8,
                total: 100 // 总页码
            },
            tableData: {
                columnList: [
                    {
                        title: '公司全称',
                        prop: 'company',
                        width: '250'
                    },
                    {
                        title: '用户申请账号',
                        prop: 'user'
                    },
                    {
                        title: '申请时间',
                        prop: 'applyTime',
                        width: '200',
                        type: 'dateTime'
                    }
                ],
                list: [
                    {
                        company: '中创物流股份有限公司',
                        user: 'admin',
                        password: '123456',
                        applyTime: 'Fri Jun 05 2020 00:00:00 GMT+0800 (中国标准时间)',
                        passTime: 'Fri Jun 05 2020 00:00:00 GMT+0800 (中国标准时间)'
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
        changePage(value) {
            this.page.currentPage = value
            this.getData()
        },
        handleSizeChange(value) {
            this.page.pageSize = value
            this.getData()
        },
        tableSelectionChange(value) {
            console.log(value)
            this.selection = value
        },
        confirm() {},
        del() {}
    },
    components: {}
}
</script>

<style scoped lang="less"></style>
