const removeFromArray = function(arr, remove) {

    var index = arr.indexOf(... remove)
    if (index > -1) {
        arr.splice(index,1)
    }
    return arr
}

module.exports = removeFromArray
