<template>
    <div>
        <el-card>
            <bread-crumb slot="header">
                <template slot="title">申报 > 操作</template>
            </bread-crumb>
            <div style="height:calc(80vh - 50px);overflow:auto">
                <div class="header">
                    <el-button size="mini" type="primary" @click="modalIsShow = true">设置申报起止时间</el-button>
                </div>
                <el-table :data="tableData.list" border size="mini" style="width:100% ;marginTop:10px">
                    <el-table-column type="index" width="50"> </el-table-column>
                    <el-table-column
                        v-for="(item, index) in tableData.columnList"
                        :key="index"
                        :align="item.center || 'center'"
                        :width="item.width || '100'"
                        :label="item.title"
                        :prop="item.prop"
                    >
                    </el-table-column>
                    <el-table-column label="操作" align="center">
                        <template slot-scope="scope">
                            <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                            <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)"
                                >删除</el-button
                            >
                        </template>
                    </el-table-column>
                </el-table>
            </div>
        </el-card>
        <el-dialog title="设置申报起止时间" :visible.sync="modalIsShow">
            <el-form ref="form" :model="form" label-width="120px" class="modal">
                <el-form-item label="选择申报类型">
                    <el-select v-model="form.declartionType" placeholder="请选择申报类型">
                        <el-option label="季度" value="month"></el-option>
                        <el-option label="年度" value="year"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="申报内容时间">
                    <el-date-picker
                        v-model="form.declartionStartEndTime"
                        type="daterange"
                        align="right"
                        unlink-panels
                        range-separator="至"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期"
                        :picker-options="pickerOptions"
                    >
                    </el-date-picker>
                </el-form-item>
                <el-form-item label="申报填写时间">
                    <el-date-picker
                        v-model="form.declartionWriteTime"
                        type="daterange"
                        align="right"
                        unlink-panels
                        range-separator="至"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期"
                    >
                    </el-date-picker>
                </el-form-item>
                <el-form-item label="申报填写时间">
                    <el-date-picker v-model="form.declartionStartTime" type="date" placeholder="选择日期">
                    </el-date-picker>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="modalIsShow = false">取 消</el-button>
                <el-button type="primary" @click="modalIsShow = false">设 定</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
export default {
    name: 'declartion-operate',
    props: {},
    data() {
        return {
            modalIsShow: false,
            form: {
                declartionType: '',
                declartionStartEndTime: [
                    // 'Fri Jun 05 2020 00:00:00 GMT+0800 (中国标准时间)',
                    // 'Fri Jun 12 2020 00:00:00 GMT+0800 (中国标准时间)'
                ],
                declartionWriteTime: [
                    // 'Fri Jun 05 2020 00:00:00 GMT+0800 (中国标准时间)',
                    // 'Fri Jun 12 2020 00:00:00 GMT+0800 (中国标准时间)'
                ]
            },
            tableData: {
                columnList: [
                    {
                        title: '申报类型',
                        prop: 'declartionType'
                    },
                    {
                        title: '申报发起时间',
                        prop: 'declartionStartTime'
                    },
                    {
                        title: '申报内容时间',
                        prop: 'declartionStartEndTime',
                        width: '200'
                    },
                    {
                        title: '申报填写时间',
                        prop: 'declartionWriteTime',
                        width: '200'
                    },
                    {
                        title: '申报发起人',
                        prop: 'originPerson'
                    }
                ],
                list: [
                    {
                        declartionType: '季度',
                        declartionStartTime: '2020-6-1',
                        declartionStartEndTime: '2020-1-1 至 2020-4-1',
                        declartionWriteTime: '2020-6-1 至 2020-6-30',
                        originPerson: '管理员'
                    },
                    {
                        declartionType: '年度',
                        declartionStartTime: '2020-1-1',
                        declartionStartEndTime: '2020-1-1 至 2020-4-1',
                        declartionWriteTime: '2020-6-1 至 2020-6-30',
                        originPerson: '管理员'
                    }
                ]
            },
            pickerOptions: {
                shortcuts: [
                    {
                        text: '最近三个月',
                        onClick(picker) {
                            const end = new Date()
                            const start = new Date()
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 90)
                            picker.$emit('pick', [start, end])
                        }
                    },
                    {
                        text: '最近一年',
                        onClick(picker) {
                            const end = new Date()
                            const start = new Date()
                            start.setTime(start.getTime() - 3600 * 1000 * 24 * 365)
                            picker.$emit('pick', [start, end])
                        }
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
        handleEdit(index, row) {
            console.log(row, 'row')

            this.modalIsShow = true
            this.form.declartionType = row.declartionType
            this.form.declartionStartEndTime = row.declartionStartEndTime
            this.form.declartionWriteTime = row.declartionWriteTime
        },
        handleDelete() {}
    },
    components: {}
}
</script>

<style scoped lang="less">
.modal /deep/ .el-date-editor {
    // width: 100%;
}
</style>
