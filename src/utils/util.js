let util = {}

util.tableRowFormat = function (row, item) {
    if (item.type === 'format') {
        return item.format[row[item.prop]]
    } else if (item.type === 'dateTime') {
        return row[item.prop] ? util.timestampToDateTime(row[item.prop]) : '-'
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

export default util
