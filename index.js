module.exports = function(intNumber, length) {
    let str = String(parseInt(intNumber))
    if (str.length < length) {
        return '0'.repeat(length - str.length) + str
    }
    return str
}
