const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');

const app = express();

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));


// simple route
app.get("/", (req, res) => {
    res.json({ message: "It is alive" });
});

app.use(cors());

require("./routes/employee.routes.js")(app);
require("./routes/subject.routes.js")(app);
require("./routes/studyGroup.routes.js")(app);

// set port, listen for requests
app.listen(8000, () => {
    console.log("Server is running on port 8000.");
});