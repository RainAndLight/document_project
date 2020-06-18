<template>
    <div>
        <!-- <el-calendar class="main"></el-calendar> -->
        <el-button @click="btn">导出</el-button>
        <div class="content">
            <p>
                您好，管理员，欢迎使用物流企业申报系统
            </p>
        </div>
    </div>
</template>

<script>
import { exportExcel } from 'xlsx-oc'

export default {
    data() {
        return {
            excelData: [
                {
                    targetName: '货物购进总额',
                    measureUnit: '万元',
                    code: '01',
                    current: '10',
                    YOY: '5'
                },
                {
                    targetName: '货物销售总额',
                    measureUnit: '万元',
                    code: '02',
                    current: '10',
                    YOY: '5'
                },
                {
                    targetName: '货物运输量',
                    measureUnit: '吨',
                    code: '03',
                    current: '10',
                    YOY: '5'
                },
                {
                    targetName: '其中：自运货运量',
                    measureUnit: '吨',
                    code: '04',
                    current: '10',
                    YOY: '5'
                },
                {
                    targetName: '委托代理货运量',
                    measureUnit: '吨',
                    code: '05',
                    current: '10',
                    YOY: '5'
                },
                {
                    targetName: '自运货物周转量',
                    measureUnit: '吨公里',
                    code: '06',
                    current: '10',
                    YOY: '5'
                },
                {
                    targetName: '年末库存金额',
                    measureUnit: '万元',
                    code: '07',
                    current: '10',
                    YOY: '5'
                },
                {
                    targetName: '自运货物平均运价',
                    measureUnit: '元/吨公里',
                    code: '08',
                    current: '10',
                    YOY: '5'
                },
                {
                    targetName: '委托货物平均运价',
                    measureUnit: '元/吨公里',
                    code: '09',
                    current: '10',
                    YOY: '5'
                },
                {
                    targetName: '企业物流成本',
                    measureUnit: '万元',
                    code: '10',
                    current: '10',
                    YOY: '5'
                },
                {
                    targetName: '其中：保管成本',
                    measureUnit: '万元',
                    code: '11',
                    current: '10',
                    YOY: '5'
                },
                {
                    targetName: '其中：利息成本',
                    measureUnit: '万元',
                    code: '12',
                    current: '10',
                    YOY: '5'
                },
                {
                    targetName: '仓储成本',
                    measureUnit: '万元',
                    code: '13',
                    current: '10',
                    YOY: '5'
                },
                {
                    targetName: '保险成本',
                    measureUnit: '万元',
                    code: '14',
                    current: '10',
                    YOY: '5'
                },
                {
                    targetName: '货物损耗成本',
                    measureUnit: '万元',
                    code: '15',
                    current: '10',
                    YOY: '5'
                },
                {
                    targetName: '信息及相关服务成本',
                    measureUnit: '万元',
                    code: '16',
                    current: '10',
                    YOY: '5'
                },
                {
                    targetName: '配送成本',
                    measureUnit: '万元',
                    code: '17',
                    current: '10',
                    YOY: '5'
                },
                {
                    targetName: '流通加工成本',
                    measureUnit: '万元',
                    code: '18',
                    current: '10',
                    YOY: '5'
                },
                {
                    targetName: '包装成本',
                    measureUnit: '万元',
                    code: '19',
                    current: '10',
                    YOY: '5'
                },
                {
                    targetName: '其他保管成本',
                    measureUnit: '万元',
                    code: '20',
                    current: '10',
                    YOY: '5'
                },
                {
                    targetName: '管理成本',
                    measureUnit: '万元',
                    code: '21',
                    current: '10',
                    YOY: '5'
                },
                {
                    targetName: '其中：管理人员报酬',
                    measureUnit: '万元',
                    code: '22',
                    current: '10',
                    YOY: '5'
                },
                {
                    targetName: '办公成本',
                    measureUnit: '万元',
                    code: '23',
                    current: '10',
                    YOY: '5'
                },
                {
                    targetName: '教育培训成本',
                    measureUnit: '万元',
                    code: '24',
                    current: '10',
                    YOY: '5'
                },
                {
                    targetName: '劳动保险成本',
                    measureUnit: '万元',
                    code: '25',
                    current: '10',
                    YOY: '5'
                },
                {
                    targetName: '车船使用成本',
                    measureUnit: '万元',
                    code: '26',
                    current: '10',
                    YOY: '5'
                },
                {
                    targetName: '运输成本',
                    measureUnit: '万元',
                    code: '27',
                    current: '10',
                    YOY: '5'
                },
                {
                    targetName: '其中：运输成本',
                    measureUnit: '万元',
                    code: '28',
                    current: '10',
                    YOY: '5'
                },
                {
                    targetName: '装卸搬运等辅助成本',
                    measureUnit: '万元',
                    code: '29',
                    current: '10',
                    YOY: '5'
                },
                {
                    targetName: '货运业务成本',
                    measureUnit: '万元',
                    code: '30',
                    current: '10',
                    YOY: '5'
                },
                {
                    targetName: '运输附加费',
                    measureUnit: '万元',
                    code: '31',
                    current: '10',
                    YOY: '5'
                },
                {
                    targetName: '其他成本',
                    measureUnit: '万元',
                    code: '32',
                    current: '10',
                    YOY: '5'
                },
                {
                    targetName: '其中：一体化物流业务收入',
                    measureUnit: '万元',
                    code: '33',
                    current: '10',
                    YOY: '5'
                }
            ]
        }
    },
    methods: {
        exportDefaultExcel() {
            let list = this.excelData
            let header = [
                { k: 'targetName', v: '指标名称' },
                { k: 'measureUnit', v: '计量单位' },
                { k: 'code', v: '代码' },
                { k: 'current', v: '本期' },
                { k: 'YOY', v: '上年同期' }
            ]
            let fileName = '企业物流经营状况表（年度）.xlsx'
            exportExcel(header, list, fileName)
        },
        btn() {
            this.exportDefaultExcel()
        }
    }
}
</script>

<style lang="less" scoped>
.main {
    width: 300px;
    height: 100px;
    /deep/ .el-calendar-day {
        height: auto;
    }
}
.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
    background-color: #d3dce6;
}
.content {
    display: flex;
    font-size: 24px;
    font-weight: 700;
    justify-content: center;
    // align-items: center;
    height: 80vh;
}
</style>
