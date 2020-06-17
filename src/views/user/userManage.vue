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
                        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
                    </div>
                </el-dialog>
            </div>
        </el-card>
    </div>
</template>

<script>
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
                    {
                        title: '用户密码',
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
        edit(row) {
            this.dialogFormVisible = true
            let obj = {
                company: row.company,
                user: row.user,
                password: row.password
            }
            this.form = obj
        },
        del(row) {}
    },
    components: {}
}
</script>

<style scoped lang="less"></style>
