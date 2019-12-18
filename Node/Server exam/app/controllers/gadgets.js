var express = require('express'),
    router = express.Router(),
    logger = require('../../config/logger'),
    mongoose = require('mongoose'),
    Gadget = mongoose.model('gadgets');

module.exports = function(app, config) {
    app.use('/api', router); //middleware that installs the router all routes will go below here in this loop only 
    router.route('/gadgets').get((req, res, next) => {
        logger.log('info', 'Get all gadgets');
        var query = Gadget.find()
            .sort(req.query.order)
            .exec()
            .then(result => {
                if (result && result.length) {
                    res.status(200).json(result);
                } else {
                    res.status(404).json({ message: "No Gadgets" });
                }
            })
            .catch(err => {
                return next(err);
            });

    });
    router.route('/gadgets').post((req, res, next) => {
        logger.log('info', 'Create Gadget');

        var gadget = new Gadget(req.body);
        gadget.save()
            .then(result => {
                res.status(201).json(result);
            })
            .catch((err) => {
                return next(err);
            });

    });
    ////router.route('/widgets/login').post((req, res, next) => {
    //logger.log('info', '%s logging in', req.body.email);
    // var foo = req.body.foo
    // var woo = req.body.woo;

    //var obj = { 'email': email, 'password': password };
    //res.status(201).json(obj);
    //});

    router.route('/gadgets/:id').get((req, res, next) => {
        logger.log('info', 'Get gadget %s', req.params.id);

        Gadget.findById(req.params.id)
            .then(gadget => {
                if (gadget) {
                    res.status(200).json(gadget);
                } else {
                    res.status(404).json({ message: "No gadget found" });
                }
            })
            .catch(error => {
                return next(error);
            });
    });
    router.route('/gadgets/:id').put((req, res, next) => {
        logger.log('info', 'Get gadget %s', req.params.id);

        Gadget.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, multi: false })
            .then(gadget => {
                res.status(200).json(gadget);
            })
            .catch(error => {
                return next(error);
            });


    });

    router.route('/gadgets/:id').delete((req, res, next) => {
        logger.log('info', 'Get gadget %s', req.params.id);

        Gadget.remove({ _id: req.params.id })
            .then(widget => {
                res.status(200).json({ msg: "Gadget Deleted" });
            })
            .catch(error => {
                return next(error);
            });
    });
};