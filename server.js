const express = require('express');
const data = require('./dataBase/data');
const app = express();
const bodyParser = require('body-parser');


app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
    next()
});

app.get('/', (req, res) => res.send('API running'));

app.use(bodyParser.json());

//API
const authRouter = require('./routes/Auth');
app.use('/api/auth', authRouter);


const PORT = process.env.PORT || 3400;

app.listen(PORT, () => console.log(`Server started on port ${PORT} `));