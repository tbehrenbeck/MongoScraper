// Require mongoose
var mongoose = require("mongoose");
// Create a schema class
var Schema = mongoose.Schema;

var CommentSchema = new Schema({
  // The comment text
  body: {
    type: String
  }
});

var Comment = mongoose.model("Comment", CommentSchema);

module.exports = Comment;
