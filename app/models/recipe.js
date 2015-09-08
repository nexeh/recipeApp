var mongoose = require('mongoose');

mongoose.set('debug', true);

module.exports = mongoose.model('Recipe', {
	title : { type : String, default: ''},
    description: { type : String, default: ''},
    ingredients: { type : Array, default: []},
    process: { type : Array, default: []},
    favorite: { type: Boolean, default: false}

    // Nutrition facts
    // preptime, cook time, serves
    // category: desert, dinner. ect
});