// controllers/topicController.js
const Topic = require('../models/Topic');

exports.getAllTopics = async (req, res) => {
  try {
    const topics = await Topic.find();
    res.json(topics);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.createTopic = async (req, res) => {
  const { title, description, advisor, student, deadline } = req.body;

  try {
    const newTopic = new Topic({
      title,
      description,
      advisor,
      student,
      deadline,
    });

    const savedTopic = await newTopic.save();
    res.json(savedTopic);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.updateTopic = async (req, res) => {
  const { id } = req.params;
  const { title, description, advisor, student, deadline } = req.body;

  try {
    const updatedTopic = await Topic.findByIdAndUpdate(
      id,
      {
        title,
        description,
        advisor,
        student,
        deadline,
      },
      { new: true }
    );

    res.json(updatedTopic);
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.deleteTopic = async (req, res) => {
  const { id } = req.params;

  try {
    await Topic.findByIdAndDelete(id);
    res.json({ message: 'Topic deleted successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
