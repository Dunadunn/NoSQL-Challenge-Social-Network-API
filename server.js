const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');

const PORT = process.env.PORT || 8008;
const app = express();

// Middleware for parsing JSON and urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/social-network-api', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});


mongoose.set('debug', true);

app.listen(PORT, () => {
    console.log(`App running on port ${PORT}!`);
});
