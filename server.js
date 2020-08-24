const express = require("express");


// tells node we are creating an express server
const app = express();

// sets initial port
var PORT = process.env.PORT || 8080;


// listener to start server
app.listen(PORT, function () {
    console.log("App listening to PORT: " + PORT);
})