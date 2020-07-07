<template>
    <div>
        <el-card class="card">
            <bread-crumb slot="header">
                <template slot="title">待办</template>
            </bread-crumb>
            <div style="height:calc(80vh - 50px);overflow:auto">
                <div class="header">
                    <el-button type="primary" size="mini" @click="submit">申报</el-button>
                    <el-button type="primary" size="mini" @click="look">查看</el-button>
                </div>
                <el-table
                    @selection-change="tableSelectionChange"
                    :data="tableData.list"
                    border
                    size="mini"
                    height="calc(100vh - 260px)"
                    style="width: 100%;marginTop:10px "
                >
                    <el-table-column type="index" width="50"> </el-table-column>
                    <el-table-column type="selection" width="55"> </el-table-column>
                    <!-- <el-table-column align="center" width="100" label="ID" prop="id"></el-table-column> -->
                    <!-- <el-table-column align="center" width="100" label="流水号" prop="orderNo"></el-table-column> -->
                    <el-table-column
                        align="center"
                        width="100"
                        label="发起申报人"
                        prop="originPerson"
                    ></el-table-column>
                    <el-table-column
                        align="center"
                        width="100"
                        label="申报类型"
                        prop="declarationType"
                        :formatter="declarationTypeFormatter"
                    ></el-table-column>
                    <el-table-column
                        align="center"
                        width="200"
                        label="申报周期"
                        prop="declartionStartEndTime"
                    ></el-table-column>
                    <el-table-column
                        align="center"
                        width="200"
                        label="申报起止日期"
                        prop="declarationDate"
                    ></el-table-column>
                    <el-table-column align="center" width="150" label="申报状态" prop="declarationStatus">
                        <template slot-scope="scoped">
                            <el-tag v-show="scoped.row.declarationStatus === 0" type="info">未申报</el-tag>
                            <!-- <el-tag v-show="scoped.row.declarationStatus === 1">申报中</el-tag> -->
                            <el-tag v-show="scoped.row.declarationStatus === 1">申报已提交</el-tag>
                            <el-tag v-show="scoped.row.declarationStatus === 2" type="success">审核完成</el-tag>
                            <el-tag v-show="scoped.row.declarationStatus === 3" type="danger">申报超时</el-tag>
                            <!-- <el-tag v-show="scoped.row.declarationStatus === 4" type="danger">申报驳回</el-tag> -->
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
    name: 'todoCenter',
    props: {},
    data() {
        return {
            page: {
                currentPage: 1, // 默认请求页码
                pageSize: 8,
                total: 100 // 总页码
            },
            selection: [],
            tableData: {
                list: [
                    {
                        id: '0',
                        originPerson: 'admin',
                        orderNo: '001',
                        declarationType: 'quarter',
                        declarationDate: '2020-6-1 至 2020-9-1',
                        declarationStatus: 0
                    },
                    {
                        id: '1',
                        originPerson: 'admin',
                        orderNo: '002',
                        declarationType: 'year',
                        declarationDate: '2020-6-1 至 2020-9-1',
                        declarationStatus: 1
                    },
                    {
                        id: '2',
                        originPerson: 'admin',
                        orderNo: '003',
                        declarationType: 'quarter',
                        declarationDate: '2020-6-1 至 2020-9-1',
                        declarationStatus: 2
                    },
                    {
                        id: '3',
                        originPerson: 'admin',
                        orderNo: '004',
                        declarationType: 'quarter',
                        declarationDate: '2020-6-1 至 2020-9-1',
                        declarationStatus: 3
                    }
                ]
            }
        }
    },
    created() {
        this.getData()
    },
    methods: {
        getData() {
            // this.$axios({
            //     url: '/user/photo',
            //     method: 'patch',
            //     data:this.page
            // }).then(({data}) => {
            //     if (data.status === 200) {
            //         this.tableData.list = data.returnData
            //     }
            // })
        },
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
        submit() {
            if (this.selection.length > 0 && this.selection.length < 2) {
                if (this.selection[0].declarationStatus === 2) {
                    this.$message({
                        message: '审核完成不可修改',
                        type: 'warning'
                    })
                    return
                }
                if (this.selection[0].declarationStatus === 4) {
                    this.$message({
                        message: '该申报已结束，不可再提交申报',
                        type: 'warning'
                    })
                    return
                }
                this.$router.push({
                    path: '/home/todoCenter/declaration',
                    query: {
                        id: this.selection[0].id,
                        declarationType: this.selection[0].declarationType,
                        entrance: 'declaration'
                    },
                    params: { op: 'refresh' }
                })
            } else {
                this.$message({
                    message: '请选择一条数据数据申报',
                    type: 'warning'
                })
            }
        },
        look() {
            if (this.selection.length > 0 && this.selection.length < 2) {
                this.$router.push({
                    path: '/home/todoCenter/declaration',
                    query: {
                        id: this.selection[0].id,
                        declarationType: this.selection[0].declarationType,
                        entrance: 'look'
                    },
                    params: { op: 'refresh' }
                })
            } else {
                this.$message({
                    message: '请选择一条数据数据查看',
                    type: 'warning'
                })
            }
        },
        declarationTypeFormatter(row) {
            if (row.declarationType === 'quarter') {
                return '季度'
            } else {
                return '年度'
            }
        }
    },
    components: {}
}
</script>

<style scoped lang="less">
.card {
    // height: 85vh;
    position: relative;
    .header {
        display: flex;
        justify-content: flex-end;
    }
}
</style>
