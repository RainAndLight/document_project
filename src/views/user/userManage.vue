<template>
    <div>
        <el-card>
            <bread-crumb slot="header">
                <template slot="title">账号列表</template>
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
                    <!-- <el-table-column type="selection" width="40" fixed></el-table-column> -->
                    <el-table-column align="center" type="index" width="50" label="序号" fixed> </el-table-column>
                    <el-table-column
                        v-for="item in tableData.columnList"
                        :align="item.align || 'center'"
                        :key="item.prop"
                        :label="item.title"
                        :prop="item.prop"
                        :width="item.width || '150'"
                    >
                        <template slot-scope="scope">{{ $util.tableRowFormat(scope.row, item) }}</template>
                    </el-table-column>
                    <el-table-column label="企业单位基本情况" align="center" width="200px">
                        <template slot-scope="scope">
                            <el-button type="text" size="small" @click="look(scope.row)">查看</el-button>
                            <el-button type="text" size="small" @click="lookHistory(scope.row)">修改历史</el-button>
                        </template>
                    </el-table-column>
                    <el-table-column label="操作" align="center">
                        <template slot-scope="scope">
                            <el-button type="text" size="small" @click="edit(scope.row)">编辑</el-button>
                            <el-button type="text" size="small" @click="del(scope.row)">删除</el-button>
                        </template>
                    </el-table-column>
                </el-table>
                <el-dialog title="用户账号编辑" :visible.sync="dialogFormVisible">
                    <el-form :model="form">
                        <el-form-item label="公司全称" label-width="auto">
                            <el-input v-model="form.company"></el-input>
                        </el-form-item>
                        <el-form-item label="用户账号" label-width="auto">
                            <el-input v-model="form.user"></el-input>
                        </el-form-item>
                        <el-form-item label="用户密码" label-width="auto">
                            <el-input v-model="form.password"></el-input>
                        </el-form-item>
                    </el-form>
                    <div slot="footer" class="dialog-footer">
                        <el-button @click="dialogFormVisible = false">取 消</el-button>
                        <el-button type="primary" @click="dialogFormVisible = false">修 改</el-button>
                    </div>
                </el-dialog>
            </div>
        </el-card>
        <userInfoTimeLine ref="userInfoTimeLine"></userInfoTimeLine>
    </div>
</template>

<script>
import userInfoTimeLine from './user-info-timeLine'
export default {
    name: 'userManage',
    props: {},
    data() {
        return {
            form: {
                company: '',
                user: '',
                password: ''
            },
            dialogFormVisible: false,
            tableData: {
                columnList: [
                    {
                        title: '公司全称',
                        prop: 'company'
                    },
                    {
                        title: '用户账号',
                        prop: 'user'
                    },
                    // {
                    //     title: '用户密码',
                    //     prop: 'password'
                    // },
                    {
                        title: '申请时间',
                        prop: 'applyTime',
                        width: '200',
                        type: 'dateTime'
                    },
                    {
                        title: '审核通过时间',
                        prop: 'passTime',
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
                    },
                    {
                        company: '京东物流有限公司',
                        user: 'jdadmin',
                        password: '123456',
                        applyTime: 'Fri Jun 05 2020 00:00:00 GMT+0800 (中国标准时间)',
                        passTime: 'Fri Jun 05 2020 00:00:00 GMT+0800 (中国标准时间)'
                    },
                    {
                        company: '顺丰物流有限公司',
                        user: 'sfadmin',
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
        edit(row) {
            this.dialogFormVisible = true
            let obj = {
                company: row.company,
                user: row.user,
                password: row.password
            }
            this.form = obj
        },
        del(row) {},
        lookHistory(row) {
            this.$refs.userInfoTimeLine.modalIsShow()
        },
        look() {
            this.$router.push({
                path: '/home/user/userManage/userinfo',
                query: {},
                params: { op: 'refresh' }
            })
        }
    },
    components: {
        userInfoTimeLine
    }
}
</script>

<style scoped lang="less"></style>
