const uuid = require('../lib/uuid-generate.js')

setInterval(() => {
    console.log(uuid.generate())
}, 500)
