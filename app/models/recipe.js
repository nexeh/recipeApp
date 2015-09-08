var mongoose = require('mongoose');

module.exports = mongoose.model('Recipe', {
	text : {type : String, default: ''}
});