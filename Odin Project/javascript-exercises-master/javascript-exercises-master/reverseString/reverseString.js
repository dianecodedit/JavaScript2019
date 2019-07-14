const reverseString = function(str) {
    strArr = []
    strArr = str.split("")
    strArr = strArr.reverse()
    str = strArr.join("")
    return str
}

module.exports = reverseString
