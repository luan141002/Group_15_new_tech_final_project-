// routes/topicRoutes.js
const express = require('express');
const router = express.Router();
const topicController = require('../controllers/topicController');

router.get('/topics', topicController.getAllTopics);
router.post('/topics', topicController.createTopic);
router.put('/topics/:id', topicController.updateTopic);
router.delete('/topics/:id', topicController.deleteTopic);

module.exports = router;
