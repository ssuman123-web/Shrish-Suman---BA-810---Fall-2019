'use strict'

var express = require('express'),

    router = express.Router(),

    logger = require('../../config/logger'),

    mongoose = require('mongoose'),

    Todo = mongoose.model('todos');



module.exports = function(app, config) {

    app.use('/api', router); //middleware that installs the router all routes will go below here in this loop only 

    router.route('/todos').get((req, res, next) => {

        logger.log('info', 'Get all todos');



        var query = Todo.find()

        .sort(req.query.order)

        .exec()

        .then(result => {

            if (result && result.length) {

                res.status(200).json(result);

            } else {

                res.status(404).json({ message: "No todos" });

            }

        })

        .catch(err => {

            return next(err);

        });



    });



    router.route('/todos/user/:id').get((req, res, next) => {

        logger.log('info', 'Get all user todos', req.params.id);

        var query = Todo.find()

        .sort(req.query.order)

        .exec()

        .then(result => {

            if (result && result.length) {

                res.status(200).json(result);

            } else {

                res.status(404).json({ message: "No todos" });

            }

        })

        .catch(err => {

            return next(err);

        });



    });



    router.route('/todos/:id').get((req, res, next) => {

        logger.log('info', 'Get todo %s', req.params.id);



        Todo.findById(req.params.id)

        .then(user => {

            if (user) {

                res.status(200).json(user);

            } else {

                res.status(404).json({ message: "No Todos found" });

            }

        })

        .catch(error => {

            return next(error);

        });



    });



    router.route('/todos/:id').put((req, res, next) => {

        logger.log('info', 'Get Todo %s', req.params.id);



        Todo.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, multi: false })

        .then(Todo => {

            res.status(200).json(Todo);

        })

        .catch(error => {

            return next(error);

        });



    });

    router.route('/todos').post((req, res, next) => {

        logger.log('info', 'Create Todo');



        var todo = new Todo(req.body);

        todo.save()

        .then(result => {

            res.status(201).json(result);

        })

        .catch((err) => {

            return next(err);

        });



    });



    router.route('/todos/login').post((req, res, next) => {

        logger.log('info', '%s logging in', req.body.email);

        var email = req.body.email

        var password = req.body.password;



        var obj = { 'email': email, 'password': password };

        res.status(201).json(obj);

    });



    router.route('/Todos/:id').delete((req, res, next) => {

        logger.log('info', 'Get Todo %s', req.params.id);



        Todo.remove({ _id: req.params.id })

        .then(Todo => {

            res.status(200).json({ msg: "Todo Deleted" });

        })

        .catch(error => {

            return next(error);

        });

    });



};