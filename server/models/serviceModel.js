//serviceModel.js
var mongoose = require('mongoose');
var serviceSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    menu:[{
        menu_name:{
            type:String,default:""
        },
        menu_description:{
            type:String,default:""
        },
        menu_price:{
            type:Number,default:""
        }
    }],
    status: {
        type: Boolean,
        default: true
    },
    added_date: {
        type: Date,
        default: Date.now
    }
});// Export service Model
var Service = module.exports = mongoose.model('service', serviceSchema);module.exports.get = function (callback, limit) {
   Service.find(callback).limit(limit); 
}