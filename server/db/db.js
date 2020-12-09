let mongoose = require('mongoose');
// const connection = 'mongodb://localhost/hotel';
const connection  = 'mongodb+srv://mongodbuser:mongodbpassword@mongodbpro.crmpn.mongodb.net/mongodbpro?retryWrites=true&w=majority'
const options = {useNewUrlParser: true, useUnifiedTopology: true}
const mongo = mongoose.connect(connection, options);mongo.then(() => {
    console.log('connected');
}, error => {
    console.log(error, 'error');
}) 