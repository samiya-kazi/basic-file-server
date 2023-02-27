const router = require('express').Router();
const controller = require('./controllers/post.controller');

router.get('/posts', controller.getAllPosts);
router.post('/post', controller.addPost);
router.get('/file/:file', controller.getOneFile);
router.post('/file', controller.addFiles);

module.exports = router;