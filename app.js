var express = require("express");
var app = express();
const PORT = process.env.PORT || 3000

app.listen(PORT, () => {
    console.log("Server running on port 3000");
});
app.get("/url", (req, res, next) => {
    res.json(["Tony", "Lisa", "Michael", "Ginger", "Food"]);
});
app.get("/", (req, res, next) => {
    res.render("Hello world!");
});



// var swaggerUi = require('swagger-ui-express'),
//     swaggerDocument = require('./swagger.json');

// app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
// app.use('/api/v1', app);