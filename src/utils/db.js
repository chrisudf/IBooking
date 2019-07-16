const mongoose = require('mongoose')

exports.connectToDB =() =>{
    const {DB_HOST,DB_PORT,DB_DATABASE,DB_PASSWORD, DB_USER } =process.env
    let connectionString;
    if (DB_PASSWORD && DB_USER) {
      connectionString = `mongodb+srv://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_DATABASE}?retryWrites=true`;
    } else {
      connectionString = `mongodb://${DB_HOST}:${DB_PORT}/${DB_DATABASE}`;
    }
    console.log(`Connecting to ${connectionString}`);
    mongoose.set('useFindAndModify', false);
    return mongoose.connect(connectionString, {
      useNewUrlParser: true,
      useCreateIndex: true
    })
}