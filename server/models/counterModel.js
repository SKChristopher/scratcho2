const mongoose = require('mongoose');

const Schema = mongoose.Schema;

mongoose.connect('mongodb://chris:123@ds016298.mlab.com:16298/scratcho2', err => {
    if (err) return console.log(err);
    console.log('connected to mLabs');
});

const counterSchema = new Schema({
    name: { type: String, required: true },
    count: { type: Number },
});

const Counter = mongoose.model('Counter', counterSchema);
module.exports = Counter;
