var mongoose = require('mongoose')
    Schema   = mongoose.Schema;

var articleSchema = Schema({
    author: String,
    title: { type: String, required: true },
    overview: String,
    history: String,
    rules: String,
    desc: String,
    created_at: { type: Date, default: Date.now }
});

var Article = mongoose.model("Article", articleSchema);

module.exports = Article;