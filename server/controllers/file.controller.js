const Post = require('../models/post.model');
const uploadFile = require('../util/fileUpload');

async function getAllPosts (req, res) {
  try {
    const posts = await Post.find({});
    res.send(posts);
    res.send('getAllPosts');
  } catch (error) {
    res.status(500).send(error);
    console.log(error);
  }
}


async function getOneFile (req, res) {
  try {
    res.send('getOneFile')
  } catch (error) {
    res.status(500).send(error);
    console.log(error);
  }
}


async function addPost (req, res) {
  try {
    const { title, description, fileNames } = req.body;
    if (title && description && fileNames) {
      const newPost = await Post.create({title, description, fileNames});
      res.status(201).send(newPost);
    } else {
      res.status(400).send('Invalid inputs');
    }
  } catch (error) {
    res.status(500).send(error);
    console.log(error);
  }
}


async function addFiles (req, res) {
  try {

    if(req.files) {
      const fileNames = [];
      if (Array.isArray(req.files.file)) {
        req.files.file.forEach(file => {
          fileNames.push(uploadFile(file));
        });
      } else {
        fileNames.push(uploadFile(req.files.file));
      }

      res.status(201).send({fileNames});
    } else {
      res.status(401).send('Did not get files');
    }
  } catch (error) {
    res.status(500).send(error);
    console.log(error);
  }
}


module.exports = {
  getAllPosts,
  getOneFile,
  addPost,
  addFiles
}
