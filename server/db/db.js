let mongoose = require('mongoose');
const connection = 'mongodb://localhost/hotel';
const options = {useNewUrlParser: true, useUnifiedTopology: true}
const mongo = mongoose.connect(connection, options);mongo.then(() => {
    console.log('connected');
}, error => {
    console.log(error, 'error');
}) 