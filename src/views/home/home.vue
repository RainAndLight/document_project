<template>
    <div>
        <!-- <el-calendar class="main"></el-calendar> -->
        <el-button @click="btn">测试导出</el-button>
        <div class="content">
            <p>
                您好，管理员，欢迎使用物流企业申报系统
            </p>
        </div>
    </div>
</template>

<script>
import { exportExcel } from 'xlsx-oc'
import _ from 'lodash'
import XLSX from 'xlsx'

export default {
    data() {
        return {
            excelData: [
                {
                    targetName: '货物购进总额',
                    measureUnit: '万元',
                    code: '01',
                    current: '10',
                    YOY: '5',
                    last: '50%'
                },
                {
                    targetName: '货物销售总额',
                    measureUnit: '万元',
                    code: '02',
                    current: '10',
                    YOY: '5',
                    last: '50%'
                },
                {
                    targetName: '货物运输量',
                    measureUnit: '吨',
                    code: '03',
                    current: '10',
                    YOY: '5',
                    last: '50%'
                },
                {
                    targetName: '其中：自运货运量',
                    measureUnit: '吨',
                    code: '04',
                    current: '10',
                    YOY: '5',
                    last: '50%'
                },
                {
                    targetName: '委托代理货运量',
                    measureUnit: '吨',
                    code: '05',
                    current: '10',
                    YOY: '5',
                    last: '50%'
                },
                {
                    targetName: '自运货物周转量',
                    measureUnit: '吨公里',
                    code: '06',
                    current: '10',
                    YOY: '5',
                    last: '50%'
                },
                {
                    targetName: '年末库存金额',
                    measureUnit: '万元',
                    code: '07',
                    current: '10',
                    YOY: '5',
                    last: '50%'
                },
                {
                    targetName: '自运货物平均运价',
                    measureUnit: '元/吨公里',
                    code: '08',
                    current: '10',
                    YOY: '5',
                    last: '50%'
                },
                {
                    targetName: '委托货物平均运价',
                    measureUnit: '元/吨公里',
                    code: '09',
                    current: '10',
                    YOY: '5',
                    last: '50%'
                },
                {
                    targetName: '企业物流成本',
                    measureUnit: '万元',
                    code: '10',
                    current: '10',
                    YOY: '5',
                    last: '50%'
                },
                {
                    targetName: '其中：保管成本',
                    measureUnit: '万元',
                    code: '11',
                    current: '10',
                    YOY: '5',
                    last: '50%'
                },
                {
                    targetName: '其中：利息成本',
                    measureUnit: '万元',
                    code: '12',
                    current: '10',
                    YOY: '5',
                    last: '50%'
                },
                {
                    targetName: '仓储成本',
                    measureUnit: '万元',
                    code: '13',
                    current: '10',
                    YOY: '5',
                    last: '50%'
                },
                {
                    targetName: '保险成本',
                    measureUnit: '万元',
                    code: '14',
                    current: '10',
                    YOY: '5',
                    last: '50%'
                },
                {
                    targetName: '货物损耗成本',
                    measureUnit: '万元',
                    code: '15',
                    current: '10',
                    YOY: '5',
                    last: '50%'
                },
                {
                    targetName: '信息及相关服务成本',
                    measureUnit: '万元',
                    code: '16',
                    current: '10',
                    YOY: '5',
                    last: '50%'
                },
                {
                    targetName: '配送成本',
                    measureUnit: '万元',
                    code: '17',
                    current: '10',
                    YOY: '5',
                    last: '50%'
                },
                {
                    targetName: '流通加工成本',
                    measureUnit: '万元',
                    code: '18',
                    current: '10',
                    YOY: '5',
                    last: '50%'
                },
                {
                    targetName: '包装成本',
                    measureUnit: '万元',
                    code: '19',
                    current: '10',
                    YOY: '5',
                    last: '50%'
                },
                {
                    targetName: '其他保管成本',
                    measureUnit: '万元',
                    code: '20',
                    current: '10',
                    YOY: '5',
                    last: '50%'
                },
                {
                    targetName: '管理成本',
                    measureUnit: '万元',
                    code: '21',
                    current: '10',
                    YOY: '5',
                    last: '50%'
                },
                {
                    targetName: '其中：管理人员报酬',
                    measureUnit: '万元',
                    code: '22',
                    current: '10',
                    YOY: '5',
                    last: '50%'
                },
                {
                    targetName: '办公成本',
                    measureUnit: '万元',
                    code: '23',
                    current: '10',
                    YOY: '5',
                    last: '50%'
                },
                {
                    targetName: '教育培训成本',
                    measureUnit: '万元',
                    code: '24',
                    current: '10',
                    YOY: '5',
                    last: '50%'
                },
                {
                    targetName: '劳动保险成本',
                    measureUnit: '万元',
                    code: '25',
                    current: '10',
                    YOY: '5',
                    last: '50%'
                },
                {
                    targetName: '车船使用成本',
                    measureUnit: '万元',
                    code: '26',
                    current: '10',
                    YOY: '5',
                    last: '50%'
                },
                {
                    targetName: '运输成本',
                    measureUnit: '万元',
                    code: '27',
                    current: '10',
                    YOY: '5',
                    last: '50%'
                },
                {
                    targetName: '其中：运输成本',
                    measureUnit: '万元',
                    code: '28',
                    current: '10',
                    YOY: '5',
                    last: '50%'
                },
                {
                    targetName: '装卸搬运等辅助成本',
                    measureUnit: '万元',
                    code: '29',
                    current: '10',
                    YOY: '5',
                    last: '50%'
                },
                {
                    targetName: '货运业务成本',
                    measureUnit: '万元',
                    code: '30',
                    current: '10',
                    YOY: '5',
                    last: '50%'
                },
                {
                    targetName: '运输附加费',
                    measureUnit: '万元',
                    code: '31',
                    current: '10',
                    YOY: '5',
                    last: '50%'
                },
                {
                    targetName: '其他成本',
                    measureUnit: '万元',
                    code: '32',
                    current: '10',
                    YOY: '5',
                    last: '50%'
                },
                {
                    targetName: '其中：一体化物流业务收入',
                    measureUnit: '万元',
                    code: '33',
                    current: '10',
                    YOY: '5',
                    last: '50%'
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
            // 将一个sheet转成最终的excel文件的blob对象，然后利用URL.createObjectURL下载
            function sheetblob(sheet, sheetName) {
                sheetName = sheetName || 'sheet1'
                var workbook = {
                    SheetNames: [sheetName],
                    Sheets: {}
                }
                workbook.Sheets[sheetName] = sheet
                // 生成excel的配置项
                var wopts = {
                    bookType: 'xlsx', // 要生成的文件类型
                    bookSST: false, // 是否生成Shared String Table，官方解释是，如果开启生成速度会下降，但在低版本IOS设备上有更好的兼容性
                    type: 'binary'
                }
                var wbout = XLSX.write(workbook, wopts)
                var blob = new Blob([s2ab(wbout)], { type: 'application/octet-stream' })
                // 字符串转ArrayBuffer
                function s2ab(s) {
                    var buf = new ArrayBuffer(s.length)
                    var view = new Uint8Array(buf)
                    for (var i = 0; i !== s.length; ++i) view[i] = s.charCodeAt(i) & 0xff
                    return buf
                }
                return blob
            }
            function openDownloadDialog(url, saveName) {
                if (typeof url === 'object' && url instanceof Blob) {
                    url = URL.createObjectURL(url) // 创建blob地址
                }
                var aLink = document.createElement('a')
                aLink.href = url
                aLink.download = saveName || '' // HTML5新增的属性，指定保存文件名，可以不要后缀，注意，file:///模式下不会生效
                var event
                if (window.MouseEvent) event = new MouseEvent('click')
                else {
                    event = document.createEvent('MouseEvents')
                    event.initMouseEvent(
                        'click',
                        true,
                        false,
                        window,
                        0,
                        0,
                        0,
                        0,
                        0,
                        false,
                        false,
                        false,
                        false,
                        0,
                        null
                    )
                }
                aLink.dispatchEvent(event)
            }
            // this.exportDefaultExcel()
            var aoa = [
                ['企业物流经营状况表', null, null, null, null, null],
                ['指标名称', '计量单位', '代码', '本期', '上年同期', '同比']
            ]
            let data = _.cloneDeep(this.excelData)
            data.forEach(item => {
                aoa.push(Object.values(item))
            })
            var sheet = XLSX.utils.aoa_to_sheet(aoa)
            sheet['!merges'] = [
                // 设置A1-C1的单元格合并
                { s: { r: 0, c: 0 }, e: { r: 0, c: 5 } }
            ]
            openDownloadDialog(sheetblob(sheet), '企业物流经营状况表.xlsx')
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
