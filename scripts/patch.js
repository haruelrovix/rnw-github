const fs = require('fs');

// Update .babelrc file
const babelrc = { presets: ['react-native'] };
fs.writeFile('node_modules/react-native-vector-icons/.babelrc', JSON.stringify(babelrc), 'utf8', (err) => {
  if (err) throw err;
  console.log('The file has been updated 🐺');
});
