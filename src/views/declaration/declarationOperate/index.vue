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
                        <template slot-scope="scope">
                            <template v-if="item.prop === 'declartionStatus'">
                                <el-tag v-if="scope.row.declartionStatus === '0'" type="info">
                                    {{ $util.tableRowFormat(scope.row, item) }}
                                </el-tag>
                                <el-tag v-if="scope.row.declartionStatus === '1'">
                                    {{ $util.tableRowFormat(scope.row, item) }}
                                </el-tag>
                                <el-tag v-if="scope.row.declartionStatus === '2'" type="success">
                                    {{ $util.tableRowFormat(scope.row, item) }}
                                </el-tag>
                            </template>
                            <template v-else>{{ $util.tableRowFormat(scope.row, item) }}</template>
                        </template>
                    </el-table-column>
                    <el-table-column label="操作" align="center">
                        <template slot-scope="scope">
                            <el-button
                                size="mini"
                                :disabled="scope.row.declartionStatus !== '0'"
                                @click="handleEdit(scope.$index, scope.row)"
                                >编辑</el-button
                            >
                            <el-button
                                size="mini"
                                :disabled="scope.row.declartionStatus !== '0'"
                                type="danger"
                                @click="handleDelete(scope.$index, scope.row)"
                                >删除</el-button
                            >
                        </template>
                    </el-table-column>
                </el-table>
            </div>
        </el-card>
        <el-dialog title="设置申报起止时间" :visible.sync="modalIsShow">
            <el-form ref="form" :model="form" label-width="120px" class="modal" :rules="rules">
                <el-form-item label="选择申报类型" prop="declartionType">
                    <el-select v-model="form.declartionType" placeholder="请选择申报类型">
                        <el-option label="季度" value="month"></el-option>
                        <el-option label="年度" value="year"></el-option>
                    </el-select>
                </el-form-item>
                <el-form-item label="报表周期" prop="declartionStartEndTime">
                    <el-date-picker
                        v-model="form.declartionStartEndTime"
                        type="daterange"
                        align="right"
                        unlink-panels
                        range-separator="-"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期"
                        :picker-options="pickerOptions"
                    >
                    </el-date-picker>
                </el-form-item>
                <el-form-item label="申报填写时间" prop="declartionWriteTime">
                    <el-date-picker
                        v-model="form.declartionWriteTime"
                        type="daterange"
                        align="right"
                        unlink-panels
                        range-separator="-"
                        start-placeholder="开始日期"
                        end-placeholder="结束日期"
                    >
                    </el-date-picker>
                </el-form-item>
                <!-- <el-form-item label="申报填写时间">
                    <el-date-picker v-model="form.declartionStartTime" type="date" placeholder="选择日期">
                    </el-date-picker>
                </el-form-item> -->
            </el-form>
            <div slot="footer" class="dialog-footer">
                <el-button @click="modalIsShow = false">取 消</el-button>
                <el-button type="primary" @click="confirm">设 定</el-button>
            </div>
        </el-dialog>
        <el-dialog title="提示" :visible.sync="handleDeleteMoadl" width="30%">
            <span>您确定删除此条数据吗？一旦删除，数据不可恢复</span>
            <span slot="footer" class="dialog-footer">
                <el-button @click="handleDeleteMoadl = false">取 消</el-button>
                <el-button type="primary" @click="deleteData">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
export default {
    name: 'declartion-operate',
    props: {},
    data() {
        return {
            delrow: null,
            handleDeleteMoadl: false,
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
            rules: {
                declartionType: [{ required: true, message: '请选择申报类型', trigger: 'change' }],
                declartionStartEndTime: [{ required: true, message: '请选择报表周期', trigger: 'blur' }],
                declartionWriteTime: [{ required: true, message: '请选择申报填写时间', trigger: 'blur' }]
            },
            tableData: {
                columnList: [
                    {
                        title: '申报类型',
                        prop: 'declartionType'
                    },
                    // {
                    //     title: '申报发起时间',
                    //     prop: 'declartionStartTime'
                    // },
                    {
                        title: '报表周期',
                        prop: 'declartionStartEndTime',
                        width: '200',
                        type: 'listDateTime'
                    },
                    {
                        title: '申报填写时间',
                        prop: 'declartionWriteTime',
                        width: '200',
                        type: 'listDateTime'
                    },
                    {
                        title: '申报状态',
                        prop: 'declartionStatus',
                        type: 'format',
                        width: '150',
                        format: {
                            '0': '申报未开始',
                            '1': '申报正在进行中',
                            '2': '申报已结束'
                        }
                    }
                ],
                list: [
                    {
                        declartionType: '季度',
                        declartionStartTime: '2020-6-1',
                        declartionStartEndTime: ['2020-06-01T16:00:00.000Z', '2020-06-03T15:59:59.000Z'],
                        declartionWriteTime: ['2020-06-01T16:00:00.000Z', '2020-06-03T15:59:59.000Z'],
                        originPerson: '管理员',
                        declartionStatus: '0'
                    },
                    {
                        declartionType: '年度',
                        declartionStartTime: '2020-1-1',
                        declartionStartEndTime: ['2020-06-01T16:00:00.000Z', '2020-06-03T15:59:59.000Z'],
                        declartionWriteTime: ['2020-06-01T16:00:00.000Z', '2020-06-03T15:59:59.000Z'],
                        originPerson: '管理员',
                        declartionStatus: '1'
                    },
                    {
                        declartionType: '年度',
                        declartionStartTime: '2020-1-1',
                        declartionStartEndTime: ['2020-06-01T16:00:00.000Z', '2020-06-03T15:59:59.000Z'],
                        declartionWriteTime: ['2020-06-01T16:00:00.000Z', '2020-06-03T15:59:59.000Z'],
                        originPerson: '管理员',
                        declartionStatus: '2'
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
        confirm() {
            this.$refs.form.validate(valid => {
                if (valid) {
                    // this.getData()
                    this.$message({
                        type: 'success',
                        message: '设定成功'
                    })
                    this.modalIsShow = false
                }
            })
        },
        handleEdit(index, row) {
            // console.log(row, 'row')
            this.modalIsShow = true
            this.form.declartionType = row.declartionType
            this.form.declartionStartEndTime = row.declartionStartEndTime
            this.form.declartionWriteTime = row.declartionWriteTime
        },
        handleDelete(index, row) {
            this.handleDeleteMoadl = true
            this.delrow = row
        },
        deleteData() {
            this.handleDeleteMoadl = false
            this.$message({
                type: 'success',
                message: '删除成功'
            })
        }
    },
    components: {}
}
</script>

<style scoped lang="less"></style>
