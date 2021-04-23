const express = require('express');
const app = express();
const connectDB = require('./config/db');
const cors = require('cors')


connectDB();

//Init Middleware (express requiremnet for the body parser)
app.use(express.json({extended: false}));
app.use(cors())

app.get('/', (req, res) => res.send('API running'));

app.use('/api/competitions', require('./routes/api/competition'));

app.listen(5000,function(){
    console.log('Server Started');
});