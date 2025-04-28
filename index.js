const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Static files middleware - pointing to public folder
// app.use(express.static(path.join(__dirname, 'static')));
app.use('/', require(path.join(__dirname, 'routes/blog.js')));


// Start the server
app.listen(port, () => {
    console.log(`Blog app listening at http://localhost:${port}`);
});