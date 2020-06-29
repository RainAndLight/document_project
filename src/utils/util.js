let util = {}

util.tableRowFormat = function (row, item) {
    if (item.type === 'format') {
        return item.format[row[item.prop]]
    } else if (item.type === 'dateTime') {
        return row[item.prop] ? util.timestampToDateTime(row[item.prop]) : '-'
    } else if (item.type === 'listDateTime') {
        return row[item.prop] ? util.listDateTime(row[item.prop]) : '-'
    } else if (item.type === 'func') {
        return item.func(row, item.prop)
    } else {
        return row[item.prop]
    }
}
util.timestampToDateTime = function (value) {
    function add0(m) {
        return m < 10 ? '0' + m : m
    }
    if (!value) {
        return ''
    } else {
        var datetime = new Date(value)
        let y = datetime.getFullYear()
        let m = datetime.getMonth() + 1
        let d = datetime.getDate()
        let h = datetime.getHours()
        let mm = datetime.getMinutes()
        let s = datetime.getUTCSeconds()
        return y + '-' + add0(m) + '-' + add0(d) + ' ' + add0(h) + ':' + add0(mm) + ':' + add0(s)
    }
}
util.listDateTime = function (value) {
    function add0(m) {
        return m < 10 ? '0' + m : m
    }
    if (!value) {
        return ''
    } else {
        var datetime = new Date(value[0])
        let y = datetime.getFullYear()
        let m = datetime.getMonth() + 1
        let d = datetime.getDate()
        let listOne = y + '-' + add0(m) + '-' + add0(d)
        var datetime1 = new Date(value[1])
        let y1 = datetime1.getFullYear()
        let m1 = datetime1.getMonth() + 1
        let d1 = datetime1.getDate()
        let listTwo = y1 + '-' + add0(m1) + '-' + add0(d1)
        return listOne + ' 至 ' + listTwo
    }
}

export default util
