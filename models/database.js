const mongoose = require('mongoose');
const db_config = require('../config/database');


class Database {
  constructor() {
    this._connect()
  }
  
_connect() {
    mongoose.connect(db_config.database,{ useNewUrlParser: true, useUnifiedTopology: true }, () => {
        console.log('connected to MongoDB');
        })
       .then(() => {
         console.log('Database connection successful to Db ', db_config.database)
       })
       .catch(err => {
         console.error('Database connection error. Error details: ', err)
       })
  }
}

module.exports = new Database()


