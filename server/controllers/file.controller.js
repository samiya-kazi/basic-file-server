const File = require('../models/file.model');

async function getAllFiles (req, res) {
  try {
    res.send('getAllFiles');
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


async function postFile (req, res) {
  try {
    res.send('postFile')
  } catch (error) {
    res.status(500).send(error);
    console.log(error);
  }
}


module.exports = {
  getAllFiles,
  getOneFile,
  postFile
}
