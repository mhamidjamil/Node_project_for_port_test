To build a simple Node.js web app, you can follow these steps:

Install Node.js on your computer.
Create a new folder for your project.
Open the command prompt and navigate to the folder you created.
Run the following command to create a new package.json file:
npm init
Install Express by running the following command:
npm install express --save
Create a new file called app.js in your project folder.
Add the following code to your app.js file:
const express = require('express')
const app = express()

app.get('/', (req, res) => {
res.send('Hello World!')
})

app.listen(3000, () => {
console.log('Example app listening on port 3000!')
})
Run the following command to start your server:
node app.js
Visit http://localhost:3000 in your web browser.
