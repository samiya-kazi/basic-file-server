const fs = require('fs');
const path = require('path');


const mimeTypes = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'application/image/svg+xml',
  '.pdf': 'application/pdf'
};


function uploadFile (file) {
  const fileName = Date.now() + '_' + file.name;
  fs.writeFileSync('lib/' + fileName, file.data);
  return fileName;
};


function getMimeType (fileName) {
  const extname = path.extname(fileName).toLowerCase();
  return mimeTypes[extname];
}


module.exports = {getMimeType, uploadFile};