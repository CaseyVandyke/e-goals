const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
//Bodyparser middleware parses to json
app.use(
    bodyParser.urlencoded({
        extended: false
    })
)
app.use(bodyParser.json)
app.use(morgan('dev'));
const port = process.env.PORT || 5000;  // process.env.port is Heroku's port if you choose to deploy the app there

app.use(cors());

const uri = process.env.ATLAS_URI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true});

const connection = mongoose.connection;
connection.once('open', () => {
    console.log("MongoDB database connection extablished successfully");
})

const goalsRouter = require('./routes/goals');
const usersRouter = require('./routes/users');

app.use('/goals', goalsRouter);
app.use('/users', usersRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});