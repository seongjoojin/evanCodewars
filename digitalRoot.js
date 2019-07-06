/* */
function sumArray(array) {
    let count = 0
    return array.map(item => {
        count += Number(item)
        return count
    })
}

function digitalRoot(n) {
    let saveArray = sumArray(n.toString().split(''))
    while (saveArray[saveArray.length - 1].toString().split('').length !== 1) {
        saveArray = sumArray(saveArray[saveArray.length - 1].toString().split(''))
    }
    return saveArray[saveArray.length - 1]
}

export default digitalRoot;