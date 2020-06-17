let util = {}
util.tableRowFormat = function (row, option) {
    if (option.type !== undefined) {
        if (option.type === 'datetime') {
            return row[option.key] ? util.formatDateTime(row[option.key]) : '-'
        }
        // else if (option.type === 'format') {
        //     return option.format[row[option.key]]
        // } else if (option.type === 'func') {
        //     return option.func(row, option.key)
        // }
    } else {
        return row[option.key]
    }
}

util.formatDateTime = function (value) {
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
