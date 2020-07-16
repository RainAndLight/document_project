<template>
    <div>
        <el-card class="card" style="height:85vh">
            <bread-crumb slot="header">
                <template slot="title">待办</template>
            </bread-crumb>
            <div style="overflow:auto">
                <!-- <div class="header"> -->
                <span
                    >注：在申报截止日期前，您可以随时修改申报内容，如有驳回，需要您修改后重新提交，如有问题请及时与管理员联系</span
                >
                <!-- <el-button type="primary" size="mini" @click="submit">申报</el-button> -->
                <!-- </div> -->
                <el-table
                    :data="tableData.list"
                    height="calc(61vh)"
                    border
                    size="mini"
                    style="width:100% ;marginTop:10px"
                >
                    <!-- <el-table-column type="selection" width="55"> </el-table-column> -->
                    <el-table-column type="index" width="50"> </el-table-column>
                    <el-table-column
                        v-for="(item, index) in tableData.columnList"
                        :key="index"
                        :align="item.center || 'center'"
                        :width="item.width"
                        :label="item.title"
                        :prop="item.prop"
                    >
                        <template slot-scope="scope">
                            <template v-if="item.prop === 'declarationUserStatus'">
                                <el-tag v-if="scope.row.declarationUserStatus === 1" type="info">
                                    {{ $util.tableRowFormat(scope.row, item) }}
                                </el-tag>
                                <el-tag v-if="scope.row.declarationUserStatus === 2" type="success">
                                    {{ $util.tableRowFormat(scope.row, item) }}
                                </el-tag>
                                <el-tag v-if="scope.row.declarationUserStatus === 3" type="danger">
                                    {{ $util.tableRowFormat(scope.row, item) }}
                                </el-tag>
                            </template>
                            <template v-else>{{ $util.tableRowFormat(scope.row, item) }}</template>
                        </template>
                    </el-table-column>
                    <el-table-column label="操作" width="100" align="center">
                        <template slot-scope="scope">
                            <el-button
                                v-if="scope.row.declarationUserStatus === 1"
                                type="primary"
                                size="mini"
                                @click="submit(scope.row)"
                            >
                                <span>申报</span>
                            </el-button>
                            <el-button
                                v-if="scope.row.declarationUserStatus === 2 || scope.row.declarationUserStatus === 3"
                                type="primary"
                                size="mini"
                                @click="submit(scope.row)"
                                >编辑
                            </el-button>
                        </template>
                    </el-table-column>
                </el-table>
                <el-pagination
                    style="position: relative;bottom: 5px;marginTop:10px"
                    @size-change="handleSizeChange"
                    :page-sizes="[5, 10, 20]"
                    layout="total, sizes, prev, pager, next, jumper"
                    :current-page="page.pageNum"
                    :page-size="page.pageSize"
                    :total="tableData.total"
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
                pageNum: 1,
                pageSize: 10,
                sortList: [
                    {
                        sortKey: 'createdTime',
                        sortValue: 'desc'
                    }
                ]
            },
            selection: [],
            tableData: {
                pageNum: 1,
                pageSize: 10,
                total: 20,
                columnList: [
                    {
                        title: '发起申报人',
                        prop: 'createdBy'
                    },
                    {
                        title: '申报类型',
                        prop: 'declarationTypeCode',
                        type: 'format',
                        format: {
                            quarter: '季度',
                            year: '年度'
                        }
                    },
                    {
                        title: '报表周期',
                        prop: 'declarationDate',
                        width: '250',
                        type: 'listDateTime'
                    },
                    {
                        title: '申报填写时间',
                        prop: 'declareDate',
                        width: '250',
                        type: 'listDateTime'
                    },
                    {
                        title: '申报状态',
                        prop: 'declarationUserStatus',
                        type: 'format',
                        width: '200',
                        format: {
                            1: '未申报',
                            2: '已提交',
                            3: '已驳回'
                        }
                    }
                ],
                list: []
            }
        }
    },
    created() {
        this.getData()
    },
    methods: {
        getData() {
            this.$axios({
                url: '/api/declaration/page',
                method: 'post',
                data: this.page
            }).then(data => {
                if (data.returnCode === 200) {
                    this.tableData.total = data.returnData.total
                    this.tableData.pageNum = data.returnData.pageNum
                    this.tableData.pageSize = data.returnData.pageSize
                    this.tableData.list = data.returnData.list
                } else {
                    this.$message({
                        type: 'error',
                        message: data.returnMsg
                    })
                }
            })
        },
        changePage(value) {
            this.page.pageNum = value
            this.getData()
        },
        handleSizeChange(value) {
            this.page.pageSize = value
            this.getData()
        },
        tableSelectionChange(value) {
            this.selection = value
            // this.getData()
        },
        submit(row) {
            // console.log(row)
            let now = new Date()
            let time = new Date(row.declareEndDate)
            // if (now > time) {
            //     this.$message({
            //         message: '提交申报时间已截止，不可再申报',
            //         type: 'warning'
            //     })
            //     return
            // } else if (now < time) {
            //     this.$message({
            //         message: '申报暂未开始',
            //         type: 'warning'
            //     })
            //     return
            // }
            this.$router.push({
                path: '/home/todoCenter/declaration',
                query: {
                    declarationId: row.id,
                    declarationType: row.declarationTypeCode
                },
                params: { op: 'refresh' }
            })
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
        }
    },
    components: {}
}
</script>

<style scoped lang="less">
.card {
    position: relative;
    .header {
        display: flex;
        justify-content: flex-end;
    }
}
</style>
