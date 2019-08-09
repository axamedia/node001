const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const path = require('path')

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/index.html'))
})

app.get('/signup', (req, res) => {
    res.sendFile(path.join(__dirname + '/public/signup.html'))
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))
