const router = require('express').Router();
const controller = require('./controllers/file.controller');

router.get('/files', controller.getAllFiles);
router.get('/file/:file', controller.getOneFile);
router.post('/file', controller.postFile);

module.exports = router;