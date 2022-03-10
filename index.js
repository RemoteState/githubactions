const express = require('express')
const app = express()

app.get('/', (req, res)=>{
    return res.send("Welcome to my World")
})

app.listen(3000, ()=>{
    console.log('app is listening at port 3000')
})

