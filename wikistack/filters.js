module.exports = function(swig){
 
var marked = require('marked');
var markedFilter = function (body) {
  return marked(body);
};
markedFilter.safe = true;
swig.setFilter('marked', markedFilter);

};
