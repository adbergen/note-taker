const express = require("express");


// tells node we are creating an express server
const app = express();

// sets initial port
var PORT = process.env.PORT || 8080;

// handle parsing
app.use(express.static("./public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// listener to start server
app.listen(PORT, function () {
    console.log("App listening to PORT: " + PORT);
})