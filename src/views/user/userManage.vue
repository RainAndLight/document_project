<template>
    <div>
        <el-card style="height:85vh">
            <bread-crumb slot="header">
                <template slot="title">账号列表</template>
            </bread-crumb>
            <div style="overflow:auto">
                <el-select
                    v-model="selectType"
                    placeholder="请选择过滤选项"
                    clearable
                    size="mini"
                    @change="selectChange"
                >
                    <el-option label="已同意" value="pass"></el-option>
                    <el-option label="已拒绝" value="no"></el-option>
                </el-select>
                <el-table
                    :data="tableData.list"
                    border
                    height="calc(60vh)"
                    highlight-current-row
                    oncontextmenu="return false;"
                    ref="table"
                    size="mini"
                    sortable="custom"
                    style="width: 100% ; marginTop:10px"
                >
                    <!-- <el-table-column type="selection" width="40" fixed></el-table-column> -->
                    <el-table-column align="center" type="index" width="50" label="序号" fixed> </el-table-column>
                    <el-table-column
                        v-for="item in tableData.columnList"
                        :align="item.align || 'center'"
                        :key="item.prop"
                        :label="item.title"
                        :prop="item.prop"
                        :width="item.width"
                    >
                        <template slot-scope="scope">{{ $util.tableRowFormat(scope.row, item) }}</template>
                    </el-table-column>
                    <el-table-column label="账号审核状态" align="center" width="100px">
                        <template slot-scope="scope">
                            <el-tag type="success" v-show="scope.row.accountFlag === 2">已同意</el-tag>
                            <el-tag type="danger" v-show="scope.row.accountFlag === 3">已拒绝</el-tag>
                        </template>
                    </el-table-column>
                    <!-- <el-table-column label="企业单位基本情况" align="center" width="200px">
                        <template slot-scope="scope">
                            <el-button type="text" size="small" @click="look(scope.row)">查看</el-button> -->
                    <!-- <el-button type="text" size="small" @click="lookHistory(scope.row)">修改历史</el-button> -->
                    <!-- </template>
                    </el-table-column> -->
                    <el-table-column label="操作" align="center">
                        <template slot-scope="scope">
                            <el-button
                                type="text"
                                style="color:#f56c6c"
                                v-if="scope.row.accountFlag === 3"
                                size="small"
                                @click="anew(scope.row)"
                                >重审</el-button
                            >
                            <el-button
                                type="text"
                                size="small"
                                @click="look(scope.row)"
                                v-if="scope.row.authority !== 'A003'"
                                >查看</el-button
                            >
                            <el-button type="text" size="small" @click="edit(scope.row)">编辑</el-button>
                            <el-button
                                v-if="scope.row.authority !== 'A003'"
                                type="text"
                                size="small"
                                @click="del(scope.row)"
                                >删除</el-button
                            >
                        </template>
                    </el-table-column>
                </el-table>
                <el-dialog title="用户账号编辑" :visible.sync="dialogFormVisible">
                    <el-form :model="form" ref="form" :rules="userRules">
                        <el-form-item label="公司全称" label-width="auto" prop="company">
                            <el-input v-model="form.company"></el-input>
                        </el-form-item>
                        <el-form-item label="用户账号" label-width="auto" prop="userName">
                            <el-input v-model="form.userName"></el-input>
                        </el-form-item>
                        <el-form-item label="用户密码" label-width="auto" prop="password">
                            <el-input v-model="form.password"></el-input>
                        </el-form-item>
                    </el-form>
                    <div slot="footer" class="dialog-footer">
                        <el-button @click="dialogFormVisible = false">取 消</el-button>
                        <el-button type="primary" @click="uploadUserInfo">修 改</el-button>
                    </div>
                </el-dialog>
                <el-pagination
                    style="position: relative;bottom: 5px;marginTop:10px"
                    @size-change="handleSizeChange"
                    :page-sizes="[5, 10, 20, 50]"
                    layout="total, sizes, prev, pager, next, jumper"
                    :current-page="page.pageNum"
                    :page-size="page.pageSize"
                    :total="tableData.total"
                    @current-change="changePage"
                >
                </el-pagination>
            </div>
        </el-card>
        <userInfoTimeLine ref="userInfoTimeLine"></userInfoTimeLine>
    </div>
</template>

<script>
import md5 from 'md5'
import userInfoTimeLine from './user-info-timeLine'
export default {
    name: 'userManage',
    props: {},
    data() {
        return {
            selectType: '',
            row: null,
            page: {
                pageNum: 1,
                pageSize: 10,
                filterList: [
                    {
                        filterKey: 'accountFlag',
                        filterValue: '2,3'
                    }
                ]
            },
            form: {
                company: '',
                userName: '',
                password: ''
            },
            userRules: {
                company: [{ required: true, message: '公司名不能为空', trigger: 'blur' }],
                userName: [{ required: true, message: '用户名不能为空', trigger: 'blur' }],
                password: [
                    { required: true, message: '密码不能为空', trigger: 'blur' },
                    { min: 6, max: 32, message: '密码长度在6-32位' }
                ]
            },
            dialogFormVisible: false,
            tableData: {
                pageNum: 1,
                pageSize: 10,
                total: 20,
                columnList: [
                    {
                        title: '公司全称',
                        prop: 'company'
                    },
                    {
                        title: '用户账号',
                        prop: 'userName'
                    },
                    {
                        title: '申请时间',
                        prop: 'createdTime',
                        // width: '150',
                        type: 'dateTime'
                    },
                    {
                        title: '审核通过时间',
                        prop: 'approveTime',
                        // width: '150',
                        type: 'dateTime'
                    }
                ],
                list: [
                    // {
                    //     company: 'test！',
                    //     authority: 'A003'
                    // },
                    // {
                    //     company: 'text1'
                    // }
                ]
            }
        }
    },
    computed: {},
    created() {
        this.getData()
    },
    mounted() {},
    watch: {},
    methods: {
        selectChange(value) {
            if (value === 'pass') {
                this.page.filterList[0].filterValue = '2'
                this.getData()
            } else if (value === 'no') {
                this.page.filterList[0].filterValue = '3'
                this.getData()
            } else {
                this.page.filterList[0].filterValue = '2,3'
                this.getData()
            }
        },
        handleSizeChange(value) {
            this.page.pageSize = value
            this.getData()
        },
        changePage(value) {
            this.page.pageNum = value
            this.getData()
        },
        getData() {
            this.$axios({
                url: '/api/user/page',
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
        edit(row) {
            this.row = row
            this.form = {
                company: row.company,
                userName: row.userName,
                password: row.password
            }
            this.dialogFormVisible = true
        },
        uploadUserInfo() {
            this.$refs.form.validate(isOK => {
                if (isOK) {
                    this.row.company = this.form.company
                    this.row.userName = this.form.userName
                    this.row.password = md5(this.form.password).toUpperCase()
                    this.$axios({
                        url: '/api/user/update',
                        method: 'post',
                        data: this.row
                    }).then(data => {
                        if (data.returnCode === 200) {
                            this.getData()
                            this.$message({
                                type: 'success',
                                message: '修改成功'
                            })
                            this.$refs.form.resetFields()
                        } else {
                            this.$message({
                                type: 'error',
                                message: data.returnMsg
                            })
                        }
                    })
                    this.dialogFormVisible = false
                }
            })
        },
        del(row) {
            this.$confirm('此操作将永久删除该用户, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            })
                .then(() => {
                    this.$axios({
                        url: '/api/user/delete',
                        method: 'delete',
                        data: row
                    }).then(data => {
                        if (data.returnCode === 200) {
                            this.getData()
                            this.$message({
                                type: 'success',
                                message: '删除成功'
                            })
                        } else {
                            this.$message({
                                type: 'error',
                                message: data.returnMsg
                            })
                        }
                    })
                })
                .catch(() => {
                    this.$message({
                        type: 'info',
                        message: '已取消删除'
                    })
                })
        },
        lookHistory(row) {
            this.$refs.userInfoTimeLine.modalIsShow()
        },
        look(row) {
            this.$router.push({
                path: '/home/user/userManage/userinfo',
                query: {
                    id: row.id
                },
                params: { op: 'refresh' }
            })
        },
        anew(row) {
            this.row = row
            this.row.accountFlag = 1
            this.$axios({
                url: '/api/user/update',
                method: 'post',
                data: this.row
            }).then(data => {
                if (data.returnCode === 200) {
                    this.getData()
                    this.$message({
                        type: 'success',
                        message: '操作成功'
                    })
                } else {
                    this.$message({
                        type: 'error',
                        message: data.returnMsg
                    })
                }
            })
        }
    },
    components: {
        userInfoTimeLine
    }
}
</script>

<style scoped lang="less"></style>
