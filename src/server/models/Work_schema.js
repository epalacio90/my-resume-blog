const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator')

const Schema = mongoose.Schema;

const workSchema = new Schema({
	title: { type: String, required: true },
	content: { type: String, required: true },
	color: { type: String, required: true },
	image: { type: String, required: true },
	creation_date: { type: Date, required: true, default: Date.now() },
});


workSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Work', workSchema);