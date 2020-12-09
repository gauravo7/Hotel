let express = require('express')
let app = express();

var startport = 81;
app.listen(startport, function() {
    console.log("Hotel System On Express"+ startport);
})

let bodyparseexpress = require('body-parser');
app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);
    // Pass to next layer of middleware
    next();
});
app.use(bodyparseexpress.urlencoded({
    extended: true
}));
app.use(bodyparseexpress.json());
let apiRoutes = require("./routes/routes")
app.use('/api', apiRoutes)

let db = require("./db/db")
