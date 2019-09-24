var express = require("express");
var app = express();
var router = express.Router()
const PORT = process.env.PORT || 3000

// app.listen(PORT, () => {
//     console.log("Server running on port 3000");
// });
app.get("/test", (req, res, next) => {
    res.json(["Tony", "Lisa", "Michael", "Ginger", "Food"]);
});
app.get("/", (req, res, next) => {
    res.send("Hello world!");
});

// middleware that is specific to this router
// router.use(function timeLog (req, res, next) {
//     console.log('Time: ', Date.now())
//     next()
//   })
//   // define the home page route
//   router.get('/', function (req, res) {
//     res.send('Birds home page')
//   })
//   // define the about route
//   router.get('/about', function (req, res) {
//     res.send('About birds')
//   })

//   app.use('/birds', router)

var swaggerUi = require('swagger-ui-express'),
    swaggerDocument = require('./swagger.json');
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/api/v1', router);


app.listen(PORT, () => {
    console.log("Server running on port 3000");
});