const timestamp = () => {
    let now = new Date()
    return now.getDate() + now.getMilliseconds()
}

const s4 = () => {
    return Math.floor((timestamp() + Math.random()) * 0x10000)
        .toString(16)
        .substring(1)
}

const generate = () => {
    return s4() + s4() + '-' + s4() + '-' + s4() + '-' + s4() + '-' + s4() + s4() + s4()
}

module.exports = { generate: generate }
