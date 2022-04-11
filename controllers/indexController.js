const path = require('path')
class IndexController {
    index(req, res) {
        res.sendFile(path.resolve(__dirname, '../index.html'))
    }
}

module.exports = new IndexController()
