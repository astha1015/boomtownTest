const express = require('express');
const cors = require('cors');
const middlewares = require('./middlewares');
const api = require('./routes');

const app = express();
const PORT=8080;

app.use(express.static(__dirname +'/client/build'));
app.use(express.json());
app.use(cors());
app.use(middlewares.setHeaders);
app.use('/github_api', api);

app.get('/', (req,res)=>{
    res.send('Welcome to Boomtown\'s Github Api!')
})

app.listen(PORT,()=>console.log(`Server started on port ${PORT}...`))