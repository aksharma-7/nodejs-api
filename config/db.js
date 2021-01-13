const password = require('./info')

module.exports = {
    url: `mongodb+srv://dbUser:${password.password}@cluster0.xzkw3.mongodb.net/<dbname>?retryWrites=true&w=majority`
}