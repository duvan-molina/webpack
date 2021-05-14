const path = require("path");

module.exports = {
  // punto de entrada de la aplicación
  entry: './src/index.js',
  // hacia donde va a ir la aplicación
  output: {
    // en donde se encuentra el proyecto
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
  resolve: {
    extensions: ['.js']
  }
}