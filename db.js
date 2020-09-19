const mongoose = require('mongoose')

mongoose.Promise = global.Promise

const db = mongoose.connect(
  'mongodb+srv://test:test@camera-cli-cluster.0nx9x.gcp.mongodb.net/cameracli?retryWrites=true&w=majority',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  }
)

const closeConnection = () => mongoose.connection.close()

module.exports = { db, closeConnection }
