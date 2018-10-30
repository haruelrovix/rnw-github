const fs = require('fs');

// Update .babelrc file
fs.copyFile('.babelrc', 'node_modules/react-native-vector-icons/.babelrc', (err) => {
  if (err) throw err;
  console.log('The file has been copied 🐺');
});
