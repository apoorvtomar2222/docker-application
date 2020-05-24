const mongoose = require('mongoose');
const MONGO_HOSTNAME = 'mongo';
const MONGO_PORT = '27017';
const MONGO_DB = 'docker-test';

const url = `mongodb://${MONGO_HOSTNAME}:${MONGO_PORT}/${MONGO_DB}`;

mongoose.connect(url, { useNewUrlParser: true }, (err) => {
    if (err) {
        console.log(err)
    }
    else {
        console.log('DB connected successfully!');
    }
});
