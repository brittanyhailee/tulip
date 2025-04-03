## help: 

* fixed babel issues with: npm i -D @babel/core@7.16.12  
* IndexedDB with Typescript: 
  * https://javascript.plainenglish.io/working-with-indexeddb-in-typescript-react-ad504a1bdae3
* IndexedDB with typescript github:
  * https://dev.to/falcosan/indexeddb-in-typescript-1nea
* OK SO TO ADD ANOTHER FOLDER TO THE EXTENSION:
  * make sure you put the folder inside src -> pages
  * then, in webpack.config.js:
    * add another HtmlWebpackPlugin directing to that new folder and html file
  * run ```npm run build``` to rebuild the program with the updated webpack config.
  * In webpack.config.js:
    * look for entry and then add memory to that also
    * var options = {
  mode: process.env.NODE_ENV || 'development',
  var options = {
  mode: process.env.NODE_ENV || 'development',
  entry: {
    newtab: path.join(__dirname, 'src', 'pages', 'Newtab', 'index.jsx'),
    options: path.join(__dirname, 'src', 'pages', 'Options', 'index.jsx'),
    popup: path.join(__dirname, 'src', 'pages', 'Popup', 'index.jsx'),
    background: path.join(__dirname, 'src', 'pages', 'Background', 'index.js'),
    memory: path.join(__dirname, 'src', 'pages', 'Memory', 'index.jsx'),
    contentScript: path.join(__dirname, 'src', 'pages', 'Content', 'index.js'),
    devtools: path.join(__dirname, 'src', 'pages', 'Devtools', 'index.js'),
    panel: path.join(__dirname, 'src', 'pages', 'Panel', 'index.jsx'),
  },