var express = require('express');
var router = express.Router();
var model = require('../models/index');

/* GET home page. */
router.get('/', function(req, res, next) {
   model.Page.find({}, function(err, doc){
       res.render('index', { title: 'Wikistack', docs:doc });
   });
});

router.get('/wiki/:title', function(req,res,next){
   var title = req.params.title.replace(/_/g,' ');
   model.Page.findOne({ 'title':title}, 'title body', function(err,data){
	res.render('show',{page:data});
   });

});

router.get('/about_us',function(req,res,next){
   res.render('about_us');
});

module.exports = router;
