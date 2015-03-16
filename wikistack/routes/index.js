var express = require('express');
var router = express.Router();
var model = require('../models/index');

/* GET home page. */
router.get('/', function(req, res, next) {
   model.Page.find({}, function(err, doc){
       res.render('index', { title: 'Wikistack', docs:doc });
   });
});

module.exports = router;
