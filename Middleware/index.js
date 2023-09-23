const express = require('express');
const path = require('path');
// const { route } = require('./routes/blog')
const app = express();
const port = 3004

// app.get('/',(req, res)=>{
//     res.send("welcome to website")
// })
const syedMiddleware = (req, res, next)=>{
    console.log('--------middleware-------------',req)
}

app.use(express.static(path.join(__dirname, "static")))
    app.use(syedMiddleware)
// app.use('/', require(path.join(__dirname, "routes/blog.js")))    

// app.get('/', (req, res) => {
//     res.sendFile()
// })

// app.get('/hello/:name', (req, res) => {
//     res.send('Hello world', req.params.name)
// })    

app.listen(port, () => {
    const a = 123
    console.log('Example app listening at http://locahost:3004')
})