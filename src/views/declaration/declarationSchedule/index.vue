<template>
    <div>
        <el-card v-loading="loading">
            <bread-crumb slot="header">
                <template slot="title">申报 <span style="color:#C0C4CC;margin:0 5px">></span> 申报进度</template>
            </bread-crumb>
            <div style="height:calc(80vh - 50px);overflow:auto">
                <div>
                    <el-button type="primary" size="mini" style="margin-right:10px" @click="look"
                        >选择一条申报查看</el-button
                    >
                    <el-select
                        @change="statusSelectChange"
                        clearable
                        size="mini"
                        v-model="form.status"
                        placeholder="状态筛选"
                        filterable
                        style="width:193px;margin-right:10px"
                    >
                        <el-option clearable value="0" label="未申报"></el-option>
                        <el-option clearable value="1" label="申报中"></el-option>
                        <el-option clearable value="2" label="已经保存"></el-option>
                        <el-option clearable value="3" label="已提交"></el-option>
                    </el-select>
                    <el-button type="primary" size="mini" click="export">导出为Excel</el-button>
                </div>
                <div>
                    <el-table
                        height="calc(100vh - 260px)"
                        @selection-change="tableSelectionChange"
                        :data="tableData.list"
                        border
                        size="mini"
                        style="width:100%;margin-top:10px"
                    >
                        <el-table-column type="index" width="50"> </el-table-column>
                        <el-table-column type="selection" width="55"> </el-table-column>
                        <el-table-column
                            v-for="(item, index) in tableData.columnList"
                            :key="index"
                            :align="item.center || 'center'"
                            :width="item.width || '100'"
                            :label="item.title"
                            :prop="item.prop"
                        >
                        </el-table-column>
                    </el-table>
                </div>
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
        <tableModal ref="tableModal"></tableModal>
    </div>
</template>

<script>
import tableModal from './table-modal'
export default {
    name: '',
    props: {},
    data() {
        return {
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
                        prop: 'declartionStatus'
                    },
                    {
                        title: '申报起止日期',
                        prop: 'declartionStartEndTime',
                        width: '200'
                    }
                ],
                list: [
                    {
                        company: '中创物流',
                        declartionType: '季度',
                        declartionStatus: '未申报',
                        declartionStartEndTime: '2020-6-1 —— 2020-6-10'
                    },
                    {
                        company: '申通物流',
                        declartionType: '季度',
                        declartionStatus: '申报中',
                        declartionStartEndTime: '2020-6-1 —— 2020-6-10'
                    },
                    {
                        company: '京东物流',
                        declartionType: '年度',
                        declartionStatus: '超时',
                        declartionStartEndTime: '2020-6-1 —— 2020-6-10'
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
        export() {},
        timeSelectChange() {},
        statusSelectChange() {},
        tableSelectionChange() {}
    },
    components: { tableModal },
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

<style scoped lang="less"></style>
