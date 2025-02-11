## help: 
* fixed babel issues with: npm i -D @babel/core@7.16.12  
* IndexedDB with Typescript: 
  * https://javascript.plainenglish.io/working-with-indexeddb-in-typescript-react-ad504a1bdae3
* OK SO TO ADD ANOTHER FOLDER TO THE EXTENSION:
  * make sure you put the folder inside src -> pages
  * then, in webpack.config.js:
    * add another HtmlWebpackPlugin directing to that new folder and html file
  * run ```npm run build``` to rebuild the program with the updated webpack config.