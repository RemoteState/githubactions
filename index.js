const express = require('express')
const app = express()

app.get('/', (req, res)=>{
    return res.send("Hello Munna")
})

app.listen(3000, ()=>{
    console.log('app is listening at port 3000')
})

