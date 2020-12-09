let router = require('express').Router();
var serviceController = require('../controllers/serviceControler');


router.get('/', function(req, res) {
    res.json({
        status: 'Welcome to API',
        message: 'Welcome in / API For pratice hotel'
    });
});

router.route('/services')
    .get(serviceController.index)
    .post(serviceController.add);

router.route('/services/:service_id')
    .get(serviceController.singleview)
    .post(serviceController.notallowed)
    .patch(serviceController.update)
    .put(serviceController.update)
    .delete(serviceController.delete);

router.route('/services/menus/:service_id')
    .get(serviceController.allmenus)
    .post(serviceController.notallowed);

router.route('/services/menu/:service_id')
    .get(serviceController.singleviewmenu)
    .post(serviceController.addmenu)
    .put(serviceController.updatemenu)
    .delete(serviceController.deletemenu);

module.exports = router;