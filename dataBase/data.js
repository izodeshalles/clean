const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to dataBase..')
    })
    .catch(() => {

        console.log('Connexion failed..')
    })