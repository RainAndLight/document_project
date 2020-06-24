<template>
    <div>
        <el-card v-loading="loading">
            <bread-crumb slot="header">
                <template slot="title">申报 <span style="color:#C0C4CC;margin:0 5px">></span> 申报进度</template>
            </bread-crumb>
            <div style="height:calc(80vh - 50px);over:hidden">
                <!-- <el-row> -->
                <split-pane @resize="resize" :min-percent="0" :default-percent="50" split="vertical">
                    <template slot="paneL">
                        <el-card>
                            <el-tabs v-model="activeName" @tab-click="handleClick" stretch>
                                <el-tab-pane label="季度" name="quarter">
                                    <tableModal ref="tableModal"></tableModal>
                                </el-tab-pane>
                                <el-tab-pane label="年度" name="year">
                                    <tableModal ref="tableModal"></tableModal>
                                </el-tab-pane>
                            </el-tabs>
                        </el-card>
                    </template>
                    <template slot="paneR">
                        <el-card>
                            <div :style="{ height: '40px' }">
                                <el-select
                                    @change="statusSelectChange"
                                    clearable
                                    size="mini"
                                    v-model="form.status"
                                    placeholder="状态筛选"
                                    filterable
                                    style="width:193px"
                                >
                                    <el-option clearable value="0" label="未申报"></el-option>
                                    <el-option clearable value="1" label="已提交"></el-option>
                                    <el-option clearable value="2" label="超时"></el-option>
                                </el-select>
                                <el-button style="margin-left:10px" type="primary" size="mini" @click="exportAllExcel"
                                    >合并导出为Excel</el-button
                                >
                            </div>
                            <el-table
                                height="57vh"
                                @selection-change="tableSelectionChange"
                                :data="tableData.list"
                                border
                                size="mini"
                                style="width:100%;margin-top:14px"
                            >
                                <el-table-column type="index" width="50"> </el-table-column>
                                <!-- <el-table-column type="selection" width="50"> </el-table-column> -->
                                <el-table-column
                                    v-for="(item, index) in tableData.columnList"
                                    :key="index"
                                    :align="item.center || 'center'"
                                    :width="item.width"
                                    :label="item.title"
                                    :prop="item.prop"
                                >
                                    <template slot-scope="scope">
                                        <template v-if="item.prop === 'declartionStatus'">
                                            <el-tag v-if="scope.row.declartionStatus === '0'" type="info">
                                                {{ $util.tableRowFormat(scope.row, item) }}
                                            </el-tag>
                                            <el-tag v-if="scope.row.declartionStatus === '1'" type="success">
                                                {{ $util.tableRowFormat(scope.row, item) }}
                                            </el-tag>
                                            <el-tag v-if="scope.row.declartionStatus === '2'" type="danger">
                                                {{ $util.tableRowFormat(scope.row, item) }}
                                            </el-tag>
                                        </template>
                                        <template v-else-if="item.prop === 'returnExcel'">
                                            <el-button type="primary" size="mini" @click="exportExcel(scope.row)"
                                                >导出为Excel</el-button
                                            >
                                        </template>
                                        <template v-else>{{ $util.tableRowFormat(scope.row, item) }}</template>
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
                        </el-card>
                    </template>
                </split-pane>
                <!-- <el-col :span="8" class="left">
                        <el-tabs v-model="activeName" @tab-click="handleClick" stretch>
                            <el-tab-pane label="季度" name="quarter">
                                <tableModal ref="tableModal"></tableModal>
                            </el-tab-pane>
                            <el-tab-pane label="年度" name="year">
                                <tableModal ref="tableModal"></tableModal>
                            </el-tab-pane>
                        </el-tabs>
                    </el-col>
                    <el-col :span="1">
                        <div class="middle"></div>
                    </el-col>
                    <el-col :span="15" class="right">
                        <el-select
                            @change="statusSelectChange"
                            clearable
                            size="mini"
                            v-model="form.status"
                            placeholder="状态筛选"
                            filterable
                            style="width:193px"
                        >
                            <el-option clearable value="0" label="未申报"></el-option>
                            <el-option clearable value="1" label="已提交"></el-option>
                            <el-option clearable value="2" label="超时"></el-option>
                        </el-select>
                        <el-button style="margin-left:10px" type="primary" size="mini" @click="exportAllExcel"
                            >合并导出为Excel</el-button
                        >
                        <el-table
                            height="58vh"
                            @selection-change="tableSelectionChange"
                            :data="tableData.list"
                            border
                            size="mini"
                            style="width:100%;margin-top:10px"
                        >
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
                                    <template v-if="item.prop === 'declartionStatus'">
                                        <el-tag v-if="scope.row.declartionStatus === '0'" type="info">
                                            {{ $util.tableRowFormat(scope.row, item) }}
                                        </el-tag>
                                        <el-tag v-if="scope.row.declartionStatus === '1'" type="success">
                                            {{ $util.tableRowFormat(scope.row, item) }}
                                        </el-tag>
                                        <el-tag v-if="scope.row.declartionStatus === '2'" type="danger">
                                            {{ $util.tableRowFormat(scope.row, item) }}
                                        </el-tag>
                                    </template>
                                    <template v-else-if="item.prop === 'returnExcel'">
                                        <el-button type="primary" size="mini" @click="exportExcel(scope.row)"
                                            >导出为Excel</el-button
                                        >
                                    </template>
                                    <template v-else>{{ $util.tableRowFormat(scope.row, item) }}</template>
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
                    </el-col> -->
                <!-- </el-row> -->
            </div>
        </el-card>
        <!-- <tableModal ref="tableModal"></tableModal> -->
    </div>
</template>

<script>
import tableModal from './table-modal'
import splitPane from 'vue-splitpane'
export default {
    name: '',
    props: {},
    data() {
        return {
            activeName: 'quarter',
            loading: false, // 默认不打开进度条
            page: {
                total: 0,
                pageSize: 10, // 默认每页条数为10
                currentPage: 1 // 默认页码为1
            },
            form: {
                type: '',
                status: ''
            },
            tableData: {
                columnList: [
                    {
                        title: '企业单位',
                        prop: 'company'
                    },
                    {
                        title: '申报类型',
                        prop: 'declartionType'
                    },
                    {
                        title: '申报状态',
                        prop: 'declartionStatus',
                        type: 'format',
                        format: {
                            '0': '未申报',
                            '1': '已提交',
                            '2': '超时'
                        }
                    },
                    {
                        title: '申报起止日期',
                        prop: 'declartionStartEndTime',
                        width: '200',
                        type: 'dateTime'
                    },
                    {
                        title: '操作',
                        prop: 'returnExcel',
                        width: '150'
                    }
                ],
                list: [
                    {
                        company: '中创物流',
                        declartionType: '季度',
                        declartionStatus: '0',
                        declartionStartEndTime: 'Thu Jun 18 2020 16:00:55 GMT+0800 (中国标准时间)'
                    },
                    {
                        company: '申通物流',
                        declartionType: '季度',
                        declartionStatus: '1',
                        declartionStartEndTime: 'Thu Jun 18 2020 16:00:55 GMT+0800 (中国标准时间)'
                    },
                    {
                        company: '京东物流',
                        declartionType: '季度',
                        declartionStatus: '2',
                        declartionStartEndTime: 'Thu Jun 18 2020 16:00:55 GMT+0800 (中国标准时间)'
                    },
                    {
                        company: '韵达物流',
                        declartionType: '季度',
                        declartionStatus: '1',
                        declartionStartEndTime: 'Thu Jun 18 2020 16:00:55 GMT+0800 (中国标准时间)'
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
        resize() {
            console.log('resize')
        },
        // tableRowFormat(row, item) {
        //     if (item.type === 'format') {
        //         return item.format[row[item.prop]]
        //     } else {
        //         return row[item.prop]
        //     }
        // },
        handleSizeChange() {},
        //   async getData () {
        //   this.loading = true // 打开进度条
        //   let result = await this.$axios({
        //     url: '/articles',
        //     params: { response_type: 'comment', page: this.page.currentPage, per_page: this.page.pageSize }
        //   })
        //   this.list = result.data.results
        //   this.page.total = result.data.total_count // 总条数
        //   this.loading = false
        // },
        changePage(newPage) {
            this.page.currentPage = newPage // 最新的页码
            //   this.getData()
        },
        look() {
            this.$refs.tableModal.modalIsShow()
        },
        exportExcel() {},
        exportAllExcel() {},
        timeSelectChange() {},
        statusSelectChange() {},
        tableSelectionChange() {},
        handleClick() {}
    },
    components: { tableModal, splitPane },
    filters: {
        // filterStatus(value) {
        //     //  文章状态 0-草稿，1-待审核，2-审核通过，3-审核失败，4-已删除
        //     switch (value) {
        //         case 0:
        //             return '草稿'
        //         case 1:
        //             return '待审核'
        //         case 2:
        //             return '已发表'
        //         case 3:
        //             return '审核失败'
        //         default:
        //             break
        //     }
        // }
    }
}
</script>

<style scoped lang="less">
.middle {
    width: 1px;
    height: calc(80vh - 50px);
    border-left: 1px solid #ccc;
    margin: 0 auto;
}
</style>
