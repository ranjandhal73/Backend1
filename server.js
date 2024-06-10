require('dotenv').config()
const express = require ('express')
const app = express();
const port = process.env.PORT;
app.use(express.json());

app.listen(port, ()=>{
    console.log(`Let's start the server at ${port}`);
})

app.get('/twitter', (req,res)=>{
    res.send('ranjandhal.com');
})

app.get('/login', (req, res)=>{
    res.send('<h1>Please Login</h1>');
})

app.get('', (req, res)=>{
    res.send("Hey all, How are you all ...")
})

app.post('/api/cars', (req, res)=>{
    const {name, cars} = req.body;
    console.log(name);
    console.log(cars);
    res.send("Post request sent successfully")
})