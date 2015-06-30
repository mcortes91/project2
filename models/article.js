var mongoose = require('mongoose')
    Schema   = mongoose.Schema;

var articleSchema = Schema({
    author: String,
    title: { type: String, required: true },
    overview: String,
    history: String,
    rules: String
});

var Article = mongoose.model("Article", articleSchema);

module.exports = Article;