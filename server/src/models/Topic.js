// models/Topic.js
const mongoose = require('mongoose');

const topicSchema = new mongoose.Schema({
  title: String,
  description: String,
  advisor: String,
  student: String,
  deadline: Date,
});

const Topic = mongoose.model('Topic', topicSchema);

module.exports = Topic;
