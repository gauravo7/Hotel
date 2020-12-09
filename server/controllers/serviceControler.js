//Import Service Model
Service = require('../models/serviceModel');//For index
exports.index = function (req, res) {
    Service.get(function (err, service) {
        if (err)
            res.json({
                status: "error",
                message: err
            });
        res.json({
            status: "success",
            message: "Got Service Successfully!",
            service: service       
        });
    });
};
exports.add = function (req, res) {
    var service = new Service();
    service.name = req.body.name;
    service.description = req.body.description;
    service.save(function (err) {
        if (err)
            res.json(err);
            res.json({
            message: "New Service Added!",
            service: service
        });
    });
};
exports.singleview = function (req, res) {
    Service.findById(req.params.service_id, function (err, service) {
        if (err)
            res.send(err);
        res.json({
            message: 'Service Details',
            service: service
        });
    });
};
exports.update = function (req, res) {
    Service.findById(req.params.service_id, function (err, service) {
        if (err)
            res.send(err);
            if(service !=null){
                service.name = req.body.name;
                service.description = req.body.description;
                service.save(function (err) {
                    if (err)
                        res.json(err)
                    res.json({
                        message: "Service Updated Successfully",
                        service: service
                    });
                });
            }
            else{
                res.json({
                    message: "No Service Found With Id",
                    service: service
                });
            }
    });
};
exports.delete = function (req, res) {
    Service.deleteOne({
        _id: req.params.service_id
    }, function (err, contact) {
        if (err)
            res.send(err)
        res.json({
            status: "success",
            message: 'Service Deleted'+req.params.service_id
        })
    })
}
exports.notallowed = function (req, res) {
    res.status(405).json({
        status: "error",
        message: "Invalid state. Valid values are 'internal' or 'external'",
        code:352
    })
}
exports.allmenus = function (req, res) {
    Service.findById(req.params.service_id, function (err, service) {
        if (err)
            res.json({
                status: "error",
                message: err
            });
        var data=[]
            if(service!=null && service.menu!=undefined){
                data = service.menu
            }
        res.json({
            status: "success",
            message: "Got Service Successfully!",
            menus: data      
        });
    });
};
exports.addmenu = function (req, res) {
    Service.findById(req.params.service_id, function (err, service) {
        if (err)
            res.send(err);
            if(service !=null){
                var menus={}
                menus.menu_name = req.body.menu_name;
                menus.menu_description = req.body.menu_description;
                menus.menu_price = req.body.menu_price;
                service.menu.push(menus);
                service.save(function (err) {
                    if (err)
                        res.json(err)
                    res.json({
                        message: "Menu Added Successfully",
                        service: service
                    });
                });
            }
            else{
                res.json({
                    message: "No Service Found With Id",
                    service: service
                });
            }
    });

};
exports.updatemenu = function (req, res) {
    Service.findOne(
        { menu: { $elemMatch: { _id: req.params.service_id} } }
        , function (err, service) {
        if (err)
            res.send(err);
            if(service !=null){
                Service.updateOne(
                    { menu: { $elemMatch: { _id: req.params.service_id} } },
                    { $set: { 
                        "menu.$.menu_name" :req.body.menu_name,
                        "menu.$.menu_description" :req.body.menu_description,
                        "menu.$.menu_price" :req.body.menu_price } }
                ,function(e,z){                
                    res.json({
                        message: "Service Updated Successfully",
                        service: service
                    });
                    
                })
            }
            else{
                res.json({
                    message: "No Service Found With Id",
                    service: service
                });
            }
    });
};
exports.deletemenu = function (req, res) {
    Service.updateOne(
        { menu: { $elemMatch: { _id: req.params.service_id} } },
        { $pull: { "menu": { _id: req.params.service_id }   } },
        { multi: true }
    ).exec((err, abc) => {
        if (err)
            res.send(err)
        res.json({
            status: "success",
            message: 'Menu Deleted'+req.params.service_id
        })
    })
}

exports.singleviewmenu = function (req, res) {
    
    Service.findOne(
        { menu: { $elemMatch: { _id: req.params.service_id} } },
        {'menu.$':1}
        , function (err, service) {
        if (err)
            res.send(err);
        res.json({
            message: 'Single Menu  Details',
            menus: service
        });
    });
};