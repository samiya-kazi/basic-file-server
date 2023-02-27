const fs = require('fs');

function uploadFile (file) {
  const fileName = Date.now() + '_' + file.name;
  fs.writeFileSync('lib/' + fileName, file.data);
  return fileName;
};


module.exports = uploadFile;