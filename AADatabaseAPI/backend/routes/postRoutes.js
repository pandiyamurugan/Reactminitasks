const express = require('express');
const router = express.Router();
const postController = require('../controllers/postController');

router.post('/posts', postController.createPost);
router.get('/getposts', postController.getPosts);
router.put('/posts/:id', postController.updatePost);
router.delete('/deletePost/:id', postController.deletePost);

module.exports = router;