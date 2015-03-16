var express = require('express');
var router = express.Router();

/* GET users listing. */
//router.get('/', function(req, res, next) {
//  res.send('respond with a resource');
//});

router.get('/', function(req, res) {
   res.render('add');
});

router.post('/submit', function(req, res) {
    var models = require('../models/');
    var title = req.body.title;
    var body = req.body.content;
    var url_name = new generateUrlName(req.body.title);
    var p = new models.Page({"title": title, "body": body, "url_name":url_name});
    p.save();
    res.redirect('/');
});

var generateUrlName = function(name) {
  if (typeof name != "undefined" && name !== "") {
    // Removes all non-alphanumeric characters from name
    // And make spaces underscore
    return name.replace(/\s/ig,"_").replace(/\W/ig,"");
  } else {
    // Generates random 5 letter string
    return Math.random().toString(36).substring(2,7);
  }
};

module.exports = router;
