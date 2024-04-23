module.exports = app =>{
    const router = require('express').Router();
    const postController= require('../controllers/post.controller');
   
    router.post('/posts', postController.create);
    router.get('/posts', postController.findAll);
    router.delete('/posts/:id',postController.findOne);
    router.delete('/posts/:id',postController.delete);
    app.use('/api/',router);
}