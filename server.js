var app = require('express')()
var http = require('http').createServer(app)
var port = process.env.PORT || 3000
var io = require('socket.io')(http)

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    res.render('main')
})

app.get('/createProfile', (req, res) => {
    res.render('createProfile')
})

app.get('/login', (req, res) => {
    res.render('login')
})

app.get('/messaging', (req, res) => {
    res.render('messaging')
})

io.on('connection', function (socket) {
    console.log('a user connected')
    socket.on('chat message', function (msg) {
        io.emit('chat message', msg)
    })
    socket.on('disconnect', function () {
        console.log('a user disconnected')
    })
})

http.listen(port, () => console.log(`Example app listening on port ${port}!`))
