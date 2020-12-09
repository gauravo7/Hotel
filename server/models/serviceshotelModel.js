//serviceshotelModel.js
var mongoose = require('mongoose');//schema
var serviceshotelSchema = mongoose.Schema({
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
});// Export serviceshotel Model
var Serviceshotel = module.exports = mongoose.model('serviceshotel', serviceshotelSchema);module.exports.get = function (callback, limit) {
   Serviceshotel.find(callback).limit(limit); 
}