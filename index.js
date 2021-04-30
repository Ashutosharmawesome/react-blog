const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://LuckySharma:abcd3210@cluster0.iuykj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', 
    {useNewUrlParser: true, useUnifiedTopology: true}).then(() => console.log('DB Connected'))
                            .catch(err => console.error(err));

app.get('/', (req,res)=>{
    res.send('hello world')
});

app.listen(5000);

