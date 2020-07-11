<template>
    <div>
        <!-- <el-dialog title="申报设定历史列表" :visible.sync="dialogTableVisible" width="800px"> -->
        <!-- <div class="header" style="display:flex;justify-content:flex-end">
            <el-button class="btn" type="primary" size="mini" style="margin-right:10px" @click="confirm"
                >查看</el-button
            >
        </div> -->
        <el-table
            @selection-change="tableSelectionChange"
            :data="tableData.list"
            border
            size="mini"
            height="57vh"
            style="width: 100% "
        >
            <el-table-column type="index" width="55"> </el-table-column>
            <!-- <el-table-column align="center" width="100" label="流水号" prop="orderNo"></el-table-column> -->
            <!-- <el-table-column align="center" width="100" label="发起申报人" prop="originPerson"></el-table-column> -->
            <el-table-column
                align="center"
                label="申报类型"
                prop="declarationType"
                :formatter="declarationTypeFormatter"
            ></el-table-column>
            <!-- <el-table-column align="center" width="150" label="开始时间" prop="startTime"></el-table-column> -->
            <el-table-column align="center" width="200" label="报表周期" prop="contentTime"></el-table-column>
            <el-table-column align="center" width="200" label="申报起止日期" prop="declarationDate"></el-table-column>
            <el-table-column align="center" width="150" label="申报状态" prop="declarationStatus">
                <template slot-scope="scoped">
                    <el-tag v-show="scoped.row.declarationStatus === 0" type="info">申报未开始</el-tag>
                    <el-tag v-show="scoped.row.declarationStatus === 1">申报正在进行中</el-tag>
                    <el-tag v-show="scoped.row.declarationStatus === 2" type="success">申报已结束</el-tag>
                </template>
            </el-table-column>
            <el-table-column align="center" width="100" label="操作" fixed="right">
                <template slot-scope="scoped">
                    <el-button @click="look(scoped.row)" size="mini" type="primary">查看</el-button>
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
        <!-- </el-dialog> -->
    </div>
</template>

<script>
export default {
    name: 'declaration-schedule-table-modal',
    props: {},
    data() {
        return {
            dialogTableVisible: false,
            selection: [],
            tableData: {
                list: [
                    {
                        originPerson: 'admin',
                        orderNo: '001',
                        declarationType: 'quarter',
                        declarationDate: '2020-6-1 至 2020-9-1',
                        contentTime: '2020-1-1 至 2020-3-31',
                        declarationStatus: 0,
                        startTime: '2020-6-18 00:00:00'
                    },
                    {
                        originPerson: 'admin',
                        orderNo: '003',
                        declarationType: 'quarter',
                        declarationDate: '2020-6-1 至 2020-9-1',
                        contentTime: '2020-1-1 至 2020-3-31',
                        declarationStatus: 2,
                        startTime: '2020-6-18 00:00:00'
                    }
                ]
            },
            page: {
                total: 0,
                pageSize: 10, // 默认每页条数为10
                currentPage: 1 // 默认页码为1
            }
        }
    },
    created() {},
    methods: {
        look(row) {
            this.$emit('setWidth')
        },
        handleSizeChange() {},
        changePage() {},
        modalIsShow() {
            this.dialogTableVisible = true
        },
        tableSelectionChange(value) {
            this.selection = value
        },
        confirm() {
            if (this.selection.length > 0 && this.selection.length < 2) {
                // this.$router.push({
                //     path: '/home/todoCenter/declaration',
                //     query: {
                //         orderNo: this.selection[0].orderNo,
                //         declarationType: this.selection[0].declarationType
                //     },
                //     params: { op: 'refresh' }
                // })
                this.dialogTableVisible = false
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
.btn {
    margin-right: 0px !important;
    margin-top: -20px;
    margin-bottom: 10px;
}
</style>
